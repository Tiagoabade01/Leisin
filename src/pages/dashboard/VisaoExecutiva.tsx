import React, { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FileText, BarChart, Brain, Presentation, PlusCircle } from "lucide-react";
import KeyIndicators from "@/components/dashboard/KeyIndicators";
import LegalPerformance from "@/components/dashboard/LegalPerformance";
import FinancialRevenue from "@/components/dashboard/FinancialRevenue";
import RiskCompliance from "@/components/dashboard/RiskCompliance";
import TeamProductivity from "@/components/dashboard/TeamProductivity";
import AiCopilot from "@/components/dashboard/AiCopilot";
import { showSuccess } from '@/utils/toast';

const VisaoExecutiva = () => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const handleCreateReport = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const reportName = formData.get('name') as string;
    setIsReportModalOpen(false);
    showSuccess(`Relatório "${reportName}" criado com sucesso!`);
  };

  const handleExportData = () => {
    showSuccess("Exportação de dados iniciada. Você receberá um e-mail quando estiver pronto.");
  };

  const handleAICopilot = () => {
    showSuccess("IA Copilot ativado. Analisando dados...");
  };

  const handlePresentationMode = () => {
    showSuccess("Modo apresentação ativado!");
  };

  return (
    <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Visão Executiva</h1>
          <p className="text-gray-400 max-w-2xl">
            Visão panorâmica e estratégica do ecossistema jurídico-operacional da T3 — dados, métricas e IA em tempo real.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => setIsReportModalOpen(true)}>
            <FileText className="h-4 w-4 mr-2" /> Novo Relatório
          </Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={handleExportData}>
            <BarChart className="h-4 w-4 mr-2" /> Exportar Dados
          </Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={handleAICopilot}>
            <Brain className="h-4 w-4 mr-2" /> IA Copilot
          </Button>
          <Button variant="secondary" onClick={handlePresentationMode}>
            <Presentation className="h-4 w-4 mr-2" /> Modo Apresentação
          </Button>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <KeyIndicators />
          <LegalPerformance />
          <FinancialRevenue />
          <RiskCompliance />
          <TeamProductivity />
        </div>

        {/* AI Sidebar */}
        <div className="lg:col-span-1">
          <AiCopilot />
        </div>
      </div>

      {/* Modal Novo Relatório */}
      <Dialog open={isReportModalOpen} onOpenChange={setIsReportModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle>Criar Novo Relatório</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreateReport}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Relatório</Label>
                <Input id="name" name="name" placeholder="Ex: Relatório Mensal - Outubro 2025" className="bg-gray-800 border-gray-600" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Tipo de Relatório</Label>
                <Input id="type" name="type" placeholder="Ex: Executivo, Financeiro, Jurídico" className="bg-gray-800 border-gray-600" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea id="description" name="description" placeholder="Descreva o objetivo deste relatório..." className="bg-gray-800 border-gray-600" rows={3} />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setIsReportModalOpen(false)}>Cancelar</Button>
              <Button type="submit">Criar Relatório</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VisaoExecutiva;