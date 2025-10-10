import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const notes = [
  { id: 'NFS-e 1023', client: 'Nivem Construtora', date: '10/10/25', status: 'Emitida' },
  { id: 'NFS-e 1022', client: 'Mettri Arquitetura', date: '08/10/25', status: 'Pendente' },
];

const NotasFiscais = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Histórico de Notas Fiscais</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Nota Fiscal</TableHead><TableHead>Cliente</TableHead><TableHead>Data</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Ações</TableHead></TableRow></TableHeader>
          <TableBody>
            {notes.map(note => (
              <TableRow key={note.id} className="border-gray-700">
                <TableCell>{note.id}</TableCell><TableCell>{note.client}</TableCell><TableCell>{note.date}</TableCell>
                <TableCell><Badge variant={note.status === 'Emitida' ? 'default' : 'secondary'}>{note.status}</Badge></TableCell>
                <TableCell className="text-right"><Button variant="outline" size="sm" className="bg-gray-700 border-gray-600"><Download className="h-3 w-3 mr-2" /> Baixar</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default NotasFiscais;