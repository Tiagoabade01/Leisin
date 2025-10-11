import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { PrazoProcessual } from '@/pages/tarefas/PrazosProcessuais';

interface PrazosListProps {
  prazos: PrazoProcessual[];
  onPrazoClick: (prazo: PrazoProcessual) => void;
}

const getUrgencyBadge = (urgency: PrazoProcessual['urgencia']) => {
  if (urgency === 'Crítico') return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Crítico</Badge>;
  if (urgency === 'Alta') return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Alta</Badge>;
  if (urgency === 'Média') return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">🟡 Média</Badge>;
  return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Baixa</Badge>;
};

const PrazosList = ({ prazos, onPrazoClick }: PrazosListProps) => {
  return (
    <Table>
      <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Descrição</TableHead><TableHead>Processo</TableHead><TableHead>Cliente</TableHead><TableHead>Data</TableHead><TableHead>Urgência</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
      <TableBody>
        {prazos.map(prazo => (
          <TableRow key={prazo.id} onClick={() => onPrazoClick(prazo)} className="cursor-pointer border-gray-700 hover:bg-gray-800/50">
            <TableCell className="font-medium">{prazo.descricao}</TableCell>
            <TableCell>{prazo.processo}</TableCell>
            <TableCell>{prazo.cliente}</TableCell>
            <TableCell>{prazo.data}</TableCell>
            <TableCell>{getUrgencyBadge(prazo.urgencia)}</TableCell>
            <TableCell>{prazo.status}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                  <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                  <DropdownMenuItem>Editar</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PrazosList;