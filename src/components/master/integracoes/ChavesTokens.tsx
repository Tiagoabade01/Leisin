import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

const tokens = [
  { client: 'ARISP', type: 'API externa', created: '01/09/2025', expires: '01/09/2026', status: 'Ativo' },
  { client: 'JusBrasil', type: 'API externa', created: '10/08/2025', expires: '10/08/2026', status: 'Revendo' },
  { client: 'Neoway', type: 'API externa', created: '05/07/2025', expires: '—', status: 'Permanente' },
];

const getStatusBadge = (status: string) => {
  if (status === 'Ativo' || status === 'Permanente') return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">✅ {status}</Badge>;
  if (status === 'Revendo') return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 {status}</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const ChavesTokens = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Controle de Chaves e Tokens</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Cliente / Integração</TableHead><TableHead>Tipo</TableHead><TableHead>Criado em</TableHead><TableHead>Expira em</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
          <TableBody>
            {tokens.map(token => (
              <TableRow key={token.client} className="border-gray-700">
                <TableCell>{token.client}</TableCell><TableCell>{token.type}</TableCell><TableCell>{token.created}</TableCell><TableCell>{token.expires}</TableCell>
                <TableCell>{getStatusBadge(token.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                      <DropdownMenuItem>Regenerar Token</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-400">Revogar Acesso</DropdownMenuItem>
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

export default ChavesTokens;