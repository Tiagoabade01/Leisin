import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, BrainCircuit } from "lucide-react";

const integrations = [
  { name: 'Neoway', type: 'Dados corporativos', status: 'Ativo', requests: '12.400', cost: 'R$ 0,02 / req' },
  { name: 'ARISP', type: 'Registro de imóveis', status: 'Ativo', requests: '2.800', cost: 'R$ 1,10 / req' },
  { name: 'JusBrasil', type: 'Certidões', status: 'Parcial', requests: '4.300', cost: 'R$ 0,50 / req' },
  { name: 'Stripe', type: 'Pagamentos', status: 'Ativo', requests: '890', cost: '—' },
  { name: 'OpenAI', type: 'IA Copilot', status: 'Ativo', requests: '73.000', cost: 'USD 0.002 / token' },
];

const getStatusBadge = (status: string) => {
  if (status === 'Ativo') return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">✅ Ativo</Badge>;
  if (status === 'Parcial') return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Parcial</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const CatalogoIntegracoes = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Catálogo de Integrações</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Integração</TableHead><TableHead>Tipo</TableHead><TableHead>Status</TableHead><TableHead>Requisições (mês)</TableHead><TableHead>Custo</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
            <TableBody>
              {integrations.map(int => (
                <TableRow key={int.name} className="border-gray-700">
                  <TableCell className="font-medium">{int.name}</TableCell>
                  <TableCell>{int.type}</TableCell>
                  <TableCell>{getStatusBadge(int.status)}</TableCell>
                  <TableCell>{int.requests}</TableCell>
                  <TableCell>{int.cost}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                        <DropdownMenuItem>Configurar</DropdownMenuItem>
                        <DropdownMenuItem>Testar Conexão</DropdownMenuItem>
                        <DropdownMenuItem className="text-yellow-400">Desativar</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Insight da IA</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">"Integração ARISP apresentou 4 falhas nas últimas 24h — verifique token de autenticação."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CatalogoIntegracoes;