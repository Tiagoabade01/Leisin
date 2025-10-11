import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Search } from "lucide-react";
import { Link } from "react-router-dom";

const processes = [
  { id: "1012456-33.2025.8.26.0100", type: "Cível", client: "Mettri Arquitetura", lawyer: "Ana Faria", status: "Em andamento", risk: "Médio", lastUpdate: "09/10/25" },
  { id: "402312-92.2024.8.26.0450", type: "Trabalhista", client: "Nivem Construtora", lawyer: "João Lima", status: "Em recurso", risk: "Alto", lastUpdate: "07/10/25" },
  { id: "225481-88.2025.8.26.0001", type: "Imobiliário", client: "Terlla", lawyer: "Maria Souza", status: "Encerrado", risk: "Baixo", lastUpdate: "02/10/25" },
];

const getRiskBadge = (risk: string) => {
  switch (risk) {
    case "Baixo": return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Baixo</Badge>;
    case "Médio": return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Médio</Badge>;
    case "Alto": return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Alto</Badge>;
    default: return <Badge variant="secondary">{risk}</Badge>;
  }
};

const ProcessList = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <CardTitle className="text-white">Lista de Processos</CardTitle>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative w-full sm:w-auto"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /><Input placeholder="Buscar processo..." className="bg-gray-800 border-gray-700 pl-9 w-full sm:w-64" /></div>
            <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Status" /></SelectTrigger></Select>
            <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Risco" /></SelectTrigger></Select>
            <Button variant="secondary">Filtrar</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Nº Processo</TableHead><TableHead>Tipo</TableHead><TableHead>Cliente</TableHead><TableHead>Advogado</TableHead><TableHead>Status</TableHead><TableHead>Risco</TableHead><TableHead>Último Andamento</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
          <TableBody>
            {processes.map(proc => (
              <TableRow key={proc.id} className="border-gray-700">
                <TableCell><Link to={`/juridico/casos/${proc.id}`} className="font-medium text-blue-400 hover:underline">{proc.id}</Link></TableCell>
                <TableCell>{proc.type}</TableCell>
                <TableCell>{proc.client}</TableCell>
                <TableCell>{proc.lawyer}</TableCell>
                <TableCell>{proc.status}</TableCell>
                <TableCell>{getRiskBadge(proc.risk)}</TableCell>
                <TableCell>{proc.lastUpdate}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                      <DropdownMenuItem>Ver Dossiê</DropdownMenuItem>
                      <DropdownMenuItem>Analisar com IA</DropdownMenuItem>
                      <DropdownMenuItem>Gerar Relatório</DropdownMenuItem>
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

export default ProcessList;