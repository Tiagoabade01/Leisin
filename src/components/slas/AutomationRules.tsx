import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Users, Bell, Search } from "lucide-react";

const automations = [
  { name: "Recurso Automático", trigger: "Decisão publicada", action: "Criar tarefa + Notificar", status: "Ativa", lastRun: "09/10/25", errors: 0 },
  { name: "Renovação de Contrato", trigger: "Vencimento 15 dias", action: "Criar alerta + IA proposta", status: "Ativa", lastRun: "08/10/25", errors: 1 },
  { name: "Escalonamento SLA", trigger: "Prazo < 2h", action: "Notificar gestor + mover tarefa", status: "Parcial", lastRun: "09/10/25", errors: 2 },
];

const getStatusBadge = (status: string) => {
  if (status === "Ativa") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Ativa</Badge>;
  if (status === "Parcial") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Parcial</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const AutomationRules = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Exemplo de Automação</CardTitle></CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <p className="text-sm font-semibold text-risk-gold">EVENTO</p>
            <p>Decisão publicada no processo</p>
          </div>
          <ArrowRight className="h-6 w-6 text-gray-500" />
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <p className="text-sm font-semibold text-risk-gold">CONDIÇÕES</p>
            <p>Tipo = “Recurso” / Cliente = Terlla</p>
          </div>
          <ArrowRight className="h-6 w-6 text-gray-500" />
          <div className="p-4 bg-gray-800/50 rounded-lg space-y-2">
            <p className="text-sm font-semibold text-risk-gold">AÇÕES</p>
            <div className="flex items-center gap-2 text-left"><FileText className="h-4 w-4 text-tech-green" /><span>Criar tarefa “Elaborar recurso”</span></div>
            <div className="flex items-center gap-2 text-left"><Bell className="h-4 w-4 text-tech-green" /><span>Notificar responsável + Gestor</span></div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Automações Ativas</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Nome</TableHead><TableHead>Gatilho</TableHead><TableHead>Ação</TableHead><TableHead>Status</TableHead><TableHead>Última Execução</TableHead><TableHead>Erros</TableHead><TableHead>Ações</TableHead></TableRow></TableHeader>
            <TableBody>
              {automations.map(item => (
                <TableRow key={item.name} className="border-gray-700">
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.trigger}</TableCell>
                  <TableCell>{item.action}</TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell>{item.lastRun}</TableCell>
                  <TableCell>{item.errors}</TableCell>
                  <TableCell><Button variant="ghost" size="icon"><Search className="h-4 w-4" /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AutomationRules;