import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const ClientAIInsights = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">IA de Relacionamento</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2 text-yellow-400">Alerta de Risco</h4>
          <p className="text-sm text-gray-300">“Cliente Nivem Construtora com atraso de 15 dias em pagamento. Notificar via IA e bloquear novos contratos.”</p>
        </div>
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2 text-yellow-400">Oportunidade de Renovação</h4>
          <p className="text-sm text-gray-300">“Terlla Incorporadora com 3 contratos prestes a vencer. Sugerir pacote de renovação automática.”</p>
        </div>
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2 text-yellow-400">Oportunidade de Upsell</h4>
          <p className="text-sm text-gray-300">“Mettri com aumento de volume de demandas jurídicas. Sugerir plano corporativo premium.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientAIInsights;