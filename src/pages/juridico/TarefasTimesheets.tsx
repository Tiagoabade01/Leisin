import React, { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Clock, BarChart2, Brain } from "lucide-react";
import ProductivityDashboard from "@/components/tasks/ProductivityDashboard";
import TaskList from "@/components/tasks/TaskList";
import Timesheet from "@/components/tasks/Timesheet";
import TaskAIHelper from "@/components/tasks/TaskAIHelper";
import { showSuccess } from '@/utils/toast';
import { Task } from '@/pages/tarefas/MinhaCaixa';
import EnhancedTaskModal from '@/components/tasks/EnhancedTaskModal';
import EnhancedTimeModal from '@/components/tasks/EnhancedTimeModal';

const initialTasks: Task[] = [
  { id: 't1', title: "Revisar cláusulas do CT-219", type: 'Contrato', client: "Nivem Construtora", deadline: "12/10/25", priority: 'Alta', slaHours: 8, estimatedHours: 2, status: 'Em andamento', responsible: [{ name: 'Ana Faria' }, { name: 'João Lima' }], badges: ['anexos', 'comentarios'], checklist: [{id: 'c1', text: 'Verificar cláusula de multa', done: true}, {id: 'c2', text: 'Validar assinaturas', done: false}, {id: 'c3', text: 'Anexar certidões', done: false}], comments: [{user: 'Gestor', text: 'Prioridade máxima!'}], attachmentsCount: 2 },
  { id: 't2', title: "Petição inicial 1012456", type: 'Processo', client: "Mettri Arquitetura", deadline: "13/10/25", priority: 'Média', slaHours: 12, estimatedHours: 3, status: 'Em revisão', responsible: [{ name: 'Maria Souza' }], badges: ['ia'], checklist: [{id: 'c1', text: 'Coletar provas', done: true}, {id: 'c2', text: 'Redigir petição', done: true}, {id: 'c3', text: 'Protocolar', done: false}], comments: [], attachmentsCount: 1 },
  { id: 't3', title: "Emitir NFe honorários", type: 'Financeiro', client: "Terlla Incorporadora", deadline: "15/10/25", priority: 'Baixa', slaHours: 48, estimatedHours: 0.5, status: 'A fazer', responsible: [{ name: 'Sistema' }, { name: 'Carlos Dias' }], badges: ['recorrente'], checklist: [], comments: [], attachmentsCount: 0 },
];

const TarefasTimesheets = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);

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

  const handleTaskClick = (task: Task) => {
    console.log("Task clicked:", task);
    // In a future implementation, this could open a detail view.
  };

  return (
    <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Tarefas & Timesheets</h1>
          <p className="text-gray-400 max-w-3xl">
            Controle total de produtividade e execução jurídica — tarefas inteligentes, automações e timesheets com IA.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => setIsTaskModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Tarefa</Button>
          <Button onClick={() => setIsTimeModalOpen(true)} variant="outline" className="bg-petroleum-blue border-gray-700"><Clock className="h-4 w-4 mr-2" /> Registrar Hora</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Relatório de produtividade gerado.")}><BarChart2 className="h-4 w-4 mr-2" /> Relatório de Produtividade</Button>
          <Button variant="secondary" onClick={() => showSuccess("IA Assistente ativado.")}><Brain className="h-4 w-4 mr-2" /> IA Assistente</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <ProductivityDashboard />
          <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
          <Timesheet />
        </div>
        <div className="lg:col-span-1">
          <TaskAIHelper />
        </div>
      </div>

      {/* Modal Nova Tarefa (Robusto) */}
      <EnhancedTaskModal open={isTaskModalOpen} onOpenChange={setIsTaskModalOpen} onSave={() => { setIsTaskModalOpen(false); showSuccess("Tarefa criada com sucesso!"); }} />

      {/* Modal Registrar Hora (Robusto) */}
      <EnhancedTimeModal open={isTimeModalOpen} onOpenChange={setIsTimeModalOpen} onSave={() => { setIsTimeModalOpen(false); showSuccess("Horas registradas com sucesso!"); }} />
    </div>
  );
};

export default TarefasTimesheets;