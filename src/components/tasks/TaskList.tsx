import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Task } from '@/pages/tarefas/MinhaCaixa';
import { Signature, Briefcase, DollarSign, FileText } from "lucide-react";

const getPriorityBadge = (priority: Task['priority']) => {
  if (priority === 'Alta') return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Alta</Badge>;
  if (priority === 'Média') return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Média</Badge>;
  return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟡 Baixa</Badge>;
};

const getIconForType = (type: Task['type']) => {
  switch(type) {
    case 'Contrato': return <Signature className="h-4 w-4 text-gray-400" />;
    case 'Processo': return <Briefcase className="h-4 w-4 text-gray-400" />;
    case 'Financeiro': return <DollarSign className="h-4 w-4 text-gray-400" />;
    default: return <FileText className="h-4 w-4 text-gray-400" />;
  }
};

interface TaskListProps {
    tasks: Task[];
    onTaskClick: (task: Task) => void;
}

const TaskList = ({ tasks, onTaskClick }: TaskListProps) => {
    return (
        <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tarefa</TableHead><TableHead>Cliente/Objeto</TableHead><TableHead>Prazo</TableHead><TableHead>Prioridade</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
                {Array.isArray(tasks) && tasks.map(task => (
                    <TableRow key={task.id} onClick={() => onTaskClick(task)} className="cursor-pointer border-gray-700 hover:bg-gray-800/50">
                        <TableCell className="font-medium flex items-center gap-2">{getIconForType(task.type)} {task.title}</TableCell>
                        <TableCell>{task.client}</TableCell>
                        <TableCell>{task.deadline}</TableCell>
                        <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                        <TableCell>{task.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TaskList;