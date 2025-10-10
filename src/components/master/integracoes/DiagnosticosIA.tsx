import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const alerts = [
  { text: "Token da API Receita Federal expira em 7 dias.", level: "warning" },
  { text: "Latência da integração OpenAI subiu +28% nas últimas 24h.", level: "warning" },
  { text: "Consumo da API ARISP ultrapassou o limite do plano — risco de cobrança adicional.", level: "critical" },
];

const DiagnosticosIA = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Diagnósticos e Alertas da IA</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-start p-3 bg-gray-700/50 rounded-md">
            <AlertTriangle className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${alert.level === 'critical' ? 'text-red-400' : 'text-yellow-400'}`} />
            <p className="text-sm">{alert.text}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DiagnosticosIA;