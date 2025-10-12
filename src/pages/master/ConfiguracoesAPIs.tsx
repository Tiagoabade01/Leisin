import APIConfigurationPanel from '@/components/integrations/APIConfigurationPanel';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const ConfiguracoesAPIs = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Configurações de APIs</h1>
      <p className="text-gray-300 mb-8">
        Configure e gerencie todas as integrações de API do sistema — BigDataCorp, ARISP, OpenAI, Stripe e mais.
      </p>

      <div className="space-y-6">
        <APIConfigurationPanel />

        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader className="flex flex-row items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-tech-green" />
            <CardTitle className="text-white">Guia de Integração</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">BigDataCorp</h3>
              <p className="text-sm text-gray-300">
                Consultas de CNPJ, CPF, processos judiciais e vínculos societários. 
                Necessário: API Key e API Secret.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">ARISP</h3>
              <p className="text-sm text-gray-300">
                Consulta de matrículas, emissão de certidões e averbações em cartórios de SP. 
                Necessário: Token de acesso e certificado digital A1.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">OpenAI</h3>
              <p className="text-sm text-gray-300">
                IA para geração de cláusulas, análise de documentos e interpretação jurídica. 
                Necessário: API Key da OpenAI.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Stripe</h3>
              <p className="text-sm text-gray-300">
                Processamento de pagamentos e gestão de assinaturas. 
                Necessário: Secret Key e Publishable Key.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">WhatsApp Business</h3>
              <p className="text-sm text-gray-300">
                Envio de mensagens, documentos e notificações via WhatsApp. 
                Necessário: Access Token, Phone Number ID e Business Account ID.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConfiguracoesAPIs;