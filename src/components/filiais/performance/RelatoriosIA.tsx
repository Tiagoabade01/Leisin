import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reports = [
  "Performance Operacional",
  "Eficiência Financeira",
  "Resultado Jurídico",
  "Desempenho Humano",
  "Comparativo entre Filiais",
];

const RelatoriosIA = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Insights e Relatórios IA</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {reports.map(report => (
          <div key={report} className="p-3 bg-gray-800/50 rounded-lg flex justify-between items-center">
            <span className="text-sm">{report}</span>
            <Button size="sm" variant="secondary">Gerar</Button>
          </div>
        ))}
        <p className="text-sm text-risk-gold pt-4 border-t border-gray-700">💡 IA Insight: “Projeção indica que o desempenho global subirá 11% se a filial SP reduzir o tempo médio de retrabalho para menos de 5%.”</p>
      </CardContent>
    </Card>
  );
};

export default RelatoriosIA;