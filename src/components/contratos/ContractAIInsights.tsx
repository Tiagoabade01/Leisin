import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ContractAIInsights = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">IA Contratual (Analyzer)</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">Análise de Risco (Contrato #CT-219)</h4>
          <div className="space-y-2 text-xs">
            <p>Score de Risco: <span className="font-bold text-red-400">4.2 / 5</span></p>
            <Progress value={84} className="h-2 [&>*]:bg-red-500" />
          </div>
        </div>
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">Sugestões de Cláusulas</h4>
          <p className="text-sm text-gray-300">“Cláusula 9.2 contém ambiguidade em prazo de multa — sugerir ajuste.”</p>
        </div>
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">Análise de Compliance</h4>
          <p className="text-sm text-gray-300">“Adicionar cláusula de confidencialidade para adequação à LGPD.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContractAIInsights;