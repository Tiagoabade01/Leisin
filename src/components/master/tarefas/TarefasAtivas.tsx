import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, List, LayoutGrid } from "lucide-react";
import { TarefasKanban } from './TarefasKanban';

const tasksData = [
  { id: 1, task: 'Emitir NFe do cliente X', area: 'Financeiro', responsible: 'Maria Lima', deadline: '11/10/25', status: 'Em andamento', type: 'Manual' },
  { id: 2, task: 'Revalidar contrato da Terlla', area: 'Jurídico', responsible: 'Tiago Abade', deadline: '15/10/25', status: 'Pendente', type: 'Automática' },
  { id: 3, task: 'Renovar licença do módulo IA', area: 'Master', responsible: 'João Vitor', deadline: '20/10/25', status: 'Concluída', type: 'Recorrente' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Pendente': return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Pendente</Badge>;
    case 'Em andamento': return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">🔵 Em andamento</Badge>;
    case 'Concluída': return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Concluída</Badge>;
    default: return <Badge variant="secondary">{status}</Badge>;
  }
};

const TarefasAtivas = () => {
  const [viewMode, setViewMode] = useState<'list' | 'kanban'>('list');

  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">Tarefas Ativas</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('list')}><List className="h-4 w-4" /></Button>
            <Button variant={viewMode === 'kanban' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('kanban')}><LayoutGrid className="h-4 w-4" /></Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {viewMode === 'list' ? (
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800/50"><TableHead className="text-gray-200">Tarefa</TableHead><TableHead className="text-gray-200">Área</TableHead><TableHead className="text-gray-200">Responsável</TableHead><TableHead className="text-gray-200">Prazo</TableHead><TableHead className="text-gray-200">Status</TableHead><TableHead className="text-gray-200">Tipo</TableHead><TableHead className="text-right text-gray-200">Ações</TableHead></TableRow></TableHeader>
            <TableBody>
              {tasksData.map(task => (
                <TableRow key={task.id} className="border-gray-700">
                  <TableCell className="font-medium">{task.task}</TableCell>
                  <TableCell>{task.area}</TableCell>
                  <TableCell>{task.responsible}</TableCell>
                  <TableCell>{task.deadline}</TableCell>
                  <TableCell>{getStatusBadge(task.status)}</TableCell>
                  <TableCell>{task.type}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Duplicar</DropdownMenuItem>
                        <DropdownMenuItem>Marcar como Concluída</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <TarefasKanban />
        )}
      </CardContent>
    </Card>
  );
};

export default TarefasAtivas;