import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, BarChart2, BrainCircuit } from "lucide-react";
import TaskDashboard from '@/components/crm/TaskDashboard';
import TaskAIInsights from '@/components/crm/TaskAIInsights';
import { showSuccess } from '@/utils/toast';

const initialTasks = [
  { id: 1, desc: "Enviar minuta revisada", type: "Jurídico", resp: "Dr. Ricardo", client: "Banco Futura", venc: "13/10/25", status: "Em andamento" },
  { id: 2, desc: "Ligar para cliente Atlas", type: "Comercial", resp: "Dra. Larissa", client: "Construtora Atlas", venc: "12/10/25", status: "Atrasada" },
  { id: 3, desc: "Revisar contrato padrão", type: "Jurídico", resp: "Dr. Felipe", client: "Global Partner", venc: "15/10/25", status: "Agendada" },
  { id: 4, desc: "Follow-up reunião T3 Select", type: "Comercial", resp: "Dr. João", client: "T3 Select", venc: "11/10/25", status: "Pendente" },
];

const getStatusBadge = (status: string) => {
  if (status === "Em andamento") return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">🟠 Em andamento</Badge>;
  if (status === "Atrasada") return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Atrasada</Badge>;
  if (status === "Agendada") return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">🔵 Agendada</Badge>;
  if (status === "Pendente") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Pendente</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const TarefasFollowups = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    showSuccess("Tarefa criada com sucesso!");
  };

  return (
    <Layout>
      <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Tarefas e Follow-ups</h1>
            <p className="text-gray-400 max-w-3xl">
              Gerencie compromissos, prazos e atividades de relacionamento jurídico com automação, integração e inteligência de execução.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => setIsModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Tarefa</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700">Gerar Follow-up</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> IA Analisar</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Exportar</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <TaskDashboard />
            <Card className="bg-petroleum-blue border-gray-700 text-white">
              <CardHeader><CardTitle className="text-white">Lista de Tarefas</CardTitle></CardHeader>
              <CardContent>
                <Table>
                  <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Descrição</TableHead><TableHead>Tipo</TableHead><TableHead>Responsável</TableHead><TableHead>Cliente</TableHead><TableHead>Vencimento</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                  <TableBody>
                    {initialTasks.map(task => (
                      <TableRow key={task.id} className="border-gray-700">
                        <TableCell>{task.desc}</TableCell>
                        <TableCell>{task.type}</TableCell>
                        <TableCell>{task.resp}</TableCell>
                        <TableCell>{task.client}</TableCell>
                        <TableCell>{task.venc}</TableCell>
                        <TableCell>{getStatusBadge(task.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <TaskAIInsights />
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Nova Tarefa</DialogTitle></DialogHeader>
          <form onSubmit={handleSave}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="desc">Descrição</Label><Input id="desc" name="desc" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="resp">Responsável</Label><Input id="resp" name="resp" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="client">Cliente</Label><Input id="client" name="client" className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="venc">Vencimento</Label><Input id="venc" name="venc" type="date" className="bg-gray-800 border-gray-600" required /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Criar Tarefa</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default TarefasFollowups;