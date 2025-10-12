import { supabase } from '@/integrations/supabase/client';

const BIGDATACORP_BASE_URL = 'https://api.bigdatacorp.com.br';

interface BigDataCorpConfig {
  apiKey: string;
  apiSecret: string;
}

class BigDataCorpClient {
  private config: BigDataCorpConfig | null = null;

  async initialize() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Usuário não autenticado');

    // Buscar configurações do Supabase
    const { data, error } = await supabase
      .from('api_configurations')
      .select('*')
      .eq('provider', 'bigdatacorp')
      .eq('user_id', user.id)
      .single();

    if (error || !data) {
      throw new Error('Configuração da BigDataCorp não encontrada');
    }

    this.config = {
      apiKey: data.api_key,
      apiSecret: data.api_secret,
    };
  }

  private async request(endpoint: string, params?: Record<string, any>) {
    if (!this.config) await this.initialize();

    const url = new URL(`${BIGDATACORP_BASE_URL}${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    const response = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${this.config!.apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`BigDataCorp API error: ${response.statusText}`);
    }

    return response.json();
  }

  // Consulta de CNPJ
  async consultarCNPJ(cnpj: string) {
    return this.request('/companies', { Datasets: 'basic,contacts,addresses', q: cnpj });
  }

  // Consulta de CPF
  async consultarCPF(cpf: string) {
    return this.request('/people', { Datasets: 'basic,addresses', q: cpf });
  }

  // Consulta de processos judiciais
  async consultarProcessos(documento: string) {
    return this.request('/lawsuits', { q: documento });
  }

  // Consulta de vínculos societários
  async consultarVinculos(cnpj: string) {
    return this.request('/companies/relationships', { q: cnpj });
  }

  // Score de crédito
  async consultarScore(documento: string) {
    return this.request('/credit-score', { q: documento });
  }
}

export const bigDataCorpClient = new BigDataCorpClient();