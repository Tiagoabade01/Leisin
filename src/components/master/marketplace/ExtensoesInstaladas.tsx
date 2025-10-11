import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const installed = [
  { name: "Cartório Integrado PRO", status: "Ativo", version: "3.2.1", license: "Premium", lastUpdate: "10/10/2025" },
  { name: "IA Lex Drafting", status: "Ativo", version: "2.4.5", license: "Padrão", lastUpdate: "02/10/2025" },
  { name: "CRM WhatsApp", status: "Expirado", version: "1.9.3", license: "Trial", lastUpdate: "30/09/2025" },
];

const getStatusBadge = (status: string) => {
  if (status === "Ativo") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Ativo</Badge>;
  if (status === "Expirado") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Expirado</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const ExtensoesInstaladas = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Extensões Instaladas</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Extensão</TableHead><TableHead>Status</TableHead><TableHead>Versão</TableHead><TableHead>Licença</TableHead><TableHead>Última Atualização</TableHead></TableRow></TableHeader>
          <TableBody>
            {installed.map(item => (
              <TableRow key={item.name} className="border-gray-700">
                <TableCell>{item.name}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
                <TableCell>{item.version}</TableCell>
                <TableCell>{item.license}</TableCell>
                <TableCell>{item.lastUpdate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 A extensão IA Lex Drafting tem atualização disponível. Clique para aplicar novas cláusulas automáticas e compatibilidade com o módulo Contratos 2.0.</p>
      </CardContent>
    </Card>
  );
};

export default ExtensoesInstaladas;