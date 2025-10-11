import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, BrainCircuit } from "lucide-react";

const logs = [
  { date: "09/10/25 14:32", rule: "Escalonamento SLA", event: "“Prazo < 2h”", action: "E-mail gestor", time: "0.3s", status: "Sucesso" },
  { date: "09/10/25 11:17", rule: "Recurso Automático", event: "“Decisão publicada”", action: "Criar tarefa", time: "0.8s", status: "Sucesso" },
  { date: "09/10/25 09:42", rule: "Renovação Contrato", event: "“Vencimento 15 dias”", action: "Gerar proposta", time: "1.1s", status: "Parcial" },
];

const getStatusBadge = (status: string) => {
  if (status === "Sucesso") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Sucesso</Badge>;
  if (status === "Parcial") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Parcial</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const ExecutionsLogs = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-petroleum-blue border-gray-700 text-white"><CardHeader><CardTitle className="text-sm font-medium">Execuções Totais (24h)</CardTitle><p className="text-2xl font-bold">1,428</p></CardHeader></Card>
        <Card className="bg-petroleum-blue border-gray-700 text-white"><CardHeader><CardTitle className="text-sm font-medium">Falhas (24h)</CardTitle><p className="text-2xl font-bold">12</p></CardHeader></Card>
        <Card className="bg-petroleum-blue border-gray-700 text-white"><CardHeader><CardTitle className="text-sm font-medium">Tempo Médio de Execução</CardTitle><p className="text-2xl font-bold">0.7s</p></CardHeader></Card>
      </div>

      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Histórico de Execuções</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data</TableHead><TableHead>Regra</TableHead><TableHead>Evento</TableHead><TableHead>Ação Executada</TableHead><TableHead>Tempo</TableHead><TableHead>Status</TableHead><TableHead>Detalhes</TableHead></TableRow></TableHeader>
            <TableBody>
              {logs.map(item => (
                <TableRow key={item.date} className="border-gray-700">
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.rule}</TableCell>
                  <TableCell>{item.event}</TableCell>
                  <TableCell>{item.action}</TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell><Button variant="ghost" size="icon"><Search className="h-4 w-4" /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">Análise de Desempenho IA</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">💡 “Automação de SLA ‘Prazo &lt; 24h’ executou 318 vezes este mês com 99,1% de sucesso.”</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExecutionsLogs;