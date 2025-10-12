import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { 
  PlusCircle, BrainCircuit, FileText, Search, Sparkles, Book, GitCompare, ShieldCheck, Save
} from "lucide-react";
import { showSuccess } from '@/utils/toast';

// --- MOCK DATA ---
const reviewData = [
  { item: "Clareza e objetividade", status: "Adequada", obs: "Linguagem direta e sem ambiguidade", statusColor: "green" },
  { item: "Base Legal", status: "OK", obs: "Código Civil, art. 421 e 422", statusColor: "green" },
  { item: "Risco de nulidade", status: "Moderado", obs: "Ausência de prazo explícito de validade", statusColor: "yellow" },
  { item: "Conflito com cláusulas correlatas", status: "Alto", obs: "Divergência com cláusula 5.3 do mesmo contrato", statusColor: "red" },
  { item: "Aderência à LGPD", status: "Conformidade", obs: "Dados pessoais tratados sob consentimento", statusColor: "green" },
];

const libraryData = [
    { name: "Confidencialidade (NDA)", type: "Obrigação", risk: "Médio", lastReview: "10/10/25" },
    { name: "Rescisão Contratual", type: "Penal", risk: "Alto", lastReview: "09/10/25" },
    { name: "Uso de Imagem", type: "Direitos", risk: "Baixo", lastReview: "08/10/25" },
];

const logsData = [
    { date: "10/10/25", user: "IA CláusulaCopilot", action: "Geração de cláusula", doc: "Contrato Atlas", result: "Aprovado" },
    { date: "10/10/25", user: "Dra. Larissa", action: "Revisão e ajuste", doc: "Modelo Padrão", result: "Confirmado" },
    { date: "11/10/25", user: "IA Central", action: "Atualização legal", doc: "Biblioteca Geral", result: "Executado" },
];

