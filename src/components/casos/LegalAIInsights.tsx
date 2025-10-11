import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const LegalAIInsights = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">IA Jurídica (Análise Preditiva)</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">Predição de Resultado (Caso #402312)</h4>
          <div className="space-y-2 text-xs">
            <div><div className="flex justify-between"><span>Ganho</span><span>35%</span></div><Progress value={35} className="h-2 [&>*]:bg-red-500" /></div>
            <div><div className="flex justify-between"><span>Acordo</span><span>55%</span></div><Progress value={55} className="h-2 [&>*]:bg-yellow-500" /></div>
            <div><div className="flex justify-between"><span>Perda</span><span>10%</span></div><Progress value={10} className="h-2 [&>*]:bg-green-500" /></div>
          </div>
        </div>
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">Análise Estratégica</h4>
          <p className="text-sm text-gray-300">“Com base em 128 casos semelhantes, recomenda-se acordo judicial — probabilidade de ganho líquido é menor que 35%.”</p>
        </div>
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2">Análise de Risco</h4>
          <p className="text-sm text-gray-300">“Este caso tem 82% de chance de êxito. Prazo de resposta: 7 dias úteis.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LegalAIInsights;