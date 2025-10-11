import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const users = [
  { name: "Dra. Larissa Campos", cargo: "Diretora Regional", email: "larissa@leisin.com", permissao: "🟣 Master Filial", status: "Ativa" },
  { name: "Dr. Felipe Ramos", cargo: "Coordenador Jurídico", email: "felipe@leisin.com", permissao: "🟢 Jurídico", status: "Ativa" },
  { name: "Ana Souza", cargo: "Controller", email: "ana@leisin.com", permissao: "🟢 Financeiro", status: "Ativa" },
  { name: "Pedro Lima", cargo: "Analista CRM", email: "pedro@leisin.com", permissao: "🟡 CRM", status: "Ativa" },
  { name: "João Pereira", cargo: "Estagiário", email: "joao@leisin.com", permissao: "🔵 Operacional", status: "Ativa" },
];

const getStatusBadge = (status: string) => {
  if (status === "Ativa") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Ativa</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const PerfisUsuarios = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Cadastro de Membros e Papéis</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Nome</TableHead><TableHead>Cargo</TableHead><TableHead>E-mail</TableHead><TableHead>Permissão</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.name} className="border-gray-700">
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.cargo}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.permissao}</TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “O advogado Felipe Ramos ultrapassou 130% da meta mensal. Deseja enviar reconhecimento automático via Comunicação?”</p>
      </CardContent>
    </Card>
  );
};

export default PerfisUsuarios;