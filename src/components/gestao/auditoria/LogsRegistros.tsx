import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const logs = [
  { date: "11/10/25 14:05", user: "Ana Souza", action: "Editou Contrato", module: "Jurídico", result: "Sucesso", ip: "187.45.21.88" },
  { date: "11/10/25 13:50", user: "Felipe Ramos", action: "Gerou DRE", module: "Contábil", result: "Sucesso", ip: "189.61.92.12" },
  { date: "11/10/25 13:33", user: "IA Central", action: "Ajustou Permissão", module: "Core", result: "Automático", ip: "127.0.0.1" },
  { date: "11/10/25 12:48", user: "Pedro Lima", action: "Tentou excluir usuário master", module: "Core", result: "Negado", ip: "189.40.72.51" },
];

const LogsRegistros = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Logs e Registros de Ações</CardTitle></CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input placeholder="Filtrar por módulo, usuário, ação ou IP..." className="bg-gray-800 border-gray-700" />
          <Button variant="outline" className="bg-gray-800 border-gray-700">Exportar</Button>
        </div>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data/Hora</TableHead><TableHead>Usuário</TableHead><TableHead>Ação</TableHead><TableHead>Módulo</TableHead><TableHead>Resultado</TableHead><TableHead>IP</TableHead></TableRow></TableHeader>
          <TableBody>
            {logs.map(log => (
              <TableRow key={log.date} className="border-gray-700">
                <TableCell>{log.date}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>{log.module}</TableCell>
                <TableCell>{log.result}</TableCell>
                <TableCell>{log.ip}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Usuário Pedro Lima tentou excluir uma conta protegida. Ação registrada, bloqueada e notificada ao administrador.”</p>
      </CardContent>
    </Card>
  );
};

export default LogsRegistros;