import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PortalParceiros = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Portal de Parceiros e Correspondentes</CardTitle></CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Acesso restrito por tipo de atividade.</li>
            <li>Upload de documentos, relatórios ou pareceres.</li>
            <li>Integração com módulos de Due Diligence e Compliance.</li>
            <li>Painel de comissionamento e status de tarefas.</li>
            <li>Contratos e pagamentos automatizados.</li>
          </ul>
        </CardContent>
      </Card>
      <div className="space-y-6">
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-base">Exemplo de Workflow</CardTitle></CardHeader>
          <CardContent className="text-sm space-y-2">
            <p><strong>Tarefa:</strong> Emissão de Certidão Atualizada – 9º RI</p>
            <p><strong>Responsável:</strong> Parceiro Cartório SP</p>
            <p><strong>Prazo:</strong> 48h</p>
            <p><strong>Status:</strong> Em execução</p>
            <p><strong>Pagamento:</strong> Automático via Pix Corporativo</p>
          </CardContent>
        </Card>
        <p className="text-sm text-risk-gold">💡 IA Insight: “Parceiro ‘Cartório SP’ entregou 98% das certidões dentro do prazo. Classificação atualizada para nível Ouro.”</p>
      </div>
    </div>
  );
};

export default PortalParceiros;