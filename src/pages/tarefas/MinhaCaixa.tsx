import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { showSuccess } from '@/utils/toast';
import { 
  PlusCircle, Clock, BarChart2, Search, AlertCircle, CheckCircle, Calendar, MessageSquare, 
  Paperclip, Play, Zap, History, LayoutGrid, List, BrainCircuit, User, Link as LinkIcon,
  Repeat, Bot, Bell, FileText, DollarSign, Shield, Signature, Briefcase
} from "lucide-react";

// --- TIPOS E DADOS MOCK ---
interface Task {
  id: string;
  title: string;
  type: 'Contrato' | 'Processo' | 'Financeiro' | 'Interno';
  client: string;
  deadline: string;
  priority: 'Alta' | 'Média' | 'Baixa';
  slaHours: number;
  estimatedHours: number;
  status: 'A fazer' | 'Em andamento' | 'Em revisão' | 'Concluída';
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

const kanbanColumns: Task['status'][] = ['A fazer', 'Em andamento', 'Em revisão', 'Concluída'];

// --- COMPONENTES AUXILIARES ---
const getPriorityBadge = (priority: Task['priority']) => {
  if (priority === 'Alta') return <span className="text-red-400">🔴 Alta</span>;
  if (priority === 'Média') return <span className="text-yellow-400">🟠 Média</span>;
  return <span className="text-green-400">🟡 Baixa</span>;
};

const getIconForType = (type: Task['type']) => {
  switch(type) {
    case 'Contrato': return <Signature className="h-4 w-4 text-gray-400" />;
    case 'Processo': return <Briefcase className="h-4 w-4 text-gray-400" />;
    case 'Financeiro': return <DollarSign className="h-4 w-4 text-gray-400" />;
    default: return <FileText className="h-4 w-4 text-gray-400" />;
  }
};

const MinhaCaixa = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [view, setView] = useState<'table' | 'kanban' | 'agenda'>('table');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);

  const handleSelectTask = (task: Task) => {
    setSelectedTask(task);
    setIsDrawerOpen(true);
  };

  const handleSaveTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de salvar aqui...
    setIsTaskModalOpen(false);
    showSuccess("Tarefa criada com sucesso!");
  };
  
  const handleSaveTime = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de salvar aqui...
    setIsTimeModalOpen(false);
    showSuccess("Horas registradas com sucesso!");
  };

  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
        {/* Cabeçalho */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-white font-serif">Minha Caixa</h1>
          <p className="text-gray-400 max-w-3xl">Tudo que é meu, do urgente ao agendado — com IA para priorizar, planejar e concluir.</p>
        </header>

        {/* Filtros Rápidos */}
        <div className="flex flex-wrap items-center gap-2 mb-6 p-2 bg-petroleum-blue rounded-lg">
          <div className="relative flex-grow sm:flex-grow-0 sm:w-64"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /><Input placeholder="Buscar tarefa..." className="bg-gray-800 border-gray-700 pl-9" /></div>
          <Select><SelectTrigger className="w-full sm:w-[150px] bg-gray-800 border-gray-700"><SelectValue placeholder="Status" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[150px] bg-gray-800 border-gray-700"><SelectValue placeholder="Prioridade" /></SelectTrigger></Select>
          <div className="flex-grow" />
          <Button onClick={() => setIsTaskModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Tarefa</Button>
          <Button onClick={() => setIsTimeModalOpen(true)} variant="outline" className="bg-gray-800 border-gray-700"><Clock className="h-4 w-4 mr-2" /> Registrar Hora</Button>
          <Button variant="outline" className="bg-gray-800 border-gray-700" onClick={() => showSuccess("Lembrete criado!")}><Bell className="h-4 w-4 mr-2" /> Criar Lembrete</Button>
          <Button variant="secondary" onClick={() => showSuccess("Relatório pessoal gerado.")}><BarChart2 className="h-4 w-4 mr-2" /> Relatório</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Painel de Prioridades */}
          <aside className="lg:col-span-3 space-y-3">
            {priorityCards.map(card => (
              <Card key={card.title} className="bg-petroleum-blue border-gray-700 text-white cursor-pointer hover:border-tech-green/50" onClick={() => showSuccess(`Filtrando por: ${card.title}`)}>
                <CardContent className="p-3 flex justify-between items-center">
                  <span className="text-sm font-medium">{card.title}</span>
                  <span className="text-lg font-bold">{card.value}</span>
                </CardContent>
              </Card>
            ))}
          </aside>

          {/* Lista Inteligente */}
          <main className="lg:col-span-9">
            <div className="flex justify-end mb-4">
              <div className="flex items-center gap-1 p-1 bg-petroleum-blue rounded-lg">
                <Button variant={view === 'table' ? 'secondary' : 'ghost'} size="sm" onClick={() => setView('table')}><List className="h-4 w-4 mr-2" /> Tabela</Button>
                <Button variant={view === 'kanban' ? 'secondary' : 'ghost'} size="sm" onClick={() => setView('kanban')}><LayoutGrid className="h-4 w-4 mr-2" /> Kanban</Button>
                <Button variant={view === 'agenda' ? 'secondary' : 'ghost'} size="sm" onClick={() => setView('agenda')}><Calendar className="h-4 w-4 mr-2" /> Agenda</Button>
              </div>
            </div>

            {view === 'table' && (
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tarefa</TableHead><TableHead>Cliente/Objeto</TableHead><TableHead>Prazo</TableHead><TableHead>Prioridade</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody>
                  {tasks.map(task => (
                    <TableRow key={task.id} onClick={() => handleSelectTask(task)} className="cursor-pointer border-gray-700 hover:bg-gray-800/50">
                      <TableCell className="font-medium">{task.title}</TableCell>
                      <TableCell>{task.client}</TableCell>
                      <TableCell>{task.deadline}</TableCell>
                      <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                      <TableCell>{task.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}

            {view === 'kanban' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {kanbanColumns.map(col => (
                  <div key={col} className="p-3 bg-petroleum-blue rounded-lg">
                    <h3 className="font-semibold mb-3 text-white">{col}</h3>
                    <div>
                      {tasks.filter(t => t.status === col).map(task => (
                        <Card key={task.id} onClick={() => handleSelectTask(task)} className="p-3 bg-gray-800/50 border-gray-700 mb-3 cursor-pointer hover:bg-gray-800">
                          <p className="font-semibold text-sm">{task.title}</p>
                          <div className="flex justify-between items-center text-xs text-gray-400 mt-2"><span>{task.client}</span><span className="font-mono">{task.deadline}</span></div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {view === 'agenda' && (
              <Card className="bg-petroleum-blue border-gray-700 text-white h-96 flex items-center justify-center">
                <p className="text-gray-400">Visualização de Agenda em construção...</p>
              </Card>
            )}
          </main>
        </div>
      </div>

      {/* Drawer de Detalhes */}
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

      {/* Modais de Ação */}
      <Dialog open={isTaskModalOpen} onOpenChange={setIsTaskModalOpen}><DialogContent className="bg-gray-900 text-white border-gray-700"><DialogHeader><DialogTitle>Nova Tarefa</DialogTitle></DialogHeader><form onSubmit={handleSaveTask}><div className="py-4 space-y-3"><div className="space-y-1"><Label>Título</Label><Input name="title" required /></div><div className="space-y-1"><Label>Cliente</Label><Input name="client" /></div><div className="space-y-1"><Label>Prazo</Label><Input name="deadline" type="date" /></div></div><DialogFooter><Button type="button" variant="ghost" onClick={() => setIsTaskModalOpen(false)}>Cancelar</Button><Button type="submit">Criar</Button></DialogFooter></form></DialogContent></Dialog>
      <Dialog open={isTimeModalOpen} onOpenChange={setIsTimeModalOpen}><DialogContent className="bg-gray-900 text-white border-gray-700"><DialogHeader><DialogTitle>Registrar Hora</DialogTitle></DialogHeader><form onSubmit={handleSaveTime}><div className="py-4 space-y-3"><div className="space-y-1"><Label>Tarefa</Label><Input name="task" required /></div><div className="space-y-1"><Label>Horas</Label><Input name="hours" type="number" step="0.1" required /></div></div><DialogFooter><Button type="button" variant="ghost" onClick={() => setIsTimeModalOpen(false)}>Cancelar</Button><Button type="submit">Registrar</Button></DialogFooter></form></DialogContent></Dialog>
    </Layout>
  );
};

export default MinhaCaixa;