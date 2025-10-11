import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Filter, LayoutGrid, List, Calendar, Search } from "lucide-react";
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { showSuccess } from '@/utils/toast';

import PrazosKPIs from '@/components/tasks/PrazosKPIs';
import PrazosKanbanBoard from '@/components/tasks/PrazosKanbanBoard';
import PrazoDetalheDrawer from '@/components/tasks/PrazoDetalheDrawer';
import PrazosList from '@/components/tasks/PrazosList';
import TarefasCalendario from '@/components/tasks/TarefasCalendario';
import PrazosAIInsights from '@/components/tasks/PrazosAIInsights';

export interface Subtarefa {
  id: string;
  texto: string;
  concluida: boolean;
}

export interface PrazoProcessual {
  id: string;
  processo: string;
  descricao: string;
  cliente: string;
  responsavel: string[];
  data: string; // "dd/MM/yy"
  status: string;
  urgencia: 'Crítico' | 'Alta' | 'Média' | 'Baixa';
  tarefas: Subtarefa[];
  comentarios: number;
  anexos: number;
}

const initialPrazos: PrazoProcessual[] = [
  { id: 'p1', processo: '1012456-33', descricao: 'Elaborar e protocolar contestação', cliente: 'Mettri Arquitetura', responsavel: ['Ana Faria'], data: '11/10/25', status: 'Em Andamento', urgencia: 'Alta', tarefas: [{id: 't1', texto: 'Coletar documentos', concluida: true}, {id: 't2', texto: 'Redigir peça', concluida: false}, {id: 't3', texto: 'Protocolar', concluida: false}], comentarios: 2, anexos: 3 },
  { id: 'p2', processo: '402312-92', descricao: 'Preparar para audiência de conciliação', cliente: 'Nivem Construtora', responsavel: ['João Lima', 'Maria Souza'], data: '10/10/25', status: 'Em Andamento', urgencia: 'Crítico', tarefas: [{id: 't1', texto: 'Estudar caso', concluida: true}, {id: 't2', texto: 'Preparar proposta de acordo', concluida: true}], comentarios: 0, anexos: 1 },
  { id: 'p3', processo: '225481-88', descricao: 'Interpor recurso de apelação', cliente: 'Terlla Inc.', responsavel: ['Maria Souza'], data: '25/10/25', status: 'A Distribuir', urgencia: 'Média', tarefas: [], comentarios: 0, anexos: 0 },
  { id: 'p4', processo: '334567-11', descricao: 'Realizar pagamento de guia judicial', cliente: 'Cliente X', responsavel: ['Financeiro'], data: '09/10/25', status: 'A Distribuir', urgencia: 'Crítico', tarefas: [{id: 't1', texto: 'Emitir guia', concluida: false}, {id: 't2', texto: 'Realizar pagamento', concluida: false}], comentarios: 1, anexos: 1 },
];

const initialColumns = [
  { id: 'A Distribuir', title: 'A Distribuir' },
  { id: 'Em Andamento', title: 'Em Andamento' },
  { id: 'Suspenso', title: 'Suspenso' },
  { id: 'Concluído', title: 'Concluído' },
];

