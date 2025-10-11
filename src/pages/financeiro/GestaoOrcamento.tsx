import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Download, BarChart2, BrainCircuit, Zap } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { showSuccess } from '@/utils/toast';

const kpis = [
  { title: "Orçamento Anual", value: "R$ 2.450.000", status: "green" },
  { title: "Gasto Atual", value: "R$ 1.972.000", status: "yellow" },
  { title: "Execução (%)", value: "80,5%", status: "orange" },
  { title: "Desvio Total", value: "-R$ 78.000", status: "yellow" },
  { title: "Previsão IA (Encerramento)", value: "R$ 2.630.000", status: "red" },
];

const comparativoData = [
  { categoria: "Jurídico", previsto: 420000, realizado: 462000 },
  { categoria: "Tecnologia", previsto: 390000, realizado: 368000 },
  { categoria: "Operacional", previsto: 220000, realizado: 198000 },
  { categoria: "Imobiliário", previsto: 810000, realizado: 824000 },
  { categoria: "Marketing", previsto: 110000, realizado: 120000 },
];

const centrosDeCustoData = [
  { unidade: "Filial SP", responsavel: "Adriana Campos", limite: 700000, gasto: 646000 },
  { unidade: "Filial RJ", responsavel: "Fábio Duarte", limite: 420000, gasto: 438000 },
  { unidade: "Projeto Thor Industrial", responsavel: "Rafael Lima", limite: 310000, gasto: 300000 },
  { unidade: "Jurídico Operacional", responsavel: "Juliana Alves", limite: 620000, gasto: 588000 },
];

const getStatusColor = (diff: number) => {
  if (diff > 0) return "text-red-400";
  if (diff < 0) return "text-tech-green";
  return "text-gray-400";
};

const getStatusSymbol = (gasto: number, limite: number) => {
    const percent = (gasto / limite) * 100;
    if (percent > 100) return "🔴";
    if (percent > 90) return "🟠";
    return "🟢";
};

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const GestaoOrcamentoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    showSuccess("Orçamento criado com sucesso!");
  };

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Gestão de Orçamento</h1>
          <p className="text-gray-400 max-w-3xl">
            Planeje, compare e otimize o desempenho financeiro com precisão — orçamentos inteligentes e integrados com IA preditiva.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Novo Orçamento</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Importar Histórico</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Zap className="h-4 w-4 mr-2" /> Comparar Cenários</Button>
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

          {/* Comparativo */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Comparativo Real x Previsto</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Categoria</TableHead><TableHead>Previsto</TableHead><TableHead>Realizado</TableHead><TableHead>Diferença</TableHead></TableRow></TableHeader>
                <TableBody>
                  {comparativoData.map(item => {
                    const diff = item.realizado - item.previsto;
                    return (
                      <TableRow key={item.categoria} className="border-gray-700">
                        <TableCell>{item.categoria}</TableCell>
                        <TableCell>{formatCurrency(item.previsto)}</TableCell>
                        <TableCell>{formatCurrency(item.realizado)}</TableCell>
                        <TableCell className={getStatusColor(diff)}>{formatCurrency(diff)}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Centros de Custo */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Centros de Custo e Filiais</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Unidade</TableHead><TableHead>Responsável</TableHead><TableHead>Limite</TableHead><TableHead>Gasto Atual</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody>
                  {centrosDeCustoData.map(item => (
                    <TableRow key={item.unidade} className="border-gray-700">
                      <TableCell>{item.unidade}</TableCell>
                      <TableCell>{item.responsavel}</TableCell>
                      <TableCell>{formatCurrency(item.limite)}</TableCell>
                      <TableCell>{formatCurrency(item.gasto)}</TableCell>
                      <TableCell>{getStatusSymbol(item.gasto, item.limite)}</TableCell>
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
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">Budget Intelligence (IA)</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“O módulo jurídico e o SaaS Base44 apresentaram aumento de 14% nas despesas mensais — previsto estouro de orçamento em 22 dias.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Filial RJ com gasto 4,3% acima da meta — sugerido congelamento de novos contratos até o próximo fechamento.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Com base no histórico, a margem de economia potencial no próximo trimestre é de 6,7% se forem reduzidas despesas fixas com SaaS e serviços externos.”</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Novo Orçamento</DialogTitle></DialogHeader>
          <form onSubmit={handleSave}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="nome">Nome do Orçamento</Label><Input id="nome" name="nome" placeholder="Ex: Orçamento 2025 – Jurídico" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="periodo">Período</Label>
                <Select name="periodo"><SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue placeholder="Selecione" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="mensal">Mensal</SelectItem><SelectItem value="anual">Anual</SelectItem><SelectItem value="projeto">Por Projeto</SelectItem></SelectContent></Select>
              </div>
              <div className="space-y-2"><Label htmlFor="centro_custo">Centro de Custo</Label>
                <Select name="centro_custo"><SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue placeholder="Selecione" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="juridico">Jurídico</SelectItem><SelectItem value="ti">TI</SelectItem><SelectItem value="comercial">Comercial</SelectItem><SelectItem value="filial_sp">Filial SP</SelectItem></SelectContent></Select>
              </div>
              <div className="space-y-2"><Label htmlFor="meta_despesa">Meta de Despesa (R$)</Label><Input id="meta_despesa" name="meta_despesa" type="number" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="meta_receita">Meta de Receita (R$)</Label><Input id="meta_receita" name="meta_receita" type="number" className="bg-gray-800 border-gray-600" /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Criar Orçamento</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const GestaoOrcamento = () => (
  <Layout>
    <GestaoOrcamentoPage />
  </Layout>
);

export default GestaoOrcamento;