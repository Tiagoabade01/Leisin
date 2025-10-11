import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const insights = [
  "O contrato #CT-208 teve 3 revisões em menos de 1h — possível inconsistência de cláusulas.",
  "Usuário João Lima realizou 4 exclusões seguidas — verificar motivo.",
  "Processos trabalhistas com aumento de 18% na semana — tendência de risco.",
  "Aumento de 25% nas falhas de geração de documentos — possível instabilidade na API Docs.",
];

const MonitoringAI = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">IA de Monitoramento</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border-l-2 border-alert-orange">
            <p className="text-sm text-gray-300">{insight}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default MonitoringAI;