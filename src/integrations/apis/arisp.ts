import { supabase } from '@/integrations/supabase/client';

const ARISP_BASE_URL = 'https://api.arisp.com.br';

interface ARISPConfig {
  token: string;
  certificado: string;
}

class ARISPClient {
  private config: ARISPConfig | null = null;

  async initialize() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Usuário não autenticado');

    const { data, error } = await supabase
      .from('api_configurations')
      .select('*')
      .eq('provider', 'arisp')
      .eq('user_id', user.id)
      .single();

    if (error || !data) {
      throw new Error('Configuração da ARISP não encontrada');
    }

    this.config = {
      token: data.api_key,
      certificado: data.certificate,
    };
  }

  private async request(endpoint: string, params?: Record<string, any>) {
    if (!this.config) await this.initialize();

    const url = new URL(`${ARISP_BASE_URL}${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    const response = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${this.config!.token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`ARISP API error: ${response.statusText}`);
    }

    return response.json();
  }

  // Consultar matrícula
  async consultarMatricula(numeroMatricula: string, cartorio: string) {
    return this.request('/matriculas/consulta', { 
      numero: numeroMatricula,
      cartorio: cartorio 
    });
  }

  // Emitir certidão de ônus
  async emitirCertidaoOnus(numeroMatricula: string, cartorio: string) {
    return this.request('/certidoes/onus', { 
      numero: numeroMatricula,
      cartorio: cartorio 
    });
  }

  // Consultar averbações
  async consultarAverbacoes(numeroMatricula: string, cartorio: string) {
    return this.request('/matriculas/averbacoes', { 
      numero: numeroMatricula,
      cartorio: cartorio 
    });
  }

  // Buscar imóveis por CPF/CNPJ
  async buscarImoveisPorDocumento(documento: string) {
    return this.request('/matriculas/busca-titular', { documento });
  }

  // Download de matrícula completa
  async downloadMatricula(numeroMatricula: string, cartorio: string) {
    return this.request('/matriculas/download', { 
      numero: numeroMatricula,
      cartorio: cartorio,
      formato: 'pdf'
    });
  }
}

export const arispClient = new ARISPClient();