import React, { useState, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, List, LayoutGrid } from "lucide-react";
import { SalesPipelineKanban, Opportunity, Stage } from '@/components/crm/SalesPipelineKanban';
import { SalesPipelineList } from '@/components/crm/SalesPipelineList';
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

// Dados Iniciais
const initialStagesData: Stage[] = [
  { id: 'lead', title: 'Lead' },
  { id: 'proposta', title: 'Proposta Enviada' },
  { id: 'negociacao', title: 'Em Negociação' },
  { id: 'fechado', title: 'Fechado / Ganho' }
];

const initialOpportunitiesData: Opportunity[] = [
  { id: 'op1', title: 'Projeto Website', client: 'Imobiliária Futuro', value: 12000, stageId: 'lead' },
  { id: 'op2', title: 'Consultoria LGPD', client: 'Advocacia Pontes', value: 8500, stageId: 'lead' },
  { id: 'op3', title: 'Sistema de Gestão', client: 'Construtora Alfa', value: 25000, stageId: 'proposta' },
  { id: 'op4', title: 'Plano White Label', client: 'Grupo Investidor Sul', value: 50000, stageId: 'negociacao' },
  { id: 'op5', title: 'Módulo Financeiro', client: 'Escritório Central', value: 18000, stageId: 'negociacao' },
  { id: 'op6', title: 'Contrato Enterprise', client: 'Incorporadora T3', value: 80000, stageId: 'fechado' }
];

const VendasAssinaturas = () => {
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');
  const [stages, setStages] = useState<Stage[]>(initialStagesData);
  const [opportunities, setOpportunities] = useState<Opportunity[]>(initialOpportunitiesData);
  const [editingOpportunity, setEditingOpportunity] = useState<Opportunity | null>(null);
  const [editingStage, setEditingStage] = useState<Stage | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const activeIsOpportunity = active.data.current?.type === 'Opportunity';
    if (!activeIsOpportunity) return;

    setOpportunities((prev) => {
      const activeOppIndex = prev.findIndex(op => op.id === activeId);
      const overOppIndex = prev.findIndex(op => op.id === overId);
      
      const overIsStage = stages.some(stage => stage.id === overId);

      if (overIsStage) {
        const newOpportunities = [...prev];
        newOpportunities[activeOppIndex].stageId = overId;
        return newOpportunities;
      }
      
      if (overOppIndex !== -1) {
        const newOpportunities = [...prev];
        newOpportunities[activeOppIndex].stageId = prev[overOppIndex].stageId;
        return arrayMove(newOpportunities, activeOppIndex, overOppIndex);
      }

      return prev;
    });
  };

  const handleEditOpportunityClick = (opportunity: Opportunity) => setEditingOpportunity(opportunity);
  const handleEditStageClick = (stage: Stage) => setEditingStage(stage);

  const handleSaveOpportunity = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingOpportunity) return;
    const formData = new FormData(e.currentTarget);
    const updatedOpportunity = {
      ...editingOpportunity,
      title: formData.get('title') as string,
      client: formData.get('client') as string,
      value: parseFloat(formData.get('value') as string),
    };
    setOpportunities(prev => prev.map(op => op.id === updatedOpportunity.id ? updatedOpportunity : op));
    setEditingOpportunity(null);
  };

  const handleSaveStage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingStage) return;
    const formData = new FormData(e.currentTarget);
    const updatedStage = {
      ...editingStage,
      title: formData.get('title') as string,
    };
    setStages(prev => prev.map(s => s.id === updatedStage.id ? updatedStage : s));
    setEditingStage(null);
  };

  const handleAddStage = (title: string) => {
    const newStage: Stage = {
      id: `stage-${Date.now()}`,
      title,
    };
    setStages(prev => [...prev, newStage]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Vendas & Assinaturas</h1>
      <p className="text-gray-400 mb-8">Controle completo do ciclo comercial do SaaS.</p>

      <Tabs defaultValue="crm" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800">
          <TabsTrigger value="crm">CRM de Vendas</TabsTrigger>
          <TabsTrigger value="assinaturas">Gestão de Assinaturas</TabsTrigger>
          <TabsTrigger value="metricas">Métricas de SaaS</TabsTrigger>
        </TabsList>

        <TabsContent value="crm" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Pipeline de Vendas</CardTitle>
                <CardDescription className="text-gray-400">Gerencie suas oportunidades de negócio.</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant={viewMode === 'kanban' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('kanban')}><LayoutGrid className="h-4 w-4" /></Button>
                <Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('list')}><List className="h-4 w-4" /></Button>
                <Button><PlusCircle className="w-4 h-4 mr-2" /> Nova Oportunidade</Button>
              </div>
            </CardHeader>
            <CardContent>
              {viewMode === 'kanban' ? (
                <SalesPipelineKanban
                  stages={stages}
                  opportunities={opportunities}
                  onDragEnd={handleDragEnd}
                  onEditOpportunity={handleEditOpportunityClick}
                  onAddStage={handleAddStage}
                  onEditStage={handleEditStageClick}
                />
              ) : (
                <SalesPipelineList stages={stages.map(s => ({...s, opportunities: opportunities.filter(o => o.stageId === s.id)}))} />
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Modal de Edição de Oportunidade */}
      <Dialog open={!!editingOpportunity} onOpenChange={() => setEditingOpportunity(null)}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Editar Oportunidade</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveOpportunity}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">Título</Label>
                <Input id="title" name="title" defaultValue={editingOpportunity?.title} className="col-span-3 bg-gray-800 border-gray-600" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="client" className="text-right">Cliente</Label>
                <Input id="client" name="client" defaultValue={editingOpportunity?.client} className="col-span-3 bg-gray-800 border-gray-600" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="value" className="text-right">Valor (R$)</Label>
                <Input id="value" name="value" type="number" defaultValue={editingOpportunity?.value} className="col-span-3 bg-gray-800 border-gray-600" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild><Button type="button" variant="ghost">Cancelar</Button></DialogClose>
              <Button type="submit">Salvar Alterações</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Modal de Edição de Etapa */}
      <Dialog open={!!editingStage} onOpenChange={() => setEditingStage(null)}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Renomear Etapa</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveStage}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">Título</Label>
                <Input id="title" name="title" defaultValue={editingStage?.title} className="col-span-3 bg-gray-800 border-gray-600" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild><Button type="button" variant="ghost">Cancelar</Button></DialogClose>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VendasAssinaturas;