import { supabase } from '@/integrations/supabase/client';
import { bigDataCorpClient, openAIClient, infosimplesClient } from '@/integrations/apis';

export type AnalysisType = 'pf' | 'pj' | 'imovel';

export interface DiligenceResult {
  rawData: any;
  aiInsights?: any;
}

function extractOpenAIContent(resp: any) {
  try {
    const content = resp?.choices?.[0]?.message?.content ?? null;
    if (!content) return null;
    try {
      return JSON.parse(content);
    } catch {
      return { text: content };
    }
  } catch {
    return null;
  }
}

async function resolvePrimaryDataProvider(userId: string): Promise<'bigdatacorp' | 'infosimples'> {
  const { data, error } = await supabase
    .from('api_configurations')
    .select('provider,is_active')
    .eq('user_id', userId)
    .in('provider', ['bigdatacorp', 'infosimples'])
    .eq('is_active', true);

  if (error) throw error;

  const providers = data?.map(d => d.provider) || [];
  if (providers.includes('bigdatacorp')) return 'bigdatacorp';
  if (providers.includes('infosimples')) return 'infosimples';

  throw new Error('Nenhum provedor de dados ativo encontrado (BigDataCorp/Infosimples). Configure em Integrações & API > Gerenciar APIs.');
}

export async function runDiligenceAnalysis(type: AnalysisType, identifier: string): Promise<DiligenceResult> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Usuário não autenticado. Faça login para continuar.');

  let rawData: any = null;
  let endpoint = '';
  try {
    if (type === 'pf' || type === 'pj') {
      const provider = await resolvePrimaryDataProvider(user.id);
      if (type === 'pf') {
        endpoint = provider === 'bigdatacorp' ? '/people' : '/people';
        rawData = provider === 'bigdatacorp'
          ? await bigDataCorpClient.consultarCPF(identifier)
          : await infosimplesClient.consultarCPF(identifier);
      } else {
        endpoint = provider === 'bigdatacorp' ? '/companies' : '/companies';
        rawData = provider === 'bigdatacorp'
          ? await bigDataCorpClient.consultarCNPJ(identifier)
          : await infosimplesClient.consultarCNPJ(identifier);
      }
    } else {
      endpoint = '/imovel-interpretacao';
      const ai = await openAIClient.interpretarMatricula(identifier);
      rawData = extractOpenAIContent(ai) ?? { matricula: identifier, observacao: 'Interpretação IA' };
    }

    const prompt = `Analise risco e conformidade dos dados a seguir, resumindo em pontos: ${JSON.stringify(rawData).slice(0, 6000)}`;
    const aiResp = await openAIClient.perguntarJuridica(prompt);
    const aiInsights = extractOpenAIContent(aiResp);

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
    const provider = await resolvePrimaryDataProvider(user.id);

    const normalized = documento.replace(/\D/g, '');
    if (normalized.length === 11) {
      baseData = provider === 'bigdatacorp'
        ? await bigDataCorpClient.consultarCPF(normalized)
        : await infosimplesClient.consultarCPF(normalized);
    } else {
      baseData = provider === 'bigdatacorp'
        ? await bigDataCorpClient.consultarCNPJ(normalized)
        : await infosimplesClient.consultarCNPJ(normalized);
    }

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