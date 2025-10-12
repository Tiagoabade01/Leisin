import { supabase } from '@/integrations/supabase/client';

const WHATSAPP_BASE_URL = 'https://graph.facebook.com/v18.0';

interface WhatsAppConfig {
  accessToken: string;
  phoneNumberId: string;
  businessAccountId: string;
}

class WhatsAppClient {
  private config: WhatsAppConfig | null = null;

  async initialize() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Usuário não autenticado');

    const { data, error } = await supabase
      .from('api_configurations')
      .select('*')
      .eq('provider', 'whatsapp')
      .eq('user_id', user.id)
      .single();

    if (error || !data) {
      throw new Error('Configuração do WhatsApp não encontrada');
    }

    this.config = {
      accessToken: data.api_key,
      phoneNumberId: data.phone_number_id,
      businessAccountId: data.business_account_id,
    };
  }

  private async request(endpoint: string, method: string = 'GET', body?: any) {
    if (!this.config) await this.initialize();

    const options: RequestInit = {
      method,
      headers: {
        'Authorization': `Bearer ${this.config!.accessToken}`,
        'Content-Type': 'application/json',
      },
    };

    if (body && method !== 'GET') {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${WHATSAPP_BASE_URL}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`WhatsApp API error: ${response.statusText}`);
    }

    return response.json();
  }

  // Enviar mensagem de texto
  async enviarMensagem(para: string, mensagem: string) {
    return this.request(`/${this.config!.phoneNumberId}/messages`, 'POST', {
      messaging_product: 'whatsapp',
      to: para,
      type: 'text',
      text: { body: mensagem }
    });
  }

  // Enviar documento
  async enviarDocumento(para: string, documentUrl: string, caption?: string) {
    return this.request(`/${this.config!.phoneNumberId}/messages`, 'POST', {
      messaging_product: 'whatsapp',
      to: para,
      type: 'document',
      document: {
        link: documentUrl,
        ...(caption && { caption })
      }
    });
  }

  // Enviar template
  async enviarTemplate(para: string, templateName: string, parametros?: any[]) {
    return this.request(`/${this.config!.phoneNumberId}/messages`, 'POST', {
      messaging_product: 'whatsapp',
      to: para,
      type: 'template',
      template: {
        name: templateName,
        language: { code: 'pt_BR' },
        ...(parametros && {
          components: [{
            type: 'body',
            parameters: parametros
          }]
        })
      }
    });
  }

  // Marcar mensagem como lida
  async marcarComoLida(messageId: string) {
    return this.request(`/${this.config!.phoneNumberId}/messages`, 'POST', {
      messaging_product: 'whatsapp',
      status: 'read',
      message_id: messageId
    });
  }
}

export const whatsAppClient = new WhatsAppClient();