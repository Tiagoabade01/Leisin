import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const licenses = [
  { client: "Advocacia Atlas", plan: "Pro", modules: "Jurídico / CRM / IA", expiry: "11/11/25", status: "Ativa", value: "R$ 1.290,00" },
  { client: "Construtora Vale Verde", plan: "Enterprise", modules: "Todos", expiry: "15/11/25", status: "Ativa", value: "R$ 3.980,00" },
  { client: "Grupo Nexus", plan: "Business", modules: "Jurídico / Financeiro", expiry: "08/11/25", status: "Pendente", value: "R$ 890,00" },
  { client: "Escritório Borges", plan: "Starter", modules: "Jurídico", expiry: "05/11/25", status: "Cancelada", value: "R$ 390,00" },
];

const getStatusBadge = (status: string) => {
  if (status === "Ativa") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Ativa</Badge>;
  if (status === "Pendente") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Pendente</Badge>;
  if (status === "Cancelada") return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Cancelada</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const PainelLicencas = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Painel de Licenças Ativas</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Cliente / Filial</TableHead><TableHead>Plano</TableHead><TableHead>Módulos Ativos</TableHead><TableHead>Vencimento</TableHead><TableHead>Status</TableHead><TableHead>Valor Mensal</TableHead></TableRow></TableHeader>
          <TableBody>
            {licenses.map(item => (
              <TableRow key={item.client} className="border-gray-700">
                <TableCell>{item.client}</TableCell>
                <TableCell>{item.plan}</TableCell>
                <TableCell>{item.modules}</TableCell>
                <TableCell>{item.expiry}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
                <TableCell>{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “A licença da Construtora Vale Verde expira em 4 dias. IA sugere envio automático de lembrete comercial.”</p>
      </CardContent>
    </Card>
  );
};

export default PainelLicencas;