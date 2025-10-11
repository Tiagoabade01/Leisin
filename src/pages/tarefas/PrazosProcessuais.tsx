import React, { useState } from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PlusCircle, Filter } from "lucide-react";
import PrazosKanban from '@/components/tasks/PrazosKanban';
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

const initialPrazos = [
  { id: 'p1', processo: '1012456-33', descricao: 'Contestação', responsavel: 'Ana Faria', data: '11/10/25', status: 'Em Andamento' },
  { id: 'p2', processo: '402312-92', descricao: 'Audiência', responsavel: 'João Lima', data: '10/10/25', status: 'Em Andamento' },
  { id: 'p3', processo: '225481-88', descricao: 'Recurso', responsavel: 'Maria Souza', data: '25/10/25', status: 'A Distribuir' },
  { id: 'p4', processo: '334567-11', descricao: 'Pagamento de Guia', responsavel: 'Financeiro', data: '09/10/25', status: 'A Distribuir' },
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

  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Prazos Processuais</h1>
            <p className="text-gray-400">Controle visual de todos os prazos e audiências da sua carteira de processos.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Filter className="h-4 w-4 mr-2" /> Filtrar</Button>
            <Button><PlusCircle className="h-4 w-4 mr-2" /> Novo Prazo</Button>
          </div>
        </header>
        <PrazosKanban prazos={prazos} columns={columns} onDragEnd={handleDragEnd} />
      </div>
    </Layout>
  );
};

export default PrazosProcessuais;