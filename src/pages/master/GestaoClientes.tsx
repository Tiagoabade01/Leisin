import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const GestaoClientes = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Gestão de Clientes</h1>
      <p className="text-gray-400 mb-8">Controle e histórico de todos os clientes da plataforma.</p>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Todos os Clientes</CardTitle>
            <div className="flex items-center space-x-2">
              <Input placeholder="Buscar cliente..." className="bg-gray-700 border-gray-600" />
              <Button>Exportar CSV</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700 hover:bg-gray-800">
                <TableHead>Nome do Cliente</TableHead>
                <TableHead>Plano</TableHead>
                <TableHead>Status Financeiro</TableHead>
                <TableHead>Módulos Ativos</TableHead>
                <TableHead>Data de Renovação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-gray-700">
                <TableCell className="font-medium">Construtora Sol Nascente</TableCell>
                <TableCell>Enterprise</TableCell>
                <TableCell><Badge>Em dia</Badge></TableCell>
                <TableCell>5</TableCell>
                <TableCell>12/12/2024</TableCell>
              </TableRow>
              <TableRow className="border-gray-700">
                <TableCell className="font-medium">Advocacia Central</TableCell>
                <TableCell>Pro</TableCell>
                <TableCell><Badge variant="destructive">Atrasado</Badge></TableCell>
                <TableCell>3</TableCell>
                <TableCell>20/07/2024</TableCell>
              </TableRow>
              <TableRow className="border-gray-700">
                <TableCell className="font-medium">Imobiliária Vista Linda</TableCell>
                <TableCell>Enterprise</TableCell>
                <TableCell><Badge>Em dia</Badge></TableCell>
                <TableCell>6</TableCell>
                <TableCell>01/02/2025</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default GestaoClientes;