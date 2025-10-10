import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const logsData = [
  { date: '10/10/2025 13:42', user: 'Tiago Abade', action: 'Alterou permissões', module: 'Financeiro', result: 'Sucesso' },
  { date: '10/10/2025 11:05', user: 'João Lima', action: 'Desativou módulo', module: 'IA & Automação', result: 'Alerta' },
];

const LogsAuditoria = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">Logs e Auditoria</CardTitle>
          <div className="flex gap-2">
            <Input placeholder="Filtrar por usuário, módulo..." className="max-w-xs bg-gray-700 border-gray-600" />
            <Button>Exportar</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800/50"><TableHead className="text-gray-200">Data</TableHead><TableHead className="text-gray-200">Usuário</TableHead><TableHead className="text-gray-200">Ação</TableHead><TableHead className="text-gray-200">Módulo</TableHead><TableHead className="text-gray-200">Resultado</TableHead></TableRow></TableHeader>
          <TableBody>
            {logsData.map(log => (
              <TableRow key={log.date} className="border-gray-700">
                <TableCell>{log.date}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>{log.module}</TableCell>
                <TableCell><Badge variant={log.result === 'Sucesso' ? 'default' : 'destructive'}>{log.result}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LogsAuditoria;