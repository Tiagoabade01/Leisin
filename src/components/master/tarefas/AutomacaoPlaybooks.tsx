import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, PlusCircle, AlertTriangle, FileText, MessageSquare } from "lucide-react";

const playbooks = [
  {
    name: "Cobrança de Inadimplentes",
    trigger: { icon: AlertTriangle, text: "Fatura com pagamento falhou" },
    actions: [
      { icon: FileText, text: "Criar tarefa 'Contato de cobrança' para Financeiro" },
      { icon: MessageSquare, text: "Enviar e-mail automático para o cliente" },
    ],
    status: "Ativo",
  },
  {
    name: "Onboarding de Cliente Enterprise",
    trigger: { icon: PlusCircle, text: "Nova assinatura 'Enterprise' criada" },
    actions: [
      { icon: FileText, text: "Criar tarefa 'Agendar reunião de onboarding' para Sucesso do Cliente" },
      { icon: FileText, text: "Criar tarefa 'Configurar ambiente' para TI" },
    ],
    status: "Ativo",
  },
];

const AutomacaoPlaybooks = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-white">Playbooks de Automação</CardTitle>
            <Button><PlusCircle className="h-4 w-4 mr-2" /> Criar Novo Playbook</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {playbooks.map((playbook, index) => (
            <div key={index} className="p-4 bg-gray-700/50 rounded-lg border border-gray-600/50">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-white">{playbook.name}</h3>
                  <Badge variant={playbook.status === "Ativo" ? "default" : "secondary"}>{playbook.status}</Badge>
                </div>
                <Button variant="outline" size="sm" className="bg-gray-700 border-gray-600">Editar</Button>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Trigger */}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-300 mb-2">QUANDO (Gatilho)</p>
                  <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
                    <playbook.trigger.icon className="h-5 w-5 text-yellow-400" />
                    <span>{playbook.trigger.text}</span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-500 hidden md:block" />
                {/* Actions */}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-300 mb-2">ENTÃO (Ações)</p>
                  <div className="space-y-2">
                    {playbook.actions.map((action, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
                        <action.icon className="h-5 w-5 text-blue-400" />
                        <span>{action.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AutomacaoPlaybooks;