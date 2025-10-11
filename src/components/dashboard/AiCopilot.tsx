import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, AlertTriangle } from "lucide-react";

const insights = [
  { text: "Contratos imobiliários aumentaram 12% em volume e 18% em receita neste trimestre.", icon: BrainCircuit, color: "text-tech-green" },
  { text: "2 contratos do cliente Faria & Lima SA com risco jurídico elevado.", icon: AlertTriangle, color: "text-yellow-400" },
  { text: "Equipe Contratual aumentou produtividade em 23% após automação IA.", icon: BrainCircuit, color: "text-tech-green" },
  { text: "Processos imobiliários estão 20% acima da média de prazo.", icon: AlertTriangle, color: "text-yellow-400" },
];

const AiCopilot = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">Inteligência Analítica (IA Copilot)</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
            <insight.icon className={`h-5 w-5 flex-shrink-0 mt-1 ${insight.color}`} />
            <p className="text-sm text-gray-300">{insight.text}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AiCopilot;