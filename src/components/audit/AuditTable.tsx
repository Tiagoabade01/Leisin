import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const logs = [
  { date: "10/10/25", user: "juridico@terlla.com", action: "Atualizou contrato", entity: "Contrato #A441", result: "Validado", status: "🟢" },
  { date: "09/10/25", user: "IA Leisin", action: "Executou auditoria fiscal", entity: "Grupo Nivem", result: "Pendência detectada", status: "🟠" },
  { date: "09/10/25", user: "gestor@amv.com", action: "Excluiu documento", entity: "CND #4321", result: "Aguardando revisão", status: "🔴" },
  { date: "08/10/25", user: "IA Leisin", action: "Recalculou conformidade", entity: "Sistema", result: "+2%", status: "🟢" },
];

const AuditTable = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Logs e Rastreamento (Trilha de Auditoria)</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data</TableHead><TableHead>Usuário/Setor</TableHead><TableHead>Ação</TableHead><TableHead>Entidade</TableHead><TableHead>Resultado</TableHead></TableRow></TableHeader>
          <TableBody>
            {logs.map(log => (
              <TableRow key={log.date + log.action} className="border-gray-700">
                <TableCell>{log.date}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>{log.entity}</TableCell>
                <TableCell>{log.status} {log.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AuditTable;