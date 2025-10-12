import React, { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, LayoutGrid, List, Calendar, Search } from "lucide-react";
import { TarefasKanban, Column } from '@/components/tasks/TarefasKanban';
import TaskList from '@/components/tasks/TaskList';
import TarefasCalendario from '@/components/tasks/TarefasCalendario';
import TaskDashboardKPIs from '@/components/tasks/TaskDashboardKPIs';
import { Task } from './MinhaCaixa';
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { showSuccess } from '@/utils/toast';

const initialTasks: Task[] = [
  { id: 't1', title: "Revisar cláusulas do CT-219", type: 'Contrato', client: "Nivem Construtora", deadline: "12/10/25", priority: 'Alta', slaHours: 8, estimatedHours: 2, status: 'Em andamento', responsible: [{ name: 'Ana Faria' }, { name: 'João Lima' }], badges: ['anexos', 'comentarios'], checklist: [{id: 'c1', text: 'Verificar cláusula de multa', done: true}, {id: 'c2', text: 'Validar assinaturas', done: false}, {id: 'c3', text: 'Anexar certidões', done: false}], comments: [{user: 'Gestor', text: 'Prioridade máxima!'}], attachmentsCount: 2 },
  { id: 't2', title: "Petição inicial 1012456", type: 'Processo', client: "Mettri Arquitetura", deadline: "13/10/25", priority: 'Média', slaHours: 12, estimatedHours: 3, status: 'Em revisão', responsible: [{ name: 'Maria Souza' }], badges: ['ia'], checklist: [{id: 'c1', text: 'Coletar provas', done: true}, {id: 'c2', text: 'Redigir petição', done: true}, {id: 'c3', text: 'Protocolar', done: false}], comments: [], attachmentsCount: 1 },
  { id: 't3', title: "Emitir NFe honorários", type: 'Financeiro', client: "Terlla Incorporadora", deadline: "15/10/25", priority: 'Baixa', slaHours: 48, estimatedHours: 0.5, status: 'A fazer', responsible: [{ name: 'Sistema' }, { name: 'Carlos Dias' }], badges: ['recorrente'], checklist: [], comments: [], attachmentsCount: 0 },
  { id: 't4', title: "Coletar documentos cliente X", type: 'Contrato', client: "Cliente X", deadline: "10/10/25", priority: 'Alta', slaHours: 24, estimatedHours: 1, status: 'A fazer', responsible: [{ name: 'Ana Faria' }], badges: [], checklist: [{id: 'c1', text: 'Solicitar RG', done: false}, {id: 'c2', text: 'Solicitar CNH', done: false}], comments: [], attachmentsCount: 0 },
  { id: 't5', title: "Preparar apresentação para investidores", type: 'Interno', client: "Diretoria", deadline: "20/10/25", priority: 'Média', slaHours: 40, estimatedHours: 8, status: 'Em andamento', responsible: [{ name: 'João Lima' }, { name: 'Maria Souza' }, { name: 'Carlos Dias' }], badges: ['comentarios'], checklist: [{id: 'c1', text: 'Slide 1', done: true}, {id: 'c2', text: 'Slide 2', done: true}, {id: 'c3', text: 'Slide 3', done: true}, {id: 'c4', text: 'Slide 4', done: false}, {id: 'c5', text: 'Slide 5', done: false}], comments: [{user: 'CEO', text: 'Focar nos gráficos de crescimento.'}], attachmentsCount: 0 },
  { id: 't6', title: "Finalizar relatório de auditoria", type: 'Processo', client: "Cliente Y", deadline: "18/10/25", priority: 'Alta', slaHours: 16, estimatedHours: 5, status: 'Concluída', responsible: [{ name: 'Maria Souza' }], badges: [], checklist: [{id: 'c1', text: 'Revisar pendências', done: true}, {id: 'c2', text: 'Gerar PDF', done: true}], comments: [], attachmentsCount: 1 },
];

