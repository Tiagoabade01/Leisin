import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reports = [
  "Projeção de Receita e Lucro (3 a 12 meses)",
  "Projeção de Custos e Margens",
  "Desempenho Jurídico Global",
  "Eficiência Operacional e Engajamento",
  "Correlação entre desempenho e sazonalidade",
];

const IaAnaliticaProjecao = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>IA Analítica e Projeções</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {reports.map(report => (
          <div key={report} className="p-3 bg-gray-800/50 rounded-lg flex justify-between items-center">
            <span className="text-sm">{report}</span>
            <Button size="sm" variant="secondary">Gerar</Button>
          </div>
        ))}
        <p className="text-sm text-risk-gold pt-4 border-t border-gray-700">💡 IA Insight: “A previsão indica aumento de 14% na receita corporativa até o próximo trimestre, caso as automações financeiras sejam implementadas em todas as unidades.”</p>
      </CardContent>
    </Card>
  );
};

export default IaAnaliticaProjecao;