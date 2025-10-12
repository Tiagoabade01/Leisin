import React, { useState, FormEvent } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, BarChart2, Link, PlusCircle } from "lucide-react";
import { showSuccess, showLoading, dismissToast } from '@/utils/toast';

import VisaoGeralFinanceiro from "@/components/master/financeiro/VisaoGeralFinanceiro";
import FaturasPagamentos from "@/components/master/financeiro/FaturasPagamentos";
import ReceitasAssinaturas from "@/components/master/financeiro/ReceitasAssinaturas";
import InadimplenciaRecuperacao from "@/components/master/financeiro/InadimplenciaRecuperacao";
import NotasFiscais from "@/components/master/financeiro/NotasFiscais";
import RelatoriosFinanceiros from "@/components/master/financeiro/RelatoriosFinanceiros";
import IntegracoesContabeis from "@/components/master/financeiro/IntegracoesContabeis";
import InteligenciaFinanceira from "@/components/master/financeiro/InteligenciaFinanceira";

const initialInvoices = [
  { id: '#FT-2043', client: 'Nivem Construtora', value: 3290, method: 'Cartão', dueDate: '10/10/25', status: 'Pago' },
  { id: '#FT-2044', client: 'Terlla Incorporadora', value: 2490, method: 'Pix', dueDate: '12/10/25', status: 'Atrasada' },
  { id: '#FT-2045', client: 'Mettri Arquitetura', value: 1190, method: 'Cartão', dueDate: '15/10/25', status: 'Pendente' },
];

const FinanceiroCobrancas = () => {
  const [activeTab, setActiveTab] = useState('visao_geral');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invoices, setInvoices] = useState(initialInvoices);

  const handleCreateInvoice = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newInvoice = {
      id: `#FT-${Math.floor(Math.random() * 1000) + 2046}`,
      client: formData.get('client') as string,
      value: parseFloat(formData.get('value') as string),
      method: formData.get('method') as string,
      dueDate: new Date(formData.get('dueDate') as string).toLocaleDateString('pt-BR'),
      status: 'Pendente',
    };
    setInvoices(prev => [newInvoice, ...prev]);
    setIsModalOpen(false);
    showSuccess('Fatura criada com sucesso!');
  };

  const handleGenerateReport = () => {
    setActiveTab('relatorios');
    const toastId = showLoading('Gerando relatório...');
    setTimeout(() => {
      dismissToast(toastId);
      showSuccess('Relatório gerado e pronto para download!');
    }, 1500);
  };

  return (
    <div className="space-y-6 p-6 md:p-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Financeiro & Cobranças</h1>
          <p className="text-gray-300 max-w-3xl">O motor financeiro da T3 — controle total sobre assinaturas, faturas, pagamentos, inadimplências e projeções de receita.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => setIsModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Fatura</Button>
          <Button onClick={() => setActiveTab('notas_fiscais')} variant="outline" className="bg-gray-800 border-gray-700"><FileText className="h-4 w-4 mr-2" /> Emitir Nota</Button>
          <Button onClick={handleGenerateReport} variant="outline" className="bg-gray-800 border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
          <Button onClick={() => setActiveTab('integracoes')} variant="outline" className="bg-gray-800 border-gray-700"><Link className="h-4 w-4 mr-2" /> Integrações</Button>
        </div>
      </header>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-gray-800">
          <TabsTrigger value="visao_geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="faturas">Faturas & Pagamentos</TabsTrigger>
          <TabsTrigger value="receitas">Receitas & Assinaturas</TabsTrigger>
          <TabsTrigger value="inadimplencia">Inadimplência</TabsTrigger>
          <TabsTrigger value="notas_fiscais">Notas Fiscais</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          <TabsTrigger value="integracoes">Integrações</TabsTrigger>
          <TabsTrigger value="ia">Inteligência (IA)</TabsTrigger>
        </TabsList>

        <TabsContent value="visao_geral" className="mt-6"><VisaoGeralFinanceiro /></TabsContent>
        <TabsContent value="faturas" className="mt-6"><FaturasPagamentos invoices={invoices} setInvoices={setInvoices} /></TabsContent>
        <TabsContent value="receitas" className="mt-6"><ReceitasAssinaturas /></TabsContent>
        <TabsContent value="inadimplencia" className="mt-6"><InadimplenciaRecuperacao /></TabsContent>
        <TabsContent value="notas_fiscais" className="mt-6"><NotasFiscais /></TabsContent>
        <TabsContent value="relatorios" className="mt-6"><RelatoriosFinanceiros /></TabsContent>
        <TabsContent value="integracoes" className="mt-6"><IntegracoesContabeis /></TabsContent>
        <TabsContent value="ia" className="mt-6"><InteligenciaFinanceira /></TabsContent>
      </Tabs>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Criar Nova Fatura Manual</DialogTitle></DialogHeader>
          <form onSubmit={handleCreateInvoice}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="client">Cliente</Label>
                <Select name="client" required><SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue placeholder="Selecione o cliente" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="Nivem Construtora">Nivem Construtora</SelectItem><SelectItem value="Terlla Incorporadora">Terlla Incorporadora</SelectItem><SelectItem value="Mettri Arquitetura">Mettri Arquitetura</SelectItem></SelectContent></Select>
              </div>
              <div className="space-y-2"><Label htmlFor="value">Valor (R$)</Label><Input id="value" name="value" type="number" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="method">Método de Pagamento</Label>
                <Select name="method" required><SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue placeholder="Selecione o método" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="Cartão">Cartão</SelectItem><SelectItem value="Pix">Pix</SelectItem><SelectItem value="Boleto">Boleto</SelectItem></SelectContent></Select>
              </div>
              <div className="space-y-2"><Label htmlFor="dueDate">Data de Vencimento</Label><Input id="dueDate" name="dueDate" type="date" className="bg-gray-800 border-gray-600" required /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Criar Fatura</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FinanceiroCobrancas;