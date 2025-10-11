import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const integrations = [
  "Power BI",
  "Google Data Studio",
  "Tableau",
  "Excel / CSV",
  "API Corporativa Leisin",
];

const ExportacoesIntegracoes = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Exportações e Integrações BI</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {integrations.map(integration => (
          <div key={integration} className="p-3 bg-gray-800/50 rounded-lg flex justify-between items-center">
            <span className="text-sm">{integration}</span>
            <Button size="sm" variant="secondary">Conectar</Button>
          </div>
        ))}
        <p className="text-sm text-risk-gold pt-4 border-t border-gray-700">💡 IA Insight: “Foram detectadas divergências entre os dados do BI externo e o DRE consolidado. IA recomenda reindexar a base da filial BH.”</p>
      </CardContent>
    </Card>
  );
};

export default ExportacoesIntegracoes;