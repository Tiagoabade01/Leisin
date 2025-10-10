import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import {
  DollarSign, Users, Calendar, AlertTriangle, Edit, Power, PowerOff, RefreshCw, FileText,
  BarChart2, LineChart, UserCheck, Clock, Ticket, MessageSquare, BookOpen, History
} from "lucide-react";
import { ResponsiveContainer, LineChart as RechartsLineChart, BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, Legend, Line as RechartsLine } from 'recharts';

// --- Mock Data for a Single Client ---
const clientData = {
  id: 'cus_123',
  name: 'Construtora Sol Nascente',
  document: '12.345.678/0001-90',
  email: 'financeiro@csn.com',
  phone: '+55 11 99999-0000',
  status: 'active',
  plan: 'Enterprise',
  createdAt: '2023-01-15',
  nextBilling: '2025-01-15',
  kpis: {
    mrr: 2500,
    totalPaid: 28000,
    overdue: 0,
    activeUsers: 45,
    totalSeats: 50,
    lastLogin: '2024-08-01T10:00:00Z',
    riskStatus: 'Baixo',
  },
  subscription: {
    planName: 'Enterprise',
    cycle: 'Anual',
    status: 'Ativa',
    value: 28000,
    activatedAt: '2023-01-15',
    renewsAt: '2025-01-15',
    addons: ['IA Plus', 'WhatsApp Business'],
    history: [{ date: '2023-01-15', event: 'Plano Enterprise ativado' }],
    limits: {
      users: { used: 45, total: 50 },
      storage: { used: 120, total: 1000 },
      iaRequests: { used: 85000, total: 200000 },
    }
  },
  invoices: [
    { id: 'inv_003', date: '2024-01-15', value: 28000, status: 'Pago', method: 'Cartão', nfe: '#' },
    { id: 'inv_002', date: '2023-07-15', value: 1500, status: 'Pago', method: 'Cartão', nfe: '#' },
    { id: 'inv_001', date: '2023-01-15', value: 25000, status: 'Pago', method: 'Cartão', nfe: '#' },
  ],
  users: [
    { id: 'usr_1', name: 'João da Silva', email: 'joao.silva@csn.com', role: 'Admin', status: 'Ativo', lastLogin: '2024-08-01' },
    { id: 'usr_2', name: 'Maria Oliveira', email: 'maria.o@csn.com', role: 'Usuário', status: 'Ativo', lastLogin: '2024-07-30' },
    { id: 'usr_3', name: 'Carlos Pereira', email: 'carlos.p@csn.com', role: 'Usuário', status: 'Pendente', lastLogin: '-' },
  ],
  events: [
    { date: '2024-01-15', event: 'Pagamento de R$ 28.000,00 recebido (Anual)' },
    { date: '2023-07-15', event: 'Upgrade: Add-on "IA Plus" adicionado' },
    { date: '2023-01-15', event: 'Assinatura "Enterprise" iniciada' },
    { date: '2023-01-10', event: 'Conta criada' },
  ],
  revenueData: [
    { name: 'Jan', receita: 2200 }, { name: 'Fev', receita: 2200 }, { name: 'Mar', receita: 2200 },
    { name: 'Abr', receita: 2200 }, { name: 'Mai', receita: 2200 }, { name: 'Jun', receita: 2500 },
  ],
  moduleUsageData: [
    { name: 'Jurídico', uso: 90 }, { name: 'IA', uso: 75 }, { name: 'CRM', uso: 60 },
    { name: 'Financeiro', uso: 40 }, { name: 'Compliance', uso: 80 },
  ]
};

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
const formatDate = (date: string) => new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

