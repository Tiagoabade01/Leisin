import { supabase } from '@/integrations/supabase/client';

const STRIPE_BASE_URL = 'https://api.stripe.com/v1';

interface StripeConfig {
  secretKey: string;
  publishableKey: string;
}

class StripeClient {
  private config: StripeConfig | null = null;

  async initialize() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Usuário não autenticado');

    const { data, error } = await supabase
      .from('api_configurations')
      .select('*')
      .eq('provider', 'stripe')
      .eq('user_id', user.id)
      .single();

    if (error || !data) {
      throw new Error('Configuração do Stripe não encontrada');
    }

    this.config = {
      secretKey: data.api_key,
      publishableKey: data.publishable_key,
    };
  }

  private async request(endpoint: string, method: string = 'GET', body?: any) {
    if (!this.config) await this.initialize();

    const options: RequestInit = {
      method,
      headers: {
        'Authorization': `Bearer ${this.config!.secretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    if (body && method !== 'GET') {
      options.body = new URLSearchParams(body).toString();
    }

    const response = await fetch(`${STRIPE_BASE_URL}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`Stripe API error: ${response.statusText}`);
    }

    return response.json();
  }

  // Criar cliente
  async criarCliente(email: string, nome: string, documento?: string) {
    return this.request('/customers', 'POST', {
      email,
      name: nome,
      ...(documento && { metadata: { documento } })
    });
  }

  // Criar assinatura
  async criarAssinatura(customerId: string, priceId: string) {
    return this.request('/subscriptions', 'POST', {
      customer: customerId,
      items: [{ price: priceId }],
    });
  }

  // Criar pagamento único
  async criarPagamento(amount: number, currency: string, customerId: string, description: string) {
    return this.request('/payment_intents', 'POST', {
      amount: Math.round(amount * 100), // Stripe usa centavos
      currency,
      customer: customerId,
      description,
    });
  }

  // Listar faturas
  async listarFaturas(customerId: string) {
    return this.request(`/invoices?customer=${customerId}`);
  }

  // Cancelar assinatura
  async cancelarAssinatura(subscriptionId: string) {
    return this.request(`/subscriptions/${subscriptionId}`, 'DELETE');
  }
}

export const stripeClient = new StripeClient();