const PrazosProcessuais = () => {
  const [prazos, setPrazos] = useState(initialPrazos);
  const [columns, setColumns] = useState(initialColumns);
  const [selectedPrazo, setSelectedPrazo] = useState<PrazoProcessual | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'kanban' | 'list' | 'calendar'>('kanban');
  
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
  const [editingColumn, setEditingColumn] = useState<Partial<typeof initialColumns[0]> | null>(null);
  const [columnToDelete, setColumnToDelete] = useState<string | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    const activeId = String(active.id);
    const overId = String(over.id);
    if (activeId === overId) return;

    setPrazos(prev => {
      const activeIndex = prev.findIndex(p => p.id === activeId);
      const isOverAColumn = columns.some(c => c.id === overId);

      if (isOverAColumn) {
        const newPrazos = [...prev];
        newPrazos[activeIndex].status = overId;
        return newPrazos;
      }
      
      const overIndex = prev.findIndex(p => p.id === overId);
      if (overIndex !== -1) {
        const newPrazos = [...prev];
        newPrazos[activeIndex].status = prev[overIndex].status;
        return arrayMove(newPrazos, activeIndex, overIndex);
      }
      return prev;
    });
  };

  const handlePrazoClick = (prazo: PrazoProcessual) => {
    setSelectedPrazo(prazo);
    setIsDrawerOpen(true);
  };

  const handleUpdatePrazo = (updatedPrazo: PrazoProcessual) => {
    setPrazos(prazos.map(p => p.id === updatedPrazo.id ? updatedPrazo : p));
    setSelectedPrazo(updatedPrazo);
  };

  const handleOpenColumnModal = (col?: typeof initialColumns[0]) => {
    setEditingColumn(col || {});
    setIsColumnModalOpen(true);
  };

  const handleSaveColumn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;

    if (editingColumn?.id) {
      setColumns(prev => prev.map(c => c.id === editingColumn.id ? { ...c, title } : c));
      showSuccess("Coluna renomeada!");
    } else {
      const newId = title.toLowerCase().replace(/\s+/g, '-');
      setColumns(prev => [...prev, { id: newId, title }]);
      showSuccess("Coluna criada!");
    }
    setIsColumnModalOpen(false);
  };

  const confirmDeleteColumn = () => {
    if (columnToDelete) {
      setColumns(prev => prev.filter(c => c.id !== columnToDelete));
      setColumnToDelete(null);
      showSuccess("Coluna excluída!");
    }
  };

  const renderView = () => {
    switch (viewMode) {
      case 'list':
        return <PrazosList prazos={prazos} onPrazoClick={handlePrazoClick} />;
      case 'calendar':
        return <TarefasCalendario />;
      case 'kanban':
      default:
        return (
          <PrazosKanbanBoard 
            prazos={prazos} 
            columns={columns} 
            onDragEnd={handleDragEnd} 
            onPrazoClick={handlePrazoClick}
            onEditColumn={handleOpenColumnModal}
            onDeleteColumn={setColumnToDelete}
            onAddColumn={() => handleOpenColumnModal()}
          />
        );
    }
  };

  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8 flex flex-col">
        <header className="flex-shrink-0">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-white font-serif">Prazos Processuais</h1>
              <p className="text-gray-400">Controle visual de todos os prazos e audiências da sua carteira de processos.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button><PlusCircle className="h-4 w-4 mr-2" /> Novo Prazo</Button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 p-1 bg-petroleum-blue rounded-lg">
              <Button variant={viewMode === 'kanban' ? 'secondary' : 'ghost'} size="sm" onClick={() => setViewMode('kanban')}><LayoutGrid className="h-4 w-4 mr-2" /> Kanban</Button>
              <Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} size="sm" onClick={() => setViewMode('list')}><List className="h-4 w-4 mr-2" /> Lista</Button>
              <Button variant={viewMode === 'calendar' ? 'secondary' : 'ghost'} size="sm" onClick={() => setViewMode('calendar')}><Calendar className="h-4 w-4 mr-2" /> Calendário</Button>
            </div>
            <div className="flex items-center gap-2 flex-grow sm:flex-grow-0">
              <div className="relative w-full sm:w-64"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /><Input placeholder="Buscar prazos..." className="bg-petroleum-blue border-gray-700 pl-9" /></div>
              <Select><SelectTrigger className="w-[180px] bg-petroleum-blue border-gray-700"><SelectValue placeholder="Responsável" /></SelectTrigger></Select>
              <Select><SelectTrigger className="w-[180px] bg-petroleum-blue border-gray-700"><SelectValue placeholder="Urgência" /></SelectTrigger></Select>
            </div>
          </div>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-grow min-h-0">
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex-shrink-0">
              <PrazosKPIs prazos={prazos} />
            </div>
            <div className="flex-grow min-h-0">
              {renderView()}
            </div>
          </div>
          <div className="lg:col-span-1">
            <PrazosAIInsights />
          </div>
        </div>
      </div>
      
      {selectedPrazo && (
        <PrazoDetalheDrawer
          prazo={selectedPrazo}
          isOpen={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
          onUpdate={handleUpdatePrazo}
        />
      )}

      <Dialog open={isColumnModalOpen} onOpenChange={setIsColumnModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>{editingColumn?.id ? 'Renomear' : 'Criar Nova'} Coluna</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveColumn}>
            <div className="py-4"><Label htmlFor="title">Título da Coluna</Label><Input id="title" name="title" defaultValue={editingColumn?.title} className="bg-gray-800 border-gray-600 mt-2" required /></div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsColumnModalOpen(false)}>Cancelar</Button><Button type="submit">Salvar</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!columnToDelete} onOpenChange={() => setColumnToDelete(null)}>
        <AlertDialogContent className="bg-gray-900 text-white border-gray-700">
          <AlertDialogHeader><AlertDialogTitle>Excluir Coluna?</AlertDialogTitle><AlertDialogDescription className="text-gray-300">As tarefas nesta coluna não serão excluídas, mas ficarão sem status. Esta ação não pode ser desfeita.</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter><AlertDialogCancel asChild><Button variant="ghost">Cancelar</Button></AlertDialogCancel><AlertDialogAction onClick={confirmDeleteColumn} asChild><Button variant="destructive">Excluir</Button></AlertDialogAction></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Layout>
  );
};

export default PrazosProcessuais;