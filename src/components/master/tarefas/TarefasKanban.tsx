import React, { useState } from 'react';
import { DndContext, DragEndEvent, DragOverlay, closestCorners, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, useSortable, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, PlusCircle } from "lucide-react";

// Types
export interface Task {
  id: string;
  task: string;
  area: string;
  responsible: string;
  deadline: string;
  status: string; // Agora é uma string para suportar colunas customizadas
  type: string;
}

export interface Column {
  id: string;
  title: string;
}

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
const TaskColumn = ({ column, tasks, onEditColumn, onDeleteColumn }: { column: Column, tasks: Task[], onEditColumn: (col: Column) => void, onDeleteColumn: (id: string) => void }) => {
  const { setNodeRef } = useSortable({ id: column.id, data: { type: 'Column', column } });
  return (
    <div ref={setNodeRef} className="w-80 flex-shrink-0">
      <div className="p-4 bg-gray-900/50 rounded-lg h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-200">{column.title} ({tasks.length})</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="h-7 w-7"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 text-white border-gray-700">
              <DropdownMenuItem onClick={() => onEditColumn(column)}>Renomear</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDeleteColumn(column.id)} className="text-red-500 hover:!text-red-400">Excluir</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
export const TarefasKanban = ({ tasks, columns, onDragEnd, onEditColumn, onDeleteColumn, onAddColumn }: { tasks: Task[], columns: Column[], onDragEnd: (event: DragEndEvent) => void, onEditColumn: (col: Column) => void, onDeleteColumn: (id: string) => void, onAddColumn: () => void }) => {
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));

  const handleDragStart = (event) => {
    if (event.active.data.current?.type === 'Task') {
      setActiveTask(event.active.data.current.task);
    }
  };

  return (
    <div className="flex items-start gap-4 overflow-x-auto pb-4 no-scrollbar">
      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragStart={handleDragStart} onDragEnd={onDragEnd}>
        <SortableContext items={columns.map(c => c.id)}>
          {columns.map(col => (
            <TaskColumn
              key={col.id}
              column={col}
              tasks={tasks.filter(task => task.status === col.id)}
              onEditColumn={onEditColumn}
              onDeleteColumn={onDeleteColumn}
            />
          ))}
        </SortableContext>
        <DragOverlay>{activeTask ? <TaskCard task={activeTask} isOverlay /> : null}</DragOverlay>
      </DndContext>
      <div className="w-80 flex-shrink-0">
        <Button onClick={onAddColumn} variant="outline" className="w-full h-12 bg-gray-800/50 border-gray-700 border-dashed hover:bg-gray-800">
          <PlusCircle className="h-4 w-4 mr-2" /> Nova Coluna
        </Button>
      </div>
    </div>
  );
};