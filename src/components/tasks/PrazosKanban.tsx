import React, { useState } from 'react';
import { DndContext, DragEndEvent, DragOverlay, closestCorners, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { MoreHorizontal, PlusCircle, Scale } from "lucide-react";
import { differenceInDays, parse } from 'date-fns';

interface Prazo {
  id: string;
  processo: string;
  descricao: string;
  responsavel: string;
  data: string; // "dd/MM/yy"
  status: string;
}

const getUrgencyColor = (dateStr: string) => {
  const deadline = parse(dateStr, 'dd/MM/yy', new Date());
  const today = new Date();
  const daysDiff = differenceInDays(deadline, today);

  if (daysDiff < 0) return 'border-red-500'; // Atrasado
  if (daysDiff <= 2) return 'border-red-400'; // Vence em 2 dias
  if (daysDiff <= 7) return 'border-yellow-500'; // Vence na semana
  return 'border-gray-600'; // Normal
};

const PrazoCard = ({ prazo, isOverlay }: { prazo: Prazo, isOverlay?: boolean }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: prazo.id, data: { type: 'Prazo', prazo } });
  const style = { transition, transform: CSS.Transform.toString(transform), opacity: isDragging ? 0.5 : 1 };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={`p-3 bg-gray-800 rounded-lg mb-3 shadow-md border-l-4 space-y-2 touch-none ${getUrgencyColor(prazo.data)} ${isOverlay ? 'ring-2 ring-primary' : ''}`}>
      <p className="font-semibold text-sm text-white leading-tight">{prazo.descricao}</p>
      <div className="flex justify-between items-center text-xs text-gray-400">
        <div className="flex items-center gap-2"><Scale className="h-4 w-4" /><span>{prazo.processo}</span></div>
        <span className="font-mono">{prazo.data}</span>
      </div>
    </div>
  );
};

const PrazoColumn = ({ column, prazos }) => {
  const { setNodeRef } = useSortable({ id: column.id, data: { type: 'Column' } });
  return (
    <div ref={setNodeRef} className="w-72 flex-shrink-0">
      <div className="p-2 bg-petroleum-blue rounded-lg h-full flex flex-col">
        <h3 className="font-semibold text-gray-200 px-2 py-1">{column.title} <Badge variant="secondary">{prazos.length}</Badge></h3>
        <SortableContext items={prazos.map(p => p.id)}>
          <div className="flex-1 overflow-y-auto min-h-[100px] max-h-[calc(100vh-550px)] no-scrollbar p-2">
            {prazos.map(prazo => <PrazoCard key={prazo.id} prazo={prazo} />)}
          </div>
        </SortableContext>
      </div>
    </div>
  );
};

const PrazosKanban = ({ prazos, columns, onDragEnd }) => {
  const [activePrazo, setActivePrazo] = useState<Prazo | null>(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));

  const handleDragStart = (event) => {
    if (event.active.data.current?.type === 'Prazo') setActivePrazo(event.active.data.current.prazo);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActivePrazo(null);
    onDragEnd(event);
  };

  return (
    <div className="flex items-start gap-4 overflow-x-auto pb-4 no-scrollbar">
      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <SortableContext items={columns.map(c => c.id)}>
          {columns.map(col => (
            <PrazoColumn key={col.id} column={col} prazos={prazos.filter(p => p.status === col.id)} />
          ))}
        </SortableContext>
        <DragOverlay>{activePrazo ? <PrazoCard prazo={activePrazo} isOverlay /> : null}</DragOverlay>
      </DndContext>
    </div>
  );
};

export default PrazosKanban;