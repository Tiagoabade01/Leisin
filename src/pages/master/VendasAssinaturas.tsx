import React, { useState, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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

const responsibles = ['Ana Silva', 'Bruno Costa', 'Carlos Dias', 'Daniela Souza'];

const initialOpportunitiesData: Opportunity[] = [
  { id: 'op1', title: 'Projeto Website', client: 'Imobiliária Futuro', value: 12000, stageId: 'lead', responsible: 'Ana Silva', notes: 'Cliente pediu urgência.' },
  { id: 'op2', title: 'Consultoria LGPD', client: 'Advocacia Pontes', value: 8500, stageId: 'lead', responsible: 'Bruno Costa' },
  { id: 'op3', title: 'Sistema de Gestão', client: 'Construtora Alfa', value: 25000, stageId: 'proposta', responsible: 'Ana Silva' },
  { id: 'op4', title: 'Plano White Label', client: 'Grupo Investidor Sul', value: 50000, stageId: 'negociacao', responsible: 'Carlos Dias' },
  { id: 'op5', title: 'Módulo Financeiro', client: 'Escritório Central', value: 18000, stageId: 'negociacao', responsible: 'Daniela Souza' },
  { id: 'op6', title: 'Contrato Enterprise', client: 'Incorporadora T3', value: 80000, stageId: 'fechado', responsible: 'Carlos Dias', notes: 'Assinado em 20/07.' }
];

const VendasAssinaturas = () => {
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');
  const [stages, setStages] = useState<Stage[]>(initialStagesData);
  const [opportunities, setOpportunities] = useState<Opportunity[]>(initialOpportunitiesData);
  
  const [isOppModalOpen, setIsOppModalOpen] = useState(false);
  const [editingOpportunity, setEditingOpportunity] = useState<Partial<Opportunity> | null>(null);
  
  const [isStageModalOpen, setIsStageModalOpen] = useState(false);
  const [editingStage, setEditingStage] = useState<Stage | null>(null);

  const [opportunityToDelete, setOpportunityToDelete] = useState<string | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    if (active.id === over.id) return;

    const activeIsOpportunity = active.data.current?.type === 'Opportunity';
    if (!activeIsOpportunity) return;

    setOpportunities((prev) => {
      const activeIndex = prev.findIndex((op) => op.id === active.id);
      const overIndex = prev.findIndex((op) => op.id === over.id);
      const overIsStage = stages.some(stage => stage.id === over.id);

      if (overIsStage) {
        const newOpportunities = [...prev];
        newOpportunities[activeIndex].stageId = over.id as string;
        return newOpportunities;
      }
      
      if (overIndex !== -1) {
        const newOpportunities = [...prev];
        newOpportunities[activeIndex].stageId = prev[overIndex].stageId;
        return arrayMove(newOpportunities, activeIndex, overIndex);
      }
      return prev;
    });
  };

  const handleOpenNewOppModal = (stageId?: string) => {
    setEditingOpportunity({ stageId: stageId || stages[0]?.id || '' });
    setIsOppModalOpen(true);
  };

  const handleEditOpportunityClick = (opportunity: Opportunity) => {
    setEditingOpportunity(opportunity);
    setIsOppModalOpen(true);
  };

  const handleEditStageClick = (stage: Stage) => {
    setEditingStage(stage);
    setIsStageModalOpen(true);
  };

  const handleSaveOpportunity = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const opportunityData = {
      title: formData.get('title') as string,
      client: formData.get('client') as string,
      value: parseFloat(formData.get('value') as string),
      stageId: formData.get('stageId') as string,
      responsible: formData.get('responsible') as string,
      notes: formData.get('notes') as string,
    };

    if (editingOpportunity?.id) { // Edit
      setOpportunities(prev => prev.map(op => op.id === editingOpportunity.id ? { ...op, ...opportunityData } : op));
    } else { // Create
      const newOpportunity: Opportunity = {
        id: `op-${Date.now()}`,
        ...opportunityData,
      };
      setOpportunities(prev => [...prev, newOpportunity]);
    }
    setIsOppModalOpen(false);
  };

  const handleSaveStage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingStage) return;
    const formData = new FormData(e.currentTarget);
    const updatedStage = { ...editingStage, title: formData.get('title') as string };
    setStages(prev => prev.map(s => s.id === updatedStage.id ? updatedStage : s));
    setIsStageModalOpen(false);
  };

  const handleAddStage = (title: string) => {
    setStages(prev => [...prev, { id: `stage-${Date.now()}`, title }]);
  };

  const confirmDelete = () => {
    if (opportunityToDelete) {
      setOpportunities(prev => prev.filter(op => op.id !== opportunityToDelete));
      setOpportunityToDelete(null);
    }
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
                <Button onClick={() => handleOpenNewOppModal()}><PlusCircle className="w-4 h-4 mr-2" /> Nova Oportunidade</Button>
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
                  onAddOpportunity={handleOpenNewOppModal}
                />
              ) : (
                <SalesPipelineList 
                  stages={stages.map(s => ({...s, opportunities: opportunities.filter(o => o.stageId === s.id)}))}
                  onEdit={handleEditOpportunityClick}
                  onDelete={setOpportunityToDelete}
                />
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Modal de Criação/Edição de Oportunidade */}
      <Dialog open={isOppModalOpen} onOpenChange={setIsOppModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>{editingOpportunity?.id ? 'Editar' : 'Criar Nova'} Oportunidade</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveOpportunity}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">Título</Label>
                <Input id="title" name="title" defaultValue={editingOpportunity?.title} className="col-span-3 bg-gray-800 border-gray-600" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="client" className="text-right">Cliente</Label>
                <Input id="client" name="client" defaultValue={editingOpportunity?.client} className="col-span-3 bg-gray-800 border-gray-600" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="value" className="text-right">Valor (R$)</Label>
                <Input id="value" name="value" type="number" defaultValue={editingOpportunity?.value} className="col-span-3 bg-gray-800 border-gray-600" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="stageId" className="text-right">Etapa</Label>
                <Select name="stageId" defaultValue={editingOpportunity?.stageId}>
                  <SelectTrigger className="col-span-3 bg-gray-800 border-gray-600"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-gray-800 text-white border-gray-700">
                    {stages.map(stage => <SelectItem key={stage.id} value={stage.id}>{stage.title}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="responsible" className="text-right">Responsável</Label>
                <Select name="responsible" defaultValue={editingOpportunity?.responsible}>
                  <SelectTrigger className="col-span-3 bg-gray-800 border-gray-600"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-gray-800 text-white border-gray-700">
                    {responsibles.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="notes" className="text-right pt-2">Observações</Label>
                <Textarea id="notes" name="notes" defaultValue={editingOpportunity?.notes} className="col-span-3 bg-gray-800 border-gray-600" />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setIsOppModalOpen(false)}>Cancelar</Button>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Modal de Edição de Etapa */}
      <Dialog open={isStageModalOpen} onOpenChange={setIsStageModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Renomear Etapa</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveStage}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">Título</Label>
                <Input id="title" name="title" defaultValue={editingStage?.title} className="col-span-3 bg-gray-800 border-gray-600" required />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setIsStageModalOpen(false)}>Cancelar</Button>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Diálogo de Confirmação de Exclusão */}
      <AlertDialog open={!!opportunityToDelete} onOpenChange={() => setOpportunityToDelete(null)}>
        <AlertDialogContent className="bg-gray-900 text-white border-gray-700">
          <AlertDialogHeader>
            <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              Esta ação não pode ser desfeita. Isso excluirá permanentemente a oportunidade do pipeline.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild><Button variant="ghost">Cancelar</Button></AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} asChild><Button variant="destructive">Excluir</Button></AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default VendasAssinaturas;