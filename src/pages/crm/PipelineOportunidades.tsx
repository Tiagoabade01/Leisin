import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, List, LayoutGrid, BarChart2, BrainCircuit, Download } from "lucide-react";
import { SalesPipelineKanban, Opportunity, Stage } from '@/components/crm/SalesPipelineKanban';
import { SalesPipelineList } from '@/components/crm/SalesPipelineList';
import CrmDashboard from '@/components/crm/CrmDashboard';
import CrmAIInsights from '@/components/crm/CrmAIInsights';
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { showSuccess } from '@/utils/toast';

const initialStagesData: Stage[] = [
  { id: 'captacao', title: '🟣 Captação' },
  { id: 'qualificacao', title: '🔵 Qualificação' },
  { id: 'proposta', title: '🟠 Proposta' },
  { id: 'negociacao', title: '🟡 Negociação' },
  { id: 'fechado', title: '🟢 Fechado' },
  { id: 'perdido', title: '🔴 Perdido' }
];

const initialOpportunitiesData: Opportunity[] = [
  { id: 'op1', title: 'Assessoria Tributária', client: 'Banco Futura', value: 180000, stageId: 'negociacao', responsible: 'Dr. João' },
  { id: 'op2', title: 'Due Diligence Imobiliária', client: 'Construtora Atlas', value: 95000, stageId: 'proposta', responsible: 'Dra. Larissa' },
  { id: 'op3', title: 'Contrato de Aquisição', client: 'T3 Select', value: 220000, stageId: 'fechado', responsible: 'Dr. Ricardo' },
  { id: 'op4', title: 'Consultoria Cível', client: 'Grupo Hera', value: 60000, stageId: 'captacao', responsible: 'Dr. Felipe' },
];

const PipelineOportunidades = () => {
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');
  const [stages, setStages] = useState<Stage[]>(initialStagesData);
  const [opportunities, setOpportunities] = useState<Opportunity[]>(initialOpportunitiesData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOpp, setEditingOpp] = useState<Partial<Opportunity> | null>(null);
  const [oppToDelete, setOppToDelete] = useState<string | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setOpportunities((prev) => {
      const activeIndex = prev.findIndex((op) => op.id === active.id);
      const overIsStage = stages.some(stage => stage.id === over.id);
      if (overIsStage) {
        const newOpportunities = [...prev];
        newOpportunities[activeIndex].stageId = over.id as string;
        return newOpportunities;
      }
      const overIndex = prev.findIndex((op) => op.id === over.id);
      if (overIndex !== -1) {
        const newOpportunities = [...prev];
        newOpportunities[activeIndex].stageId = prev[overIndex].stageId;
        return arrayMove(newOpportunities, activeIndex, overIndex);
      }
      return prev;
    });
  };

  const handleOpenModal = (opp?: Opportunity) => {
    setEditingOpp(opp || { stageId: stages[0]?.id || '' });
    setIsModalOpen(true);
  };

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as any;
    data.value = parseFloat(data.value);

    if (editingOpp?.id) {
      setOpportunities(prev => prev.map(op => op.id === editingOpp.id ? { ...op, ...data } : op));
      showSuccess("Oportunidade atualizada!");
    } else {
      const newOpp: Opportunity = { id: `op-${Date.now()}`, ...data };
      setOpportunities(prev => [...prev, newOpp]);
      showSuccess("Oportunidade criada!");
    }
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    if (oppToDelete) {
      setOpportunities(prev => prev.filter(op => op.id !== oppToDelete));
      setOppToDelete(null);
      showSuccess("Oportunidade excluída!");
    }
  };

  return (
    <Layout>
      <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Pipeline de Oportunidades</h1>
            <p className="text-gray-400 max-w-3xl">Organize, acompanhe e converta clientes e casos jurídicos com o funil mais inteligente do mercado.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => handleOpenModal()}><PlusCircle className="h-4 w-4 mr-2" /> Nova Oportunidade</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> IA Analisar</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <CrmDashboard />
            <Card className="bg-petroleum-blue border-gray-700 text-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Funil de Oportunidades</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant={viewMode === 'kanban' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('kanban')}><LayoutGrid className="h-4 w-4" /></Button>
                  <Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('list')}><List className="h-4 w-4" /></Button>
                </div>
              </CardHeader>
              <CardContent>
                {viewMode === 'kanban' ? (
                  <SalesPipelineKanban stages={stages} opportunities={opportunities} onDragEnd={handleDragEnd} onEditOpportunity={handleOpenModal} onAddStage={() => {}} onEditStage={() => {}} onAddOpportunity={() => handleOpenModal()} />
                ) : (
                  <SalesPipelineList stages={stages.map(s => ({...s, opportunities: opportunities.filter(o => o.stageId === s.id)}))} onEdit={handleOpenModal} onDelete={setOppToDelete} />
                )}
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <CrmAIInsights />
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>{editingOpp?.id ? 'Editar' : 'Nova'} Oportunidade</DialogTitle></DialogHeader>
          <form onSubmit={handleSave}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="title">Título</Label><Input id="title" name="title" defaultValue={editingOpp?.title} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="client">Cliente</Label><Input id="client" name="client" defaultValue={editingOpp?.client} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="value">Valor (R$)</Label><Input id="value" name="value" type="number" defaultValue={editingOpp?.value} className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="responsible">Responsável</Label><Input id="responsible" name="responsible" defaultValue={editingOpp?.responsible} className="bg-gray-800 border-gray-600" required /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Salvar</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!oppToDelete} onOpenChange={() => setOppToDelete(null)}>
        <AlertDialogContent className="bg-gray-900 text-white border-gray-700">
          <AlertDialogHeader><AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle><AlertDialogDescription className="text-gray-300">Esta ação não pode ser desfeita.</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter><AlertDialogCancel asChild><Button variant="ghost">Cancelar</Button></AlertDialogCancel><AlertDialogAction onClick={confirmDelete} asChild><Button variant="destructive">Excluir</Button></AlertDialogAction></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Layout>
  );
};

export default PipelineOportunidades;