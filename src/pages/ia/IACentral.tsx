import React, { useState, useRef, useEffect } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  BrainCircuit, PlusCircle, MessageSquare, Cog, FileText, Search, Sparkles, Upload,
  ShieldCheck, DollarSign, Handshake, Bell, Send, Paperclip, Bot
} from "lucide-react";
import { cn } from '@/lib/utils';
import { showSuccess } from '@/utils/toast';

// --- MOCK DATA ---

const iaStatus = [
  { modulo: "Jurídico Operacional", status: "Ativo", acoes: 218, ultima: "11/10/25 18:22", icon: ShieldCheck },
  { modulo: "Compliance / Risco", status: "Ativo", acoes: 67, ultima: "11/10/25 17:50", icon: ShieldCheck },
  { modulo: "Financeiro", status: "Ativo", acoes: 154, ultima: "11/10/25 18:10", icon: DollarSign },
  { modulo: "CRM Jurídico", status: "Parcial", acoes: 29, ultima: "11/10/25 17:40", icon: Handshake },
  { modulo: "Comunicação", status: "Ativo", acoes: 314, ultima: "11/10/25 18:00", icon: Bell },
];

const initialMessages = [
  { sender: 'user', text: 'Gerar cláusula de não concorrência para contrato de parceria comercial de 24 meses.' },
  { sender: 'ai', text: 'Segue minuta conforme art. 1142 do Código Civil, com limitação territorial e prazo compatível. Deseja incluir multa rescisória automática?' },
];

const riskAnalysisData = [
    { risco: "Jurisprudência divergente", nivel: "Médio", clausulas: 4 },
    { risco: "Sigilo e LGPD", nivel: "Alto", clausulas: 2 },
    { risco: "Multa desproporcional", nivel: "Médio", clausulas: 1 },
    { risco: "Falta de foro definido", nivel: "Alto", clausulas: 1 },
];

const auditLogs = [
    { data: "11/10/25", modulo: "Jurídico", acao: "Análise contratual", usuario: "Dr. Felipe", resultado: "Concluído" },
    { data: "11/10/25", modulo: "CRM", acao: "Geração de proposta", usuario: "Dra. Larissa", resultado: "Entregue" },
    { data: "11/10/25", modulo: "Financeiro", acao: "Previsão de receita", usuario: "IA", resultado: "Confirmado" },
    { data: "11/10/25", modulo: "Comunicação", acao: "Mensagem automática", usuario: "IA", resultado: "Enviada" },
];

// --- SUBCOMPONENTS ---

