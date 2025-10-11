import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { showSuccess } from '@/utils/toast';
import { PlusCircle, BarChart2, Brain } from "lucide-react";
import TaskDashboardKPIs from '@/components/tasks/TaskDashboardKPIs';
import TaskCharts from '@/components/tasks/TaskCharts';
import UrgentTasksList from '@/components/tasks/UrgentTasksList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TaskList from '@/components/tasks/TaskList';

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

const MinhaCaixa = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

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
                <TaskList tasks={tasks.slice(0, 3)} onTaskClick={() => {}} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Dialog open={isTaskModalOpen} onOpenChange={setIsTaskModalOpen}><DialogContent className="bg-gray-900 text-white border-gray-700"><DialogHeader><DialogTitle>Nova Tarefa</DialogTitle></DialogHeader><form onSubmit={handleSaveTask}><div className="py-4 space-y-3"><div className="space-y-1"><Label>Título</Label><Input name="title" required /></div><div className="space-y-1"><Label>Cliente</Label><Input name="client" /></div><div className="space-y-1"><Label>Prazo</Label><Input name="deadline" type="date" /></div></div><DialogFooter><Button type="button" variant="ghost" onClick={() => setIsTaskModalOpen(false)}>Cancelar</Button><Button type="submit">Criar</Button></DialogFooter></form></DialogContent></Dialog>
    </Layout>
  );
};

export default MinhaCaixa;