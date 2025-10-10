import { useState } from 'react';
import { SalesPipelineKanban, Opportunity, Stage } from '@/components/crm/SalesPipelineKanban';
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

const initialStagesData: Stage[] = [
  { id: 'lead', title: 'Lead Novo' },
  { id: 'contato', title: 'Contato Iniciado' },
  { id: 'proposta', title: 'Proposta Enviada' },
  { id: 'negociacao', title: 'Negociação' },
  { id: 'fechado', title: 'Fechado (Ganho)' }
];

const initialOpportunitiesData: Opportunity[] = [
  { id: 'op1', title: 'Projeto Website', client: 'Imobiliária Futuro', value: 12000, stageId: 'lead', responsible: 'Ana Silva' },
  { id: 'op2', title: 'Consultoria LGPD', client: 'Advocacia Pontes', value: 8500, stageId: 'contato', responsible: 'Bruno Costa' },
  { id: 'op3', title: 'Sistema de Gestão', client: 'Construtora Alfa', value: 25000, stageId: 'proposta', responsible: 'Ana Silva' },
  { id: 'op4', title: 'Plano White Label', client: 'Grupo Investidor Sul', value: 50000, stageId: 'negociacao', responsible: 'Carlos Dias' },
];

const PipelineComercial = () => {
  const [stages, setStages] = useState<Stage[]>(initialStagesData);
  const [opportunities, setOpportunities] = useState<Opportunity[]>(initialOpportunitiesData);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setOpportunities((prev) => {
      const activeIndex = prev.findIndex((op) => op.id === active.id);
      const overIsStage = stages.some(stage => stage.id === over.id);
      if (overIsStage) {
        const newOpportunities = [...prev];
        newOpportunities[activeIndex].stageId = over.id as string;
        return newOpportunities;
      }
      const overIndex = prev.findIndex((op) => op.id === over.id);
      if (overIndex !== -1) {
        const newOpportunities = [...prev];
        newOpportunities[activeIndex].stageId = prev[overIndex].stageId;
        return arrayMove(newOpportunities, activeIndex, overIndex);
      }
      return prev;
    });
  };

  return (
    <SalesPipelineKanban
      stages={stages}
      opportunities={opportunities}
      onDragEnd={handleDragEnd}
      onEditOpportunity={() => {}}
      onAddStage={() => {}}
      onEditStage={() => {}}
      onAddOpportunity={() => {}}
    />
  );
};

export default PipelineComercial;