import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reports = [
  "Relatório de Revisões Recentes",
  "Relatório de Impacto Jurídico",
  "Relatório de IA",
  "Histórico Consolidado",
];

const RelatoriosAtualizacao = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Relatórios de Atualização Normativa</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {reports.map(report => (
          <div key={report} className="p-3 bg-gray-800/50 rounded-lg flex justify-between items-center">
            <span className="text-sm">{report}</span>
            <Button size="sm" variant="secondary">Gerar</Button>
          </div>
        ))}
        <p className="text-sm text-risk-gold pt-4 border-t border-gray-700">💡 IA Insight: “Alterações recentes em 5 decretos municipais impactam cláusulas de regularização fundiária. Relatório detalhado foi enviado ao setor de Compliance.”</p>
      </CardContent>
    </Card>
  );
};

export default RelatoriosAtualizacao;