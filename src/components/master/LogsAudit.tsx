import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const LogsAudit = () => (
  <Card className="bg-gray-800 border-gray-700 text-white xl:col-span-2">
    <CardHeader>
      <CardTitle>Logs e Auditoria</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex space-x-2 mb-4">
        <Input placeholder="Filtrar por usuário, módulo..." className="bg-gray-700 border-gray-600" />
        <Button variant="outline" className="bg-gray-700 border-gray-600 hover:bg-gray-600">Exportar</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-gray-700">
            <TableHead>Timestamp</TableHead>
            <TableHead>Usuário</TableHead>
            <TableHead>Evento</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-gray-700">
            <TableCell>2024-08-01 10:30:15</TableCell>
            <TableCell>admin@t3.com</TableCell>
            <TableCell>Módulo Financeiro reiniciado</TableCell>
          </TableRow>
          <TableRow className="border-gray-700">
            <TableCell>2024-08-01 10:28:02</TableCell>
            <TableCell>api@internal</TableCell>
            <TableCell>Falha na API DocuSign (Timeout)</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);