const ClienteDetalhe = () => {
  const { clienteId } = useParams<{ clienteId: string }>();
  // In a real app, you would fetch clientData based on clienteId
  const client = clientData;

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Header Fixo */}
      <header className="mb-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">{client.name}</h1>
            <p className="text-gray-400">{client.document} • {client.email}</p>
            <div className="flex items-center gap-4 mt-2">
              <Badge variant={client.status === 'active' ? 'default' : 'destructive'}>{client.status === 'active' ? 'Ativa' : 'Inativa'}</Badge>
              <span className="text-sm text-gray-300">Plano: <strong>{client.plan}</strong></span>
              <span className="text-sm text-gray-300">Próximo Faturamento: <strong>{formatDate(client.nextBilling)}</strong></span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="bg-gray-800 border-gray-700">Gerenciar Plano</Button>
            <Button>Cobrar Agora</Button>
            <Button variant="destructive">Suspender</Button>
          </div>
        </div>
      </header>

      {/* KPIs Rápidos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="p-4"><CardTitle className="text-sm font-medium text-gray-400">MRR</CardTitle><p className="text-2xl font-bold">{formatCurrency(client.kpis.mrr)}</p></CardHeader></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="p-4"><CardTitle className="text-sm font-medium text-gray-400">Total Pago</CardTitle><p className="text-2xl font-bold">{formatCurrency(client.kpis.totalPaid)}</p></CardHeader></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="p-4"><CardTitle className="text-sm font-medium text-gray-400">Faturas em Atraso</CardTitle><p className="text-2xl font-bold">{client.kpis.overdue}</p></CardHeader></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="p-4"><CardTitle className="text-sm font-medium text-gray-400">Usuários Ativos</CardTitle><p className="text-2xl font-bold">{client.kpis.activeUsers} / {client.kpis.totalSeats}</p></CardHeader></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="p-4"><CardTitle className="text-sm font-medium text-gray-400">Último Login</CardTitle><p className="text-2xl font-bold">{formatDate(client.kpis.lastLogin)}</p></CardHeader></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="p-4"><CardTitle className="text-sm font-medium text-gray-400">Status de Risco</CardTitle><p className="text-2xl font-bold text-green-400">{client.kpis.riskStatus}</p></CardHeader></Card>
      </div>

      {/* Navegação por Abas */}
      <Tabs defaultValue="resumo" className="w-full">
        <TabsList className="grid w-full grid-cols-4 md:grid-cols-8 bg-gray-800">
          <TabsTrigger value="resumo">Resumo</TabsTrigger>
          <TabsTrigger value="plano">Plano & Assinatura</TabsTrigger>
          <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
          <TabsTrigger value="usuarios">Usuários & Acessos</TabsTrigger>
          <TabsTrigger value="atividades">Atividades</TabsTrigger>
          <TabsTrigger value="documentos">Documentos</TabsTrigger>
          <TabsTrigger value="suporte">Suporte</TabsTrigger>
          <TabsTrigger value="historico">Histórico</TabsTrigger>
        </TabsList>

        <TabsContent value="resumo" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 bg-gray-800 border-gray-700 text-white">
              <CardHeader><CardTitle>Receita Gerada (Últimos 6 meses)</CardTitle></CardHeader>
              <CardContent><ResponsiveContainer width="100%" height={300}><RechartsLineChart data={client.revenueData}><XAxis dataKey="name" stroke="#888888" /><YAxis stroke="#888888" /><Tooltip contentStyle={{ backgroundColor: '#333' }} /><Legend /><RechartsLine type="monotone" dataKey="receita" stroke="#8884d8" /></RechartsLineChart></ResponsiveContainer></CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader><CardTitle>Uso por Módulo</CardTitle></CardHeader>
              <CardContent><ResponsiveContainer width="100%" height={300}><RechartsBarChart data={client.moduleUsageData} layout="vertical"><XAxis type="number" hide /><YAxis type="category" dataKey="name" stroke="#888888" width={80} /><Tooltip contentStyle={{ backgroundColor: '#333' }} /><Bar dataKey="uso" fill="#82ca9d" radius={[0, 4, 4, 0]} /></RechartsBarChart></ResponsiveContainer></CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="plano" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader><CardTitle>Detalhes do Plano e Assinatura</CardTitle></CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Plano Atual</h3>
                <p><strong>Nome:</strong> {client.subscription.planName}</p>
                <p><strong>Ciclo:</strong> {client.subscription.cycle}</p>
                <p><strong>Valor:</strong> {formatCurrency(client.subscription.value)}/{client.subscription.cycle === 'Anual' ? 'ano' : 'mês'}</p>
                <p><strong>Ativado em:</strong> {formatDate(client.subscription.activatedAt)}</p>
                <p><strong>Renova em:</strong> {formatDate(client.subscription.renewsAt)}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Limites de Uso</h3>
                <div className="space-y-2">
                  <div><Label>Usuários</Label><Progress value={(client.subscription.limits.users.used / client.subscription.limits.users.total) * 100} /> <span className="text-xs">{client.subscription.limits.users.used} de {client.subscription.limits.users.total}</span></div>
                  <div><Label>Armazenamento (GB)</Label><Progress value={(client.subscription.limits.storage.used / client.subscription.limits.storage.total) * 100} /> <span className="text-xs">{client.subscription.limits.storage.used} de {client.subscription.limits.storage.total}</span></div>
                  <div><Label>Requisições IA</Label><Progress value={(client.subscription.limits.iaRequests.used / client.subscription.limits.iaRequests.total) * 100} /> <span className="text-xs">{client.subscription.limits.iaRequests.used} de {client.subscription.limits.iaRequests.total}</span></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financeiro" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader><CardTitle>Faturas e Cobranças</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Data</TableHead><TableHead>Valor</TableHead><TableHead>Status</TableHead><TableHead>Método</TableHead><TableHead>Nota Fiscal</TableHead></TableRow></TableHeader>
                <TableBody>
                  {client.invoices.map(inv => (
                    <TableRow key={inv.id} className="border-gray-700"><TableCell>{formatDate(inv.date)}</TableCell><TableCell>{formatCurrency(inv.value)}</TableCell><TableCell><Badge>{inv.status}</Badge></TableCell><TableCell>{inv.method}</TableCell><TableCell><a href={inv.nfe} className="text-blue-400 hover:underline">Ver NFe</a></TableCell></TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usuarios" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader><CardTitle>Usuários e Acessos</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Nome</TableHead><TableHead>E-mail</TableHead><TableHead>Papel</TableHead><TableHead>Status</TableHead><TableHead>Último Login</TableHead></TableRow></TableHeader>
                <TableBody>
                  {client.users.map(user => (
                    <TableRow key={user.id} className="border-gray-700"><TableCell>{user.name}</TableCell><TableCell>{user.email}</TableCell><TableCell>{user.role}</TableCell><TableCell><Badge variant={user.status === 'Ativo' ? 'default' : 'secondary'}>{user.status}</Badge></TableCell><TableCell>{user.lastLogin}</TableCell></TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="atividades" className="mt-6"><Card className="bg-gray-800 border-gray-700 text-white"><CardHeader><CardTitle>Atividades</CardTitle></CardHeader><CardContent><p>Em construção.</p></CardContent></Card></TabsContent>
        <TabsContent value="documentos" className="mt-6"><Card className="bg-gray-800 border-gray-700 text-white"><CardHeader><CardTitle>Contratos & Documentos</CardTitle></CardHeader><CardContent><p>Em construção.</p></CardContent></Card></TabsContent>
        <TabsContent value="suporte" className="mt-6"><Card className="bg-gray-800 border-gray-700 text-white"><CardHeader><CardTitle>Suporte</CardTitle></CardHeader><CardContent><p>Em construção.</p></CardContent></Card></TabsContent>
        <TabsContent value="historico" className="mt-6"><Card className="bg-gray-800 border-gray-700 text-white"><CardHeader><CardTitle>Histórico / Auditoria</CardTitle></CardHeader><CardContent><p>Em construção.</p></CardContent></Card></TabsContent>

      </Tabs>
    </div>
  );
};

export default ClienteDetalhe;