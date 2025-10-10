import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ListChecks, AlertCircle, CheckCircle2 } from "lucide-react";

const GestaoTarefas = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Gestão de Tarefas</h1>
      <p className="text-gray-300 mb-8">Visão geral das tarefas e prazos de toda a plataforma.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Tarefas Ativas</CardTitle>
            <ListChecks className="h-4 w-4 text-gray-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tarefas Vencidas</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">73</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Concluídas (Hoje)</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92</div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader><CardTitle>Tarefas Críticas e Vencidas</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700 hover:bg-gray-800">
                <TableHead>Tarefa</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead>Prazo</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-gray-700">
                <TableCell>Elaborar minuta de contrato</TableCell>
                <TableCell>Construtora Alfa</TableCell>
                <TableCell>ana.silva@t3.com</TableCell>
                <TableCell>25/07/2024</TableCell>
                <TableCell><Badge variant="destructive">Vencido</Badge></TableCell>
              </TableRow>
              <TableRow className="border-gray-700">
                <TableCell>Coletar documentos dos vendedores</TableCell>
                <TableCell>Imobiliária Beta</TableCell>
                <TableCell>joao.costa@t3.com</TableCell>
                <TableCell>02/08/2024</TableCell>
                <TableCell><Badge variant="secondary">Em Andamento</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default GestaoTarefas;