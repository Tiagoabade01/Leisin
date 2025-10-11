import React, { useState } from 'react';
import { DndContext, DragEndEvent, DragOverlay, closestCorners, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, useSortable, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, PlusCircle, Signature, Briefcase, DollarSign, FileText } from "lucide-react";
import { Task } from '@/pages/tarefas/MinhaCaixa';

export interface Column {
  id: string;
  title: string;
}

const getIconForType = (type: Task['type']) => {
  switch(type) {
    case 'Contrato': return <Signature className="h-4 w-4 text-gray-400" />;
    case 'Processo': return <Briefcase className="h-4 w-4 text-gray-400" />;
    case 'Financeiro': return <DollarSign className="h-4 w-4 text-gray-400" />;
    default: return <FileText className="h-4 w-4 text-gray-400" />;
  }
};

const getPriorityColor = (priority: Task['priority']) => {
  if (priority === 'Alta') return 'border-red-500';
  if (priority === 'Média') return 'border-yellow-500';
  return 'border-gray-600';
};

const TaskCard = ({ task, isOverlay, onClick }: { task: Task, isOverlay?: boolean, onClick?: (task: Task) => void }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id, data: { type: 'Task', task } });
  const style = { transition, transform: CSS.Transform.toString(transform), opacity: isDragging ? 0.5 : 1 };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} onClick={() => onClick && onClick(task)} className={`p-3 bg-gray-800 rounded-lg mb-3 shadow-md border-l-4 space-y-2 touch-none cursor-pointer hover:bg-gray-700/50 ${getPriorityColor(task.priority)} ${isOverlay ? 'ring-2 ring-primary' : ''}`}>
      <p className="font-semibold text-sm text-white leading-tight">{task.title}</p>
      <div className="flex justify-between items-center text-xs text-gray-400">
        <div className="flex items-center gap-2">
          {getIconForType(task.type)}
          <span>{task.client}</span>
        </div>
        <span className="font-mono">{task.deadline}</span>
      </div>
    </div>
  );
};

const TaskColumn = ({ column, tasks, onTaskClick }: { column: Column, tasks: Task[], onTaskClick: (task: Task) => void }) => {
  const { setNodeRef } = useSortable({ id: column.id, data: { type: 'Column', column } });
  return (
    <div ref={setNodeRef} className="w-72 flex-shrink-0">
      <div className="p-2 bg-petroleum-blue rounded-lg h-full flex flex-col">
        <h3 className="font-semibold text-gray-200 px-2 py-1">{column.title} <Badge variant="secondary">{tasks.length}</Badge></h3>
        <SortableContext items={tasks.map(t => t.id)}>
          <div className="flex-1 overflow-y-auto min-h-[100px] max-h-[calc(100vh-550px)] no-scrollbar p-2">
            {tasks.map(task => <TaskCard key={task.id} task={task} onClick={onTaskClick} />)}
          </div>
        </SortableContext>
      </div>
    </div>
  );
};

export const TarefasKanban = ({ tasks, columns, onDragEnd, onTaskClick }: { tasks: Task[], columns: Column[], onDragEnd: (event: DragEndEvent) => void, onTaskClick: (task: Task) => void }) => {
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));

  const handleDragStart = (event) => {
    if (event.active.data.current?.type === 'Task') {
      setActiveTask(event.active.data.current.task);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveTask(null);
    onDragEnd(event);
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
              onTaskClick={onTaskClick}
            />
          ))}
        </SortableContext>
        <DragOverlay>{activeTask ? <TaskCard task={activeTask} isOverlay /> : null}</DragOverlay>
      </DndContext>
    </div>
  );
};