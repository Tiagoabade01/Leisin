import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";

const PainelPesquisa = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Painel de Pesquisa Avançada</CardTitle></CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-2 mb-4 p-2 bg-gray-900/30 rounded-md">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Busca semântica: 'responsabilidade de incorporadora por vícios construtivos'..." className="bg-gray-800 border-gray-700 pl-9" />
          </div>
          <Select><SelectTrigger className="w-full sm:w-[150px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tribunal" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[150px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tipo" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[150px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tema" /></SelectTrigger></Select>
          <Button variant="secondary" className="flex-grow sm:flex-grow-0">Pesquisar</Button>
        </div>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Processo</TableHead><TableHead>Tribunal</TableHead><TableHead>Data</TableHead><TableHead>Tema</TableHead></TableRow></TableHeader>
          <TableBody>
            <TableRow className="border-gray-700">
              <TableCell>REsp 1.834.321/SP</TableCell>
              <TableCell>STJ</TableCell>
              <TableCell>15/06/2023</TableCell>
              <TableCell>Responsabilidade de incorporadora</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Foram encontrados 7 precedentes do STJ relacionados a responsabilidade civil em incorporação imobiliária. Deseja gerar um parecer automático com base neles?”</p>
      </CardContent>
    </Card>
  );
};

export default PainelPesquisa;