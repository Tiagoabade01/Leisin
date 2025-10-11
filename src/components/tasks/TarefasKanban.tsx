import React, { useState, useRef, useEffect } from 'react';
import { DndContext, DragEndEvent, DragOverlay, closestCorners, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, useSortable, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, PlusCircle, Signature, Briefcase, DollarSign, FileText, ChevronLeft, ChevronRight, MessageSquare, Paperclip, CheckSquare, Calendar } from "lucide-react";
import { Task } from '@/pages/tarefas/MinhaCaixa';
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface Column {
  id: string;
  title: string;
}

const getInitials = (name: string = '') => name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();

const TaskCard = ({ task, isOverlay, onClick }: { task: Task, isOverlay?: boolean, onClick?: (task: Task) => void }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id, data: { type: 'Task', task } });
  const style = { transition, transform: CSS.Transform.toString(transform), opacity: isDragging ? 0.5 : 1 };

  const progress = task.checklist.length > 0 
    ? (task.checklist.filter(item => item.done).length / task.checklist.length) * 100 
    : task.status === 'Concluída' ? 100 : 0;

  const commentsCount = task.comments.length;
  const attachmentsCount = task.attachmentsCount || 0;

  const progressColor = () => {
    if (progress === 100) return "[&>*]:bg-green-500";
    if (progress > 50) return "[&>*]:bg-blue-500";
    return "[&>*]:bg-yellow-500";
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} onClick={() => onClick && onClick(task)} className={`p-4 bg-gray-800 rounded-lg mb-3 shadow-lg border border-gray-700 space-y-4 touch-none cursor-pointer hover:bg-gray-700/50 ${isOverlay ? 'ring-2 ring-primary' : ''}`}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Calendar className="h-4 w-4" />
          <span>{task.deadline}</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-white">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-900 text-white border-gray-700">
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>Excluir</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Title */}
      <p className="font-semibold text-base text-white leading-tight">{task.title}</p>

      {/* Progress Bar */}
      <div>
        <div className="flex justify-between items-center text-xs mb-1">
          <span className="text-gray-400">Progresso</span>
          <span className={`font-semibold ${progress === 100 ? 'text-green-400' : 'text-blue-400'}`}>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className={`h-2 ${progressColor()}`} />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>{commentsCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <Paperclip className="h-4 w-4" />
            <span>{attachmentsCount}</span>
          </div>
        </div>
        <div className="flex -space-x-2">
          {task.responsible.map((user, index) => (
            <Avatar key={index} className="h-7 w-7 border-2 border-gray-800">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="text-xs bg-gray-600 text-gray-300">{getInitials(user.name)}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </div>
  );
};

const TaskColumn = ({ column, tasks, onTaskClick, onEditColumn, onDeleteColumn }: { column: Column, tasks: Task[], onTaskClick: (task: Task) => void, onEditColumn: (col: Column) => void, onDeleteColumn: (id: string) => void }) => {
  const { setNodeRef } = useSortable({ id: column.id, data: { type: 'Column', column } });
  return (
    <div ref={setNodeRef} className="w-80 flex-shrink-0">
      <div className="p-2 bg-petroleum-blue rounded-lg h-full flex flex-col">
        <div className="flex justify-between items-center px-2 py-1">
          <h3 className="font-semibold text-gray-200">{column.title} <Badge variant="secondary">{tasks.length}</Badge></h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="h-7 w-7"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 text-white border-gray-700">
              <DropdownMenuItem onClick={() => onEditColumn(column)}>Renomear</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDeleteColumn(column.id)} className="text-red-500 hover:!text-red-400">Excluir</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <SortableContext items={tasks.map(t => t.id)}>
          <div className="flex-1 overflow-y-auto min-h-[100px] no-scrollbar p-2">
            {tasks.map(task => <TaskCard key={task.id} task={task} onClick={onTaskClick} />)}
          </div>
        </SortableContext>
      </div>
    </div>
  );
};

export const TarefasKanban = ({ tasks, columns, onDragEnd, onTaskClick, onEditColumn, onDeleteColumn, onAddColumn }: { tasks: Task[], columns: Column[], onDragEnd: (event: DragEndEvent) => void, onTaskClick: (task: Task) => void, onEditColumn: (col: Column) => void, onDeleteColumn: (id: string) => void, onAddColumn: () => void }) => {
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    handleScroll();
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [columns, tasks]);

  const scroll = (direction: 'left' | 'right') => {
    scrollContainerRef.current?.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  };

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
    <div className="relative h-full">
      {showLeftScroll && (
        <Button onClick={() => scroll('left')} size="icon" className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full h-8 w-8 bg-gray-800/50 hover:bg-gray-800">
          <ChevronLeft className="h-5 w-5" />
        </Button>
      )}
      <div ref={scrollContainerRef} className="flex items-stretch gap-4 overflow-x-auto pb-4 no-scrollbar h-full">
        <DndContext sensors={sensors} collisionDetection={closestCorners} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <SortableContext items={columns.map(c => c.id)}>
            {columns.map(col => (
              <TaskColumn
                key={col.id}
                column={col}
                tasks={tasks.filter(task => task.status === col.id)}
                onTaskClick={onTaskClick}
                onEditColumn={onEditColumn}
                onDeleteColumn={onDeleteColumn}
              />
            ))}
          </SortableContext>
          <DragOverlay>{activeTask ? <TaskCard task={activeTask} isOverlay /> : null}</DragOverlay>
        </DndContext>
      </div>
      {showRightScroll && (
        <Button onClick={() => scroll('right')} size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full h-8 w-8 bg-gray-800/50 hover:bg-gray-800">
          <ChevronRight className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};