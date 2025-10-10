import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const clients = [
  { id: 'sub1', name: 'Nivem Construtora', type: 'PJ', plan: 'Business', status: 'Ativo', startDate: '12/03/2025', lastLogin: '09/10/2025', seller: 'João Silva', mrr: 2890, risk: 'Baixo' },
  { id: 'sub2', name: 'Advocacia Pontes', type: 'PJ', plan: 'Pro', status: 'Em Atraso', startDate: '01/02/2025', lastLogin: '01/10/2025', seller: 'Maria Costa', mrr: 850, risk: 'Alto' },
  { id: 'sub3', name: 'Mariana Costa', type: 'PF', plan: 'Business', status: 'Trial', startDate: '01/10/2025', lastLogin: '10/10/2025', seller: 'João Silva', mrr: 2490, risk: 'Médio' },
];

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const getRiskBadge = (risk: string) => {
  switch (risk) {
    case 'Baixo': return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Baixo</Badge>;
    case 'Médio': return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Médio</Badge>;
    case 'Alto': return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Alto</Badge>;
    default: return <Badge variant="secondary">{risk}</Badge>;
  }
};

const BaseClientes = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">Base de Clientes</CardTitle>
          <div className="flex gap-2">
            <Input placeholder="Buscar cliente..." className="max-w-xs bg-gray-700 border-gray-600" />
            <Button variant="outline" className="bg-gray-700 border-gray-600"><Filter className="h-4 w-4 mr-2" /> Filtros</Button>
            <Button>Exportar</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800/50"><TableHead className="text-gray-200">Cliente</TableHead><TableHead className="text-gray-200">Tipo</TableHead><TableHead className="text-gray-200">Plano</TableHead><TableHead className="text-gray-200">Status</TableHead><TableHead className="text-gray-200">Início</TableHead><TableHead className="text-gray-200">Último login</TableHead><TableHead className="text-gray-200">Vendedor</TableHead><TableHead className="text-gray-200">MRR</TableHead><TableHead className="text-gray-200">Risco</TableHead><TableHead className="text-right text-gray-200">Ações</TableHead></TableRow></TableHeader>
          <TableBody>
            {clients.map(client => (
              <TableRow key={client.id} className="border-gray-700">
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>{client.type}</TableCell>
                <TableCell>{client.plan}</TableCell>
                <TableCell><Badge variant={client.status === 'Ativo' ? 'default' : (client.status === 'Em Atraso' ? 'destructive' : 'secondary')}>{client.status}</Badge></TableCell>
                <TableCell>{client.startDate}</TableCell>
                <TableCell>{client.lastLogin}</TableCell>
                <TableCell>{client.seller}</TableCell>
                <TableCell>{formatCurrency(client.mrr)}</TableCell>
                <TableCell>{getRiskBadge(client.risk)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                      <DropdownMenuItem asChild><Link to={`/master/clientes/${client.id}`}>Ver Detalhes</Link></DropdownMenuItem>
                      <DropdownMenuItem>Enviar E-mail</DropdownMenuItem>
                      <DropdownMenuItem>Gerar Cobrança</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default BaseClientes;