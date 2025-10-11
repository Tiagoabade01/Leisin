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
  { title: "Despesas do mês", value: "R$ 182.400,00", status: "orange" },
  { title: "Pagamentos pendentes", value: "R$ 46.750,00", status: "red" },
  { title: "Pagamentos efetuados", value: "R$ 135.650,00", status: "green" },
  { title: "Contas recorrentes", value: "32", status: "green" },
  { title: "Atrasos (>5 dias)", value: "4", status: "yellow" },
];

const initialLancamentos = [
  { id: 1, vencimento: "12/10/25", descricao: "Certidão ARISP", fornecedor: "ARISP", valor: 230.00, status: "Pago", categoria: "Jurídico" },
  { id: 2, vencimento: "14/10/25", descricao: "Software Leisin API", fornecedor: "Base44", valor: 2900.00, status: "Pendente", categoria: "Tecnologia" },
  { id: 3, vencimento: "16/10/25", descricao: "Honorário parceiro", fornecedor: "Adv. Santos", valor: 4500.00, status: "Atrasado", categoria: "Jurídico" },
  { id: 4, vencimento: "20/10/25", descricao: "Energia escritório", fornecedor: "Enel", valor: 780.00, status: "Pago", categoria: "Operacional" },
  { id: 5, vencimento: "28/10/25", descricao: "Servidor cloud", fornecedor: "AWS", valor: 3250.00, status: "Pendente", categoria: "Infraestrutura" },
];

const pieData = [ { name: 'Operacional', value: 28 }, { name: 'Jurídico', value: 45 }, { name: 'Tecnologia', value: 15 }, { name: 'Outros', value: 12 } ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const getStatusBadge = (status: string) => {
  if (status === "Pago") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Pago</Badge>;
  if (status === "Pendente") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Pendente</Badge>;
  if (status === "Atrasado") return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Atrasado</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const ContasPagarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    showSuccess("Despesa lançada com sucesso!");
  };

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Contas a Pagar</h1>
          <p className="text-gray-400 max-w-3xl">
            Controle total das obrigações e despesas do escritório e das operações imobiliárias — com automação, previsibilidade e integração contábil.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Despesa</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Importar Lote</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
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

          {/* Lançamentos */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Lançamentos e Parcelas</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Vencimento</TableHead><TableHead>Descrição</TableHead><TableHead>Fornecedor</TableHead><TableHead>Valor</TableHead><TableHead>Status</TableHead><TableHead>Categoria</TableHead></TableRow></TableHeader>
                <TableBody>
                  {initialLancamentos.map(item => (
                    <TableRow key={item.id} className="border-gray-700">
                      <TableCell>{item.vencimento}</TableCell>
                      <TableCell>{item.descricao}</TableCell>
                      <TableCell>{item.fornecedor}</TableCell>
                      <TableCell>R$ {item.valor.toFixed(2)}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
                      <TableCell>{item.categoria}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Gráficos */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Relatórios e Indicadores</CardTitle></CardHeader>
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
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">Finance Bot (IA)</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Identificada duplicidade no lançamento de honorário do Adv. Santos — sugere verificação.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Sugerido pagamento antecipado do fornecedor Enel — desconto de 8% até 15/10.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Conta recorrente AWS identificada — possível economia ao migrar plano anual.”</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Nova Despesa</DialogTitle></DialogHeader>
          <form onSubmit={handleSave}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="desc">Descrição</Label><Input id="desc" name="desc" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="fornecedor">Fornecedor</Label><Input id="fornecedor" name="fornecedor" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="valor">Valor (R$)</Label><Input id="valor" name="valor" type="number" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="vencimento">Vencimento</Label><Input id="vencimento" name="vencimento" type="date" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="categoria">Categoria</Label>
                <Select name="categoria"><SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue placeholder="Selecione" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="Jurídico">Jurídico</SelectItem><SelectItem value="Operacional">Operacional</SelectItem><SelectItem value="Tecnologia">Tecnologia</SelectItem></SelectContent></Select>
              </div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Lançar Despesa</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const ContasPagar = () => (
  <Layout>
    <ContasPagarPage />
  </Layout>
);

export default ContasPagar;