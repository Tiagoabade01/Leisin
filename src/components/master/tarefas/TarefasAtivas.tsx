import React, { useState, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MoreHorizontal, List, LayoutGrid } from "lucide-react";
import { TarefasKanban, Task, Column } from './TarefasKanban';
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

const initialTasksData: Task[] = [
  { id: 'task-1', task: 'Emitir NFe do cliente X', area: 'Financeiro', responsible: 'Maria Lima', deadline: '11/10/25', status: 'Em andamento', type: 'Manual' },
  { id: 'task-2', task: 'Revalidar contrato da Terlla', area: 'Jurídico', responsible: 'Tiago Abade', deadline: '15/10/25', status: 'Pendente', type: 'Automática' },
  { id: 'task-3', task: 'Renovar licença do módulo IA', area: 'Master', responsible: 'João Vitor', deadline: '20/10/25', status: 'Concluída', type: 'Recorrente' },
];

const initialColumns: Column[] = [
  { id: 'Pendente', title: '🟡 Pendente' },
  { id: 'Em andamento', title: '🔵 Em Andamento' },
  { id: 'Concluída', title: '🟢 Concluída' },
];

const getStatusBadge = (status: string) => {
  const column = initialColumns.find(c => c.id === status);
  if (column) {
    if (status === 'Pendente') return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">{column.title}</Badge>;
    if (status === 'Em andamento') return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">{column.title}</Badge>;
    if (status === 'Concluída') return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{column.title}</Badge>;
  }
  return <Badge variant="secondary">{status}</Badge>;
};

const TarefasAtivas = ({ tasks, setTasks }) => {
  const [viewMode, setViewMode] = useState<'list' | 'kanban'>('list');
  const [columns, setColumns] = useState<Column[]>(initialColumns);
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
    } else {
      const newId = title.toLowerCase().replace(/\s+/g, '-');
      setColumns(prev => [...prev, { id: newId, title }]);
    }
    setIsColumnModalOpen(false);
  };

  const confirmDeleteColumn = () => {
    if (columnToDelete) {
      setColumns(prev => prev.filter(c => c.id !== columnToDelete));
      setColumnToDelete(null);
    }
  };

  return (
    <>
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
                {tasks.map(task => (
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
            <TarefasKanban
              tasks={tasks}
              columns={columns}
              onDragEnd={handleDragEnd}
              onEditColumn={handleOpenColumnModal}
              onDeleteColumn={setColumnToDelete}
              onAddColumn={() => handleOpenColumnModal()}
            />
          )}
        </CardContent>
      </Card>

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
    </>
  );
};

export default TarefasAtivas;