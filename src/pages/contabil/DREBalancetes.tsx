import React from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, BarChart2, BrainCircuit, GitCompare } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { showSuccess } from '@/utils/toast';

const kpis = [
  { title: "Receita Bruta", value: "R$ 2.748.000", change: "+14%", status: "green" },
  { title: "Custo Operacional", value: "R$ 1.182.000", change: "+6%", status: "orange" },
  { title: "Lucro Bruto", value: "R$ 1.566.000", change: "+22%", status: "green" },
  { title: "Despesas Adm.", value: "R$ 584.000", change: "+2%", status: "green" },
  { title: "Lucro Líquido", value: "R$ 982.000", change: "+17%", status: "green" },
];

const dreData = [
  { conta: "Receita Bruta", valor: 2748000, percent: 100 },
  { conta: "(-) Deduções e Impostos", valor: -182000, percent: -6.6 },
  { conta: "(=) Receita Líquida", valor: 2566000, percent: 93.4, isBold: true },
  { conta: "(-) Custo dos Serviços", valor: -1182000, percent: -46.0 },
  { conta: "(=) Lucro Bruto", valor: 1384000, percent: 54.0, isBold: true },
  { conta: "(-) Despesas Operacionais", valor: -584000, percent: -23.0 },
  { conta: "(-) Despesas Financeiras", valor: -162000, percent: -6.3 },
  { conta: "(+) Receitas Financeiras", valor: 43000, percent: 1.7 },
  { conta: "(=) Resultado Antes dos Tributos (EBIT)", valor: 681000, percent: 26.6, isBold: true },
  { conta: "(-) IRPJ e CSLL", valor: -102000, percent: -4.0 },
  { conta: "(=) Lucro Líquido do Exercício", valor: 579000, percent: 22.6, isBold: true },
];

const balanceteData = [
  { conta: "1.1.1 – Caixa e Bancos", debito: 842000, credito: 0, saldo: 842000, status: "🟢" },
  { conta: "1.2.1 – Clientes", debito: 498000, credito: 0, saldo: 498000, status: "🟢" },
  { conta: "2.1.1 – Fornecedores", debito: 0, credito: 370000, saldo: -370000, status: "🟢" },
  { conta: "3.1.1 – Receita Serviços", debito: 0, credito: 2748000, saldo: -2748000, status: "🟢" },
  { conta: "4.1.1 – Despesas Gerais", debito: 1766000, credito: 0, saldo: 1766000, status: "🟠" },
  { conta: "5.1.1 – Lucros Acumulados", debito: 0, credito: 579000, saldo: -579000, status: "🟢" },
];

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const DREBalancetesPage = () => {
  const totalDebito = balanceteData.reduce((sum, item) => sum + item.debito, 0);
  const totalCredito = balanceteData.reduce((sum, item) => sum + item.credito, 0);

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">DRE e Balancetes</h1>
          <p className="text-gray-400 max-w-3xl">
            Demonstrações contábeis e financeiras automáticas, integradas e auditáveis — geradas em tempo real pela IA Leisin Accounting.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => showSuccess("Gerando DRE...")}>Gerar DRE</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Gerando Balancete...")}>Gerar Balancete</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><GitCompare className="h-4 w-4 mr-2" /> Comparar Períodos</Button>
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

          {/* DRE */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">DRE Automática (Gerada por IA)</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Conta</TableHead><TableHead>Valor (R$)</TableHead><TableHead>% Receita</TableHead></TableRow></TableHeader>
                <TableBody>
                  {dreData.map(item => (
                    <TableRow key={item.conta} className={`border-gray-700 ${item.isBold ? 'font-bold bg-gray-800/50' : ''}`}>
                      <TableCell>{item.conta}</TableCell>
                      <TableCell className={item.valor < 0 ? 'text-red-400' : 'text-tech-green'}>{formatCurrency(item.valor)}</TableCell>
                      <TableCell>{item.percent.toFixed(1)}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Balancete */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Balancete de Verificação</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Conta</TableHead><TableHead>Débito (R$)</TableHead><TableHead>Crédito (R$)</TableHead><TableHead>Saldo (R$)</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody>
                  {balanceteData.map(item => (
                    <TableRow key={item.conta} className="border-gray-700">
                      <TableCell>{item.conta}</TableCell>
                      <TableCell>{formatCurrency(item.debito)}</TableCell>
                      <TableCell>{formatCurrency(item.credito)}</TableCell>
                      <TableCell className={item.saldo < 0 ? 'text-red-400' : 'text-tech-green'}>{formatCurrency(item.saldo)}</TableCell>
                      <TableCell>{item.status}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="border-gray-700 font-bold bg-gray-800/50">
                    <TableCell>Totais</TableCell>
                    <TableCell>{formatCurrency(totalDebito)}</TableCell>
                    <TableCell>{formatCurrency(totalCredito)}</TableCell>
                    <TableCell colSpan={2} className="text-tech-green">✅ Balancete conciliado</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Painel Lateral IA */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">IA Accounting</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Margem líquida subiu 3,8% no trimestre — principal fator: redução de custos fixos e renegociação de contratos SaaS.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“O custo operacional do centro ‘Financeiro’ inclui despesas administrativas duplicadas. Reclassificar pode aumentar o lucro líquido em 2,4%.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Projeção indica lucro líquido anual de R$ 1,9M (+12%) caso despesas administrativas permaneçam sob 25% da receita.”</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const DREBalancetes = () => (
  <Layout>
    <DREBalancetesPage />
  </Layout>
);

export default DREBalancetes;