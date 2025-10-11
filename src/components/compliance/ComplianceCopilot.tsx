import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, AlertTriangle } from "lucide-react";

const insights = [
  { text: "Alerta: empresa X pode perder certificação ISO 9001 em 60 dias.", icon: AlertTriangle, color: "text-risk-gold" },
  { text: "Casos com mais de 3 atrasos financeiros têm 42% mais risco de processos judiciais.", icon: BrainCircuit, color: "text-legal-purple" },
  { text: "T3 Risk Score para 'Construtora Sol' aumentou para 4.1/5 devido a novas pendências fiscais.", icon: AlertTriangle, color: "text-risk-gold" },
  { text: "Inconsistência detectada: Contrato #9981 tem cláusula de pagamento divergente do financeiro.", icon: BrainCircuit, color: "text-legal-purple" },
];

const ComplianceCopilot = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">IA de Compliance & Previsões</CardTitle>
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

export default ComplianceCopilot;