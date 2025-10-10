import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

// Tipos para os dados (poderiam ser movidos para um arquivo de tipos)
export interface Opportunity {
  id: string;
  title: string;
  client: string;
  value: number;
}

export interface Stage {
  id: string;
  title: string;
  opportunities: Opportunity[];
}

interface SalesPipelineListProps {
  stages: Stage[];
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

export const SalesPipelineList = ({ stages }: SalesPipelineListProps) => {
  const allOpportunities = stages.flatMap(stage => 
    stage.opportunities.map(op => ({ ...op, stage: stage.title }))
  );

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-gray-700 hover:bg-gray-800">
            <TableHead>Oportunidade</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Etapa</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allOpportunities.map((op) => (
            <TableRow key={op.id} className="border-gray-700">
              <TableCell className="font-medium">{op.title}</TableCell>
              <TableCell>{op.client}</TableCell>
              <TableCell>{formatCurrency(op.value)}</TableCell>
              <TableCell><Badge variant="secondary">{op.stage}</Badge></TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};