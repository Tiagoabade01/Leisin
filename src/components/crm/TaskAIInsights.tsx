import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

const TaskAIInsights = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader className="flex flex-row items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-tech-green" />
        <CardTitle className="text-white">IA Engage</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">
          “Você tem 3 follow-ups com mais de 10 dias sem resposta. Probabilidade de perda da oportunidade: 47%. Deseja reagendar lembrete automático?”
        </p>
        <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">
          “A proposta para o cliente Atlas está há 7 dias sem resposta. Deseja enviar mensagem automática de acompanhamento?”
        </p>
        <div className="border-t border-gray-700 pt-4">
            <h4 className="font-semibold text-sm mb-2">Ações Sugeridas</h4>
            <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start bg-gray-800/50 border-gray-700">Gerar Mensagem</Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-gray-800/50 border-gray-700">Agendar Reunião</Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-gray-800/50 border-gray-700">Criar Lembrete</Button>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskAIInsights;