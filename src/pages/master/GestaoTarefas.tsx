import React, { useState, FormEvent } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Zap, BarChart2, Settings } from "lucide-react";
import VisaoGeralTarefas from "@/components/master/tarefas/VisaoGeralTarefas";
import TarefasAtivas from "@/components/master/tarefas/TarefasAtivas";
import TarefasAutomaticas from "@/components/master/tarefas/TarefasAutomaticas";
import CalendarioCronogramas from "@/components/master/tarefas/CalendarioCronogramas";
import RelatoriosIndicadores from "@/components/master/tarefas/RelatoriosIndicadores";
import AutomacaoPlaybooks from "@/components/master/tarefas/AutomacaoPlaybooks";
import { Task } from '@/components/master/tarefas/TarefasKanban';

const initialTasksData: Task[] = [
  { id: 'task-1', task: 'Emitir NFe do cliente X', area: 'Financeiro', responsible: 'Maria Lima', deadline: '11/10/25', status: 'Em andamento', type: 'Manual' },
  { id: 'task-2', task: 'Revalidar contrato da Terlla', area: 'Jurídico', responsible: 'Tiago Abade', deadline: '15/10/25', status: 'Pendente', type: 'Automática' },
  { id: 'task-3', task: 'Renovar licença do módulo IA', area: 'Master', responsible: 'João Vitor', deadline: '20/10/25', status: 'Concluída', type: 'Recorrente' },
];

const GestaoTarefas = () => {
  const [activeTab, setActiveTab] = useState('visao_geral');
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(initialTasksData);

  const handleSaveTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTask: Task = {
      id: `task-${Date.now()}`,
      task: formData.get('task') as string,
      area: formData.get('area') as string,
      responsible: formData.get('responsible') as string,
      deadline: new Date(formData.get('deadline') as string).toLocaleDateString('pt-BR'),
      status: 'Pendente',
      type: 'Manual',
    };
    setTasks(prev => [...prev, newTask]);
    setIsTaskModalOpen(false);
  };

  return (
    <div className="p-6 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Gestão de Tarefas</h1>
          <p className="text-gray-300 max-w-3xl">O centro operacional do ecossistema — onde tudo o que acontece dentro da T3 é rastreável, priorizado e automatizado.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => setIsTaskModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Tarefa</Button>
          <Button onClick={() => setActiveTab('automacao')} variant="outline" className="bg-gray-800 border-gray-700"><Zap className="h-4 w-4 mr-2" /> Criar Playbook</Button>
          <Button onClick={() => setActiveTab('relatorios')} variant="outline" className="bg-gray-800 border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Relatórios</Button>
          <Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-gray-800">
          <TabsTrigger value="visao_geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="ativas">Tarefas Ativas</TabsTrigger>
          <TabsTrigger value="automaticas">Tarefas Automáticas</TabsTrigger>
          <TabsTrigger value="calendario">Calendário</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          <TabsTrigger value="automacao">Automação</TabsTrigger>
        </TabsList>

        <TabsContent value="visao_geral" className="mt-6"><VisaoGeralTarefas /></TabsContent>
        <TabsContent value="ativas" className="mt-6"><TarefasAtivas tasks={tasks} setTasks={setTasks} /></TabsContent>
        <TabsContent value="automaticas" className="mt-6"><TarefasAutomaticas /></TabsContent>
        <TabsContent value="calendario" className="mt-6"><CalendarioCronogramas /></TabsContent>
        <TabsContent value="relatorios" className="mt-6"><RelatoriosIndicadores /></TabsContent>
        <TabsContent value="automacao" className="mt-6"><AutomacaoPlaybooks /></TabsContent>
      </Tabs>

      <Dialog open={isTaskModalOpen} onOpenChange={setIsTaskModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Criar Nova Tarefa</DialogTitle></DialogHeader>
          <form onSubmit={handleSaveTask}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="task">Tarefa</Label><Input id="task" name="task" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="area">Área</Label>
                <Select name="area" required><SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue placeholder="Selecione a área" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="Financeiro">Financeiro</SelectItem><SelectItem value="Jurídico">Jurídico</SelectItem><SelectItem value="Comercial">Comercial</SelectItem><SelectItem value="Master">Master</SelectItem></SelectContent></Select>
              </div>
              <div className="space-y-2"><Label htmlFor="responsible">Responsável</Label>
                <Select name="responsible" required><SelectTrigger className="bg-gray-800 border-gray-600"><SelectValue placeholder="Selecione o responsável" /></SelectTrigger><SelectContent className="bg-gray-800 text-white border-gray-700"><SelectItem value="Maria Lima">Maria Lima</SelectItem><SelectItem value="Tiago Abade">Tiago Abade</SelectItem><SelectItem value="João Vitor">João Vitor</SelectItem><SelectItem value="Ana Silva">Ana Silva</SelectItem></SelectContent></Select>
              </div>
              <div className="space-y-2"><Label htmlFor="deadline">Prazo</Label><Input id="deadline" name="deadline" type="date" className="bg-gray-800 border-gray-600" required /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsTaskModalOpen(false)}>Cancelar</Button><Button type="submit">Criar Tarefa</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GestaoTarefas;