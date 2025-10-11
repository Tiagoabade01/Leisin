import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Search } from "lucide-react";

const users = [
  { name: "Ana Ribeiro", role: "Advogada Sênior", branch: "São Paulo", access: "Jurídico, CRM", lastLogin: "10/10/25 – 09:12", status: "Ativo" },
  { name: "Felipe Duarte", role: "Financeiro", branch: "Campinas", access: "Financeiro, Contábil", lastLogin: "09/10/25 – 17:46", status: "Ativo" },
  { name: "Carla Mendes", role: "Gestora", branch: "BH", access: "Todos", lastLogin: "08/10/25 – 14:20", status: "Ativo" },
  { name: "Rodrigo Lopes", role: "Paralegal", branch: "SP", access: "Jurídico", lastLogin: "09/10/25 – 08:33", status: "Restrito" },
  { name: "Luana Souza", role: "Estagiária", branch: "Curitiba", access: "Documentos", lastLogin: "10/10/25 – 11:02", status: "Ativo" },
];

const getStatusBadge = (status: string) => {
  if (status === "Ativo") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Ativo</Badge>;
  if (status === "Restrito") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Restrito</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const PainelUsuarios = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <CardTitle className="text-white">Painel de Usuários Ativos</CardTitle>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Buscar por nome, e-mail, função..." className="bg-gray-800 border-gray-700 pl-9 w-full sm:w-64" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Nome</TableHead><TableHead>Função</TableHead><TableHead>Filial</TableHead><TableHead>Acesso</TableHead><TableHead>Último Login</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.name} className="border-gray-700">
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.branch}</TableCell>
                <TableCell>{user.access}</TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                      <DropdownMenuItem>Editar Acesso</DropdownMenuItem>
                      <DropdownMenuItem>Suspender</DropdownMenuItem>
                      <DropdownMenuItem>Ver Logs</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Usuário Rodrigo Lopes não acessa o módulo CRM há 30 dias. IA sugere rebaixamento de permissão temporário.”</p>
      </CardContent>
    </Card>
  );
};

export default PainelUsuarios;