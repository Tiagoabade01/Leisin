import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Download, BarChart2, BrainCircuit, FileText, GitBranch } from "lucide-react";
import { showSuccess } from '@/utils/toast';

const kpis = [
  { title: "Total de Centros Ativos", value: "28", status: "green" },
  { title: "Despesas Alocadas (Mês)", value: "R$ 472.000", status: "green" },
  { title: "Rateios Pendentes", value: "14", status: "orange" },
  { title: "Erros de Classificação", value: "3", status: "red" },
];

const consolidationData = [
  { centro: "Jurídico", despesa: 98000, receita: 0, saldo: -98000, percent: 14 },
  { centro: "Financeiro", despesa: 112500, receita: 0, saldo: -112500, percent: 16 },
  { centro: "Operações", despesa: 181300, receita: 42000, saldo: -139300, percent: 22 },
  { centro: "Comercial", despesa: 80900, receita: 185000, saldo: 104100, percent: 48 },
];

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const getStatusColor = (value: number) => {
  if (value > 0) return "text-tech-green";
  if (value < 0) return "text-red-400";
  return "text-gray-400";
};

const CentroCustosPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    showSuccess("Centro de custo criado com sucesso!");
  };

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Centro de Custos</h1>
          <p className="text-gray-400 max-w-3xl">
            Controle contábil e analítico de cada unidade de negócio — com integração total a lançamentos, plano de contas e apuração fiscal.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Novo Centro</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Importar Rateios</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Gerar Balancete</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><FileText className="h-4 w-4 mr-2" /> Exportar</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map(kpi => (
              <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">{kpi.title}</CardTitle></CardHeader>
                <CardContent>
                  <p className={`text-3xl font-bold text-${kpi.status}-400`}>{kpi.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Hierarquia e Consolidação */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <Card className="bg-petroleum-blue border-gray-700 text-white">
              <CardHeader><CardTitle className="text-white">Estrutura Hierárquica</CardTitle></CardHeader>
              <CardContent className="font-mono text-sm space-y-2">
                <div className="flex items-center gap-2"><GitBranch className="h-4 w-4" /> Leisin Holding</div>
                <div className="pl-6 border-l border-gray-600 ml-2 space-y-2">
                  <div><p>├─ Filial São Paulo</p><div className="pl-6 border-l border-gray-600 ml-2 space-y-1"><p>├─ Jurídico → CC-2101</p><p>├─ Financeiro → CC-2102</p><p>└─ Operações → CC-2103</p></div></div>
                  <div><p>└─ Filial Recife</p><div className="pl-6 ml-2 space-y-1"><p>├─ Projetos → CC-2201</p><p>└─ Comercial → CC-2202</p></div></div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-petroleum-blue border-gray-700 text-white">
              <CardHeader><CardTitle className="text-white">Consolidação Contábil</CardTitle></CardHeader>
              <CardContent>
                <Table>
                  <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Centro</TableHead><TableHead>Saldo</TableHead><TableHead>% Total</TableHead></TableRow></TableHeader>
                  <TableBody>
                    {consolidationData.map(item => (
                      <TableRow key={item.centro} className="border-gray-700">
                        <TableCell>{item.centro}</TableCell>
                        <TableCell className={getStatusColor(item.saldo)}>{formatCurrency(item.saldo)}</TableCell>
                        <TableCell>{item.percent}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Painel Lateral IA */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">IA Contábil</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Identificada inconsistência: lançamento de honorário classificado no centro ‘Comercial’ — provável conta contábil incorreta.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Centro ‘Financeiro’ apresenta variação atípica de 32% em despesas administrativas; verifique duplicidade de lançamentos.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Recomendação: consolidar os centros de projeto em um agrupamento único para simplificação fiscal.”</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Novo Centro de Custo</DialogTitle></DialogHeader>
          <form onSubmit={handleSave}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="nome">Nome</Label><Input id="nome" name="nome" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="codigo">Código</Label><Input id="codigo" name="codigo" className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="responsavel">Responsável</Label><Input id="responsavel" name="responsavel" className="bg-gray-800 border-gray-600" /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Criar</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const CentroCustos = () => (
  <Layout>
    <CentroCustosPage />
  </Layout>
);

export default CentroCustos;