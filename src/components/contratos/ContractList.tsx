import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Contract } from "@/pages/juridico/ContratosObrigacoes";

interface ContractListProps {
  contracts: Contract[];
  onEdit: (contract: Contract) => void;
  onDelete: (id: string) => void;
}

const getRiskBadge = (risk: string) => {
  switch (risk) {
    case "Baixo": return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Baixo</Badge>;
    case "Médio": return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Médio</Badge>;
    case "Alto": return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Alto</Badge>;
    default: return <Badge variant="secondary">{risk}</Badge>;
  }
};

const ContractList = ({ contracts, onEdit, onDelete }: ContractListProps) => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <CardTitle className="text-white">Banco de Contratos</CardTitle>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative w-full sm:w-auto"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /><Input placeholder="Buscar contrato..." className="bg-gray-800 border-gray-700 pl-9 w-full sm:w-64" /></div>
            <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Status" /></SelectTrigger></Select>
            <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tipo" /></SelectTrigger></Select>
            <Button variant="secondary">Filtrar</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Nº / Nome</TableHead><TableHead>Tipo</TableHead><TableHead>Cliente/Fornecedor</TableHead><TableHead>Responsável</TableHead><TableHead>Status</TableHead><TableHead>Vencimento</TableHead><TableHead>Risco</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
          <TableBody>
            {contracts.map(contract => (
              <TableRow key={contract.id} className="border-gray-700">
                <TableCell><Link to={`/juridico/contratos/${contract.id}`} className="font-medium text-blue-400 hover:underline">{contract.id}</Link></TableCell>
                <TableCell>{contract.type}</TableCell>
                <TableCell>{contract.client}</TableCell>
                <TableCell>{contract.lawyer}</TableCell>
                <TableCell>{contract.status}</TableCell>
                <TableCell>{contract.expiry}</TableCell>
                <TableCell>{getRiskBadge(contract.risk)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                      <DropdownMenuItem onClick={() => onEdit(contract)}>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Analisar com IA</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onDelete(contract.id)} className="text-red-400">Excluir</DropdownMenuItem>
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

export default ContractList;