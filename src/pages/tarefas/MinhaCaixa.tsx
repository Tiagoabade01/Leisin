import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { showSuccess } from '@/utils/toast';
import TaskList from '@/components/tasks/TaskList';
import { 
  PlusCircle, Search, Link as LinkIcon, Play, BarChart2, Brain
} from "lucide-react";
import { Badge } from '@/components/ui/badge';
import TaskDashboardKPIs from '@/components/tasks/TaskDashboardKPIs';
import TaskCharts from '@/components/tasks/TaskCharts';
import UrgentTasksList from '@/components/tasks/UrgentTasksList';

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
  status: string;
  responsible: { name: string; avatar?: string }[];
  badges: ('recorrente' | 'ia' | 'timer' | 'anexos' | 'comentarios')[];
  checklist: { id: string; text: string; done: boolean }[];
  comments: { user: string; text: string }[];
  attachmentsCount: number;
}

const initialTasks: Task[] = [
  { id: 't1', title: "Revisar cláusulas do CT-219", type: 'Contrato', client: "Nivem Construtora", deadline: "12/10/25", priority: 'Alta', slaHours: 8, estimatedHours: 2, status: 'Em andamento', responsible: [{ name: 'Ana Faria' }, { name: 'João Lima' }], badges: ['anexos', 'comentarios'], checklist: [{id: 'c1', text: 'Verificar cláusula de multa', done: true}, {id: 'c2', text: 'Validar assinaturas', done: false}, {id: 'c3', text: 'Anexar certidões', done: false}], comments: [{user: 'Gestor', text: 'Prioridade máxima!'}], attachmentsCount: 2 },
  { id: 't2', title: "Petição inicial 1012456", type: 'Processo', client: "Mettri Arquitetura", deadline: "13/10/25", priority: 'Média', slaHours: 12, estimatedHours: 3, status: 'Em revisão', responsible: [{ name: 'Maria Souza' }], badges: ['ia'], checklist: [{id: 'c1', text: 'Coletar provas', done: true}, {id: 'c2', text: 'Redigir petição', done: true}, {id: 'c3', text: 'Protocolar', done: false}], comments: [], attachmentsCount: 1 },
  { id: 't3', title: "Emitir NFe honorários", type: 'Financeiro', client: "Terlla Incorporadora", deadline: "15/10/25", priority: 'Baixa', slaHours: 48, estimatedHours: 0.5, status: 'A fazer', responsible: [{ name: 'Sistema' }, { name: 'Carlos Dias' }], badges: ['recorrente'], checklist: [], comments: [], attachmentsCount: 0 },
  { id: 't4', title: "Coletar documentos cliente X", type: 'Contrato', client: "Cliente X", deadline: "10/10/25", priority: 'Alta', slaHours: 24, estimatedHours: 1, status: 'A fazer', responsible: [{ name: 'Ana Faria' }], badges: [], checklist: [{id: 'c1', text: 'Solicitar RG', done: false}, {id: 'c2', text: 'Solicitar CNH', done: false}], comments: [], attachmentsCount: 0 },
];

const getPriorityBadge = (priority: Task['priority']) => {
  if (priority === 'Alta') return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Alta</Badge>;
  if (priority === 'Média') return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Média</Badge>;
  return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟡 Baixa</Badge>;
};

const MinhaCaixa = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const handleSelectTask = (task: Task) => {
    setSelectedTask(task);
    setIsDrawerOpen(true);
  };

  const handleSaveTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsTaskModalOpen(false);
    showSuccess("Tarefa criada com sucesso!");
  };

  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Dashboard de Tarefas</h1>
            <p className="text-gray-400 max-w-3xl">Visão geral da produtividade, status e prioridades de todas as equipes.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => setIsTaskModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Tarefa</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Relatórios</Button>
            <Button variant="secondary"><Brain className="h-4 w-4 mr-2" /> Insights da IA</Button>
          </div>
        </header>

        <div className="space-y-6">
          <TaskDashboardKPIs />
          <TaskCharts />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UrgentTasksList tasks={tasks} />
            <Card className="bg-petroleum-blue border-gray-700 text-white">
              <CardHeader><CardTitle className="text-white text-base">Minhas Tarefas</CardTitle></CardHeader>
              <CardContent>
                <TaskList tasks={tasks.slice(0, 3)} onTaskClick={handleSelectTask} />
              </CardContent>
            </Card>
          </div>
        </div>
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
    </Layout>
  );
};

export default MinhaCaixa;