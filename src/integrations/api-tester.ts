import { APIConfiguration } from '@/integrations/apis';

// Mapeamento de URLs base para cada provedor
const BASE_URLS: Record<string, string> = {
  openai: 'https://api.openai.com/v1',
  stripe: 'https://api.stripe.com/v1',
  whatsapp: 'https://graph.facebook.com/v18.0',
  bigdatacorp: 'https://api.bigdatacorp.com.br',
  jusbrasil: 'https://api.jusbrasil.com.br/api',
  arisp: 'https://api.arisp.com.br',
  receita_federal: 'https://receitaws.com.br/v1',
  infosimples: 'https://api.infosimples.com/api/v2',
};

// Função principal para testar a conexão
export const testApiConnection = async (config: APIConfiguration) => {
  const baseUrl = BASE_URLS[config.provider];
  if (!baseUrl) {
    throw new Error(`Provedor de API desconhecido: ${config.provider}`);
  }

  let endpoint = '';
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Configurações específicas para cada provedor
  switch (config.provider) {
    case 'openai':
      endpoint = '/models';
      options.headers = { ...options.headers, 'Authorization': `Bearer ${config.api_key}` };
      break;
    case 'stripe':
      endpoint = '/customers?limit=1';
      options.headers = { ...options.headers, 'Authorization': `Bearer ${config.api_key}` };
      break;
    case 'whatsapp':
      if (!config.business_account_id) throw new Error('Business Account ID não configurado.');
      endpoint = `/${config.business_account_id}?fields=name`;
      options.headers = { ...options.headers, 'Authorization': `Bearer ${config.api_key}` };
      break;
    case 'bigdatacorp':
      endpoint = `/companies?Datasets=basic&q=00000000000191`;
      options.headers = { ...options.headers, 'Authorization': `Bearer ${config.api_key}` };
      break;
    case 'infosimples':
      // Teste simples consultando um CNPJ conhecido da Receita
      endpoint = `/companies?q=00000000000191`;
      options.headers = { 
        ...options.headers, 
        'X-Api-Key': config.api_key, 
        'X-Api-Secret': config.api_secret || '' 
      };
      break;
    case 'jusbrasil':
      endpoint = `/search/jurisprudence?q=teste&key=${config.api_key}`;
      break;
    case 'arisp':
      endpoint = '/status';
      options.headers = { ...options.headers, 'Authorization': `Bearer ${config.api_key}` };
      break;
    case 'receita_federal':
      endpoint = '/cnpj/00000000000191';
      break;
    default:
      throw new Error(`Lógica de teste não implementada para ${config.provider}`);
  }

  const url = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Falha na conexão: ${response.status} ${response.statusText}. Detalhes: ${errorBody}`);
    }

    return { success: true, message: 'Conexão bem-sucedida!' };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro de rede ou configuração: ${error.message}`);
    }
    throw new Error('Ocorreu um erro desconhecido ao testar a conexão.');
  }
};