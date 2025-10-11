import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Imovel } from "@/pages/imobiliario/CadastroImoveis";

interface ImoveisTableProps {
  imoveis: Imovel[];
  onSelectImovel: (imovel: Imovel) => void;
}

const getStatusBadge = (status: Imovel['status']) => {
  if (status === 'Regular') return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Regular</Badge>;
  if (status === 'Em análise') return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Em análise</Badge>;
  if (status === 'Crítico') return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Crítico</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const ImoveisTable = ({ imoveis, onSelectImovel }: ImoveisTableProps) => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <CardTitle className="text-white">Painel de Imóveis</CardTitle>
          <div className="flex flex-wrap items-center gap-2">
            <Input placeholder="Buscar por nome, matrícula, localização..." className="bg-gray-800 border-gray-700 w-full sm:w-64" />
            <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tipo" /></SelectTrigger></Select>
            <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Status" /></SelectTrigger></Select>
            <Button variant="secondary">Filtrar</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Nome / ID</TableHead><TableHead>Tipo</TableHead><TableHead>Localização</TableHead><TableHead>Matrícula</TableHead><TableHead>Área</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {imoveis.map(imovel => (
              <TableRow key={imovel.id} onClick={() => onSelectImovel(imovel)} className="cursor-pointer border-gray-700 hover:bg-gray-800/50">
                <TableCell className="font-medium">{imovel.nome}</TableCell>
                <TableCell>{imovel.tipo}</TableCell>
                <TableCell>{imovel.localizacao}</TableCell>
                <TableCell>{imovel.matricula}</TableCell>
                <TableCell>{imovel.area}</TableCell>
                <TableCell>{getStatusBadge(imovel.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ImoveisTable;