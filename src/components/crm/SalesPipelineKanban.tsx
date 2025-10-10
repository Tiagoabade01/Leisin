import React, { useState } from 'react';
import { DndContext, DragEndEvent, closestCorners } from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreVertical, PlusCircle, Trash2 } from 'lucide-react';

// Tipos
interface Opportunity {
  id: string;
  title: string;
  client: string;
  value: number;
}

interface Stage {
  id: string;
  title: string;
  opportunities: Opportunity[];
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

// Componente do Cartão (Oportunidade)
const OpportunityCard = ({ opportunity }: { opportunity: Opportunity }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: opportunity.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-3 bg-gray-700 rounded-md mb-3 touch-none">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-medium text-sm">{opportunity.title}</p>
          <p className="text-xs text-gray-400">{opportunity.client}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="h-6 w-6"><MoreVertical className="h-4 w-4" /></Button></DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 text-white border-gray-700">
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">Excluir</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p className="text-sm font-bold mt-2">{formatCurrency(opportunity.value)}</p>
    </div>
  );
};

// Componente da Coluna (Etapa)
const StageColumn = ({ stage }: { stage: Stage }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: stage.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const totalValue = stage.opportunities.reduce((sum, op) => sum + op.value, 0);

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="w-72 flex-shrink-0">
      <div className="p-4 bg-gray-900/50 rounded-lg h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-semibold text-gray-300">{stage.title}</h3>
            <p className="text-sm text-green-400 font-mono">{formatCurrency(totalValue)}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="h-7 w-7"><MoreVertical className="h-4 w-4" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 text-white border-gray-700">
              <DropdownMenuItem>Renomear</DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">Excluir Coluna</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <SortableContext items={stage.opportunities.map(op => op.id)}>
          <div className="flex-1 overflow-y-auto">
            {stage.opportunities.map(op => <OpportunityCard key={op.id} opportunity={op} />)}
          </div>
        </SortableContext>
        <Button variant="ghost" className="w-full mt-3 text-gray-400"><PlusCircle className="w-4 h-4 mr-2" /> Adicionar Oportunidade</Button>
      </div>
    </div>
  );
};

// Componente Principal do Kanban
export const SalesPipelineKanban = ({ stages, setStages }: { stages: Stage[], setStages: React.Dispatch<React.SetStateAction<Stage[]>> }) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const activeStage = stages.find(stage => stage.opportunities.some(op => op.id === activeId));
    const overStage = stages.find(stage => stage.opportunities.some(op => op.id === overId) || stage.id === overId);

    if (!activeStage || !overStage) return;

    setStages(prevStages => {
      const activeItems = activeStage.opportunities;
      const overItems = overStage.opportunities;
      const activeIndex = activeItems.findIndex(op => op.id === activeId);
      const overIndex = overItems.findIndex(op => op.id === overId);

      let newStages = [...prevStages];
      if (activeStage.id === overStage.id) {
        // Mover dentro da mesma coluna
        const updatedOpportunities = arrayMove(activeItems, activeIndex, overIndex);
        const stageIndex = newStages.findIndex(s => s.id === activeStage.id);
        newStages[stageIndex] = { ...activeStage, opportunities: updatedOpportunities };
      } else {
        // Mover entre colunas
        const [movedItem] = activeItems.splice(activeIndex, 1);
        overItems.splice(overIndex, 0, movedItem);

        const activeStageIndex = newStages.findIndex(s => s.id === activeStage.id);
        const overStageIndex = newStages.findIndex(s => s.id === overStage.id);

        newStages[activeStageIndex] = { ...activeStage, opportunities: activeItems };
        newStages[overStageIndex] = { ...overStage, opportunities: overItems };
      }
      return newStages;
    });
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="flex items-start gap-4 overflow-x-auto pb-4">
        <SortableContext items={stages.map(s => s.id)} strategy={horizontalListSortingStrategy}>
          {stages.map(stage => <StageColumn key={stage.id} stage={stage} />)}
        </SortableContext>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="h-10 bg-gray-800 border-gray-700 hover:bg-gray-700">
              <PlusCircle className="w-4 h-4 mr-2" /> Nova Etapa
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-900 text-white border-gray-700">
            <DialogHeader><DialogTitle>Criar Nova Etapa</DialogTitle></DialogHeader>
            <Input placeholder="Nome da Etapa (Ex: Follow-up)" className="bg-gray-800 border-gray-600" />
            <DialogFooter>
              <DialogClose asChild><Button variant="ghost">Cancelar</Button></DialogClose>
              <Button>Criar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DndContext>
  );
};