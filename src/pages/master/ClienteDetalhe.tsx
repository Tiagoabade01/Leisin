import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { showSuccess } from '@/utils/toast';
import {
  DollarSign, Users, Calendar, AlertTriangle, Edit, Power, PowerOff, RefreshCw, FileText,
  BarChart2, LineChart, UserCheck, Clock, Ticket, MessageSquare, BookOpen, History, ArrowLeft, Download
} from "lucide-react";
import { ResponsiveContainer, LineChart as RechartsLineChart, BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, Legend, Line as RechartsLine } from 'recharts';

// --- Mock Data for a Single Client ---
const initialClientData = {
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
    { date: '2024-08-01', event: 'Usuário João da Silva fez login.' },
    { date: '2024-01-15', event: 'Pagamento de R$ 28.000,00 recebido (Anual)' },
    { date: '2023-07-15', event: 'Upgrade: Add-on "IA Plus" adicionado' },
    { date: '2023-01-15', event: 'Assinatura "Enterprise" iniciada' },
    { date: '2023-01-10', event: 'Conta criada' },
  ],
  documents: [
      { id: 'doc_1', name: 'Contrato de Prestação de Serviços v1.2.pdf', type: 'Contrato', date: '2023-01-15' },
      { id: 'doc_2', name: 'Termos de Uso (Aceite).pdf', type: 'Termos', date: '2023-01-15' },
      { id: 'doc_3', name: 'Aditivo - Addon IA Plus.pdf', type: 'Aditivo', date: '2023-07-15' },
  ],
  supportTickets: [
      { id: 'tkt_1', subject: 'Dúvida sobre emissão de NFe', status: 'Fechado', date: '2024-05-20' },
      { id: 'tkt_2', subject: 'Problema ao adicionar novo usuário', status: 'Em Andamento', date: '2024-07-28' },
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

const allAddons = ['IA Plus', 'WhatsApp Business', 'BI Jurídico', 'Cartórios+'];

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
const formatDate = (date: string) => new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

const ClienteDetalhe = () => {
  const { clienteId } = useParams<{ clienteId: string }>();
  const [client, setClient] = useState(initialClientData);
  const [isSuspendAlertOpen, setIsSuspendAlertOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(client.plan);
  const [selectedAddons, setSelectedAddons] = useState(client.subscription.addons);

  const handleChargeNow = () => {
    showSuccess(`Cobrança manual enviada para ${client.name}.`);
  };

  const handleSuspendConfirm = () => {
    setClient(prev => ({ ...prev, status: 'suspended' }));
    showSuccess('Conta do cliente suspensa com sucesso.');
    setIsSuspendAlertOpen(false);
  };

  const handleReactivate = () => {
    setClient(prev => ({ ...prev, status: 'active' }));
    showSuccess('Conta do cliente reativada com sucesso.');
  };

  const handlePlanSave = () => {
    setClient(prev => ({
      ...prev,
      plan: selectedPlan,
      subscription: {
        ...prev.subscription,
        planName: selectedPlan,
        addons: selectedAddons,
      }
    }));
    showSuccess('Plano do cliente atualizado com sucesso.');
    setIsPlanModalOpen(false);
  };

  const getStatusBadge = () => {
    switch (client.status) {
      case 'active': return <Badge>Ativa</Badge>;
      case 'suspended': return <Badge variant="destructive">Suspensa</Badge>;
      default: return <Badge variant="secondary">{client.status}</Badge>;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Header Fixo */}
      <header className="mb-6">
        <Link to="/painel-master/vendas-assinaturas" className="flex items-center text-sm text-blue-400 hover:underline mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para Gestão de Assinaturas
        </Link>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">{client.name}</h1>
            <p className="text-gray-300">{client.document} • {client.email}</p>
            <div className="flex items-center gap-4 mt-2">
              {getStatusBadge()}
              <span className="text-sm text-gray-300">Plano: <strong>{client.plan}</strong></span>
              <span className="text-sm text-gray-300">Próximo Faturamento: <strong>{formatDate(client.nextBilling)}</strong></span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="bg-gray-800 border-gray-700" onClick={() => setIsPlanModalOpen(true)}>Gerenciar Plano</Button>
            <Button onClick={handleChargeNow}>Cobrar Agora</Button>
            {client.status === 'active' ? (
              <Button variant="destructive" onClick={() => setIsSuspendAlertOpen(true)}>Suspender</Button>
            ) : (
              <Button variant="secondary" onClick={handleReactivate}>Reativar</Button>
            )}
          </div>
        </div>
      </header>

      {/* KPIs Rápidos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="p-4"><CardTitle className="text-sm font-medium text-gray-300">MRR</CardTitle><p className="text-2xl font-bold">{formatCurrency(client.kpis.mrr)}</p></CardHeader></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="p-4"><CardTitle className="text-sm font-medium text-gray-300">Total Pago</CardTitle><p className="text-2xl font-bold">{formatCurrency(client.kpis.totalPaid)}</p></CardHeader></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="p-4"><CardTitle className="text-sm font-medium text-gray-300">Faturas em Atraso</CardTitle><p className="text-2xl font-bold">{client.kpis.overdue}</p></CardHeader></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="p-4"><CardTitle className="text-sm font-medium text-gray-300">Usuários Ativos</CardTitle><p className="text-2xl font-bold">{client.kpis.activeUsers} / {client.kpis.totalSeats}</p></CardHeader></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="p-4"><CardTitle className="text-sm font-medium text-gray-300">Último Login</CardTitle><p className="text-2xl font-bold">{formatDate(client.kpis.lastLogin)}</p></CardHeader></Card>
        <Card className="bg-gray-800 border-gray-700 text-white"><CardHeader className="p-4"><CardTitle className="text-sm font-medium text-gray-300">Status de Risco</CardTitle><p className="text-2xl font-bold text-green-400">{client.kpis.riskStatus}</p></CardHeader></Card>
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
              <CardHeader><CardTitle className="text-white">Receita Gerada (Últimos 6 meses)</CardTitle></CardHeader>
              <CardContent><ResponsiveContainer width="100%" height={300}><RechartsLineChart data={client.revenueData}><XAxis dataKey="name" stroke="#a1a1aa" /><YAxis stroke="#a1a1aa" /><Tooltip contentStyle={{ backgroundColor: '#333' }} /><Legend /><RechartsLine type="monotone" dataKey="receita" stroke="#8884d8" /></RechartsLineChart></ResponsiveContainer></CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader><CardTitle className="text-white">Uso por Módulo</CardTitle></CardHeader>
              <CardContent><ResponsiveContainer width="100%" height={300}><RechartsBarChart data={client.moduleUsageData} layout="vertical"><XAxis type="number" hide /><YAxis type="category" dataKey="name" stroke="#a1a1aa" width={80} /><Tooltip contentStyle={{ backgroundColor: '#333' }} /><Bar dataKey="uso" fill="#82ca9d" radius={[0, 4, 4, 0]} /></RechartsBarChart></ResponsiveContainer></CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="plano" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Detalhes do Plano e Assinatura</CardTitle></CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-white">Plano Atual</h3>
                <p><strong>Nome:</strong> {client.subscription.planName}</p>
                <p><strong>Ciclo:</strong> {client.subscription.cycle}</p>
                <p><strong>Valor:</strong> {formatCurrency(client.subscription.value)}/{client.subscription.cycle === 'Anual' ? 'ano' : 'mês'}</p>
                <p><strong>Ativado em:</strong> {formatDate(client.subscription.activatedAt)}</p>
                <p><strong>Renova em:</strong> {formatDate(client.subscription.renewsAt)}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-white">Limites de Uso</h3>
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
            <CardHeader><CardTitle className="text-white">Faturas e Cobranças</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead className="text-gray-200">Data</TableHead><TableHead className="text-gray-200">Valor</TableHead><TableHead className="text-gray-200">Status</TableHead><TableHead className="text-gray-200">Método</TableHead><TableHead className="text-gray-200">Nota Fiscal</TableHead></TableRow></TableHeader>
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
            <CardHeader><CardTitle className="text-white">Usuários e Acessos</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead className="text-gray-200">Nome</TableHead><TableHead className="text-gray-200">E-mail</TableHead><TableHead className="text-gray-200">Papel</TableHead><TableHead className="text-gray-200">Status</TableHead><TableHead className="text-gray-200">Último Login</TableHead></TableRow></TableHeader>
                <TableBody>
                  {client.users.map(user => (
                    <TableRow key={user.id} className="border-gray-700"><TableCell>{user.name}</TableCell><TableCell>{user.email}</TableCell><TableCell>{user.role}</TableCell><TableCell><Badge variant={user.status === 'Ativo' ? 'default' : 'secondary'}>{user.status}</Badge></TableCell><TableCell>{user.lastLogin}</TableCell></TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="atividades" className="mt-6">
            <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader><CardTitle className="text-white">Atividades Recentes</CardTitle></CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {client.events.map((event, index) => (
                            <li key={index} className="flex items-start">
                                <div className="flex-shrink-0 w-10 text-right mr-4">
                                    <p className="text-sm font-medium text-white">{formatDate(event.date).split('/')[0]}/{formatDate(event.date).split('/')[1]}</p>
                                    <p className="text-xs text-gray-300">{formatDate(event.date).split('/')[2]}</p>
                                </div>
                                <div className="relative w-full">
                                    <div className="absolute top-1 left-[-22px] h-full w-px bg-gray-700"></div>
                                    <div className="absolute top-1 left-[-24px] h-2 w-2 rounded-full bg-primary"></div>
                                    <p className="text-sm">{event.event}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="documentos" className="mt-6">
            <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader><CardTitle className="text-white">Contratos & Documentos</CardTitle></CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead className="text-gray-200">Nome do Documento</TableHead><TableHead className="text-gray-200">Tipo</TableHead><TableHead className="text-gray-200">Data</TableHead><TableHead className="text-right text-gray-200">Ações</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {client.documents.map(doc => (
                                <TableRow key={doc.id} className="border-gray-700">
                                    <TableCell className="font-medium">{doc.name}</TableCell>
                                    <TableCell>{doc.type}</TableCell>
                                    <TableCell>{formatDate(doc.date)}</TableCell>
                                    <TableCell className="text-right"><Button variant="outline" size="sm" className="bg-gray-700 border-gray-600"><Download className="h-3 w-3 mr-2" /> Baixar</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="suporte" className="mt-6">
            <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader><CardTitle className="text-white">Tickets de Suporte</CardTitle></CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead className="text-gray-200">Assunto</TableHead><TableHead className="text-gray-200">Status</TableHead><TableHead className="text-gray-200">Data</TableHead><TableHead className="text-right text-gray-200">Ações</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {client.supportTickets.map(ticket => (
                                <TableRow key={ticket.id} className="border-gray-700">
                                    <TableCell className="font-medium">{ticket.subject}</TableCell>
                                    <TableCell><Badge variant={ticket.status === 'Fechado' ? 'secondary' : 'default'}>{ticket.status}</Badge></TableCell>
                                    <TableCell>{formatDate(ticket.date)}</TableCell>
                                    <TableCell className="text-right"><Button variant="outline" size="sm" className="bg-gray-700 border-gray-600">Ver Ticket</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="historico" className="mt-6">
            <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader><CardTitle className="text-white">Histórico / Auditoria</CardTitle></CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead className="text-gray-200">Data</TableHead><TableHead className="text-gray-200">Evento</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {client.events.map((event, index) => (
                                <TableRow key={index} className="border-gray-700">
                                    <TableCell className="font-mono text-xs">{formatDate(event.date)}</TableCell>
                                    <TableCell>{event.event}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

      </Tabs>

      {/* Diálogo de Suspensão */}
      <AlertDialog open={isSuspendAlertOpen} onOpenChange={setIsSuspendAlertOpen}>
        <AlertDialogContent className="bg-gray-900 text-white border-gray-700">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Suspensão</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              Tem certeza que deseja suspender a conta de {client.name}? Isso bloqueará o acesso de todos os usuários à plataforma.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild><Button variant="ghost">Cancelar</Button></AlertDialogCancel>
            <AlertDialogAction onClick={handleSuspendConfirm} asChild><Button variant="destructive">Suspender Conta</Button></AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Modal de Gerenciamento de Plano */}
      <Dialog open={isPlanModalOpen} onOpenChange={setIsPlanModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle>Gerenciar Plano de {client.name}</DialogTitle>
            <DialogDescription className="text-gray-300">Altere o plano principal e adicione ou remova funcionalidades extras.</DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <Label>Plano Principal</Label>
              <Select defaultValue={selectedPlan} onValueChange={setSelectedPlan}>
                <SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue /></SelectTrigger>
                <SelectContent className="bg-gray-800 text-white border-gray-700">
                  <SelectItem value="Pro">Pro</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Add-ons</Label>
              <div className="space-y-2 p-3 bg-gray-800/50 rounded-md">
                {allAddons.map(addon => (
                  <div key={addon} className="flex items-center space-x-2">
                    <Checkbox
                      id={addon}
                      checked={selectedAddons.includes(addon)}
                      onCheckedChange={(checked) => {
                        setSelectedAddons(prev => checked ? [...prev, addon] : prev.filter(a => a !== addon));
                      }}
                    />
                    <label htmlFor={addon} className="text-sm font-medium leading-none">{addon}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setIsPlanModalOpen(false)}>Cancelar</Button>
            <Button onClick={handlePlanSave}>Salvar Alterações</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClienteDetalhe;