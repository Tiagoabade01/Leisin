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

const TarefasTimesheets = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);

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
          <TaskList />
          <Timesheet />
        </div>
        <div className="lg:col-span-1">
          <TaskAIHelper />
        </div>
      </div>

      {/* Modal Nova Tarefa */}
      <Dialog open={isTaskModalOpen} onOpenChange={setIsTaskModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Criar Nova Tarefa</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveTask}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="task-title">Título da Tarefa</Label><Input id="task-title" name="title" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="task-desc">Descrição</Label><Textarea id="task-desc" name="description" className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="task-responsible">Responsável</Label><Input id="task-responsible" name="responsible" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="task-deadline">Prazo</Label><Input id="task-deadline" name="deadline" type="date" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="task-link">Vincular a (Caso/Contrato)</Label><Input id="task-link" name="link" className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="task-hours">Horas Estimadas</Label><Input id="task-hours" name="hours" type="number" className="bg-gray-800 border-gray-600" /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsTaskModalOpen(false)}>Cancelar</Button><Button type="submit">Criar Tarefa</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Modal Registrar Hora */}
      <Dialog open={isTimeModalOpen} onOpenChange={setIsTimeModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Registrar Horas</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveTime}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="time-activity">Atividade</Label><Input id="time-activity" name="activity" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="time-link">Caso/Contrato</Label><Input id="time-link" name="link" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="time-hours">Horas Gastas</Label><Input id="time-hours" name="hours" type="number" step="0.1" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="time-date">Data</Label><Input id="time-date" name="date" type="date" className="bg-gray-800 border-gray-600" required /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsTimeModalOpen(false)}>Cancelar</Button><Button type="submit">Registrar</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TarefasTimesheets;