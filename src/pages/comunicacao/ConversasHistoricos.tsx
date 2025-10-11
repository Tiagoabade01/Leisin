import React from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { 
  Mail, MessageSquare, BrainCircuit, Search, FileText, BarChart2, 
  Download, GitCompare, Clock, Users, CheckCircle, AlertCircle
} from "lucide-react";
import { showSuccess } from '@/utils/toast';

// --- MOCK DATA ---
const timelineData = [
  { date: "11/10/25 15:22", channel: "WhatsApp", client: "Construtora Atlas", type: "Contrato", user: "Dra. Larissa", status: "Respondido" },
  { date: "11/10/25 13:44", channel: "E-mail", client: "Banco Futura", type: "Acordo Judicial", user: "Dr. Henrique", status: "Pendente" },
  { date: "10/10/25 20:17", channel: "Chat Interno", client: "Equipe Contábil", type: "Dúvida Fiscal", user: "IA", status: "Resolvido" },
  { date: "10/10/25 18:05", channel: "E-mail", client: "João Mendes", type: "Notificação Extrajudicial", user: "Dra. Lúcia", status: "Arquivado" },
];

const caseHistoryData = [
  { type: "Contrato", name: "T3 Construtora – Locação SP", interactions: 18, lastUpdate: "11/10/25", responsible: "Dr. Felipe" },
  { type: "Processo Judicial", name: "Banco Futura – Acordo", interactions: 23, lastUpdate: "10/10/25", responsible: "Dra. Lúcia" },
  { type: "Due Diligence", name: "Grupo Atlas – Terreno ZEU", interactions: 42, lastUpdate: "10/10/25", responsible: "Dr. Henrique" },
  { type: "Consultoria", name: "João Mendes – Regularização", interactions: 11, lastUpdate: "09/10/25", responsible: "Dra. Larissa" },
];

const reportKpis = [
  { metric: "Tempo médio de resposta", value: "1h 43min", change: "+11%" },
  { metric: "Mensagens não respondidas", value: "37", change: "-14%" },
  { metric: "Interações automáticas da IA", value: "621", change: "+28%" },
  { metric: "Clientes ativos em comunicação", value: "54", change: "+6%" },
];

const volumeData = [ { name: 'Jul', volume: 420 }, { name: 'Ago', volume: 510 }, { name: 'Set', volume: 680 }, { name: 'Out', volume: 710 } ];
const channelData = [ { name: 'E-mail', value: 55 }, { name: 'WhatsApp', value: 30 }, { name: 'Chat', value: 15 } ];
const COLORS = ['#00A8E8', '#2EF3C1', '#CBB26A'];

// --- SUBCOMPONENTS ---

const getStatusBadge = (status: string) => {
  if (status === "Respondido" || status === "Resolvido") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 {status}</Badge>;
  if (status === "Pendente") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 {status}</Badge>;
  if (status === "Arquivado") return <Badge variant="outline">🔵 {status}</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const getChannelIcon = (channel: string) => {
  if (channel === "E-mail") return <Mail className="h-4 w-4 text-azul-comunicacao" />;
  if (channel === "WhatsApp") return <MessageSquare className="h-4 w-4 text-tech-green" />;
  return <BrainCircuit className="h-4 w-4 text-gray-400" />;
};

const ConversasHistoricosPage = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Conversas e Históricos</h1>
          <p className="text-gray-400 max-w-3xl">
            Cada conversa, e-mail e mensagem transformados em histórico vivo — totalmente pesquisável, classificado e interpretado por IA.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => showSuccess("Exportação do histórico iniciada.")}><Download className="h-4 w-4 mr-2" /> Exportar Histórico</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Gerando relatório de comunicação...")}><BarChart2 className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("IA está resumindo as conversas selecionadas.")}><BrainCircuit className="h-4 w-4 mr-2" /> Resumir com IA</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Busca semântica: “conversas sobre o contrato da Construtora Atlas”..." className="bg-gray-800 border-gray-700 pl-9" />
              </div>
            </CardHeader>
          </Card>

          <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800">
              <TabsTrigger value="timeline">Timeline de Comunicação</TabsTrigger>
              <TabsTrigger value="casos">Histórico por Casos</TabsTrigger>
              <TabsTrigger value="relatorios">Relatórios e Estatísticas</TabsTrigger>
            </TabsList>

            <TabsContent value="timeline" className="mt-6">
              <Card className="bg-petroleum-blue border-gray-700 text-white">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data</TableHead><TableHead>Canal</TableHead><TableHead>Cliente/Caso</TableHead><TableHead>Tipo</TableHead><TableHead>Usuário</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                    <TableBody>
                      {timelineData.map(item => (
                        <TableRow key={item.date} className="border-gray-700">
                          <TableCell>{item.date}</TableCell>
                          <TableCell className="flex items-center gap-2">{getChannelIcon(item.channel)} {item.channel}</TableCell>
                          <TableCell>{item.client}</TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{item.user}</TableCell>
                          <TableCell>{getStatusBadge(item.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="casos" className="mt-6">
              <Card className="bg-petroleum-blue border-gray-700 text-white">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tipo</TableHead><TableHead>Nome/Cliente</TableHead><TableHead>Interações</TableHead><TableHead>Última Atualização</TableHead><TableHead>Responsável</TableHead></TableRow></TableHeader>
                    <TableBody>
                      {caseHistoryData.map(item => (
                        <TableRow key={item.name} className="border-gray-700">
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.interactions}</TableCell>
                          <TableCell>{item.lastUpdate}</TableCell>
                          <TableCell>{item.responsible}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="relatorios" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {reportKpis.map(kpi => (
                  <Card key={kpi.metric} className="bg-gray-800/50 border-gray-700"><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">{kpi.metric}</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{kpi.value}</p></CardContent></Card>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gray-800/50 border-gray-700"><CardHeader><CardTitle className="text-base">Volume de Mensagens</CardTitle></CardHeader><CardContent><ResponsiveContainer width="100%" height={200}><LineChart data={volumeData}><XAxis dataKey="name" stroke="#a1a1aa" /><YAxis stroke="#a1a1aa" /><Tooltip contentStyle={{ backgroundColor: '#1C2A3A' }} /><Line type="monotone" dataKey="volume" stroke="#2EF3C1" /></LineChart></ResponsiveContainer></CardContent></Card>
                <Card className="bg-gray-800/50 border-gray-700"><CardHeader><CardTitle className="text-base">Canais Mais Usados</CardTitle></CardHeader><CardContent><ResponsiveContainer width="100%" height={200}><PieChart><Pie data={channelData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>{channelData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}</Pie><Tooltip contentStyle={{ backgroundColor: '#1C2A3A' }} /></PieChart></ResponsiveContainer></CardContent></Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* AI Sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">IA Memory & Insights</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“O cliente Construtora Atlas enviou 7 mensagens relacionadas ao mesmo contrato — consolidar comunicações em um único dossiê pode reduzir redundância.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Foram encontradas 12 comunicações duplicadas com o mesmo conteúdo entre os advogados Henrique e Larissa — deseja mesclar histórico?”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“O caso Grupo Atlas contém conversas associadas a 3 advogados distintos. Sugestão: consolidar responsáveis e criar tag #EquipeAtlas.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“O cliente Banco Futura apresentou aumento de 35% em mensagens com tom de urgência — possível risco de insatisfação ou litígio.”</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const ConversasHistoricos = () => (
  <Layout>
    <ConversasHistoricosPage />
  </Layout>
);

export default ConversasHistoricos;