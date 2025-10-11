import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, AlertTriangle } from "lucide-react";

const insights = [
  { text: "Cláusula 7.3 do contrato #8821 apresenta conflito com item 2.1 — revisão sugerida.", icon: AlertTriangle, color: "text-yellow-400" },
  { text: "O caso 021563/2025 tem 32% de probabilidade de perda — revisar estratégia.", icon: BrainCircuit, color: "text-legal-purple" },
  { text: "Tempo médio de resposta alto na área Trabalhista (+17%).", icon: AlertTriangle, color: "text-yellow-400" },
  { text: "Advogado 'Marcos Souza' está sobrecarregado com 34 casos simultâneos.", icon: BrainCircuit, color: "text-legal-purple" },
];

const LegalCopilot = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">Insights IA Jurídica</CardTitle>
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

export default LegalCopilot;