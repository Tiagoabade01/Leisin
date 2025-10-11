import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import PrazosNotasEquipe from './PrazosNotasEquipe';

const PrazosAIInsights = () => {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader>
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-tech-green" />
            <CardTitle className="text-white text-base">IA Insights</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-gray-300">"Detectado risco de sobreposição de audiências para o advogado João Lima no dia 10/10/25."</p>
          <p className="text-sm text-gray-300">"Prazo para o processo 402312-92 é crítico e tem 85% de chance de impacto financeiro negativo se perdido."</p>
        </CardContent>
      </Card>
      
      <PrazosNotasEquipe />

    </div>
  );
};

export default PrazosAIInsights;