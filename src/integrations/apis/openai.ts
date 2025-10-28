import { supabase } from '@/integrations/supabase/client';

const OPENAI_BASE_URL = 'https://api.openai.com/v1';

interface OpenAIConfig {
  apiKey: string;
  model: string;
}

class OpenAIClient {
  private config: OpenAIConfig | null = null;

  async initialize() {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session?.user) {
      console.error("OpenAIClient: Tentativa de inicialização sem sessão de usuário.");
      throw new Error('Usuário não autenticado. Faça login para usar este recurso.');
    }

    const userId = session.user.id;

    const { data, error } = await supabase
      .from('api_configurations')
      .select('*')
      .eq('provider', 'openai')
      .eq('user_id', userId)
      .eq('is_active', true)
      .single();

    if (error) {
      throw new Error(`Erro ao carregar configuração da OpenAI: ${error.message}`);
    }
    
    if (!data) {
      throw new Error('Configuração da OpenAI não encontrada ou inativa para este usuário.');
    }

    this.config = {
      apiKey: data.api_key,
      model: data.model || 'gpt-4o-mini',
    };
    
    console.log("OpenAI initialized with config for user:", userId);
  }

  private async request(endpoint: string, body: any) {
    console.log("OpenAI request - checking config:", this.config);
    if (!this.config) {
      console.log("OpenAI request - no config, initializing...");
      await this.initialize();
    }

    // Usa o modelo após garantir a inicialização
    const payload = {
      model: this.config!.model,
      ...body,
    };

    console.log("OpenAI request - payload:", payload);

    const response = await fetch(`${OPENAI_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config!.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log("OpenAI request - response status:", response.status);
    console.log("OpenAI request - response ok?", response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error details:", errorText);
      throw new Error(`OpenAI API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return response.json();
  }

  // Gerar cláusula contratual
  async gerarClausula(prompt: string, contexto?: string) {
    const messages = [
      {
        role: 'system',
        content: 'Você é um assistente jurídico especializado em direito brasileiro. Gere cláusulas contratuais precisas, fundamentadas e em conformidade com a legislação vigente. Responda estritamente em JSON com o formato: {"clause": "...", "legal_basis": "..."}'
      },
      {
        role: 'user',
        content: contexto ? `${contexto}\n\n${prompt}` : prompt
      }
    ];

    return this.request('/chat/completions', {
      messages,
      temperature: 0.3,
    });
  }

  // Analisar documento jurídico
  async analisarDocumento(texto: string, tipoAnalise: 'risco' | 'conformidade' | 'clausulas') {
    const prompts = {
      risco: 'Analise os riscos jurídicos deste documento e classifique-os por nível de severidade.',
      conformidade: 'Verifique a conformidade deste documento com a legislação brasileira vigente, especialmente LGPD, Código Civil e normas específicas.',
      clausulas: 'Identifique cláusulas problemáticas, ambíguas ou que possam gerar litígio neste documento.'
    };

    return this.request('/chat/completions', {
      messages: [
        {
          role: 'system',
          content: 'Você é um especialista em análise de documentos jurídicos brasileiros.'
        },
        {
          role: 'user',
          content: `${prompts[tipoAnalise]}\n\nDocumento:\n${texto}`
        }
      ],
      temperature: 0.2,
    });
  }

  // Interpretar matrícula imobiliária
  async interpretarMatricula(textoMatricula: string) {
    return this.request('/chat/completions', {
      messages: [
        {
          role: 'system',
          content: 'Você é um especialista em direito imobiliário e registros de imóveis. Extraia e interprete dados de matrículas imobiliárias brasileiras. Responda estritamente em JSON com o formato: {"numero_matricula":"...", "cartorio":"...", "proprietario_atual":"...", "area_imovel":"...", "endereco":"...", "onus_gravames":["..."], "averbacoes":["..."]}'
        },
        {
          role: 'user',
          content: `Matrícula:\n${textoMatricula}`
        }
      ],
      temperature: 0.1,
    });
  }

  // Gerar resumo de processo
  async resumirProcesso(andamentos: string[]) {
    return this.request('/chat/completions', {
      messages: [
        {
          role: 'system',
          content: 'Você é um assistente jurídico que resume processos judiciais de forma clara e objetiva.'
        },
        {
          role: 'user',
          content: `Resuma os principais pontos destes andamentos processuais:\n\n${andamentos.join('\n\n')}`
        }
      ],
      temperature: 0.3,
    });
  }

  // Prever resultado de processo
  async preverResultado(dadosProcesso: string) {
    return this.request('/chat/completions', {
      messages: [
        {
          role: 'system',
          content: 'Você é um especialista em análise preditiva de processos judiciais brasileiros. Baseie-se em jurisprudência e estatísticas.'
        },
        {
          role: 'user',
          content: `Com base nestes dados, estime a probabilidade de êxito deste processo:\n\n${dadosProcesso}`
        }
      ],
      temperature: 0.4,
    });
  }

  async perguntarJuridica(pergunta: string) {
    return this.request('/chat/completions', {
      messages: [
        {
          role: 'system',
          content: 'Você é um assistente jurídico brasileiro. Ao responder, produza um resumo, fundamentos legais, jurisprudência relevante e interpretação. Responda estritamente em JSON com o formato: {"summary":"...", "legalBasis":["..."], "jurisprudence":"...", "interpretation":"..."}'
        },
        {
          role: 'user',
          content: pergunta
        }
      ],
      temperature: 0.2,
    });
  }
}

export const openAIClient = new OpenAIClient();