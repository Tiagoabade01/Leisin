import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const limits = [
  { client: "Advocacia Atlas", users: "21 / 25", modules: "Todos", storage: "18 GB / 20 GB", status: "🟢" },
  { client: "Construtora Vale Verde", users: "48 / 50", modules: "Todos", storage: "42 GB / 50 GB", status: "🟢" },
  { client: "Grupo Nexus", users: "12 / 10", modules: "Jurídico / Financeiro", storage: "14 GB / 10 GB", status: "🟡" },
  { client: "Escritório Borges", users: "3 / 5", modules: "Jurídico", storage: "6 GB / 10 GB", status: "🟢" },
];

const LimitesUso = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Limites de Uso e Upgrade</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Cliente</TableHead><TableHead>Usuários Ativos</TableHead><TableHead>Módulos Ativos</TableHead><TableHead>Armazenamento</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {limits.map(item => (
              <TableRow key={item.client} className="border-gray-700">
                <TableCell>{item.client}</TableCell>
                <TableCell>{item.users}</TableCell>
                <TableCell>{item.modules}</TableCell>
                <TableCell>{item.storage}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Grupo Nexus ultrapassou o limite de armazenamento em 40%. IA ativou modo temporário e sugeriu upgrade para o plano Pro.”</p>
      </CardContent>
    </Card>
  );
};

export default LimitesUso;