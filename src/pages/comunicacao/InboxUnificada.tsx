import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Inbox, Send, FileText, Star, Archive, Trash2, Mail, MessageSquare, Bell, Settings, 
  PlusCircle, BrainCircuit, Search, Paperclip, CornerDownLeft, Sparkles
} from "lucide-react";
import { cn } from '@/lib/utils';

// --- MOCK DATA ---
const kpis = [
  { label: "Não Lidas", value: 142, icon: Inbox },
  { label: "Processos Associados", value: 28, icon: FileText },
  { label: "Clientes Ativos", value: 63, icon: MessageSquare },
  { label: "Documentos Anexados", value: 211, icon: Paperclip },
  { label: "Notificações do Sistema", value: 36, icon: Bell },
];

const conversations = [
  { id: 1, client: "João Mendes", subject: "Re: Minuta Contrato de Locação", preview: "Prezados, recebi a minuta e tenho algumas considerações...", timestamp: "15:22", type: "email", read: false, status: "Em andamento" },
  { id: 2, client: "Construtora Atlas", subject: "Documentação para Due Diligence", preview: "Boa tarde, Dra. Larissa. Seguem os documentos solicitados...", timestamp: "14:08", type: "email", read: false, status: "Revisão" },
  { id: 3, client: "Banco Futura", subject: "Proposta de Acordo Judicial", preview: "Acusamos o recebimento da proposta. Nosso jurídico interno irá analisar...", timestamp: "Ontem", type: "whatsapp", read: true, status: "Finalizado" },
  { id: 4, client: "T3 Construtora", subject: "Análise de Matrícula Imobiliária", preview: "Poderiam verificar a matrícula 12.345 do 1º RI de Guarulhos?", timestamp: "09/10", type: "interno", read: true, status: "Em análise" },
  { id: 5, client: "Sistema Leisin", subject: "Alerta de Prazo: Processo 1012456", preview: "O prazo para a contestação do processo encerra em 48 horas.", timestamp: "09/10", type: "notificacao", read: true, status: "Pendente" },
];

const selectedConversationDetails = {
  ...conversations[0],
  thread: [
    { sender: "João Mendes", text: "Prezados, recebi a minuta e tenho algumas considerações sobre a cláusula de multa. Podemos agendar uma chamada?", timestamp: "15:22" },
    { sender: "Dra. Larissa (Você)", text: "Claro, João. Tenho disponibilidade amanhã às 10h ou às 15h. Qual prefere?", timestamp: "15:25" },
  ]
};

const aiSuggestions = [
  "Gerar resumo automático da conversa.",
  "Redigir resposta com base no histórico do cliente.",
  "Anexar minuta padrão de 'Contrato de Locação v3'.",
  "Criar tarefa de follow-up para amanhã.",
];

// --- SUBCOMPONENTS ---

const Sidebar = () => (
  <aside className="w-64 flex-shrink-0 bg-petroleum-blue/30 border-r border-gray-700 p-4 flex flex-col">
    <div className="mb-6">
      <Button className="w-full bg-azul-comunicacao hover:bg-azul-comunicacao/90 text-white"><PlusCircle className="h-4 w-4 mr-2" /> Nova Mensagem</Button>
    </div>
    <div className="space-y-4 mb-6">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Canais</h3>
      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start text-white bg-gray-800/50"><Mail className="h-4 w-4 mr-3 text-azul-comunicacao" /> E-mail</Button>
        <Button variant="ghost" className="w-full justify-start"><MessageSquare className="h-4 w-4 mr-3" /> WhatsApp</Button>
        <Button variant="ghost" className="w-full justify-start"><Bell className="h-4 w-4 mr-3" /> Notificações</Button>
      </div>
    </div>
    <div className="space-y-4 mb-6">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Etiquetas</h3>
      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start"><span className="w-2 h-2 rounded-full bg-red-500 mr-3"></span> #Urgente</Button>
        <Button variant="ghost" className="w-full justify-start"><span className="w-2 h-2 rounded-full bg-dourado-tributario mr-3"></span> #Contratos</Button>
        <Button variant="ghost" className="w-full justify-start"><span className="w-2 h-2 rounded-full bg-legal-purple mr-3"></span> #DueDiligence</Button>
      </div>
    </div>
    <div className="mt-auto">
      <Button variant="ghost" className="w-full justify-start"><Settings className="h-4 w-4 mr-3" /> Configurações</Button>
    </div>
  </aside>
);

const ConversationList = ({ onSelect }) => (
  <div className="flex-1 border-r border-gray-700 flex flex-col">
    <div className="p-4 border-b border-gray-700">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input placeholder="Buscar em todas as conversas..." className="bg-gray-800 border-gray-700 pl-9" />
      </div>
    </div>
    <ScrollArea className="flex-1">
      {conversations.map(convo => (
        <div key={convo.id} onClick={() => onSelect(convo)} className={cn("p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-800/50", convo.id === selectedConversationDetails.id && "bg-gray-800")}>
          <div className="flex justify-between items-start">
            <p className="font-semibold text-white">{convo.client}</p>
            <p className="text-xs text-gray-400">{convo.timestamp}</p>
          </div>
          <p className="text-sm text-gray-300 truncate">{convo.subject}</p>
          <p className="text-xs text-gray-500 truncate">{convo.preview}</p>
        </div>
      ))}
    </ScrollArea>
  </div>
);

const MessageView = ({ conversation }) => (
  <div className="flex-[2] flex flex-col">
    <div className="p-4 border-b border-gray-700">
      <h2 className="text-xl font-bold text-white">{conversation.subject}</h2>
      <p className="text-sm text-gray-400">De: {conversation.client}</p>
    </div>
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-6">
        {conversation.thread.map((msg, index) => (
          <div key={index} className="flex items-start gap-3">
            <Avatar><AvatarFallback>{msg.sender.substring(0, 2)}</AvatarFallback></Avatar>
            <div>
              <div className="flex items-baseline gap-2">
                <p className="font-semibold text-white">{msg.sender}</p>
                <p className="text-xs text-gray-500">{msg.timestamp}</p>
              </div>
              <p className="text-gray-300">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
    <div className="p-4 border-t border-gray-700 bg-petroleum-blue/50">
      <div className="relative">
        <Input placeholder="Digite sua resposta..." className="bg-gray-800 border-gray-700 pr-24" />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8"><Paperclip className="h-4 w-4" /></Button>
          <Button size="sm" className="bg-azul-comunicacao hover:bg-azul-comunicacao/90 text-white"><Send className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  </div>
);

const AiCopilotPanel = () => (
  <aside className="w-80 flex-shrink-0 bg-petroleum-blue/30 border-l border-gray-700 p-4 flex flex-col">
    <div className="flex items-center gap-2 mb-6">
      <BrainCircuit className="h-5 w-5 text-tech-green" />
      <h3 className="font-semibold text-white">IA Copilot</h3>
    </div>
    <div className="space-y-3">
      {aiSuggestions.map((suggestion, index) => (
        <Button key={index} variant="outline" className="w-full justify-start text-left h-auto bg-gray-800/50 border-gray-700 hover:border-tech-green/50">
          <Sparkles className="h-4 w-4 mr-3 flex-shrink-0 text-tech-green" />
          <span className="text-sm whitespace-normal">{suggestion}</span>
        </Button>
      ))}
    </div>
    <div className="mt-6 border-t border-gray-700 pt-4">
      <p className="text-sm text-dourado-tributario">💡 Mensagem contém solicitação de minuta de contrato. Deseja gerar minuta automática com base no modelo ‘Comercial Padrão 2025’?</p>
    </div>
  </aside>
);

const InboxUnificada = () => {
  const [selectedConvo, setSelectedConvo] = useState(selectedConversationDetails);

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8 flex flex-col">
      <header className="flex-shrink-0">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Inbox Unificada</h1>
            <p className="text-gray-400 max-w-3xl">
              Centralize e automatize toda a comunicação com clientes, times e integrações externas em um só lugar.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> Gerar Resposta com IA</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700">Analisar</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700">Exportar</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {kpis.map(kpi => (
            <Card key={kpi.label} className="bg-petroleum-blue border-gray-700 text-white">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-400">{kpi.label}</CardTitle>
                <kpi.icon className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{kpi.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </header>
      <main className="flex-grow flex border border-gray-700 rounded-lg overflow-hidden bg-petroleum-blue">
        <Sidebar />
        <ConversationList onSelect={() => {}} />
        <MessageView conversation={selectedConvo} />
        <AiCopilotPanel />
      </main>
    </div>
  );
};

export default InboxUnificada;