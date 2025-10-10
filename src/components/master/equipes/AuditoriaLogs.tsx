import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const logs = [
  { date: '10/10/25 13:42', user: 'João Lima', action: 'Alterou permissões', module: 'Jurídico', result: 'Sucesso' },
  { date: '09/10/25 11:20', user: 'Maria Lima', action: 'Excluiu contrato', module: 'Financeiro', result: 'Crítico' },
];

const AuditoriaLogs = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Registro de Auditoria</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700"><TableHead>Data</TableHead><TableHead>Usuário</TableHead><TableHead>Ação</TableHead><TableHead>Módulo</TableHead><TableHead>Resultado</TableHead></TableRow></TableHeader>
          <TableBody>
            {logs.map(log => (
              <TableRow key={log.date} className="border-gray-700">
                <TableCell>{log.date}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>{log.module}</TableCell>
                <TableCell><Badge variant={log.result === 'Crítico' ? 'destructive' : 'default'}>{log.result}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AuditoriaLogs;