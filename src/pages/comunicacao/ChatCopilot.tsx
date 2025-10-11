import React, { useState, useRef, useEffect } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  BrainCircuit, Search, Mic, PlusCircle, FileText, Calendar, SearchCheck,
  Sparkles, Send, Paperclip, Save, ChevronRight
} from "lucide-react";
import { cn } from '@/lib/utils';

// --- MOCK DATA ---
const initialMessages = [
  { sender: 'user', text: 'Gerar minuta de contrato de prestação de serviços advocatícios entre a empresa T3 Select e o cliente Banco Futura, com cláusula de confidencialidade.' },
  { sender: 'ai', text: 'Segue minuta gerada com base na Lei 8.906/94 (EOAB) e no Código Civil. Deseja incluir cláusula de rescisão automática em caso de inadimplemento?' },
];

const recentSessions = [
  { title: "Dossiê Atlas", lastInteraction: "11/10/25 14:32", status: "Ativo" },
  { title: "Processo 4578/25", lastInteraction: "11/10/25 13:50", status: "Em pausa" },
  { title: "Due Diligence SP", lastInteraction: "10/10/25 20:18", status: "Finalizado" },
];

const quickCommands = [
  { command: "/gerar contrato", desc: "Cria minuta de contrato.", icon: FileText },
  { command: "/analisar processo", desc: "Extrai prazos e peças.", icon: SearchCheck },
  { command: "/agendar audiência", desc: "Cria evento no calendário.", icon: Calendar },
];

// --- SUBCOMPONENTS ---

const LeftSidebar = () => (
  <aside className="w-64 flex-shrink-0 bg-petroleum-blue/30 border-r border-gray-700 p-4 flex flex-col">
    <Button className="w-full mb-6"><PlusCircle className="h-4 w-4 mr-2" /> Nova Sessão</Button>
    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Sessões Recentes</h3>
    <div className="space-y-2">
      {recentSessions.map(session => (
        <div key={session.title} className="p-2 rounded-md hover:bg-gray-800/50 cursor-pointer">
          <p className="font-semibold text-sm text-white truncate">{session.title}</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>{session.lastInteraction}</span>
            <span className={cn(session.status === 'Ativo' && 'text-tech-green')}>{session.status}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-auto space-y-2">
        <Button variant="outline" className="w-full justify-start bg-gray-800/50 border-gray-700"><Save className="h-4 w-4 mr-2" /> Prompts Salvos</Button>
        <Button variant="outline" className="w-full justify-start bg-gray-800/50 border-gray-700"><FileText className="h-4 w-4 mr-2" /> Casos Vinculados</Button>
    </div>
  </aside>
);

const RightSidebar = () => (
  <aside className="w-80 flex-shrink-0 bg-petroleum-blue/30 border-l border-gray-700 p-4 flex flex-col">
    <div className="flex items-center gap-2 mb-4">
      <BrainCircuit className="h-5 w-5 text-tech-green" />
      <h3 className="font-semibold text-white">Insights do Copilot</h3>
    </div>
    <div className="space-y-3">
      <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Este cliente já possui histórico de 8 interações sobre o mesmo contrato. Deseja consolidar as informações e gerar um resumo executivo?”</p>
    </div>
    <div className="mt-6 border-t border-gray-700 pt-4">
      <h3 className="font-semibold text-white mb-2">Comandos Rápidos</h3>
      {quickCommands.map(cmd => (
        <Button key={cmd.command} variant="ghost" className="w-full justify-start h-auto text-left mb-1">
          <cmd.icon className="h-4 w-4 mr-3 flex-shrink-0" />
          <div>
            <p className="font-mono text-sm">{cmd.command}</p>
            <p className="text-xs text-gray-400">{cmd.desc}</p>
          </div>
        </Button>
      ))}
    </div>
  </aside>
);

const ChatCopilotPage = () => {
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
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'ai', text: 'Entendido. Processando sua solicitação...' }]);
    }, 1000);
  };

  return (
    <div className="bg-[#0A0E14] text-gray-100 h-full flex flex-col">
      <main className="flex-grow flex overflow-hidden">
        <LeftSidebar />
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-gray-700 flex-shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Buscar em todas as conversas..." className="bg-gray-800 border-gray-700 pl-9" />
            </div>
          </div>
          <div ref={scrollAreaRef} className="flex-1 p-6 overflow-y-auto space-y-6">
            {messages.map((msg, index) => (
              <div key={index} className={cn("flex items-start gap-3", msg.sender === 'user' && "justify-end")}>
                {msg.sender === 'ai' && <Avatar className="bg-dourado-tributario/20"><AvatarFallback><BrainCircuit className="text-dourado-tributario" /></AvatarFallback></Avatar>}
                <div className={cn("max-w-lg p-3 rounded-lg", msg.sender === 'user' ? "bg-azul-comunicacao text-white" : "bg-gray-800")}>
                  <p>{msg.text}</p>
                </div>
                {msg.sender === 'user' && <Avatar><AvatarFallback>TA</AvatarFallback></Avatar>}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-700 bg-petroleum-blue/50">
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
        </div>
        <RightSidebar />
      </main>
    </div>
  );
};

const ChatCopilot = () => (
  <Layout>
    <ChatCopilotPage />
  </Layout>
);

export default ChatCopilot;