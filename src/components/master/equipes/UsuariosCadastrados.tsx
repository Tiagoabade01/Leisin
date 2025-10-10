import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

const users = [
  { name: 'Tiago Abade', role: 'Master Admin', team: 'Direção', access: 'Total', lastLogin: '10/10/25', status: 'Ativo' },
  { name: 'João Lima', role: 'Analista Jurídico', team: 'Jurídico', access: 'Edição', lastLogin: '09/10/25', status: 'Ativo' },
  { name: 'Maria Santos', role: 'Financeiro', team: 'Cobranças', access: 'Visualização', lastLogin: '08/10/25', status: 'Inativo' },
];

const getStatusBadge = (status: string) => {
  if (status === 'Ativo') return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Ativo</Badge>;
  if (status === 'Inativo') return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Inativo</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const UsuariosCadastrados = () => {
  return (
    <Table>
      <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Nome</TableHead><TableHead>Cargo/Função</TableHead><TableHead>Equipe</TableHead><TableHead>Nível de Acesso</TableHead><TableHead>Último Login</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
      <TableBody>
        {users.map(user => (
          <TableRow key={user.name} className="border-gray-700">
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.team}</TableCell>
            <TableCell>{user.access}</TableCell>
            <TableCell>{user.lastLogin}</TableCell>
            <TableCell>{getStatusBadge(user.status)}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                  <DropdownMenuItem>Editar</DropdownMenuItem>
                  <DropdownMenuItem>Redefinir Senha</DropdownMenuItem>
                  <DropdownMenuItem className="text-yellow-400">Suspender</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsuariosCadastrados;