import { supabase } from '@/integrations/supabase/client';
import { bigDataCorpClient, openAIClient } from '@/integrations/apis';

export type AnalysisType = 'pf' | 'pj' | 'imovel';

export interface DiligenceResult {
  rawData: any;
  aiInsights?: any;
}

function extractOpenAIContent(resp: any) {
  try {
    const content = resp?.choices?.[0]?.message?.content ?? null;
    if (!content) return null;
    // Tenta parsear JSON quando o sistema instruiu resposta estruturada
    try {
      return JSON.parse(content);
    } catch {
      return { text: content };
    }
  } catch {
    return null;
  }
}

export async function runDiligenceAnalysis(type: AnalysisType, identifier: string): Promise<DiligenceResult> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Usuário não autenticado. Faça login para continuar.');

  let rawData: any = null;
  let endpoint = '';
  try {
    if (type === 'pf') {
      endpoint = '/people';
      rawData = await bigDataCorpClient.consultarCPF(identifier);
    } else if (type === 'pj') {
      endpoint = '/companies';
      rawData = await bigDataCorpClient.consultarCNPJ(identifier);
    } else {
      // Imóvel: sem integração direta aqui, usamos IA para interpretar/estruturar o identificador como matrícula
      endpoint = '/imovel-interpretacao';
      const ai = await openAIClient.interpretarMatricula(identifier);
      rawData = extractOpenAIContent(ai) ?? { matricula: identifier, observacao: 'Interpretação IA' };
    }

    // Gera insights jurídicos/risco com IA usando os dados crus
    const prompt = `Analise risco e conformidade dos dados a seguir, resumindo em pontos: ${JSON.stringify(rawData).slice(0, 6000)}`;
    const aiResp = await openAIClient.perguntarJuridica(prompt);
    const aiInsights = extractOpenAIContent(aiResp);

    // Log no Supabase
    await supabase.from('api_logs').insert({
      user_id: user.id,
      provider: 'analysis',
      endpoint,
      request_data: { type, identifier },
      response_data: { preview: rawData ? 'ok' : 'empty' },
      status: 'success'
    });

    return { rawData, aiInsights };
  } catch (err: any) {
    await supabase.from('api_logs').insert({
      user_id: user.id,
      provider: 'analysis',
      endpoint,
      request_data: { type, identifier },
      response_data: null,
      status: 'error',
      error_message: err?.message ?? String(err)
    });
    throw err;
  }
}

export async function fetchCertificatesAuto(tipo: 'CND Federal' | 'CND Estadual' | 'FGTS' | 'Protesto', documento: string) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Usuário não autenticado.');

  let baseData: any = null;
  let endpoint = '/certidoes-auto';
  try {
    // Tenta obter dados básicos conforme tipo de documento
    const normalized = documento.replace(/\D/g, '');
    if (normalized.length === 11) {
      baseData = await bigDataCorpClient.consultarCPF(normalized);
    } else {
      baseData = await bigDataCorpClient.consultarCNPJ(normalized);
    }

    // IA deduz status e recomendações de certidões
    const aiResp = await openAIClient.perguntarJuridica(`Com base nestes dados (${JSON.stringify(baseData).slice(0, 4000)}), liste status das certidões mais comuns (${tipo}) e recomendações de renovação/validação.`);
    const ai = extractOpenAIContent(aiResp);

    await supabase.from('api_logs').insert({
      user_id: user.id,
      provider: 'certificates',
      endpoint,
      request_data: { tipo, documento },
      response_data: { ok: true },
      status: 'success'
    });

    return { baseData, aiInsights: ai };
  } catch (err: any) {
    await supabase.from('api_logs').insert({
      user_id: user.id,
      provider: 'certificates',
      endpoint,
      request_data: { tipo, documento },
      response_data: null,
      status: 'error',
      error_message: err?.message ?? String(err)
    });
    throw err;
  }
}

export async function generateAuditPlan(scope: string, entidade: string, periodo?: string) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Usuário não autenticado.');

  try {
    const prompt = `Gere um plano de auditoria completo para ${entidade} com escopo "${scope}"${periodo ? ` no período ${periodo}` : ''}. Inclua checklist, riscos, ações automáticas e conformidades (LGPD, trabalhista, fiscal).`;
    const aiResp = await openAIClient.perguntarJuridica(prompt);
    const ai = extractOpenAIContent(aiResp);

    await supabase.from('api_logs').insert({
      user_id: user.id,
      provider: 'audit',
      endpoint: '/audit-plan',
      request_data: { scope, entidade, periodo },
      response_data: { ok: true },
      status: 'success'
    });

    return ai;
  } catch (err: any) {
    await supabase.from('api_logs').insert({
      user_id: user.id,
      provider: 'audit',
      endpoint: '/audit-plan',
      request_data: { scope, entidade, periodo },
      response_data: null,
      status: 'error',
      error_message: err?.message ?? String(err)
    });
    throw err;
  }
}