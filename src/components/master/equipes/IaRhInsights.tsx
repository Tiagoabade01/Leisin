import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const IaRhInsights = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Insights Organizacionais da IA</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-sm text-gray-300">
          <p>"Detectada sobrecarga de tarefas no usuário 'João Lima'. Sugerir redistribuição para 'Ana Paula'."</p>
          <p>"70% dos acessos ao módulo Jurídico ocorrem entre 8h e 10h. Ótimo para agendar tarefas de automação."</p>
          <p>"Análise de correlação: usuários que utilizam o 'CláusulaCopilot' concluem tarefas de contrato 35% mais rápido."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default IaRhInsights;