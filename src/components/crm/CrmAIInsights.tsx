import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const CrmAIInsights = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader className="flex flex-row items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-tech-green" />
        <CardTitle className="text-white">IA de Prospecção & Fechamento</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">
          “Oportunidade ‘Banco Futura – Assessoria Tributária’ está há 14 dias em negociação sem atividade. Probabilidade de perda: 62%. Deseja acionar lembrete automático?”
        </p>
        <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">
          “Taxa de conversão aumentou 9% após a automação de follow-up em propostas tributárias.”
        </p>
        <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">
          “Se converter as 3 maiores oportunidades em negociação, o faturamento projetado sobe 24%. Deseja priorizar esses leads?”
        </p>
      </CardContent>
    </Card>
  );
};

export default CrmAIInsights;