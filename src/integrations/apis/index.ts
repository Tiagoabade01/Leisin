export { bigDataCorpClient } from './bigdatacorp';
export { arispClient } from './arisp';
export { openAIClient } from './openai';
export { receitaFederalClient } from './receita-federal';
export { jusBrasilClient } from './jusbrasil';
export { stripeClient } from './stripe';
export { whatsAppClient } from './whatsapp';

// Tipos compartilhados
export interface APIConfiguration {
  id: string;
  user_id: string;
  provider: string;
  api_key: string;
  api_secret?: string;
  certificate?: string;
  phone_number_id?: string;
  business_account_id?: string;
  publishable_key?: string;
  model?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface APILog {
  id: string;
  user_id: string;
  provider: string;
  endpoint: string;
  request_data: any;
  response_data: any;
  status: 'success' | 'error';
  error_message?: string;
  created_at: string;
}