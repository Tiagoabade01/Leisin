import { supabase } from '@/integrations/supabase/client';

const JUSBRASIL_BASE_URL = 'https://api.jusbrasil.com.br/api';

interface JusBrasilConfig {
  apiKey: string;
}

class JusBrasilClient {
  private config: JusBrasilConfig | null = null;

  async initialize() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Usuário não autenticado');

    const { data, error } = await supabase
      .from('api_configurations')
      .select('*')
      .eq('provider', 'jusbrasil')
      .eq('user_id', user.id)
      .single();

    if (error || !data) {
      throw new Error('Configuração do JusBrasil não encontrada');
    }

    this.config = {
      apiKey: data.api_key,
    };
  }

  private async request(endpoint: string, params?: Record<string, any>) {
    if (!this.config) await this.initialize();

    const url = new URL(`${JUSBRASIL_BASE_URL}${endpoint}`);
    url.searchParams.append('key', this.config!.apiKey);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`JusBrasil API error: ${response.statusText}`);
    }

    return response.json();
  }

  // Buscar processos por CPF/CNPJ
  async buscarProcessos(documento: string) {
    return this.request('/search/lawsuits', { q: documento });
  }

  // Buscar jurisprudência
  async buscarJurisprudencia(query: string, tribunal?: string) {
    return this.request('/search/jurisprudence', { 
      q: query,
      ...(tribunal && { court: tribunal })
    });
  }

  // Buscar legislação
  async buscarLegislacao(query: string) {
    return this.request('/search/legislation', { q: query });
  }

  // Emitir certidão
  async emitirCertidao(tipo: string, documento: string) {
    return this.request('/certificates', { 
      type: tipo,
      document: documento 
    });
  }
}

export const jusBrasilClient = new JusBrasilClient();