import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from '@/components/ui/textarea';
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { showSuccess } from '@/utils/toast';
import { TarefasKanban, Column } from '@/components/tasks/TarefasKanban';
import TaskList from '@/components/tasks/TaskList';
import CalendarioCronogramas from '@/components/tasks/CalendarioCronogramas';
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { 
  PlusCircle, Clock, BarChart2, Search, AlertCircle, CheckCircle, Calendar, MessageSquare, 
  Paperclip, Play, Zap, History, LayoutGrid, List, BrainCircuit, User, Link as LinkIcon,
  Repeat, Bot, Bell, FileText, DollarSign, Shield, Signature, Briefcase
} from "lucide-react";

// --- TIPOS E DADOS MOCK ---
export interface Task {
  id: string;
  title: string;
  type: 'Contrato' | 'Processo' | 'Financeiro' | 'Interno';
  client: string;
  deadline: string;
  priority: 'Alta' | 'Média' | 'Baixa';
  slaHours: number;
  estimatedHours: number;
  status: string; // Alterado para string para suportar colunas customizadas
  badges: ('recorrente' | 'ia' | 'timer' | 'anexos' | 'comentarios')[];
  checklist: { id: string; text: string; done: boolean }[];
  comments: { user: string; text: string }[];
}

const initialTasks: Task[] = [
  { id: 't1', title: "Revisar cláusulas do CT-219", type: 'Contrato', client: "Nivem Construtora", deadline: "12/10/25", priority: 'Alta', slaHours: 8, estimatedHours: 2, status: 'Em andamento', badges: ['anexos', 'comentarios'], checklist: [{id: 'c1', text: 'Verificar cláusula de multa', done: true}, {id: 'c2', text: 'Validar assinaturas', done: false}], comments: [{user: 'Gestor', text: 'Prioridade máxima!'}] },
  { id: 't2', title: "Petição inicial 1012456", type: 'Processo', client: "Mettri Arquitetura", deadline: "13/10/25", priority: 'Média', slaHours: 12, estimatedHours: 3, status: 'Em revisão', badges: ['ia'], checklist: [], comments: [] },
  { id: 't3', title: "Emitir NFe honorários", type: 'Financeiro', client: "Terlla Incorporadora", deadline: "15/10/25", priority: 'Baixa', slaHours: 48, estimatedHours: 0.5, status: 'A fazer', badges: ['recorrente'], checklist: [], comments: [] },
  { id: 't4', title: "Coletar documentos cliente X", type: 'Contrato', client: "Cliente X", deadline: "10/10/25", priority: 'Alta', slaHours: 24, estimatedHours: 1, status: 'A fazer', badges: [], checklist: [], comments: [] },
];

const priorityCards = [
  { title: "Atrasadas", value: 5, filter: "atrasadas" },
  { title: "Vencem Hoje", value: 8, filter: "hoje" },
  { title: "Próximos 7 dias", value: 21, filter: "semana" },
  { title: "Aprovações", value: 3, filter: "aprovacoes" },
  { title: "Menções", value: 4, filter: "mencoes" },
  { title: "Revisão IA", value: 2, filter: "ia" },
];

const initialColumns: Column[] = [
  { id: 'A fazer', title: 'A Fazer' },
  { id: 'Em andamento', title: 'Em Andamento' },
  { id: 'Em revisão', title: 'Em Revisão' },
  { id: 'Concluída', title: 'Concluída' },
];

const getPriorityBadge = (priority: Task['priority']) => {
  if (priority === 'Alta') return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Alta</Badge>;
  if (priority === 'Média') return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Média</Badge>;
  return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟡 Baixa</Badge>;
};

