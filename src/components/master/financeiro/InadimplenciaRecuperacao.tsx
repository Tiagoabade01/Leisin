import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Settings } from "lucide-react";

const overdueClients = [
  { client: 'Terlla Incorporadora', value: 'R$ 2.490', lastPayment: '12/09/25', days: 28, status: 'Suspenso' },
  { client: 'Nivem Construtora', value: 'R$ 3.290', lastPayment: '20/09/25', days: 10, status: 'Avisado' },
];

const InadimplenciaRecuperacao = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader><CardTitle className="text-sm font-medium text-gray-300">Clientes Inadimplentes</CardTitle><p className="text-2xl font-bold">12</p></CardHeader></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader><CardTitle className="text-sm font-medium text-gray-300">Valor Pendente</CardTitle><p className="text-2xl font-bold">R$ 18.900</p></CardHeader></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader><CardTitle className="text-sm font-medium text-gray-300">Média de Atraso</CardTitle><p className="text-2xl font-bold">16 dias</p></CardHeader></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader><CardTitle className="text-sm font-medium text-gray-300">Recuperação (IA)</CardTitle><p className="text-2xl font-bold">63%</p></CardHeader></Card>
      </div>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Controle de Inadimplência</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Cliente</TableHead><TableHead>Valor</TableHead><TableHead>Último Pagamento</TableHead><TableHead>Dias em Atraso</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
            <TableBody>
              {overdueClients.map(c => (
                <TableRow key={c.client} className="border-gray-700">
                  <TableCell>{c.client}</TableCell><TableCell>{c.value}</TableCell><TableCell>{c.lastPayment}</TableCell><TableCell>{c.days}</TableCell><TableCell>{c.status}</TableCell>
                  <TableCell className="text-right"><Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">IA de Recuperação</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>"Sugerir reativação de cliente após pagamento parcial."</p>
          <p>"Oferecer desconto de 10% para recuperar fatura vencida há +30 dias."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InadimplenciaRecuperacao;