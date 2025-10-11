import React, { useState, FormEvent } from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PlusCircle, Filter } from "lucide-react";
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { showSuccess } from '@/utils/toast';

import PrazosKPIs from '@/components/tasks/PrazosKPIs';
import PrazosKanbanBoard from '@/components/tasks/PrazosKanbanBoard';
import PrazoDetalheDrawer from '@/components/tasks/PrazoDetalheDrawer';

export interface Subtarefa {
  id: string;
  texto: string;
  concluida: boolean;
}

export interface PrazoProcessual {
  id: string;
  processo: string;
  descricao: string;
  cliente: string;
  responsavel: string[];
  data: string; // "dd/MM/yy"
  status: string;
  urgencia: 'Crítico' | 'Alta' | 'Média' | 'Baixa';
  tarefas: Subtarefa[];
  comentarios: number;
  anexos: number;
}

const initialPrazos: PrazoProcessual[] = [
  { id: 'p1', processo: '1012456-33', descricao: 'Elaborar e protocolar contestação', cliente: 'Mettri Arquitetura', responsavel: ['Ana Faria'], data: '11/10/25', status: 'Em Andamento', urgencia: 'Alta', tarefas: [{id: 't1', texto: 'Coletar documentos', concluida: true}, {id: 't2', texto: 'Redigir peça', concluida: false}, {id: 't3', texto: 'Protocolar', concluida: false}], comentarios: 2, anexos: 3 },
  { id: 'p2', processo: '402312-92', descricao: 'Preparar para audiência de conciliação', cliente: 'Nivem Construtora', responsavel: ['João Lima', 'Maria Souza'], data: '10/10/25', status: 'Em Andamento', urgencia: 'Crítico', tarefas: [{id: 't1', texto: 'Estudar caso', concluida: true}, {id: 't2', texto: 'Preparar proposta de acordo', concluida: true}], comentarios: 0, anexos: 1 },
  { id: 'p3', processo: '225481-88', descricao: 'Interpor recurso de apelação', cliente: 'Terlla Inc.', responsavel: ['Maria Souza'], data: '25/10/25', status: 'A Distribuir', urgencia: 'Média', tarefas: [], comentarios: 0, anexos: 0 },
  { id: 'p4', processo: '334567-11', descricao: 'Realizar pagamento de guia judicial', cliente: 'Cliente X', responsavel: ['Financeiro'], data: '09/10/25', status: 'A Distribuir', urgencia: 'Crítico', tarefas: [{id: 't1', texto: 'Emitir guia', concluida: false}, {id: 't2', texto: 'Realizar pagamento', concluida: false}], comentarios: 1, anexos: 1 },
];

const initialColumns = [
  { id: 'A Distribuir', title: 'A Distribuir' },
  { id: 'Em Andamento', title: 'Em Andamento' },
  { id: 'Suspenso', title: 'Suspenso' },
  { id: 'Concluído', title: 'Concluído' },
];

const PrazosProcessuais = () => {
  const [prazos, setPrazos] = useState(initialPrazos);
  const [columns, setColumns] = useState(initialColumns);
  const [selectedPrazo, setSelectedPrazo] = useState<PrazoProcessual | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    const activeId = String(active.id);
    const overId = String(over.id);
    if (activeId === overId) return;

    setPrazos(prev => {
      const activeIndex = prev.findIndex(p => p.id === activeId);
      const isOverAColumn = columns.some(c => c.id === overId);

      if (isOverAColumn) {
        const newPrazos = [...prev];
        newPrazos[activeIndex].status = overId;
        return newPrazos;
      }
      
      const overIndex = prev.findIndex(p => p.id === overId);
      if (overIndex !== -1) {
        const newPrazos = [...prev];
        newPrazos[activeIndex].status = prev[overIndex].status;
        return arrayMove(newPrazos, activeIndex, overIndex);
      }
      return prev;
    });
  };

  const handlePrazoClick = (prazo: PrazoProcessual) => {
    setSelectedPrazo(prazo);
    setIsDrawerOpen(true);
  };

  const handleUpdatePrazo = (updatedPrazo: PrazoProcessual) => {
    setPrazos(prazos.map(p => p.id === updatedPrazo.id ? updatedPrazo : p));
    setSelectedPrazo(updatedPrazo);
  };

  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8 flex flex-col">
        <header className="flex justify-between items-center mb-6 flex-shrink-0">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Prazos Processuais</h1>
            <p className="text-gray-400">Controle visual de todos os prazos e audiências da sua carteira de processos.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Filter className="h-4 w-4 mr-2" /> Filtrar</Button>
            <Button><PlusCircle className="h-4 w-4 mr-2" /> Novo Prazo</Button>
          </div>
        </header>
        
        <div className="flex-shrink-0 mb-6">
          <PrazosKPIs prazos={prazos} />
        </div>

        <div className="flex-grow min-h-0">
          <PrazosKanbanBoard prazos={prazos} columns={columns} onDragEnd={handleDragEnd} onPrazoClick={handlePrazoClick} />
        </div>
      </div>
      
      {selectedPrazo && (
        <PrazoDetalheDrawer
          prazo={selectedPrazo}
          isOpen={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
          onUpdate={handleUpdatePrazo}
        />
      )}
    </Layout>
  );
};

export default PrazosProcessuais;