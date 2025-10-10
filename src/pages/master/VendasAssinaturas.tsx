import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, Users, CreditCard, XCircle, MoreVertical, PlusCircle, FileText, Handshake, Trophy, Bot, Repeat, Target, TrendingDown, DollarSign } from "lucide-react";
import { ResponsiveContainer, LineChart, BarChart, XAxis, YAxis, Tooltip, Legend, Line, Bar } from "recharts";

const mrrData = [
  { name: 'Jan', MRR: 32000 }, { name: 'Fev', MRR: 35000 }, { name: 'Mar', MRR: 41000 },
  { name: 'Abr', MRR: 43000 }, { name: 'Mai', MRR: 48000 }, { name: 'Jun', MRR: 45231 },
];

const VendasAssinaturas = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Vendas & Assinaturas</h1>
      <p className="text-gray-400 mb-8">Controle completo do ciclo comercial do SaaS.</p>

      <Tabs defaultValue="crm" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800">
          <TabsTrigger value="crm">CRM de Vendas</TabsTrigger>
          <TabsTrigger value="assinaturas">Gestão de Assinaturas</TabsTrigger>
          <TabsTrigger value="metricas">Métricas de SaaS</TabsTrigger>
        </TabsList>

        {/* Aba 1: CRM de Vendas */}
        <TabsContent value="crm" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Pipeline de Vendas</CardTitle>
                <CardDescription className="text-gray-400">Arraste e solte as oportunidades entre as fases.</CardDescription>
              </div>
              <Button><PlusCircle className="w-4 h-4 mr-2" /> Nova Oportunidade</Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Colunas do Kanban */}
                {[
                  { title: 'Lead', icon: Users, deals: [{ name: 'Imobiliária Futuro', value: 'R$ 12.000' }, { name: 'Advocacia Pontes', value: 'R$ 8.500' }] },
                  { title: 'Proposta Enviada', icon: FileText, deals: [{ name: 'Construtora Alfa', value: 'R$ 25.000' }] },
                  { title: 'Em Negociação', icon: Handshake, deals: [{ name: 'Grupo Investidor Sul', value: 'R$ 50.000' }, { name: 'Escritório Central', value: 'R$ 18.000' }] },
                  { title: 'Fechado / Ganho', icon: Trophy, deals: [{ name: 'Incorporadora T3', value: 'R$ 80.000' }] }
                ].map(stage => (
                  <div key={stage.title} className="p-4 bg-gray-900/50 rounded-lg">
                    <h3 className="font-semibold mb-4 text-gray-300 flex items-center"><stage.icon className="w-4 h-4 mr-2" /> {stage.title}</h3>
                    <div className="space-y-3">
                      {stage.deals.map(deal => (
                        <div key={deal.name} className="p-3 bg-gray-700 rounded-md cursor-grab active:cursor-grabbing">
                          <p className="font-medium text-sm">{deal.name}</p>
                          <p className="text-xs text-gray-400">{deal.value}/ano</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Card className="mt-6 bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center"><Bot className="w-5 h-5 mr-2 text-purple-400" /> IA Comercial</CardTitle>
                  <CardDescription className="text-gray-400">Gere propostas e scripts de venda automaticamente.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea placeholder="Descreva a necessidade do cliente: Ex: Construtora precisa de 50 licenças do plano Enterprise com foco no módulo de Compliance..." className="bg-gray-800 border-gray-600" />
                  <Button className="mt-3">Gerar Proposta com IA</Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba 2: Gestão de Assinaturas */}
        <TabsContent value="assinaturas" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Todas as Assinaturas</CardTitle>
              <Button><PlusCircle className="w-4 h-4 mr-2" /> Criar Assinatura Manual</Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700 hover:bg-gray-800">
                    <TableHead>Cliente</TableHead>
                    <TableHead>Plano</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Próxima Cobrança</TableHead>
                    <TableHead>Valor (MRR)</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-gray-700">
                    <TableCell>Construtora Sol Nascente</TableCell>
                    <TableCell>Enterprise Anual</TableCell>
                    <TableCell><Badge>Ativo</Badge></TableCell>
                    <TableCell>01/09/2025</TableCell>
                    <TableCell>R$ 2.500,00</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-gray-800 text-white border-gray-700">
                          <DropdownMenuItem>Editar Assinatura</DropdownMenuItem>
                          <DropdownMenuItem>Ver Histórico</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-500">Cancelar</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gray-700">
                    <TableCell>Advocacia Central</TableCell>
                    <TableCell>Pro Mensal</TableCell>
                    <TableCell><Badge variant="destructive">Inadimplente</Badge></TableCell>
                    <TableCell>05/08/2024</TableCell>
                    <TableCell>R$ 850,00</TableCell>
                     <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-gray-800 text-white border-gray-700">
                          <DropdownMenuItem>Enviar Cobrança</DropdownMenuItem>
                          <DropdownMenuItem>Suspender</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba 3: Métricas de SaaS */}
        <TabsContent value="metricas" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "MRR", value: "R$ 45.231", change: "+20.1%", icon: CreditCard },
              { title: "Clientes Ativos", value: "480", change: "+12 este mês", icon: Users },
              { title: "Churn Rate", value: "2.1%", change: "-0.5%", icon: TrendingDown },
              { title: "LTV", value: "R$ 12.450", change: "Lifetime Value", icon: Repeat },
              { title: "CAC", value: "R$ 850", change: "Custo por Aquisição", icon: Target }
            ].map(metric => (
              <Card key={metric.title} className="bg-gray-800 border-gray-700 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <metric.icon className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-xs text-gray-400">{metric.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="mt-6 bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle>Crescimento da Receita Recorrente (MRR)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mrrData}>
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                  <YAxis stroke="#888888" fontSize={12} tickFormatter={(value) => `R$${value/1000}k`} />
                  <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                  <Legend />
                  <Line type="monotone" dataKey="MRR" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VendasAssinaturas;