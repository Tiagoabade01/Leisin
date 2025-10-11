import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const integrations = ["BigDataCorp", "ARISP / CRC", "Receita Federal / SINTEGRA", "JusBrasil / LexML", "n8n / Zapier / Notion / Slack / Gmail / WhatsApp API"];

const DesenvolvedoresApis = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Ambiente para Desenvolvedores</CardTitle></CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Publicação de novas extensões (validação e homologação).</li>
            <li>Documentação completa da API Leisin (REST + Webhooks + SDK).</li>
            <li>Painel de métricas: downloads, receita, usuários ativos.</li>
            <li>Controle de faturamento e repasse de receita (Marketplace Split).</li>
            <li>Sistema de suporte, chat e verificação de segurança IA.</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Integrações Nativas Recomendadas</CardTitle></CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            {integrations.map(int => <li key={int}>{int}</li>)}
          </ul>
          <p className="text-sm text-risk-gold mt-4">💡 Nova integração disponível: Receita Federal PRO — permite cruzar CNPJ, CNAE e vínculos societários em tempo real.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DesenvolvedoresApis;