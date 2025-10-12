import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, BarChart2, BrainCircuit, GitCompare } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { showSuccess } from '@/utils/toast';

const kpis = [
  { title: "Receita Bruta (mês)", value: "R$ 276.800", status: "green" },
  { title: "Despesas Totais (mês)", value: "R$ 211.400", status: "yellow" },
  { title: "Lucro Líquido", value: "R$ 65.400", status: "green" },
  { title: "Margem Operacional", value: "23,6%", status: "green" },
  { title: "Inadimplência", value: "2,8%", status: "green" },
];

const revenueEvolutionData = [
  { name: 'Jul', Receita: 250000 }, { name: 'Ago', Receita: 260000 }, { name: 'Set', Receita: 265000 }, { name: 'Out', Receita: 276800 },
];

const expenseData = [
  { name: 'Jurídico', valor: 42000 }, { name: 'SaaS', valor: 35000 }, { name: 'Operacional', valor: 28000 }, { name: 'Marketing', valor: 15000 },
];

const dreData = [
  { conta: "Receita Operacional Bruta", valor: 276800, percent: 100 },
  { conta: "(-) Deduções e impostos", valor: -18200, percent: 6.6 },
  { conta: "(=) Receita Líquida", valor: 258600, percent: 93.4, isBold: true },
  { conta: "(-) Custo Operacional", valor: -132000, percent: 47 },
  { conta: "(=) Lucro Bruto", valor: 126600, percent: 46.4, isBold: true },
  { conta: "(-) Despesas Gerais e Adm.", valor: -61200, percent: 22.1 },
  { conta: "(=) Lucro Operacional", valor: 65400, percent: 24.3, isBold: true },
];

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const RelatoriosFinanceiros = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Relatórios Financeiros</h1>
          <p className="text-gray-400 max-w-3xl">
            O centro de inteligência financeira do Leisin — relatórios, métricas e análises geradas automaticamente para gestão e decisão estratégica.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><BarChart2 className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700">Comparar Períodos</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar PDF</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> Relatório IA</Button>
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

          {/* Gráficos de Desempenho */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Relatórios de Desempenho</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-sm">Evolução da Receita Mensal</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={revenueEvolutionData}>
                    <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
                    <YAxis stroke="#a1a1aa" fontSize={12} tickFormatter={(v) => `R$${v/1000}k`} />
                    <Tooltip contentStyle={{ backgroundColor: '#1C2A3A' }} />
                    <Line type="monotone" dataKey="Receita" stroke="#2EF3C1" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm">Despesas por Categoria</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={expenseData} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="name" stroke="#a1a1aa" fontSize={12} width={80} />
                    <Tooltip contentStyle={{ backgroundColor: '#1C2A3A' }} />
                    <Bar dataKey="valor" fill="#00B8D9" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* DRE */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Demonstração de Resultados (DRE)</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Conta</TableHead><TableHead>Valor (R$)</TableHead><TableHead>% Receita</TableHead></TableRow></TableHeader>
                <TableBody>
                  {dreData.map(item => (
                    <TableRow key={item.conta} className={`border-gray-700 ${item.isBold ? 'font-bold' : ''}`}>
                      <TableCell>{item.conta}</TableCell>
                      <TableCell className={item.valor < 0 ? 'text-red-400' : 'text-tech-green'}>{formatCurrency(item.valor)}</TableCell>
                      <TableCell>{item.percent.toFixed(1)}%</TableCell>
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
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">IA Analytics</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“A margem líquida consolidada subiu 5,4% em relação a setembro — reflexo da redução de despesas operacionais e renegociação de SaaS.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“O custo operacional do centro ‘Financeiro’ inclui despesas administrativas duplicadas. Reclassificar pode aumentar o lucro líquido em 2,4%.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Projeção indica lucro líquido anual de R$ 1,9M (+12%) caso despesas administrativas permaneçam sob 25% da receita.”</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RelatoriosFinanceiros;