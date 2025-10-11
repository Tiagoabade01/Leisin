import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Download, BarChart2, BrainCircuit } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { showSuccess } from '@/utils/toast';

const kpis = [
  { title: "Receitas do mês", value: "R$ 247.300,00", status: "green" },
  { title: "Faturas pendentes", value: "R$ 39.800,00", status: "orange" },
  { title: "Inadimplência", value: "2,8%", status: "green" },
  { title: "Clientes ativos", value: "132", status: "green" },
  { title: "Pagamentos recorrentes", value: "71", status: "blue" },
];

const initialFaturas = [
  { id: 1, data: "11/10/25", cliente: "Terlla Incorporadora", descricao: "Plano Enterprise", valor: 7900.00, status: "Pago", metodo: "PIX" },
  { id: 2, data: "13/10/25", cliente: "Base44", descricao: "Licença API", valor: 2900.00, status: "Pendente", metodo: "Boleto" },
  { id: 3, data: "14/10/25", cliente: "Mettri Arquitetura", descricao: "Serviço Jurídico", valor: 4500.00, status: "Vencido", metodo: "TED" },
  { id: 4, data: "15/10/25", cliente: "AMV Negócios", descricao: "Consultoria Imobiliária", valor: 8000.00, status: "Pago", metodo: "Cartão" },
  { id: 5, data: "18/10/25", cliente: "Nivem Construtora", descricao: "Honorário Mensal", valor: 12500.00, status: "Pago", metodo: "PIX" },
];

const pieData = [ { name: 'Honorários', value: 45 }, { name: 'SaaS', value: 35 }, { name: 'Serviços', value: 20 } ];
const COLORS = ['#00B8D9', '#2EF3C1', '#CBB26A'];

const getStatusBadge = (status: string) => {
  if (status === "Pago") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Pago</Badge>;
  if (status === "Pendente") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Pendente</Badge>;
  if (status === "Vencido") return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Vencido</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const ContasReceberPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    showSuccess("Fatura lançada com sucesso!");
  };

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Contas a Receber</h1>
          <p className="text-gray-400 max-w-3xl">
            Gestão automatizada das receitas, contratos e honorários — com controle total de pagamentos, inadimplência e previsões financeiras inteligentes.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Fatura</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700">Gerar Cobrança</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Importar Contratos</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Exportar Relatório</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {kpis.map(kpi => (
              <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">{kpi.title}</CardTitle></CardHeader>
                <CardContent>
                  <p className={`text-2xl font-bold text-${kpi.status}-400`}>{kpi.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Faturas */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Faturas e Pagamentos</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data</TableHead><TableHead>Cliente</TableHead><TableHead>Descrição</TableHead><TableHead>Valor</TableHead><TableHead>Status</TableHead><TableHead>Método</TableHead></TableRow></TableHeader>
                <TableBody>
                  {initialFaturas.map(item => (
                    <TableRow key={item.id} className="border-gray-700">
                      <TableCell>{item.data}</TableCell>
                      <TableCell>{item.cliente}</TableCell>
                      <TableCell>{item.descricao}</TableCell>
                      <TableCell>R$ {item.valor.toFixed(2)}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
                      <TableCell>{item.metodo}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Gráficos */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Relatórios e Previsões</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Painel Lateral IA */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">Finance Intelligence (IA)</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Fluxo de caixa projetado para +R$ 312.000 até 31/10/25.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Alta probabilidade de atraso em 2 clientes com histórico recente (Mettri e Base44).”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Detectada diferença entre valor contratado e faturado em 2 contratos (Mettri e Base44) — sugere ajuste automático de fatura.”</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Nova Fatura</DialogTitle></DialogHeader>
          <form onSubmit={handleSave}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="cliente">Cliente</Label><Input id="cliente" name="cliente" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="descricao">Descrição</Label><Input id="descricao" name="descricao" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="valor">Valor (R$)</Label><Input id="valor" name="valor" type="number" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="vencimento">Vencimento</Label><Input id="vencimento" name="vencimento" type="date" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="metodo">Método</Label>
                <Select name="metodo"><SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue placeholder="Selecione" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="Boleto">Boleto</SelectItem><SelectItem value="PIX">PIX</SelectItem><SelectItem value="Cartão">Cartão</SelectItem><SelectItem value="TED">TED</SelectItem></SelectContent></Select>
              </div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Lançar Fatura</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const ContasReceber = () => (
  <Layout>
    <ContasReceberPage />
  </Layout>
);

export default ContasReceber;