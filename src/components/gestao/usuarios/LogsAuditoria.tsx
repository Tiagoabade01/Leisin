import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const logs = [
  { user: "Ana Ribeiro", action: "Editou contrato", module: "Jurídico", datetime: "10/10/25 – 09:18", ip: "177.201.23.19", status: "✅" },
  { user: "Felipe Duarte", action: "Excluiu lançamento", module: "Financeiro", datetime: "09/10/25 – 18:05", ip: "177.185.12.54", status: "⚠️" },
  { user: "Carla Mendes", action: "Aprovou acesso", module: "Gestão", datetime: "09/10/25 – 10:42", ip: "177.202.45.11", status: "✅" },
];

const LogsAuditoria = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Logs e Auditoria de Acesso</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Usuário</TableHead><TableHead>Ação</TableHead><TableHead>Módulo</TableHead><TableHead>Data/Hora</TableHead><TableHead>IP</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {logs.map(log => (
              <TableRow key={log.datetime} className="border-gray-700">
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>{log.module}</TableCell>
                <TableCell>{log.datetime}</TableCell>
                <TableCell>{log.ip}</TableCell>
                <TableCell>{log.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Atividade de exclusão fora do horário comercial detectada. IA sugere bloqueio temporário do usuário Felipe Duarte.”</p>
      </CardContent>
    </Card>
  );
};

export default LogsAuditoria;