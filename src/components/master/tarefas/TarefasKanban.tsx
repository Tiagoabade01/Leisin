import React, { useState } from 'react';
import { DndContext, DragEndEvent, DragOverlay, closestCorners, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, useSortable, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";

// Types
interface Task {
  id: number;
  task: string;
  area: string;
  responsible: string;
  deadline: string;
  status: 'Pendente' | 'Em andamento' | 'Concluída';
  type: string;
}

interface Column {
  id: 'Pendente' | 'Em andamento' | 'Concluída';
  title: string;
}

const initialTasksData: Task[] = [
  { id: 1, task: 'Emitir NFe do cliente X', area: 'Financeiro', responsible: 'Maria Lima', deadline: '11/10/25', status: 'Em andamento', type: 'Manual' },
  { id: 2, task: 'Revalidar contrato da Terlla', area: 'Jurídico', responsible: 'Tiago Abade', deadline: '15/10/25', status: 'Pendente', type: 'Automática' },
  { id: 3, task: 'Renovar licença do módulo IA', area: 'Master', responsible: 'João Vitor', deadline: '20/10/25', status: 'Concluída', type: 'Recorrente' },
  { id: 4, task: 'Follow-up com Advocacia Pontes', area: 'Comercial', responsible: 'Ana Silva', deadline: '12/10/25', status: 'Pendente', type: 'Manual' },
  { id: 5, task: 'Verificar log de erros da API', area: 'Master', responsible: 'João Vitor', deadline: '11/10/25', status: 'Em andamento', type: 'Automática' },
];

const columns: Column[] = [
  { id: 'Pendente', title: '🟡 Pendente' },
  { id: 'Em andamento', title: '🔵 Em Andamento' },
  { id: 'Concluída', title: '🟢 Concluída' },
];

const getInitials = (name: string = '') => name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();

// Task Card Component
const TaskCard = ({ task, isOverlay }: { task: Task, isOverlay?: boolean }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id, data: { type: 'Task', task } });
  const style = { transition, transform: CSS.Transform.toString(transform), opacity: isDragging ? 0.5 : 1 };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={`p-3 bg-gray-700 rounded-lg mb-3 shadow-md border border-gray-600/50 space-y-2 touch-none ${isOverlay ? 'ring-2 ring-primary' : ''}`}>
      <p className="font-semibold text-sm text-white leading-tight">{task.task}</p>
      <div className="flex justify-between items-center text-xs">
        <Badge variant="secondary">{task.area}</Badge>
        <span className="text-red-400">{task.deadline}</span>
      </div>
      <div className="flex justify-between items-center pt-2 border-t border-gray-600/50">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6"><AvatarFallback className="text-xs bg-gray-600 text-gray-300">{getInitials(task.responsible)}</AvatarFallback></Avatar>
          <span className="text-xs text-gray-300">{task.responsible}</span>
        </div>
        <MoreHorizontal className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
};

// Column Component
const TaskColumn = ({ column, tasks }: { column: Column, tasks: Task[] }) => {
  const { setNodeRef } = useSortable({ id: column.id, data: { type: 'Column', column } });
  return (
    <div ref={setNodeRef} className="w-80 flex-shrink-0">
      <div className="p-4 bg-gray-900/50 rounded-lg h-full flex flex-col">
        <h3 className="font-semibold text-gray-200 mb-4">{column.title} ({tasks.length})</h3>
        <SortableContext items={tasks.map(t => t.id)}>
          <div className="flex-1 overflow-y-auto min-h-[100px] max-h-[calc(100vh-450px)] no-scrollbar">
            {tasks.map(task => <TaskCard key={task.id} task={task} />)}
          </div>
        </SortableContext>
      </div>
    </div>
  );
};

// Main Kanban Board Component
export const TarefasKanban = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasksData);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));

  const handleDragStart = (event) => {
    if (event.active.data.current?.type === 'Task') {
      setActiveTask(event.active.data.current.task);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveTask(null);
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === 'Task';
    const isOverAColumn = over.data.current?.type === 'Column';

    if (isActiveATask && isOverAColumn) {
      setTasks(prev => {
        const activeIndex = prev.findIndex(t => t.id === activeId);
        prev[activeIndex].status = overId as Task['status'];
        return [...prev];
      });
    }

    const isOverATask = over.data.current?.type === 'Task';
    if (isActiveATask && isOverATask) {
        setTasks(prev => {
            const activeIndex = prev.findIndex(t => t.id === activeId);
            const overIndex = prev.findIndex(t => t.id === overId);
            if (prev[activeIndex].status !== prev[overIndex].status) {
                prev[activeIndex].status = prev[overIndex].status;
                return arrayMove(prev, activeIndex, overIndex - 1);
            }
            return arrayMove(prev, activeIndex, overIndex);
        });
    }
  };

  return (
    <div className="flex items-start gap-4 overflow-x-auto pb-4 no-scrollbar">
      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <SortableContext items={columns.map(c => c.id)}>
          {columns.map(col => (
            <TaskColumn
              key={col.id}
              column={col}
              tasks={tasks.filter(task => task.status === col.id)}
            />
          ))}
        </SortableContext>
        <DragOverlay>{activeTask ? <TaskCard task={activeTask} isOverlay /> : null}</DragOverlay>
      </DndContext>
    </div>
  );
};