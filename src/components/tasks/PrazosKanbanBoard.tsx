import React, { useState, useRef, useEffect } from 'react';
import { DndContext, DragEndEvent, DragOverlay, closestCorners, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PlusCircle, ChevronLeft, ChevronRight, MessageSquare, Paperclip, CheckSquare, Calendar, Scale } from "lucide-react";
import { PrazoProcessual } from '@/pages/tarefas/PrazosProcessuais';
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { differenceInDays, parse } from 'date-fns';

const getInitials = (name: string = '') => name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();

const getUrgencyBadge = (urgency: PrazoProcessual['urgencia']) => {
  if (urgency === 'Crítico') return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Crítico</Badge>;
  if (urgency === 'Alta') return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Alta</Badge>;
  if (urgency === 'Média') return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">🟡 Média</Badge>;
  return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Baixa</Badge>;
};

const PrazoCard = ({ prazo, isOverlay, onClick }: { prazo: PrazoProcessual, isOverlay?: boolean, onClick?: (prazo: PrazoProcessual) => void }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: prazo.id, data: { type: 'Prazo', prazo } });
  const style = { transition, transform: CSS.Transform.toString(transform), opacity: isDragging ? 0.5 : 1 };

  const checklistProgress = prazo.tarefas.length > 0 ? (prazo.tarefas.filter(t => t.concluida).length / prazo.tarefas.length) * 100 : 0;

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} onClick={() => onClick && onClick(prazo)} className={`p-4 bg-gray-800 rounded-lg mb-3 shadow-lg border border-gray-700 space-y-3 touch-none cursor-pointer hover:bg-gray-700/50 ${isOverlay ? 'ring-2 ring-primary' : ''}`}>
      <div className="flex justify-between items-start">
        <p className="font-semibold text-base text-white leading-tight pr-2">{prazo.descricao}</p>
        {getUrgencyBadge(prazo.urgencia)}
      </div>
      <div className="text-xs text-gray-400 flex items-center gap-2"><Scale className="h-4 w-4" /><span>{prazo.processo}</span></div>
      
      {prazo.tarefas.length > 0 && (
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-gray-400">Checklist</span>
            <span className="font-semibold text-blue-400">{prazo.tarefas.filter(t => t.concluida).length}/{prazo.tarefas.length}</span>
          </div>
          <Progress value={checklistProgress} className="h-1 [&>*]:bg-blue-500" />
        </div>
      )}

      <div className="flex justify-between items-center pt-2 border-t border-gray-700/50">
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <div className="flex items-center gap-1"><MessageSquare className="h-4 w-4" /><span>{prazo.comentarios}</span></div>
          <div className="flex items-center gap-1"><Paperclip className="h-4 w-4" /><span>{prazo.anexos}</span></div>
          <div className="flex items-center gap-1"><Calendar className="h-4 w-4" /><span>{prazo.data}</span></div>
        </div>
        <div className="flex -space-x-2">
          {prazo.responsavel.map((user, index) => (
            <Avatar key={index} className="h-7 w-7 border-2 border-gray-800"><AvatarFallback className="text-xs bg-gray-600 text-gray-300">{getInitials(user)}</AvatarFallback></Avatar>
          ))}
        </div>
      </div>
    </div>
  );
};

const PrazoColumn = ({ column, prazos, onPrazoClick, onEditColumn, onDeleteColumn }) => {
  const { setNodeRef } = useSortable({ id: column.id, data: { type: 'Column' } });
  return (
    <div ref={setNodeRef} className="w-80 flex-shrink-0">
      <div className="p-2 bg-petroleum-blue rounded-lg flex flex-col">
        <div className="flex justify-between items-center px-2 py-1">
          <h3 className="font-semibold text-gray-200">{column.title} <Badge variant="secondary">{prazos.length}</Badge></h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="h-7 w-7"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 text-white border-gray-700">
              <DropdownMenuItem onClick={() => onEditColumn(column)}>Renomear</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDeleteColumn(column.id)} className="text-red-400 hover:!text-red-400">Excluir</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <SortableContext items={prazos.map(p => p.id)}>
          <div className="overflow-y-auto min-h-[100px] no-scrollbar p-2 max-h-[calc(100vh-450px)]">
            {prazos.map(prazo => <PrazoCard key={prazo.id} prazo={prazo} onClick={onPrazoClick} />)}
          </div>
        </SortableContext>
      </div>
    </div>
  );
};

const PrazosKanbanBoard = ({ prazos, columns, onDragEnd, onPrazoClick, onEditColumn, onDeleteColumn, onAddColumn }) => {
  const [activePrazo, setActivePrazo] = useState<PrazoProcessual | null>(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));

  const handleDragStart = (event) => {
    if (event.active.data.current?.type === 'Prazo') setActivePrazo(event.active.data.current.prazo);
  };

  return (
    <div className="flex items-start gap-4 overflow-x-auto pb-4 no-scrollbar h-full">
      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragStart={handleDragStart} onDragEnd={onDragEnd}>
        <SortableContext items={columns.map(c => c.id)}>
          {columns.map(col => (
            <PrazoColumn key={col.id} column={col} prazos={prazos.filter(p => p.status === col.id)} onPrazoClick={onPrazoClick} onEditColumn={onEditColumn} onDeleteColumn={onDeleteColumn} />
          ))}
        </SortableContext>
        <DragOverlay>{activePrazo ? <PrazoCard prazo={activePrazo} isOverlay /> : null}</DragOverlay>
      </DndContext>
      <div className="w-80 flex-shrink-0">
        <Button onClick={onAddColumn} variant="outline" className="w-full h-12 bg-gray-800/50 border-gray-700 border-dashed hover:bg-gray-800">
          <PlusCircle className="h-4 w-4 mr-2" /> Nova Coluna
        </Button>
      </div>
    </div>
  );
};

export default PrazosKanbanBoard;