const MinhaCaixa = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [view, setView] = useState<'table' | 'kanban' | 'agenda'>('kanban');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
  const [editingColumn, setEditingColumn] = useState<Partial<Column> | null>(null);
  const [columnToDelete, setColumnToDelete] = useState<string | null>(null);

  const handleSelectTask = (task: Task) => {
    setSelectedTask(task);
    setIsDrawerOpen(true);
  };

  const handleSaveTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsTaskModalOpen(false);
    showSuccess("Tarefa criada com sucesso!");
  };
  
  const handleSaveTime = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsTimeModalOpen(false);
    showSuccess("Horas registradas com sucesso!");
  };

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

  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-white font-serif">Minha Caixa</h1>
          <p className="text-gray-400 max-w-3xl">Tudo que é meu, do urgente ao agendado — com IA para priorizar, planejar e concluir.</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {priorityCards.map(card => (
            <Card key={card.title} className="bg-petroleum-blue border-gray-700 text-white cursor-pointer hover:border-tech-green/50" onClick={() => showSuccess(`Filtrando por: ${card.title}`)}>
              <CardContent className="p-3 flex justify-between items-center">
                <span className="text-sm font-medium">{card.title}</span>
                <span className="text-lg font-bold">{card.value}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader>
            <div className="flex flex-wrap justify-between items-center gap-4">
              <CardTitle className="text-white">Lista Inteligente</CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative flex-grow sm:flex-grow-0 sm:w-64"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /><Input placeholder="Buscar tarefa..." className="bg-gray-800 border-gray-700 pl-9" /></div>
                <div className="flex items-center gap-1 p-1 bg-gray-900/50 rounded-lg">
                  <Button variant={view === 'table' ? 'secondary' : 'ghost'} size="sm" onClick={() => setView('table')}><List className="h-4 w-4" /></Button>
                  <Button variant={view === 'kanban' ? 'secondary' : 'ghost'} size="sm" onClick={() => setView('kanban')}><LayoutGrid className="h-4 w-4" /></Button>
                  <Button variant={view === 'agenda' ? 'secondary' : 'ghost'} size="sm" onClick={() => setView('agenda')}><Calendar className="h-4 w-4" /></Button>
                </div>
                {view === 'kanban' && (
                  <Button variant="outline" className="bg-gray-800/50 border-gray-700" onClick={() => handleOpenColumnModal()}>
                    <PlusCircle className="h-4 w-4 mr-2" /> Nova Coluna
                  </Button>
                )}
                <Button onClick={() => setIsTaskModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Tarefa</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {view === 'table' && <TaskList tasks={tasks} onTaskClick={handleSelectTask} />}
            {view === 'kanban' && <TarefasKanban tasks={tasks} columns={columns} onDragEnd={handleDragEnd} onTaskClick={handleSelectTask} onEditColumn={handleOpenColumnModal} onDeleteColumn={setColumnToDelete} onAddColumn={() => handleOpenColumnModal()} />}
            {view === 'agenda' && <div className="h-[70vh]"><CalendarioCronogramas /></div>}
          </CardContent>
        </Card>
      </div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="bg-gray-900 text-white border-gray-700 h-[80vh]">
          {selectedTask && (
            <div className="p-6 h-full overflow-y-auto">
              <DrawerHeader className="p-0 mb-4">
                <DrawerTitle className="text-2xl font-bold">{selectedTask.title}</DrawerTitle>
                <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                  <span>{getPriorityBadge(selectedTask.priority)}</span>
                  <span>Prazo: {selectedTask.deadline}</span>
                  <span>Status: {selectedTask.status}</span>
                </div>
              </DrawerHeader>
              <Tabs defaultValue="resumo" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-gray-800"><TabsTrigger value="resumo">Resumo</TabsTrigger><TabsTrigger value="tempo">Tempo & Custo</TabsTrigger><TabsTrigger value="automacao">Automação</TabsTrigger><TabsTrigger value="historico">Histórico</TabsTrigger></TabsList>
                <TabsContent value="resumo" className="mt-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Contexto</h4>
                      <p className="text-sm text-blue-400 flex items-center gap-2"><LinkIcon className="h-4 w-4" /> {selectedTask.type}: {selectedTask.client}</p>
                      <h4 className="font-semibold mt-4 mb-2">Checklist</h4>
                      <div className="space-y-2">{selectedTask.checklist.map(item => <div key={item.id} className="flex items-center gap-2"><Checkbox id={item.id} checked={item.done} /><Label htmlFor={item.id}>{item.text}</Label></div>)}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Comentários</h4>
                      <div className="space-y-3">{selectedTask.comments.map((c, i) => <div key={i} className="text-sm"><strong className="text-tech-green">{c.user}:</strong> {c.text}</div>)}</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="tempo" className="mt-4">
                  <h4 className="font-semibold mb-2">Horas Estimadas vs. Realizadas</h4>
                  <Progress value={(1 / selectedTask.estimatedHours) * 100} className="w-full" />
                  <p className="text-sm mt-2">1h de {selectedTask.estimatedHours}h registradas</p>
                  <Button className="mt-4"><Play className="h-4 w-4 mr-2" /> Iniciar Cronômetro</Button>
                </TabsContent>
                <TabsContent value="automacao" className="mt-4"><p>Regras de automação aparecerão aqui.</p></TabsContent>
                <TabsContent value="historico" className="mt-4"><p>Histórico de alterações da tarefa aparecerá aqui.</p></TabsContent>
              </Tabs>
            </div>
          )}
        </DrawerContent>
      </Drawer>

      <Dialog open={isTaskModalOpen} onOpenChange={setIsTaskModalOpen}><DialogContent className="bg-gray-900 text-white border-gray-700"><DialogHeader><DialogTitle>Nova Tarefa</DialogTitle></DialogHeader><form onSubmit={handleSaveTask}><div className="py-4 space-y-3"><div className="space-y-1"><Label>Título</Label><Input name="title" required /></div><div className="space-y-1"><Label>Cliente</Label><Input name="client" /></div><div className="space-y-1"><Label>Prazo</Label><Input name="deadline" type="date" /></div></div><DialogFooter><Button type="button" variant="ghost" onClick={() => setIsTaskModalOpen(false)}>Cancelar</Button><Button type="submit">Criar</Button></DialogFooter></form></DialogContent></Dialog>
      <Dialog open={isTimeModalOpen} onOpenChange={setIsTimeModalOpen}><DialogContent className="bg-gray-900 text-white border-gray-700"><DialogHeader><DialogTitle>Registrar Hora</DialogTitle></DialogHeader><form onSubmit={handleSaveTime}><div className="py-4 space-y-3"><div className="space-y-1"><Label>Tarefa</Label><Input name="task" required /></div><div className="space-y-1"><Label>Horas</Label><Input name="hours" type="number" step="0.1" required /></div></div><DialogFooter><Button type="button" variant="ghost" onClick={() => setIsTimeModalOpen(false)}>Cancelar</Button><Button type="submit">Registrar</Button></DialogFooter></form></DialogContent></Dialog>

      {/* Modals for Column Management */}
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

export default MinhaCaixa;