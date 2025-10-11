import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const areas = [
  "Jurídico Operacional",
  "Financeiro e Contábil",
  "CRM Jurídico",
  "Compliance e Risco",
  "Filiais e Equipes",
];

const RelatoriosPorArea = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Relatórios por Área</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {areas.map(area => (
          <div key={area} className="p-3 bg-gray-800/50 rounded-lg flex justify-between items-center">
            <span className="text-sm">{area}</span>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary">Gerar</Button>
              <Button size="sm" variant="outline" className="bg-gray-700 border-gray-600">Exportar</Button>
            </div>
          </div>
        ))}
        <p className="text-sm text-risk-gold pt-4 border-t border-gray-700">💡 IA Insight: “A área contábil apresenta o menor índice de erro operacional (1,2%) entre as filiais. IA sugere usar essa equipe como benchmark interno.”</p>
      </CardContent>
    </Card>
  );
};

export default RelatoriosPorArea;