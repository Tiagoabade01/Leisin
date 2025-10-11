import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const RiskAIInsights = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">IA Leisin – Motor Analítico</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2 text-white">Capacidades</h4>
          <ul className="list-disc list-inside space-y-2 text-xs text-gray-300">
            <li>Aprendizado contínuo com histórico</li>
            <li>Ponderação de indicadores</li>
            <li>Detecção de anomalias</li>
            <li>Geração de alertas preditivos</li>
          </ul>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <h4 className="font-semibold text-sm mb-2 text-white">Alertas Preditivos</h4>
          <div className="space-y-3">
            <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Risco de processo fiscal em 3 meses: <strong className="text-yellow-400">64%</strong>.”</p>
            <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Alto potencial de reincidência trabalhista — sugerir revisão de contratos.”</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskAIInsights;