import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const IntegracaoIA = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader className="flex flex-row items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-tech-green" />
        <CardTitle>Integração com Módulos e IA</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2 text-white">Integrações</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li><strong>Tarefas:</strong> Distribuição automática de atividades por cargo e carga de trabalho.</li>
            <li><strong>Financeiro:</strong> Rateio de metas e responsabilidades.</li>
            <li><strong>Jurídico Operacional:</strong> Designação automática de processos por filial.</li>
            <li><strong>CRM Jurídico:</strong> Atribuição de leads por setor e equipe.</li>
            <li><strong>IA Central:</strong> Avaliação contínua de performance e produtividade.</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg">
          <h3 className="font-semibold mb-2 text-white">Exemplo de Insight</h3>
          <p className="text-sm text-gray-300">“Detectada sobrecarga na equipe Financeira de SP. IA sugere transferir 20% das tarefas para a filial Campinas.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntegracaoIA;