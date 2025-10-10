import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, Users, CreditCard, XCircle } from "lucide-react";

const VendasAssinaturas = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Vendas & Assinaturas</h1>
      <p className="text-gray-400 mb-8">Controle completo do ciclo comercial do SaaS.</p>

      <Tabs defaultValue="crm">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800">
          <TabsTrigger value="crm">CRM de Vendas</TabsTrigger>
          <TabsTrigger value="assinaturas">Gestão de Assinaturas</TabsTrigger>
          <TabsTrigger value="metricas">Métricas (SaaS)</TabsTrigger>
        </TabsList>

        <TabsContent value="crm" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Pipeline de Vendas</CardTitle>
              <Button>Nova Oportunidade</Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                {['Lead', 'Proposta', 'Negociação', 'Fechamento'].map(stage => (
                  <div key={stage} className="p-4 bg-gray-900/50 rounded-lg">
                    <h3 className="font-semibold mb-4 text-gray-300">{stage}</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-700 rounded-md">
                        <p className="font-medium text-sm">Construtora Alfa</p>
                        <p className="text-xs text-gray-400">R$ 15.000/ano</p>
                      </div>
                      <div className="p-3 bg-gray-700 rounded-md">
                        <p className="font-medium text-sm">Escritório Beta</p>
                        <p className="text-xs text-gray-400">R$ 8.000/ano</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assinaturas" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle>Assinaturas Ativas</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700 hover:bg-gray-800">
                    <TableHead>Cliente</TableHead>
                    <TableHead>Plano</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Próxima Cobrança</TableHead>
                    <TableHead>Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-gray-700">
                    <TableCell>Construtora Alfa</TableCell>
                    <TableCell>Enterprise Anual</TableCell>
                    <TableCell><Badge>Ativo</Badge></TableCell>
                    <TableCell>01/09/2025</TableCell>
                    <TableCell>R$ 15.000,00</TableCell>
                  </TableRow>
                  <TableRow className="border-gray-700">
                    <TableCell>Escritório Gama</TableCell>
                    <TableCell>Pro Mensal</TableCell>
                    <TableCell><Badge variant="destructive">Inadimplente</Badge></TableCell>
                    <TableCell>05/08/2024</TableCell>
                    <TableCell>R$ 850,00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metricas" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">MRR</CardTitle>
                <CreditCard className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 45.231,89</div>
                <p className="text-xs text-green-400 flex items-center"><ArrowUp className="h-3 w-3 mr-1" /> +20.1% vs. mês passado</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
                <Users className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-green-400 flex items-center"><ArrowUp className="h-3 w-3 mr-1" /> +180.1% vs. mês passado</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
                <XCircle className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.1%</div>
                <p className="text-xs text-gray-400">Taxa de cancelamento mensal</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VendasAssinaturas;