import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, DollarSign, Users, TrendingUp, TrendingDown } from "lucide-react";

const subscriptions = [
  { id: 'sub1', client: 'Construtora Sol Nascente', plan: 'Enterprise', status: 'active', mrr: 2500, startDate: '2023-01-15', renewalDate: '2025-01-15' },
  { id: 'sub2', client: 'Advocacia Central', plan: 'Pro', status: 'active', mrr: 850, startDate: '2023-07-20', renewalDate: '2024-07-20' },
  { id: 'sub3', client: 'Imobiliária Vista Linda', plan: 'Enterprise', status: 'active', mrr: 2500, startDate: '2024-02-01', renewalDate: '2025-02-01' },
  { id: 'sub4', client: 'Startup InovaTech', plan: 'Pro', status: 'canceled', mrr: 0, startDate: '2023-05-10', renewalDate: '2024-05-10' },
];

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
const formatDate = (date: string) => new Date(date).toLocaleDateString('pt-BR');

const SubscriptionManagement = () => {
  const totalMRR = subscriptions.filter(s => s.status === 'active').reduce((sum, s) => sum + s.mrr, 0);
  const activeSubs = subscriptions.filter(s => s.status === 'active').length;

  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <CardTitle>Gestão de Assinaturas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card className="bg-gray-700/50 border-gray-600">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium">MRR Total</CardTitle><DollarSign className="h-4 w-4 text-gray-400" /></CardHeader>
            <CardContent><div className="text-2xl font-bold">{formatCurrency(totalMRR)}</div></CardContent>
          </Card>
          <Card className="bg-gray-700/50 border-gray-600">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium">Assinaturas Ativas</CardTitle><Users className="h-4 w-4 text-gray-400" /></CardHeader>
            <CardContent><div className="text-2xl font-bold">{activeSubs}</div></CardContent>
          </Card>
          <Card className="bg-gray-700/50 border-gray-600">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium">Novas (Mês)</CardTitle><TrendingUp className="h-4 w-4 text-gray-400" /></CardHeader>
            <CardContent><div className="text-2xl font-bold">+2</div></CardContent>
          </Card>
          <Card className="bg-gray-700/50 border-gray-600">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"><CardTitle className="text-sm font-medium">Churn (Mês)</CardTitle><TrendingDown className="h-4 w-4 text-gray-400" /></CardHeader>
            <CardContent><div className="text-2xl font-bold">1</div></CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Input placeholder="Buscar cliente..." className="max-w-sm bg-gray-700 border-gray-600" />
          <Button>Exportar CSV</Button>
        </div>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Cliente</TableHead><TableHead>Plano</TableHead><TableHead>Status</TableHead><TableHead>MRR</TableHead><TableHead>Data de Início</TableHead><TableHead>Próx. Renovação</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
          <TableBody>
            {subscriptions.map(sub => (
              <TableRow key={sub.id} className="border-gray-700">
                <TableCell className="font-medium">{sub.client}</TableCell>
                <TableCell>{sub.plan}</TableCell>
                <TableCell><Badge variant={sub.status === 'active' ? 'default' : 'destructive'}>{sub.status === 'active' ? 'Ativa' : 'Cancelada'}</Badge></TableCell>
                <TableCell>{formatCurrency(sub.mrr)}</TableCell>
                <TableCell>{formatDate(sub.startDate)}</TableCell>
                <TableCell>{formatDate(sub.renewalDate)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700"><DropdownMenuItem>Ver Detalhes</DropdownMenuItem><DropdownMenuItem>Gerenciar Faturas</DropdownMenuItem><DropdownMenuItem className="text-red-500">Cancelar Assinatura</DropdownMenuItem></DropdownMenuContent>
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

export default SubscriptionManagement;