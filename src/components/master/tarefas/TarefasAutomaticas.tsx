import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";

const TarefasAutomaticas = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <CardTitle className="text-white">Tarefas Geradas por Eventos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">Tarefas criadas automaticamente pelo sistema em resposta a gatilhos específicos.</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li><strong>Falha de pagamento:</strong> Tarefa "Contato de cobrança" criada para o Financeiro.</li>
            <li><strong>Contrato expirando em 30 dias:</strong> Tarefa "Revisar e renovar contrato" criada para o Jurídico.</li>
            <li><strong>Novo cliente (Enterprise):</strong> Tarefa "Agendar reunião de onboarding" criada para o Sucesso do Cliente.</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2">
          <Bot className="h-5 w-5 text-blue-400" />
          <CardTitle className="text-white">Sugestões da IA</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">"IA detectou que o cliente 'Advocacia Pontes' não faz login há 15 dias. Sugerir criação de tarefa de 'Follow-up de engajamento' para o time de Sucesso."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TarefasAutomaticas;