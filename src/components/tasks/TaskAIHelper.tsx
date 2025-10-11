import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const TaskAIHelper = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">IA Assistente Jurídico</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2 text-yellow-400">Alocação Inteligente</h4>
          <p className="text-sm text-gray-300">“Redistribuir tarefas de João Lima (120% carga) para Ana Faria (75% carga).”</p>
        </div>
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2 text-yellow-400">Previsão de Atraso</h4>
          <p className="text-sm text-gray-300">“3 tarefas com risco de atraso — prazo médio ultrapassado em 1,2 dia.”</p>
        </div>
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-sm mb-2 text-yellow-400">Otimização</h4>
          <p className="text-sm text-gray-300">“Recomenda concentrar revisões jurídicas em Maria Souza — maior taxa de acerto (92%).”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskAIHelper;