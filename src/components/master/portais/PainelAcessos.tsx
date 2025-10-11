import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const portaisData = [
  { portal: "Cliente – Escritório Abade & Dias", tipo: "Jurídico", usuarios: 8, status: "Ativo", ultimoAcesso: "10/10/2025", seguranca: "MFA ativo" },
  { portal: "Parceiro – Cartório 5º Registro", tipo: "Cartorial", usuarios: 3, status: "Em revisão", ultimoAcesso: "09/10/2025", seguranca: "IP restrito" },
  { portal: "Público – Portal de Licitações", tipo: "Institucional", usuarios: "1.200", status: "Online", ultimoAcesso: "11/10/2025", seguranca: "CDN Cloudflare" },
];

const getStatusBadge = (status: string) => {
  if (status === "Ativo" || status === "Online") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 {status}</Badge>;
  if (status === "Em revisão") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 {status}</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const PainelAcessos = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Painel de Acessos e Perfis</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Portal</TableHead><TableHead>Tipo</TableHead><TableHead>Usuários</TableHead><TableHead>Status</TableHead><TableHead>Último Acesso</TableHead><TableHead>Segurança</TableHead></TableRow></TableHeader>
          <TableBody>
            {portaisData.map(item => (
              <TableRow key={item.portal} className="border-gray-700">
                <TableCell>{item.portal}</TableCell>
                <TableCell>{item.tipo}</TableCell>
                <TableCell>{item.usuarios}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
                <TableCell>{item.ultimoAcesso}</TableCell>
                <TableCell>{item.seguranca}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Portal do cliente ‘Abade & Dias’ apresenta aumento de 45% nos acessos. Recomendado upgrade para plano Premium com dashboard avançado.”</p>
      </CardContent>
    </Card>
  );
};

export default PainelAcessos;