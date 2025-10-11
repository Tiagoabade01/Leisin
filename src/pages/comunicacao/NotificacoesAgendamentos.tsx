import React from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PlusCircle, Download, BrainCircuit, Calendar, BarChart2,
  FileText, MessageSquare, Bell, Signature, Scale, Zap
} from "lucide-react";
import { showSuccess } from '@/utils/toast';
import CalendarioCronogramas from '@/components/tasks/CalendarioCronogramas';

// --- MOCK DATA ---
const kpis = [
  { type: "Prazos Jurídicos", qty: 28, status: "🟠" },
  { type: "Comunicação Interna", qty: 42, status: "🟢" },
  { type: "Agendamentos de Reunião", qty: 14, status: "🟢" },
  { type: "Contratos a Renovar", qty: 6, status: "🔴" },
  { type: "Audiências Agendadas", qty: 9, status: "🟢" },
];

const prazos = [
  { type: "Contrato", ref: "Locação – Rua das Oliveiras", prazo: "15/10/25", status: "Próximo", resp: "Dra. Lúcia" },
  { type: "Processo", ref: "Ação Civil – Banco Futura", prazo: "17/10/25", status: "Ok", resp: "Dr. Henrique" },
  { type: "Fiscal", ref: "DCTF Mensal", prazo: "21/10/25", status: "Agendado", resp: "Dr. Felipe" },
  { type: "Licença", ref: "Ambiental – Terreno ZEU", prazo: "22/10/25", status: "Urgente", resp: "Dr. Ricardo" },
];

const getStatusBadge = (status: string) => {
  if (status === "Próximo") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 {status}</Badge>;
  if (status === "Urgente") return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 {status}</Badge>;
  if (status === "Agendado") return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">🔵 {status}</Badge>;
  return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 {status}</Badge>;
};

// --- SUBCOMPONENTS ---

const PainelAlertas = () => (
  <div className="space-y-6">
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Indicadores de Notificações</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tipo de Notificação</TableHead><TableHead>Quantidade</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {kpis.map(item => (
              <TableRow key={item.type} className="border-gray-700">
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.qty}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">IA Scheduler Insight</CardTitle></CardHeader>
      <CardContent>
        <p className="text-sm text-gray-300">“Há 3 contratos com prazo de renovação vencendo em 5 dias e 1 audiência sem responsável designado. Deseja criar tarefas automáticas de acompanhamento?”</p>
      </CardContent>
    </Card>
  </div>
);

const PrazosLegais = () => (
  <Card className="bg-petroleum-blue border-gray-700 text-white">
    <CardHeader><CardTitle className="text-white">Prazos Legais e Contratuais</CardTitle></CardHeader>
    <CardContent>
      <Table>
        <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tipo</TableHead><TableHead>Referência</TableHead><TableHead>Prazo</TableHead><TableHead>Status</TableHead><TableHead>Responsável</TableHead></TableRow></TableHeader>
        <TableBody>
          {prazos.map(item => (
            <TableRow key={item.ref} className="border-gray-700">
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.ref}</TableCell>
              <TableCell>{item.prazo}</TableCell>
              <TableCell>{getStatusBadge(item.status)}</TableCell>
              <TableCell>{item.resp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “O prazo de renovação do contrato da T3 Construtora vence em 4 dias — sistema criou minuta automática e agendou revisão com o responsável.”</p>
    </CardContent>
  </Card>
);

const AgendamentosIA = () => (
  <Card className="bg-petroleum-blue border-gray-700 text-white">
    <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">Agendamentos Inteligentes (IA Scheduler)</CardTitle></CardHeader>
    <CardContent className="space-y-4">
      <div>
        <h4 className="font-semibold text-sm mb-2">Funções Automáticas</h4>
        <ul className="list-disc list-inside space-y-2 text-xs text-gray-300">
          <li>Análise de conflitos de agenda.</li>
          <li>Sugestão de horários ideais (baseado em disponibilidade e prioridade).</li>
          <li>Classificação de compromissos por risco e impacto jurídico.</li>
          <li>Alertas de follow-up automático.</li>
          <li>Geração de tarefas vinculadas ao evento.</li>
        </ul>
      </div>
      <div className="border-t border-gray-700 pt-4">
        <h4 className="font-semibold text-sm mb-2">Exemplo de Ação</h4>
        <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Reunião marcada para 11/10 às 17h conflita com audiência agendada — reagendar automaticamente para 18h?”</p>
      </div>
    </CardContent>
  </Card>
);

const Relatorios = () => (
  <Card className="bg-petroleum-blue border-gray-700 text-white">
    <CardHeader><CardTitle className="text-white">Relatórios e Histórico</CardTitle></CardHeader>
    <CardContent className="space-y-3">
      {["Relatório de Prazos Cumpridos / Perdidos", "Relatório de Eficiência de Comunicação", "Relatório de Eventos Agendados por Tipo e Setor", "Relatório de Alertas e SLA de Respostas"].map(report => (
        <div key={report} className="p-3 bg-gray-800/50 rounded-lg flex justify-between items-center">
          <span className="text-sm">{report}</span>
          <Button size="sm" variant="secondary">Gerar</Button>
        </div>
      ))}
      <p className="text-sm text-risk-gold mt-4">💡 Insight IA: “Taxa de cumprimento de prazos subiu para 96% este mês. Principais atrasos concentrados em tarefas fiscais do núcleo RJ.”</p>
    </CardContent>
  </Card>
);

// --- MAIN PAGE COMPONENT ---
const NotificacoesAgendamentosPage = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Notificações e Agendamentos</h1>
          <p className="text-gray-400 max-w-3xl">
            Automação de prazos, alertas e compromissos jurídicos — sincronizado, inteligente e totalmente conectado à operação do escritório.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => showSuccess("Abrindo agendador...")}><PlusCircle className="h-4 w-4 mr-2" /> Novo Agendamento</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Gerando relatório...")}><BarChart2 className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Sincronizando calendários...")}><Calendar className="h-4 w-4 mr-2" /> Sincronizar Calendário</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => showSuccess("Validando com IA...")}><BrainCircuit className="h-4 w-4 mr-2" /> Validar IA</Button>
        </div>
      </header>

      <Tabs defaultValue="alertas" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="alertas">Painel de Alertas</TabsTrigger>
          <TabsTrigger value="agenda">Agenda e Calendário</TabsTrigger>
          <TabsTrigger value="prazos">Prazos Legais</TabsTrigger>
          <TabsTrigger value="ia">Agendamentos IA</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
        </TabsList>

        <TabsContent value="alertas" className="mt-6">
          <PainelAlertas />
        </TabsContent>
        <TabsContent value="agenda" className="mt-6 h-[80vh]">
          <CalendarioCronogramas />
        </TabsContent>
        <TabsContent value="prazos" className="mt-6">
          <PrazosLegais />
        </TabsContent>
        <TabsContent value="ia" className="mt-6">
          <AgendamentosIA />
        </TabsContent>
        <TabsContent value="relatorios" className="mt-6">
          <Relatorios />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const NotificacoesAgendamentos = () => (
  <Layout>
    <NotificacoesAgendamentosPage />
  </Layout>
);

export default NotificacoesAgendamentos;