const getStatusBadge = (status: string) => {
  if (status === "Ativo") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Ativo</Badge>;
  if (status === "Parcial") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Parcial</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const getRiskBadge = (level: string) => {
    if (level === "Alto") return <Badge variant="destructive">🔴 Alto</Badge>;
    if (level === "Médio") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Médio</Badge>;
    return <Badge variant="secondary">🟡 Baixo</Badge>;
};

const IACentralPage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'ai', text: 'Entendido. Processando sua solicitação...' }]);
    }, 1000);
  };

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">IA Central (Jurídica)</h1>
          <p className="text-gray-400 max-w-3xl">
            O cérebro jurídico do Leisin — interpretação, automação e decisão inteligente aplicadas ao Direito e à gestão empresarial.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Nova Análise</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><MessageSquare className="h-4 w-4 mr-2" /> Abrir Chat IA</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Cog className="h-4 w-4 mr-2" /> Configurar Automações</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><FileText className="h-4 w-4 mr-2" /> Exportar Logs</Button>
        </div>
      </header>

      <Tabs defaultValue="chat" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="painel">Painel de IA</TabsTrigger>
          <TabsTrigger value="chat">Chat Jurídico</TabsTrigger>
          <TabsTrigger value="analisador">Analisador de Documentos</TabsTrigger>
          <TabsTrigger value="modelos">Modelos e Automações</TabsTrigger>
          <TabsTrigger value="logs">Logs e Auditoria</TabsTrigger>
        </TabsList>

        <TabsContent value="painel" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Status dos Módulos de IA</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Módulo</TableHead><TableHead>Status</TableHead><TableHead>Ações Recentes</TableHead><TableHead>Última Atividade</TableHead></TableRow></TableHeader>
                <TableBody>
                  {iaStatus.map(item => (
                    <TableRow key={item.modulo} className="border-gray-700">
                      <TableCell className="flex items-center gap-2"><item.icon className="h-4 w-4" /> {item.modulo}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
                      <TableCell>{item.acoes} análises</TableCell>
                      <TableCell>{item.ultima}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-risk-gold mt-4">💡 Insight IA: “A IA de Due Diligence está operando em 83% de capacidade. Sugere-se redistribuir tarefas para IA Jurídica Central.”</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chat" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white h-[70vh] flex flex-col">
            <CardHeader><CardTitle className="text-white">Chat Jurídico e Prompt Studio</CardTitle></CardHeader>
            <CardContent className="flex-grow flex flex-col overflow-hidden">
              <ScrollArea ref={scrollAreaRef} className="flex-1 p-4 bg-gray-900/50 rounded-t-lg">
                <div className="space-y-6">
                  {messages.map((msg, index) => (
                    <div key={index} className={cn("flex items-start gap-3", msg.sender === 'user' && "justify-end")}>
                      {msg.sender === 'ai' && <Avatar className="bg-dourado-tributario/20"><AvatarFallback><Bot className="text-dourado-tributario" /></AvatarFallback></Avatar>}
                      <div className={cn("max-w-lg p-3 rounded-lg", msg.sender === 'user' ? "bg-azul-fiscal text-white" : "bg-gray-800")}>
                        <p>{msg.text}</p>
                      </div>
                      {msg.sender === 'user' && <Avatar><AvatarFallback>TA</AvatarFallback></Avatar>}
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="p-4 border-t border-gray-700">
                <div className="relative">
                  <Input 
                    placeholder="Converse com a IA Leisin... (use '/' para comandos)" 
                    className="bg-gray-800 border-gray-700 pr-20" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Paperclip className="h-4 w-4" /></Button>
                    <Button size="sm" onClick={handleSend}><Send className="h-4 w-4" /></Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analisador" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-petroleum-blue border-gray-700 text-white">
                    <CardHeader><CardTitle>Analisador de Documentos e Contratos</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="h-32 flex flex-col items-center justify-center bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-700">
                            <Upload className="h-8 w-8 text-gray-500 mb-2" />
                            <p className="text-sm text-gray-400">Arraste e solte arquivos (PDF, DOCX, TXT) ou clique para enviar.</p>
                        </div>
                        <Button className="w-full"><Sparkles className="h-4 w-4 mr-2" /> Analisar com IA</Button>
                        <p className="text-sm text-risk-gold">💡 Insight IA: “Contrato com a Atlas Engenharia possui inconsistência na cláusula 8.1 — ausência de definição de foro competente. Deseja corrigir automaticamente?”</p>
                    </CardContent>
                </Card>
                <Card className="bg-petroleum-blue border-gray-700 text-white">
                    <CardHeader><CardTitle>Relatório de Análise Automática</CardTitle></CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader><TableRow className="border-gray-700"><TableHead>Tipo de Risco</TableHead><TableHead>Nível</TableHead><TableHead>Cláusulas</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {riskAnalysisData.map(item => (
                                    <TableRow key={item.risco} className="border-gray-700">
                                        <TableCell>{item.risco}</TableCell>
                                        <TableCell>{getRiskBadge(item.nivel)}</TableCell>
                                        <TableCell>{item.clausulas}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </TabsContent>

        <TabsContent value="modelos" className="mt-6">
            <Card className="bg-petroleum-blue border-gray-700 text-white">
                <CardHeader><CardTitle>Modelos e Automações Preditivas</CardTitle></CardHeader>
                <CardContent>
                    <p className="text-gray-400">Em construção...</p>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="logs" className="mt-6">
            <Card className="bg-petroleum-blue border-gray-700 text-white">
                <CardHeader><CardTitle>Logs, Auditorias e Aprendizado Contínuo</CardTitle></CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader><TableRow className="border-gray-700"><TableHead>Data</TableHead><TableHead>Módulo</TableHead><TableHead>Ação</TableHead><TableHead>Usuário</TableHead><TableHead>Resultado</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {auditLogs.map(log => (
                                <TableRow key={log.data + log.acao} className="border-gray-700">
                                    <TableCell>{log.data}</TableCell>
                                    <TableCell>{log.modulo}</TableCell>
                                    <TableCell>{log.acao}</TableCell>
                                    <TableCell>{log.usuario}</TableCell>
                                    <TableCell><Badge className="bg-green-500/20 text-green-400">✅ {log.resultado}</Badge></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <p className="text-sm text-risk-gold mt-4">💡 Insight: “A IA Jurídica teve 98,4% de assertividade nas últimas 200 análises de cláusulas. 3 casos foram sinalizados como ambíguos e encaminhados à revisão humana.”</p>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const IACentral = () => (
  <Layout>
    <IACentralPage />
  </Layout>
);

export default IACentral;