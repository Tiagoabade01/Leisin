import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Plan, PlanStatus } from '@/pages/master/PlanosPrecificacao';

interface ListaPlanosProps {
  plans: Plan[];
  onEdit: (plan: Plan) => void;
}

const getStatusBadge = (status: PlanStatus) => {
  switch (status) {
    case 'published': return <Badge>✅ Ativo</Badge>;
    case 'draft': return <Badge variant="secondary">✏️ Rascunho</Badge>;
    case 'negotiation': return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Em Negociação</Badge>;
    case 'archived': return <Badge variant="outline">📦 Arquivado</Badge>;
  }
};

const formatCurrency = (amount?: number) => amount ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount) : 'Sob consulta';

const ListaPlanos = ({ plans, onEdit }: ListaPlanosProps) => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Catálogo de Planos</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Nome do Plano</TableHead><TableHead>Tipo</TableHead><TableHead>Valor Mensal</TableHead><TableHead>Valor Anual</TableHead><TableHead>Clientes</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
          <TableBody>
            {plans.map(plan => (
              <TableRow key={plan.id} className="border-gray-700">
                <TableCell className="font-medium">{plan.name}</TableCell>
                <TableCell>{plan.type}</TableCell>
                <TableCell>{formatCurrency(plan.prices.find(p => p.period === 'monthly')?.amount)}</TableCell>
                <TableCell>{formatCurrency(plan.prices.find(p => p.period === 'yearly')?.amount)}</TableCell>
                <TableCell>{plan.clients}</TableCell>
                <TableCell>{getStatusBadge(plan.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                      <DropdownMenuItem onClick={() => onEdit(plan)}>Gerenciar</DropdownMenuItem>
                      <DropdownMenuItem>Duplicar</DropdownMenuItem>
                      <DropdownMenuItem className="text-yellow-400">Arquivar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

// Adicionando Card e CardHeader para consistência
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default ListaPlanos;