import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Client } from "@/pages/juridico/ClientesJuridicos";

interface ClientListProps {
  clients: Client[];
  onEdit: (client: Client) => void;
  onDelete: (id: string) => void;
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Ativo": return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Ativo</Badge>;
    case "Em revisão": return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Em revisão</Badge>;
    case "Em risco": return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">🟠 Em risco</Badge>;
    case "Potencial": return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">🔵 Potencial</Badge>;
    default: return <Badge variant="secondary">{status}</Badge>;
  }
};

const ClientList = ({ clients, onEdit, onDelete }: ClientListProps) => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <CardTitle className="text-white">Base de Clientes</CardTitle>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative w-full sm:w-auto"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /><Input placeholder="Buscar cliente..." className="bg-gray-800 border-gray-700 pl-9 w-full sm:w-64" /></div>
            <Button variant="secondary">Filtrar</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Nome</TableHead><TableHead>Tipo</TableHead><TableHead>Responsável</TableHead><TableHead>Contratos</TableHead><TableHead>Processos</TableHead><TableHead>Status</TableHead><TableHead>Última Interação</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
          <TableBody>
            {clients.map(client => (
              <TableRow key={client.id} className="border-gray-700">
                <TableCell><Link to={`/app/clientes/${client.id}`} className="font-medium text-blue-400 hover:underline">{client.name}</Link></TableCell>
                <TableCell>{client.type}</TableCell>
                <TableCell>{client.responsible}</TableCell>
                <TableCell>{client.contracts}</TableCell>
                <TableCell>{client.processes}</TableCell>
                <TableCell>{getStatusBadge(client.status)}</TableCell>
                <TableCell>{client.lastInteraction}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                      <DropdownMenuItem onClick={() => onEdit(client)}>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Analisar com IA</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onDelete(client.id)} className="text-red-400">Excluir</DropdownMenuItem>
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

export default ClientList;