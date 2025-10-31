import { supabase } from '@/integrations/supabase/client';

const INFOSIMPLES_BASE_URL = 'https://api.infosimples.com/api/v2';

interface InfosimplesConfig {
  apiKey: string;
  apiSecret: string;
}

class InfosimplesClient {
  private config: InfosimplesConfig | null = null;

  async initialize() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Usuário não autenticado');

    const { data, error } = await supabase
      .from('api_configurations')
      .select('*')
      .eq('provider', 'infosimples')
      .eq('user_id', user.id)
      .eq('is_active', true)
      .single();

    if (error || !data) {
      throw new Error('Configuração da Infosimples não encontrada ou inativa');
    }

    if (!data.api_key || !data.api_secret) {
      throw new Error('API Key e API Secret da Infosimples são obrigatórias');
    }

    this.config = {
      apiKey: data.api_key,
      apiSecret: data.api_secret,
    };
  }

  private async request(endpoint: string, params?: Record<string, any>) {
    if (!this.config) await this.initialize();

    const url = new URL(`${INFOSIMPLES_BASE_URL}${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    const response = await fetch(url.toString(), {
      headers: {
        'X-Api-Key': this.config!.apiKey,
        'X-Api-Secret': this.config!.apiSecret,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Infosimples API error: ${response.status} ${response.statusText} - ${text}`);
    }

    return response.json();
  }

  // Consulta CNPJ
  async consultarCNPJ(cnpj: string) {
    const normalized = cnpj.replace(/\D/g, '');
    // Endpoint de exemplo, adaptado para simetria com BigDataCorp
    return this.request('/companies', { q: normalized });
  }

  // Consulta CPF
  async consultarCPF(cpf: string) {
    const normalized = cpf.replace(/\D/g, '');
    return this.request('/people', { q: normalized });
  }

  // Consulta de processos judiciais
  async consultarProcessos(documento: string) {
    const normalized = documento.replace(/\D/g, '');
    return this.request('/lawsuits', { q: normalized });
  }

  // Consulta de vínculos
  async consultarVinculos(cnpj: string) {
    const normalized = cnpj.replace(/\D/g, '');
    return this.request('/companies/relationships', { q: normalized });
  }

  // Score de crédito
  async consultarScore(documento: string) {
    const normalized = documento.replace(/\D/g, '');
    return this.request('/credit-score', { q: normalized });
  }
}

export const infosimplesClient = new InfosimplesClient();