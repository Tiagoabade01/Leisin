import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

const IaAutomacao = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Relatórios de IA e Automação</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {["Uso de IA por Cliente e Plano", "Eficiência de Automações (Ganho de Produtividade)", "Logs de Tarefas Automáticas", "Análise de Custos IA x ROI"].map(report => (
            <div key={report} className="p-4 bg-gray-700/50 rounded-lg flex justify-between items-center">
              <span>{report}</span>
              <Button size="sm" variant="secondary">Ver Relatório</Button>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Insight da IA</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">"A IA reduziu 42% do tempo de análise de contratos no último trimestre."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default IaAutomacao;