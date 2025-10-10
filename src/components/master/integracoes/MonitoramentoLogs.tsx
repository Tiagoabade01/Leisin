import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit } from "lucide-react";

const logs = [
  { date: '10/10/25 13:32', api: 'Neoway', endpoint: '/empresa/buscar', code: 200, latency: '184 ms', result: 'Sucesso' },
  { date: '10/10/25 13:33', api: 'ARISP', endpoint: '/matricula/consulta', code: 401, latency: '320 ms', result: 'Token inválido' },
  { date: '10/10/25 13:35', api: 'OpenAI', endpoint: '/v1/chat', code: 200, latency: '120 ms', result: 'Sucesso' },
];

const getResultBadge = (result: string) => {
  if (result === 'Sucesso') return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">✅ {result}</Badge>;
  if (result === 'Token inválido') return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">⚠️ {result}</Badge>;
  return <Badge variant="secondary">{result}</Badge>;
};

const MonitoramentoLogs = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Registro de Eventos da API</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Data</TableHead><TableHead>API</TableHead><TableHead>Endpoint</TableHead><TableHead>Código</TableHead><TableHead>Latência</TableHead><TableHead>Resultado</TableHead></TableRow></TableHeader>
            <TableBody>
              {logs.map(log => (
                <TableRow key={log.date} className="border-gray-700">
                  <TableCell>{log.date}</TableCell><TableCell>{log.api}</TableCell><TableCell>{log.endpoint}</TableCell><TableCell>{log.code}</TableCell><TableCell>{log.latency}</TableCell>
                  <TableCell>{getResultBadge(log.result)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Detecção de Anomalias (IA)</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">"API JusBrasil apresentou latência acima da média — possível instabilidade."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonitoramentoLogs;