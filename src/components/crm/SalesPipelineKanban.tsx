import React from 'react';
import { DndContext, DragEndEvent, closestCorners, PointerSensor, KeyboardSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreVertical, PlusCircle } from 'lucide-react';

// Tipos
export interface Opportunity {
  id: string;
  title: string;
  client: string;
  value: number;
  stageId: string;
}

export interface Stage {
  id: string;
  title: string;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

// Componente do Cartão (Oportunidade)
const OpportunityCard = ({ opportunity, onEdit }: { opportunity: Opportunity, onEdit: (opp: Opportunity) => void }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: opportunity.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-3 bg-gray-700 rounded-md mb-3 touch-none shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-medium text-sm text-white">{opportunity.title}</p>
          <p className="text-xs text-gray-400">{opportunity.client}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-white"><MoreVertical className="h-4 w-4" /></Button></DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 text-white border-gray-700">
            <DropdownMenuItem onClick={() => onEdit(opportunity)}>Editar</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">Excluir</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p className="text-sm font-bold mt-2 text-green-400">{formatCurrency(opportunity.value)}</p>
    </div>
  );
};

// Componente da Coluna (Etapa)
const StageColumn = ({ stage, opportunities, onEditOpportunity }: { stage: Stage, opportunities: Opportunity[], onEditOpportunity: (opp: Opportunity) => void }) => {
  const { setNodeRef } = useSortable({ id: stage.id });
  const totalValue = opportunities.reduce((sum, op) => sum + op.value, 0);

  return (
    <div ref={setNodeRef} className="w-72 flex-shrink-0">
      <div className="p-4 bg-gray-900/50 rounded-lg h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-semibold text-gray-300">{stage.title}</h3>
            <p className="text-sm text-green-400 font-mono">{formatCurrency(totalValue)}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-white"><MoreVertical className="h-4 w-4" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 text-white border-gray-700">
              <DropdownMenuItem>Renomear</DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">Excluir Coluna</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <SortableContext items={opportunities.map(op => op.id)}>
          <div className="flex-1 overflow-y-auto min-h-[100px]">
            {opportunities.map(op => <OpportunityCard key={op.id} opportunity={op} onEdit={onEditOpportunity} />)}
          </div>
        </SortableContext>
        <Button variant="ghost" className="w-full mt-3 text-gray-400 hover:text-white"><PlusCircle className="w-4 h-4 mr-2" /> Adicionar Oportunidade</Button>
      </div>
    </div>
  );
};

// Componente Principal do Kanban
export const SalesPipelineKanban = ({ stages, opportunities, onDragEnd, onEditOpportunity }: { stages: Stage[], opportunities: Opportunity[], onDragEnd: (event: DragEndEvent) => void, onEditOpportunity: (opp: Opportunity) => void }) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // O ponteiro precisa mover 8px para ativar o arrastar
      },
    }),
    useSensor(KeyboardSensor)
  );

  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={onDragEnd}>
      <div className="flex items-start gap-4 overflow-x-auto pb-4">
        <SortableContext items={stages.map(s => s.id)} strategy={horizontalListSortingStrategy}>
          {stages.map(stage => (
            <StageColumn
              key={stage.id}
              stage={stage}
              opportunities={opportunities.filter(op => op.stageId === stage.id)}
              onEditOpportunity={onEditOpportunity}
            />
          ))}
        </SortableContext>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="h-10 bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-300 hover:text-white">
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