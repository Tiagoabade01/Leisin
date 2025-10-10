import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";
import { Opportunity, Stage } from './SalesPipelineKanban'; // Reutilizando os tipos

interface StageWithOpportunities extends Stage {
  opportunities: Opportunity[];
}

interface SalesPipelineListProps {
  stages: StageWithOpportunities[];
  onEdit: (opportunity: Opportunity) => void;
  onDelete: (opportunityId: string) => void;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

const getInitials = (name: string = '') => {
  return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
};

export const SalesPipelineList = ({ stages, onEdit, onDelete }: SalesPipelineListProps) => {
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
            <TableHead>Responsável</TableHead>
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
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs bg-gray-600 text-gray-300">{getInitials(op.responsible)}</AvatarFallback>
                  </Avatar>
                  <span>{op.responsible}</span>
                </div>
              </TableCell>
              <TableCell><Badge variant="secondary">{op.stage}</Badge></TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                    <DropdownMenuItem onClick={() => onEdit(op)}>
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onDelete(op.id)} className="text-red-500 hover:!text-red-400">
                      Excluir
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};