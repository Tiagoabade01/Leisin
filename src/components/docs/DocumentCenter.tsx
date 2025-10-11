import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Search } from "lucide-react";
import { Document } from "@/pages/juridico/DocumentosRelatorios";

interface DocumentCenterProps {
  documents: Document[];
}

const DocumentCenter = ({ documents }: DocumentCenterProps) => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <CardTitle className="text-white">Central de Documentos</CardTitle>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Pesquisa semântica por conteúdo, cliente, cláusula..." className="bg-gray-800 border-gray-700 pl-9 w-full sm:w-96" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Documento</TableHead><TableHead>Tipo</TableHead><TableHead>Módulo</TableHead><TableHead>Responsável</TableHead><TableHead>Data</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
          <TableBody>
            {documents.map(doc => (
              <TableRow key={doc.id} className="border-gray-700">
                <TableCell className="font-medium">{doc.name}</TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>{doc.module}</TableCell>
                <TableCell>{doc.responsible}</TableCell>
                <TableCell>{doc.date}</TableCell>
                <TableCell><Badge variant={doc.status === "Vigente" ? "default" : "secondary"}>{doc.status}</Badge></TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                      <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                      <DropdownMenuItem>Analisar com IA</DropdownMenuItem>
                      <DropdownMenuItem>Ver Histórico</DropdownMenuItem>
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

export default DocumentCenter;