const initialColumns: Column[] = [
  { id: 'A fazer', title: 'A Fazer' },
  { id: 'Em andamento', title: 'Em Andamento' },
  { id: 'Em revisão', title: 'Em Revisão' },
  { id: 'Concluída', title: 'Concluída' },
];

const FluxoDeTarefas = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [viewMode, setViewMode] = useState<'kanban' | 'list' | 'calendar'>('kanban');
  
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
  const [editingColumn, setEditingColumn] = useState<Partial<Column> | null>(null);
  const [columnToDelete, setColumnToDelete] = useState<string | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    const activeId = String(active.id);
    const overId = String(over.id);
    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === 'Task';
    if (!isActiveATask) return;

    setTasks(prevTasks => {
      const activeIndex = prevTasks.findIndex(t => t.id === activeId);
      const overIndex = prevTasks.findIndex(t => t.id === overId);
      const isOverAColumn = columns.some(c => c.id === overId);

      if (isOverAColumn) {
        const newTasks = [...prevTasks];
        newTasks[activeIndex].status = overId;
        return newTasks;
      }
      
      if (overIndex !== -1) {
        const newTasks = [...prevTasks];
        newTasks[activeIndex].status = prevTasks[overIndex].status;
        return arrayMove(newTasks, activeIndex, overIndex);
      }
      return prevTasks;
    });
  };

  const handleOpenColumnModal = (col?: Column) => {
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
        return <TaskList tasks={tasks} onTaskClick={() => {}} />;
      case 'calendar':
        return <TarefasCalendario />;
      case 'kanban':
      default:
        return (
          <TarefasKanban 
            tasks={tasks} 
            columns={columns} 
            onDragEnd={handleDragEnd} 
            onTaskClick={() => {}} 
            onEditColumn={handleOpenColumnModal} 
            onDeleteColumn={setColumnToDelete} 
            onAddColumn={() => handleOpenColumnModal()} 
          />
        );
    }
  };

  return (
    <div className="bg-[#0A0F14] text-gray-100 h-full p-6 md:p-8 flex flex-col">
      <header className="flex-shrink-0">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Fluxo de Tarefas</h1>
            <p className="text-gray-400">Visualize e gerencie o fluxo de trabalho de forma ágil.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button><PlusCircle className="h-4 w-4 mr-2" /> Nova Tarefa</Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 p-1 bg-petroleum-blue rounded-lg">
            <Button variant={viewMode === 'kanban' ? 'secondary' : 'ghost'} size="sm" onClick={() => setViewMode('kanban')}><LayoutGrid className="h-4 w-4 mr-2" /> Kanban</Button>
            <Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} size="sm" onClick={() => setViewMode('list')}><List className="h-4 w-4 mr-2" /> Lista</Button>
            <Button variant={viewMode === 'calendar' ? 'secondary' : 'ghost'} size="sm" onClick={() => setViewMode('calendar')}><Calendar className="h-4 w-4 mr-2" /> Calendário</Button>
          </div>
          <div className="flex items-center gap-2 flex-grow sm:flex-grow-0">
            <div className="relative w-full sm:w-64"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /><Input placeholder="Buscar tarefas..." className="bg-petroleum-blue border-gray-700 pl-9" /></div>
            <Select><SelectTrigger className="w-[180px] bg-petroleum-blue border-gray-700"><SelectValue placeholder="Responsável" /></SelectTrigger></Select>
            <Select><SelectTrigger className="w-[180px] bg-petroleum-blue border-gray-700"><SelectValue placeholder="Prioridade" /></SelectTrigger></Select>
          </div>
        </div>
      </header>
      
      <div className="space-y-6 flex-shrink-0">
        <TaskDashboardKPIs />
      </div>

      <div className="flex-grow min-h-0 mt-6">
        {renderView()}
      </div>

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
    </div>
  );
};

export default FluxoDeTarefas;