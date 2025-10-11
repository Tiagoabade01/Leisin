import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const accesses = [
  { user: "Carla Mendes", location: "São Paulo", device: "MacBook Pro", lastAccess: "11/10/25 14:20", status: "🟢 Ativa" },
  { user: "Felipe Ramos", location: "Campinas", device: "iPhone 15", lastAccess: "11/10/25 14:10", status: "🟢 Ativa" },
  { user: "João Pereira", location: "BH", device: "Desktop", lastAccess: "11/10/25 13:05", status: "🟡 Inativo" },
  { user: "Pedro Lima", location: "Recife", device: "Linux", lastAccess: "11/10/25 11:50", status: "🔴 Bloqueado" },
];

const MonitoramentoAcessos = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Monitoramento de Acessos</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Usuário</TableHead><TableHead>Localização</TableHead><TableHead>Dispositivo</TableHead><TableHead>Último Acesso</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {accesses.map(item => (
              <TableRow key={item.user} className="border-gray-700">
                <TableCell>{item.user}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.device}</TableCell>
                <TableCell>{item.lastAccess}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Sessão de Pedro Lima foi encerrada após detecção de IP de alto risco (nível 4). Nenhum dado comprometido.”</p>
      </CardContent>
    </Card>
  );
};

export default MonitoramentoAcessos;