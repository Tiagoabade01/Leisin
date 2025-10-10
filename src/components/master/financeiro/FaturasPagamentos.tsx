import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, BrainCircuit, Search, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

const invoices = [
  { id: '#FT-2043', client: 'Nivem Construtora', value: 'R$ 3.290', method: 'Cartão', dueDate: '10/10/25', status: 'Pago' },
  { id: '#FT-2044', client: 'Terlla Incorporadora', value: 'R$ 2.490', method: 'Pix', dueDate: '12/10/25', status: 'Atrasada' },
  { id: '#FT-2045', client: 'Mettri Arquitetura', value: 'R$ 1.190', method: 'Cartão', dueDate: '15/10/25', status: 'Pendente' },
];

const getStatusIcon = (status: string) => {
  if (status === 'Pago') return <CheckCircle2 className="h-5 w-5 text-green-400" />;
  if (status === 'Atrasada') return <AlertTriangle className="h-5 w-5 text-red-400" />;
  return <Clock className="h-5 w-5 text-yellow-400" />;
};

const FaturasPagamentos = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Controle de Faturas</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Fatura</TableHead><TableHead>Cliente</TableHead><TableHead>Valor</TableHead><TableHead>Método</TableHead><TableHead>Vencimento</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
              <TableBody>
                {invoices.map(inv => (
                  <TableRow key={inv.id} className="border-gray-700">
                    <TableCell>{inv.id}</TableCell>
                    <TableCell>{inv.client}</TableCell>
                    <TableCell>{inv.value}</TableCell>
                    <TableCell>{inv.method}</TableCell>
                    <TableCell>{inv.dueDate}</TableCell>
                    <TableCell><div className="flex items-center gap-2">{getStatusIcon(inv.status)} {inv.status}</div></TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                          <DropdownMenuItem><Search className="h-4 w-4 mr-2" />Ver Detalhes</DropdownMenuItem>
                          <DropdownMenuItem>Reenviar Cobrança</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-400">Cancelar</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">IA Auxiliar</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>"<strong>5 faturas</strong> estão prestes a vencer nas próximas 48h — sugerir envio de lembrete automático."</p>
          <p>"Cliente <strong>Terlla Incorporadora</strong> tem 3 faturas consecutivas atrasadas — risco de churn alto."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FaturasPagamentos;