import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MoreHorizontal, DollarSign, Users, TrendingUp, TrendingDown, Filter, CalendarDays, Repeat, Target } from "lucide-react";

const subscriptions = [
  { id: 'sub1', customer: { name: 'Construtora Sol Nascente', doc: '12.345.678/0001-90', email: 'financeiro@csn.com' }, plan: 'Enterprise', addons: ['IA Plus'], seats: { used: 45, max: 50 }, status: 'active', cycle: 'Anual', nextBilling: '2025-01-15', lastPayment: { date: '2024-01-15', value: 28000 }, mrr: 2500, riskScore: 5 },
  { id: 'sub2', customer: { name: 'Advocacia Central', doc: '98.765.432/0001-10', email: 'contato@advcentral.com' }, plan: 'Pro', addons: [], seats: { used: 4, max: 5 }, status: 'past_due', cycle: 'Mensal', nextBilling: '2024-08-20', lastPayment: { date: '2024-06-20', value: 850 }, mrr: 850, riskScore: 65 },
  { id: 'sub3', customer: { name: 'Imobiliária Vista Linda', doc: '11.222.333/0001-44', email: 'adm@vistalinda.com' }, plan: 'Enterprise', addons: [], seats: { used: 18, max: 20 }, status: 'active', cycle: 'Anual', nextBilling: '2025-02-01', lastPayment: { date: '2024-02-01', value: 25000 }, mrr: 2200, riskScore: 10 },
  { id: 'sub4', customer: { name: 'Startup InovaTech', doc: '44.555.666/0001-77', email: 'finance@inovatech.io' }, plan: 'Pro', addons: ['WhatsApp'], seats: { used: 5, max: 5 }, status: 'canceled', cycle: 'Mensal', nextBilling: '-', lastPayment: { date: '2024-04-10', value: 950 }, mrr: 0, riskScore: 0 },
  { id: 'sub5', customer: { name: 'Mariana Costa (Trial)', doc: '123.456.789-00', email: 'mariana.c@email.com' }, plan: 'Business', addons: [], seats: { used: 1, max: 20 }, status: 'trial', cycle: 'Mensal', nextBilling: '2024-08-15', lastPayment: { date: '-', value: 0 }, mrr: 2490, riskScore: 20 },
];

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
const formatDate = (date: string) => date === '-' ? '-' : new Date(date).toLocaleDateString('pt-BR');

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active': return <Badge>Ativa</Badge>;
    case 'past_due': return <Badge variant="destructive">Em Atraso (D+5)</Badge>;
    case 'trial': return <Badge variant="secondary">Em Trial</Badge>;
    case 'canceled': return <Badge variant="outline">Cancelada</Badge>;
    default: return <Badge variant="secondary">{status}</Badge>;
  }
};

const SubscriptionManagement = () => {
  const totalMRR = subscriptions.filter(s => s.status === 'active' || s.status === 'past_due').reduce((sum, s) => sum + s.mrr, 0);

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">MRR</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">{formatCurrency(totalMRR)}</div><p className="text-xs text-green-400">+2.1% vs. 30d</p></CardContent></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">Novas Assinaturas (30d)</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">+12</div><p className="text-xs text-gray-400">R$ 8.5k Novo MRR</p></CardContent></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">Churn (30d)</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">2.5%</div><p className="text-xs text-red-400">R$ 1.2k MRR perdido</p></CardContent></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">Receita Recuperada</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">{formatCurrency(1250)}</div><p className="text-xs text-gray-400">via dunning em 30d</p></CardContent></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">ARPA</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold">{formatCurrency(1850.50)}</div><p className="text-xs text-gray-400">Ticket médio por conta</p></CardContent></Card>
      </div>

      {/* Filtros e Ações */}
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-4">
            <Input placeholder="Buscar por cliente, e-mail, CNPJ..." className="max-w-xs bg-gray-700 border-gray-600" />
            <Select><SelectTrigger className="w-[180px] bg-gray-700 border-gray-600"><SelectValue placeholder="Filtrar por Plano" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="pro">Pro</SelectItem><SelectItem value="business">Business</SelectItem><SelectItem value="enterprise">Enterprise</SelectItem></SelectContent></Select>
            <Select><SelectTrigger className="w-[180px] bg-gray-700 border-gray-600"><SelectValue placeholder="Filtrar por Status" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="active">Ativa</SelectItem><SelectItem value="past_due">Em Atraso</SelectItem><SelectItem value="trial">Em Trial</SelectItem><SelectItem value="canceled">Cancelada</SelectItem></SelectContent></Select>
            <Button variant="outline" className="bg-gray-700 border-gray-600"><Filter className="h-4 w-4 mr-2" /> Filtros Avançados</Button>
            <div className="flex-grow" />
            <Button variant="outline" className="bg-gray-700 border-gray-600">Exportar CSV</Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabela Principal */}
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardContent className="p-0">
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800/50"><TableHead>Cliente</TableHead><TableHead>Plano</TableHead><TableHead>Usuários</TableHead><TableHead>Status</TableHead><TableHead>Ciclo</TableHead><TableHead>Último Pagamento</TableHead><TableHead>MRR</TableHead><TableHead>Risco</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
            <TableBody>
              {subscriptions.map(sub => (
                <TableRow key={sub.id} className="border-gray-700">
                  <TableCell><div className="font-medium">{sub.customer.name}</div><div className="text-xs text-gray-400">{sub.customer.doc}</div></TableCell>
                  <TableCell>{sub.plan} {sub.addons.length > 0 && <span className="text-xs text-gray-400">(+{sub.addons.length})</span>}</TableCell>
                  <TableCell>{sub.seats.used}/{sub.seats.max}</TableCell>
                  <TableCell>{getStatusBadge(sub.status)}</TableCell>
                  <TableCell><div className="font-medium">{sub.cycle}</div><div className="text-xs text-gray-400">Próx: {formatDate(sub.nextBilling)}</div></TableCell>
                  <TableCell><div className="font-medium">{formatCurrency(sub.lastPayment.value)}</div><div className="text-xs text-gray-400">{formatDate(sub.lastPayment.date)}</div></TableCell>
                  <TableCell>{formatCurrency(sub.mrr)}</TableCell>
                  <TableCell>{sub.riskScore}%</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                        <DropdownMenuItem>Ver Cliente</DropdownMenuItem>
                        <DropdownMenuItem>Gerenciar Assinatura</DropdownMenuItem>
                        <DropdownMenuItem>Cobrar Agora</DropdownMenuItem>
                        <DropdownMenuItem className="text-yellow-400">Suspender</DropdownMenuItem>
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
  );
};

export default SubscriptionManagement;