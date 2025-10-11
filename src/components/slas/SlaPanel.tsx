import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { BrainCircuit } from "lucide-react";

const slaData = [
  { type: "Revisão Contratual", sla: "48h", variation: "±6h", compliance: 92, iaAdjust: true, status: "Normal" },
  { type: "Petição Processual", sla: "72h", variation: "±12h", compliance: 88, iaAdjust: true, status: "Atenção" },
  { type: "Faturamento Financeiro", sla: "24h", variation: "±3h", compliance: 97, iaAdjust: true, status: "Normal" },
  { type: "Certidão & Compliance", sla: "36h", variation: "±4h", compliance: 84, iaAdjust: false, status: "Crítico" },
];

const getStatusBadge = (status: string) => {
  if (status === "Normal") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Normal</Badge>;
  if (status === "Atenção") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Atenção</Badge>;
  if (status === "Crítico") return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Crítico</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const SlaPanel = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Visão Geral de SLAs</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tipo de Tarefa</TableHead><TableHead>SLA Padrão</TableHead><TableHead>Variação</TableHead><TableHead>Cumprimento (%)</TableHead><TableHead>Ajuste IA</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {slaData.map(item => (
                <TableRow key={item.type} className="border-gray-700">
                  <TableCell className="font-medium">{item.type}</TableCell>
                  <TableCell>{item.sla}</TableCell>
                  <TableCell>{item.variation}</TableCell>
                  <TableCell>{item.compliance}%</TableCell>
                  <TableCell><Switch checked={item.iaAdjust} /></TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Configurações Principais</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between"><Label>Alerta "A 12h do prazo"</Label><Switch defaultChecked /></div>
            <div className="flex items-center justify-between"><Label>Alerta "A 2h do prazo"</Label><Switch defaultChecked /></div>
            <div className="flex items-center justify-between"><Label>Alerta "Prazo estourado"</Label><Switch defaultChecked /></div>
            <div className="flex items-center justify-between"><Label>Regra de escalonamento (notificar gestor)</Label><Switch /></div>
          </CardContent>
        </Card>
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">IA Preditiva de SLA</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-gray-300">“Baseando-se no histórico, tarefas de revisão contratual com 4 revisões levam 56h, e não 48h. Sugerir novo SLA padrão: <strong className="text-tech-green">52h</strong>.”</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SlaPanel;