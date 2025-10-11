import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BrainCircuit, Send, Sparkles, Bot, FileText, Scale, Book } from "lucide-react";
import { cn } from '@/lib/utils';

const initialMessages = [
  { sender: 'user', text: 'Quais são as responsabilidades da construtora por vícios ocultos após a entrega?' },
  { 
    sender: 'ai', 
    summary: 'A responsabilidade da construtora por vícios ocultos persiste pelo prazo de 5 anos após a entrega, conforme art. 618 do Código Civil.',
    legalBasis: [
        { icon: FileText, text: 'Art. 618, Código Civil' },
        { icon: Scale, text: 'Súmula 194/STJ: “Prescreve em cinco anos a ação para reparação de vício em construção de imóvel.”' }
    ],
    jurisprudence: 'STJ – REsp 1.321.327/SP (Rel. Min. Nancy Andrighi, julgado em 2023)',
    interpretation: 'A construtora responde solidariamente por defeitos estruturais, mesmo que a execução tenha sido terceirizada.'
  },
];

const ChatInterface = () => {
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
      setMessages(prev => [...prev, { sender: 'ai', summary: 'Processando sua solicitação...' }]);
    }, 1000);
  };

  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-white">Consulta Inteligente (IA Leisin Lex)</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col overflow-hidden p-0">
        <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
          <div className="space-y-6">
            {messages.map((msg, index) => (
              <div key={index} className={cn("flex items-start gap-4", msg.sender === 'user' && "justify-end")}>
                {msg.sender === 'ai' && <Avatar className="bg-dourado-tributario/20"><AvatarFallback><Bot className="text-dourado-tributario" /></AvatarFallback></Avatar>}
                <div className={cn("max-w-2xl p-4 rounded-lg", msg.sender === 'user' ? "bg-blue-800 text-white" : "bg-gray-800")}>
                  {msg.sender === 'user' ? <p>{msg.text}</p> : (
                    <div className="space-y-4">
                      <div><p className="font-semibold text-dourado-tributario mb-1">🧩 RESUMO IA:</p><p>{msg.summary}</p></div>
                      {msg.legalBasis && <div><p className="font-semibold text-dourado-tributario mb-1">⚖️ FUNDAMENTO LEGAL:</p><ul className="space-y-1 text-sm">{msg.legalBasis.map((item, i) => <li key={i} className="flex items-start gap-2"><item.icon className="h-4 w-4 mt-1 flex-shrink-0" /><span>{item.text}</span></li>)}</ul></div>}
                      {msg.jurisprudence && <div><p className="font-semibold text-dourado-tributario mb-1">📚 JURISPRUDÊNCIA RELEVANTE:</p><p className="text-sm">{msg.jurisprudence}</p></div>}
                      {msg.interpretation && <div><p className="font-semibold text-dourado-tributario mb-1">💬 INTERPRETAÇÃO LEISIN:</p><p className="text-sm italic">"{msg.interpretation}"</p></div>}
                    </div>
                  )}
                </div>
                {msg.sender === 'user' && <Avatar><AvatarFallback>TA</AvatarFallback></Avatar>}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-4 border-t border-gray-700 bg-gray-900/50">
          <div className="relative">
            <Input 
              placeholder="Pergunte ao Leisin Lex em linguagem natural..." 
              className="bg-gray-800 border-gray-700 pr-20" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <Button size="sm" onClick={handleSend}><Send className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;