import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const users = [
  { name: "Dra. Larissa Campos", cargo: "Diretora Regional", filial: "SP - Matriz", status: "Ativa", acesso: "Master", ultimoLogin: "11/10/25 18:10" },
  { name: "Dr. Felipe Ramos", cargo: "Coordenador Jurídico", filial: "SP - Matriz", status: "Ativa", acesso: "Jurídico", ultimoLogin: "11/10/25 17:45" },
  { name: "Ana Souza", cargo: "Controller Financeiro", filial: "SP - Matriz", status: "Ativa", acesso: "Financeiro", ultimoLogin: "11/10/25 17:00" },
  { name: "Lucas Martins", cargo: "Estagiário", filial: "SP - Matriz", status: "Treinamento", acesso: "Básico", ultimoLogin: "11/10/25 16:10" },
  { name: "IA Copilot", cargo: "Assistente Virtual", filial: "Todas", status: "Ativa", acesso: "Autômato", ultimoLogin: "--" },
];

const getStatusBadge = (status: string) => {
  if (status === "Ativa") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Ativa</Badge>;
  if (status === "Treinamento") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Treinamento</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const PerfisUsuarios = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Cadastro e Perfis de Usuários</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Nome</TableHead><TableHead>Cargo</TableHead><TableHead>Filial</TableHead><TableHead>Status</TableHead><TableHead>Acesso</TableHead><TableHead>Último Login</TableHead></TableRow></TableHeader>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.name} className="border-gray-700">
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.cargo}</TableCell>
                <TableCell>{user.filial}</TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
                <TableCell>{user.acesso}</TableCell>
                <TableCell>{user.ultimoLogin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Usuário ‘Ana Souza’ possui permissão de edição financeira em duas filiais diferentes. Deseja unificar o controle para evitar duplicidade?”</p>
      </CardContent>
    </Card>
  );
};

export default PerfisUsuarios;