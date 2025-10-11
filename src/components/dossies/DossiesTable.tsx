import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const dossies = [
    { imovel: "Terreno Guararema", tipo: "Urbano", status: "Completo", lastUpdate: "10/10/25", risk: "Baixo" },
    { imovel: "Edifício Paulista", tipo: "Comercial", status: "Em atualização", lastUpdate: "09/10/25", risk: "Médio" },
    { imovel: "Fazenda Boa Esperança", tipo: "Rural", status: "Crítico", lastUpdate: "08/10/25", risk: "Alto" },
];

const getStatusBadge = (status: string) => {
    if (status === 'Completo') return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Completo</Badge>;
    if (status === 'Em atualização') return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Em atualização</Badge>;
    if (status === 'Crítico') return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Crítico</Badge>;
    return <Badge variant="secondary">{status}</Badge>;
};

const DossiesTable = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <CardTitle className="text-white">Painel de Dossiês</CardTitle>
          <div className="flex flex-wrap items-center gap-2">
            <Input placeholder="Buscar por imóvel, matrícula..." className="bg-gray-800 border-gray-700 w-full sm:w-64" />
            <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tipo" /></SelectTrigger></Select>
            <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Status" /></SelectTrigger></Select>
            <Button variant="secondary">Filtrar</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Imóvel</TableHead><TableHead>Tipo</TableHead><TableHead>Status</TableHead><TableHead>Última Atualização</TableHead><TableHead>Risco</TableHead></TableRow></TableHeader>
          <TableBody>
            {dossies.map(dossie => (
              <TableRow key={dossie.imovel} className="cursor-pointer border-gray-700 hover:bg-gray-800/50">
                <TableCell className="font-medium">{dossie.imovel}</TableCell>
                <TableCell>{dossie.tipo}</TableCell>
                <TableCell>{getStatusBadge(dossie.status)}</TableCell>
                <TableCell>{dossie.lastUpdate}</TableCell>
                <TableCell>{dossie.risk}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DossiesTable;