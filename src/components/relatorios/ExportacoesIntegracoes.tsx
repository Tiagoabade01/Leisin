import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExportacoesIntegracoes = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Exportações e Integrações</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-2 text-white">Tipos de Exportação</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>📄 PDF Técnico (para dossiê ou processo judicial)</li>
            <li>📊 Relatório Analítico Excel (com fórmulas e filtros)</li>
            <li>🧠 Resumo IA Automático (texto legal e parecer)</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-white">Modelos Personalizáveis</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Padrão Leisin</li>
            <li>Corporativo (com logo e rodapé)</li>
            <li>Jurídico (formato parecer legal)</li>
            <li>Técnico (formato relatório urbanístico)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExportacoesIntegracoes;