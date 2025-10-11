import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";

const PesquisaConsulta = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Pesquisa e Consulta Inteligente</CardTitle></CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-2 mb-4 p-2 bg-gray-900/30 rounded-md">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Busca semântica: “leis sobre responsabilidade de construtoras”..." className="bg-gray-800 border-gray-700 pl-9" />
          </div>
          <Select><SelectTrigger className="w-full sm:w-[150px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tipo" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[150px] bg-gray-800 border-gray-700"><SelectValue placeholder="Esfera" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[150px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tema" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[150px] bg-gray-800 border-gray-700"><SelectValue placeholder="Situação" /></SelectTrigger></Select>
          <Button variant="secondary" className="flex-grow sm:flex-grow-0">Pesquisar</Button>
        </div>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Norma</TableHead><TableHead>Publicação</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            <TableRow className="border-gray-700"><TableCell>Lei nº 14.133/2021</TableCell><TableCell>01/04/2021</TableCell><TableCell>Vigente</TableCell></TableRow>
            <TableRow className="border-gray-700"><TableCell>Lei nº 8.666/1993</TableCell><TableCell>21/06/1993</TableCell><TableCell>Revogada</TableCell></TableRow>
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Foram encontradas 3 leis recentes sobre responsabilidade solidária em obras públicas. Deseja anexá-las ao contrato nº 289/25?”</p>
      </CardContent>
    </Card>
  );
};

export default PesquisaConsulta;