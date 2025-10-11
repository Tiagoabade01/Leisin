import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart2 } from "lucide-react";

const ReportGenerator = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BarChart2 className="h-5 w-5 text-gray-300" />
          <CardTitle className="text-white text-base">Relatórios Jurídicos</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded-md">
                <span className="text-sm">Relatório de Casos</span>
                <Button size="sm" variant="ghost" className="text-xs h-6">Gerar</Button>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded-md">
                <span className="text-sm">Relatório Contratual</span>
                <Button size="sm" variant="ghost" className="text-xs h-6">Gerar</Button>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded-md">
                <span className="text-sm">Relatório de Risco (IA)</span>
                <Button size="sm" variant="ghost" className="text-xs h-6">Gerar</Button>
            </div>
        </div>
        <p className="text-sm text-risk-gold mt-4">💡 “No último mês, foram concluídos 32 contratos e 18 processos, com redução de 14% no tempo médio de tramitação.”</p>
      </CardContent>
    </Card>
  );
};

export default ReportGenerator;