import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const IntegracaoIA = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader className="flex flex-row items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-tech-green" />
        <CardTitle>Integração com IA e Automação de Tarefas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2 text-white">Recursos Disponíveis</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Detecção automática de sobrecarga (tarefas acumuladas).</li>
            <li>Sugestão de redistribuição de atividades.</li>
            <li>Assistente IA Copilot integrado (chat interno com cada equipe).</li>
            <li>Atribuição automática de tarefas por especialidade.</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg">
          <h3 className="font-semibold mb-2 text-white">Exemplo de Insight</h3>
          <p className="text-sm text-gray-300">“IA Copilot identificou 5 tarefas de compliance pendentes sem responsável. Criar redistribuição automática?”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntegracaoIA;