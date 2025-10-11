import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const connections = [
  { name: "ARISP (SP)", status: "Ativa", lastUpdate: "11/10/2025 13:42", synced: "982 matrículas" },
  { name: "SERP Nacional", status: "Parcial", lastUpdate: "09/10/2025", synced: "320 matrículas" },
  { name: "eCartorário", status: "Ativa", lastUpdate: "11/10/2025 12:50", synced: "142 certidões" },
  { name: "Cartórios RJ", status: "Em implantação", lastUpdate: "—", synced: "—" },
  { name: "Registro Civil", status: "Limitado", lastUpdate: "07/10/2025", synced: "49 registros" },
];

const getStatusBadge = (status: string) => {
  if (status === "Ativa") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Ativa</Badge>;
  if (status === "Parcial") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Parcial</Badge>;
  if (status === "Em implantação") return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">🔵 Em implantação</Badge>;
  if (status === "Limitado") return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">🟠 Limitado</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const PainelConexoes = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Painel de Conexões</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Integração</TableHead><TableHead>Status</TableHead><TableHead>Última Atualização</TableHead><TableHead>Registros Sincronizados</TableHead></TableRow></TableHeader>
          <TableBody>
            {connections.map(conn => (
              <TableRow key={conn.name} className="border-gray-700">
                <TableCell className="font-medium">{conn.name}</TableCell>
                <TableCell>{getStatusBadge(conn.status)}</TableCell>
                <TableCell>{conn.lastUpdate}</TableCell>
                <TableCell>{conn.synced}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 Insight IA Leisin: “Há 14 matrículas com averbações recentes não sincronizadas. Sugere-se atualização automática.”</p>
      </CardContent>
    </Card>
  );
};

export default PainelConexoes;