const getStatusBadge = (status: string, color: string) => {
    const colorClasses = {
        green: "bg-green-500/20 text-green-400 border-green-500/30",
        yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        red: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return <Badge className={colorClasses[color]}>{status}</Badge>;
};

const ClausulaCopilot = () => {
  const [prompt, setPrompt] = useState("Gerar cláusula de confidencialidade para parceria tecnológica de 24 meses.");
  const [generatedClause, setGeneratedClause] = useState("");
  const [legalBasis, setLegalBasis] = useState("");

  const handleGenerate = () => {
    showSuccess("Cláusula gerada com IA!");
    setGeneratedClause("As partes obrigam-se a manter sigilo absoluto sobre todas as informações técnicas, comerciais e estratégicas trocadas, pelo prazo de 24 (vinte e quatro) meses, sob pena de indenização equivalente a 2 vezes o valor contratual.");
    setLegalBasis("Art. 421 e 422 do Código Civil – boa-fé objetiva e função social do contrato.");
  };

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">CláusulaCopilot</h1>
          <p className="text-gray-400 max-w-3xl">
            Sua equipe jurídica com superpoderes — gere, analise e otimize cláusulas contratuais com IA contextual e compliance integrado.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Nova Cláusula</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><FileText className="h-4 w-4 mr-2" /> Revisar Texto</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> Gerar Parecer</Button>
        </div>
      </header>

      <Tabs defaultValue="studio" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="studio">Estúdio de Criação</TabsTrigger>
          <TabsTrigger value="revisor">Revisor Jurídico</TabsTrigger>
          <TabsTrigger value="biblioteca">Biblioteca</TabsTrigger>
          <TabsTrigger value="contexto">IA Contextual</TabsTrigger>
          <TabsTrigger value="logs">Logs e Versionamento</TabsTrigger>
        </TabsList>

        <TabsContent value="studio" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Estúdio de Criação de Cláusulas</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <Label className="flex items-center gap-2 mb-2 text-dourado-tributario"><Sparkles className="h-4 w-4" /> Prompt de Geração</Label>
                  <div className="flex gap-2">
                    <Input value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Ex: Gerar cláusula de confidencialidade..." className="bg-gray-800 border-gray-700" />
                    <Button onClick={handleGenerate}>Gerar com IA</Button>
                  </div>
                </div>
                <Textarea value={generatedClause} onChange={(e) => setGeneratedClause(e.target.value)} rows={10} placeholder="A cláusula gerada pela IA aparecerá aqui..." className="bg-gray-800 border-gray-700" />
                <div className="flex gap-2">
                    <Button variant="outline" className="bg-gray-800/50 border-gray-700"><GitCompare className="h-4 w-4 mr-2" /> Comparar</Button>
                    <Button variant="outline" className="bg-gray-800/50 border-gray-700"><Save className="h-4 w-4 mr-2" /> Salvar na Biblioteca</Button>
                </div>
              </div>
              <div className="space-y-4">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader><CardTitle className="text-base">Base Legal (IA)</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-gray-300">{legalBasis || "A base legal será exibida aqui."}</p></CardContent>
                </Card>
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader><CardTitle className="text-base">Sugestões da IA</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-risk-gold">“Deseja incluir multa rescisória automática em caso de inadimplemento?”</p></CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revisor" className="mt-6">
            <Card className="bg-petroleum-blue border-gray-700 text-white">
                <CardHeader><CardTitle>Revisor Jurídico Automático</CardTitle></CardHeader>
                <CardContent>
                    <Textarea placeholder="Cole aqui a cláusula que deseja revisar..." rows={5} className="bg-gray-800 border-gray-700 mb-4" />
                    <Button onClick={() => showSuccess("Análise de risco concluída!")}><Sparkles className="h-4 w-4 mr-2" /> Revisar com IA</Button>
                    <Table className="mt-6">
                        <TableHeader><TableRow className="border-gray-700"><TableHead>Item Avaliado</TableHead><TableHead>Status</TableHead><TableHead>Observação</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {reviewData.map(item => <TableRow key={item.item} className="border-gray-700"><TableCell>{item.item}</TableCell><TableCell>{getStatusBadge(item.status, item.statusColor)}</TableCell><TableCell>{item.obs}</TableCell></TableRow>)}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="biblioteca" className="mt-6">
            <Card className="bg-petroleum-blue border-gray-700 text-white">
                <CardHeader><CardTitle>Biblioteca Inteligente de Cláusulas</CardTitle></CardHeader>
                <CardContent>
                    <Input placeholder="Busca semântica: 'cláusulas de rescisão com multa'..." className="bg-gray-800 border-gray-700 mb-4" />
                    <Table>
                        <TableHeader><TableRow className="border-gray-700"><TableHead>Nome</TableHead><TableHead>Tipo</TableHead><TableHead>Risco</TableHead><TableHead>Última Revisão</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {libraryData.map(item => <TableRow key={item.name} className="border-gray-700"><TableCell>{item.name}</TableCell><TableCell>{item.type}</TableCell><TableCell>{item.risk}</TableCell><TableCell>{item.lastReview}</TableCell></TableRow>)}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="contexto" className="mt-6">
            <Card className="bg-petroleum-blue border-gray-700 text-white">
                <CardHeader><CardTitle>IA Contextual e Sugestões Dinâmicas</CardTitle></CardHeader>
                <CardContent><p className="text-gray-400">Em construção...</p></CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="logs" className="mt-6">
            <Card className="bg-petroleum-blue border-gray-700 text-white">
                <CardHeader><CardTitle>Logs, Versionamento e Compliance</CardTitle></CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader><TableRow className="border-gray-700"><TableHead>Data</TableHead><TableHead>Usuário/IA</TableHead><TableHead>Ação</TableHead><TableHead>Documento</TableHead><TableHead>Resultado</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {logsData.map(log => <TableRow key={log.data+log.acao} className="border-gray-700"><TableCell>{log.data}</TableCell><TableCell>{log.user}</TableCell><TableCell>{log.acao}</TableCell><TableCell>{log.doc}</TableCell><TableCell>{log.result}</TableCell></TableRow>)}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClausulaCopilot;