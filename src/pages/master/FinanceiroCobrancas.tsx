import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const FinanceiroCobrancas = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Financeiro & Cobranças</h1>
      <p className="text-gray-400 mb-8">Controle total das finanças do SaaS e fluxo de receitas.</p>
      <Tabs defaultValue="faturamento">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800">
          <TabsTrigger value="faturamento">Faturamento</TabsTrigger>
          <TabsTrigger value="contas">Contas a Pagar/Receber</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
        </TabsList>
        <TabsContent value="faturamento" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader><CardTitle>Histórico de Faturamento</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700 hover:bg-gray-800">
                    <TableHead>Cliente</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-gray-700">
                    <TableCell>Construtora Sol Nascente</TableCell>
                    <TableCell>01/08/2024</TableCell>
                    <TableCell>R$ 2.500,00</TableCell>
                    <TableCell><Badge>Pago</Badge></TableCell>
                  </TableRow>
                  <TableRow className="border-gray-700">
                    <TableCell>Advocacia Central</TableCell>
                    <TableCell>20/07/2024</TableCell>
                    <TableCell>R$ 850,00</TableCell>
                    <TableCell><Badge variant="destructive">Pendente</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FinanceiroCobrancas;