import React, { useState, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Download, BarChart2, BrainCircuit, RefreshCw, Zap } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, Area, AreaChart } from 'recharts';
import { showSuccess } from '@/utils/toast';

const kpis = [
  { title: "Saldo Atual em Caixa", value: "R$ 184.200,00", status: "green" },
  { title: "Entradas do Mês", value: "R$ 276.800,00", status: "green" },
  { title: "Saídas do Mês", value: "R$ 211.400,00", status: "yellow" },
  { title: "Resultado Operacional", value: "+R$ 65.400,00", status: "green" },
  { title: "Liquidez Projetada (30d)", value: "R$ 198.500,00", status: "green" },
];

const initialMovimentacoes = [
  { data: "11/10/25", tipo: "Entrada", origem: "Contrato Terlla", descricao: "Plano Enterprise", valor: 7900.00, saldo: 184200.00 },
  { data: "10/10/25", tipo: "Saída", origem: "AWS", descricao: "Servidor Cloud", valor: -3250.00, saldo: 176300.00 },
  { data: "09/10/25", tipo: "Entrada", origem: "AMV Negócios", descricao: "Honorário mensal", valor: 8000.00, saldo: 179550.00 },
  { data: "08/10/25", tipo: "Saída", origem: "Enel", descricao: "Energia Escritório", valor: -780.00, saldo: 171550.00 },
  { data: "05/10/25", tipo: "Entrada", origem: "Nivem Construtora", descricao: "Serviço jurídico", valor: 12500.00, saldo: 174050.00 },
];

const projecoes = [
    { periodo: "15 dias", entradas: "R$ 95.000", saidas: "R$ 68.000", resultado: "+R$ 27.000", status: "🟢" },
    { periodo: "30 dias", entradas: "R$ 142.000", saidas: "R$ 121.000", resultado: "+R$ 21.000", status: "🟢" },
    { periodo: "60 dias", entradas: "R$ 232.000", saidas: "R$ 249.000", resultado: "-R$ 17.000", status: "🟠" },
    { periodo: "90 dias", entradas: "R$ 276.000", saidas: "R$ 290.000", resultado: "-R$ 14.000", status: "🔴" },
];

const chartData = [
    { name: 'Jul', Saldo: 150000 }, { name: 'Ago', Saldo: 165000 }, { name: 'Set', Saldo: 171000 }, { name: 'Out', Saldo: 184200 },
];

const FluxoCaixa = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    showSuccess("Movimentação lançada com sucesso!");
  };

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Fluxo de Caixa</h1>
          <p className="text-gray-400 max-w-3xl">
            Controle, previsibilidade e inteligência financeira — o fluxo vivo das entradas e saídas com visão analítica e preditiva.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Movimentação</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Zap className="h-4 w-4 mr-2" /> Simular Cenário</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><RefreshCw className="h-4 w-4 mr-2" /> Atualizar Dados</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar Relatório</Button>
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

          {/* Gráfico Principal */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Saldo Acumulado</CardTitle></CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={chartData}>
                        <defs><linearGradient id="colorSaldo" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#2EF3C1" stopOpacity={0.8}/><stop offset="95%" stopColor="#2EF3C1" stopOpacity={0}/></linearGradient></defs>
                        <XAxis dataKey="name" stroke="#a1a1aa" />
                        <YAxis stroke="#a1a1aa" tickFormatter={(value) => `R$${value/1000}k`} />
                        <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
                        <Area type="monotone" dataKey="Saldo" stroke="#2EF3C1" fillOpacity={1} fill="url(#colorSaldo)" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Histórico */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Histórico de Movimentações</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data</TableHead><TableHead>Tipo</TableHead><TableHead>Origem</TableHead><TableHead>Descrição</TableHead><TableHead>Valor</TableHead><TableHead>Saldo</TableHead></TableRow></TableHeader>
                <TableBody>
                  {initialMovimentacoes.map(item => (
                    <TableRow key={item.data + item.valor} className="border-gray-700">
                      <TableCell>{item.data}</TableCell>
                      <TableCell className={item.tipo === 'Entrada' ? 'text-tech-green' : 'text-red-400'}>{item.tipo}</TableCell>
                      <TableCell>{item.origem}</TableCell>
                      <TableCell>{item.descricao}</TableCell>
                      <TableCell className={item.valor > 0 ? 'text-tech-green' : 'text-red-400'}>R$ {item.valor.toFixed(2)}</TableCell>
                      <TableCell>R$ {item.saldo.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Painel Lateral IA */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">Finance Advisor (IA)</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2 text-white">Projeções Automáticas</h4>
                <Table>
                    <TableHeader><TableRow className="border-gray-700"><TableHead>Período</TableHead><TableHead>Resultado</TableHead></TableRow></TableHeader>
                    <TableBody>
                        {projecoes.map(p => <TableRow key={p.periodo} className="border-gray-700"><TableCell>{p.periodo}</TableCell><TableCell>{p.status} {p.resultado}</TableCell></TableRow>)}
                    </TableBody>
                </Table>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <h4 className="font-semibold text-sm mb-2 text-white">Recomendações</h4>
                <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Sugerido pagamento antecipado de 2 fornecedores para desconto de 5%.”</p>
                <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Revisão do plano AWS sugerida — custo excedente mensal de 12% detectado.”</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Nova Movimentação</DialogTitle></DialogHeader>
          <form onSubmit={handleSave}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="tipo">Tipo</Label>
                <Select name="tipo"><SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue placeholder="Selecione" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="Entrada">Entrada</SelectItem><SelectItem value="Saída">Saída</SelectItem></SelectContent></Select>
              </div>
              <div className="space-y-2"><Label htmlFor="desc">Descrição</Label><Input id="desc" name="desc" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="valor">Valor (R$)</Label><Input id="valor" name="valor" type="number" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="data">Data</Label><Input id="data" name="data" type="date" className="bg-gray-800 border-gray-600" required /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Lançar</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FluxoCaixa;