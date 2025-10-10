import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const FinanceiroReceita = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">Relatórios Financeiros</CardTitle>
          <Button variant="outline" className="bg-gray-700 border-gray-600"><Download className="h-4 w-4 mr-2" /> Exportar Todos</Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {["DRE Detalhado", "Receita Acumulada e Recorrente", "Fluxo de Caixa Consolidado", "Ranking de Clientes por Faturamento"].map(report => (
          <div key={report} className="p-4 bg-gray-700/50 rounded-lg flex justify-between items-center">
            <span>{report}</span>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary">Ver</Button>
              <Button size="sm" variant="outline" className="bg-gray-700 border-gray-600">Exportar</Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default FinanceiroReceita;