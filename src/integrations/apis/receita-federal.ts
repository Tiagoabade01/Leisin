import { supabase } from '@/integrations/supabase/client';

const RECEITA_BASE_URL = 'https://api.receitaws.com.br/v1';

class ReceitaFederalClient {
  async consultarCNPJ(cnpj: string) {
    // Remove formatação do CNPJ
    const cnpjLimpo = cnpj.replace(/[^\d]/g, '');

    const response = await fetch(`${RECEITA_BASE_URL}/cnpj/${cnpjLimpo}`);

    if (!response.ok) {
      throw new Error(`Receita Federal API error: ${response.statusText}`);
    }

    const data = await response.json();

    // Salvar consulta no histórico
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await supabase.from('api_logs').insert({
        user_id: user.id,
        provider: 'receita_federal',
        endpoint: '/cnpj',
        request_data: { cnpj: cnpjLimpo },
        response_data: data,
        status: 'success',
      });
    }

    return data;
  }

  async consultarCNPJCompleto(cnpj: string) {
    const cnpjLimpo = cnpj.replace(/[^\d]/g, '');
    
    // Consulta básica
    const dadosBasicos = await this.consultarCNPJ(cnpjLimpo);

    // Aqui você pode adicionar consultas complementares
    // como situação cadastral, sócios, etc.

    return {
      ...dadosBasicos,
      consultadoEm: new Date().toISOString(),
    };
  }
}

export const receitaFederalClient = new ReceitaFederalClient();