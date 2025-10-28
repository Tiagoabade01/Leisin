import React, { useEffect, useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { 
  PlusCircle, BrainCircuit, FileText, Search, Sparkles, Book, GitCompare, ShieldCheck, Save, Edit2, Trash2
} from "lucide-react";
import { showSuccess } from '@/utils/toast';
import { openAIClient } from '@/integrations/apis/openai';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// --- MOCK DATA (mantidos para outras abas) ---
const reviewData = [
  { item: "Clareza e objetividade", status: "Adequada", obs: "Linguagem direta e sem ambiguidade", statusColor: "green" },
  { item: "Base Legal", status: "OK", obs: "Código Civil, art. 421 e 422", statusColor: "green" },
  { item: "Risco de nulidade", status: "Moderado", obs: "Ausência de prazo explícito de validade", statusColor: "yellow" },
  { item: "Conflito com cláusulas correlatas", status: "Alto", obs: "Divergência com cláusula 5.3 do mesmo contrato", statusColor: "red" },
  { item: "Aderência à LGPD", status: "Conformidade", obs: "Dados pessoais tratados sob consentimento", statusColor: "green" },
];

const logsData = [
  { date: "10/10/25", user: "IA CláusulaCopilot", action: "Geração de cláusula", doc: "Contrato Atlas", result: "Aprovado" },
  { date: "10/10/25", user: "Dra. Larissa", action: "Revisão e ajuste", doc: "Modelo Padrão", result: "Confirmado" },
  { date: "11/10/25", user: "IA Central", action: "Atualização legal", doc: "Biblioteca Geral", result: "Executado" },
];

const getStatusBadge = (status: string, color: string) => {
  const colorClasses: Record<string, string> = {
    green: "bg-green-500/20 text-green-400 border-green-500/30",
    yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    red: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  return <Badge className={colorClasses[color]}>{status}</Badge>;
};

type ClauseRow = {
  id: string;
  user_id: string | null;
  name: string;
  content: string;
  legal_basis: string | null;
  risk_level: string | null;
  is_example: boolean;
  updated_at: string;
};

const ClausulaCopilot = () => {
  const [prompt, setPrompt] = useState("Gerar cláusula de confidencialidade para parceria tecnológica de 24 meses.");
  const [generatedClause, setGeneratedClause] = useState("");
  const [legalBasis, setLegalBasis] = useState("");
  const [library, setLibrary] = useState<ClauseRow[]>([]);
  const [filter, setFilter] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [editing, setEditing] = useState<ClauseRow | null>(null);
  const [editName, setEditName] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editLegal, setEditLegal] = useState("");

  const filtered = useMemo(() => {
    const f = filter.trim().toLowerCase();
    if (!f) return library;
    return library.filter(r => 
      r.name.toLowerCase().includes(f) ||
      (r.legal_basis || "").toLowerCase().includes(f) ||
      r.content.toLowerCase().includes(f)
    );
  }, [filter, library]);

  const handleGenerate = async () => {
    const result = await openAIClient.gerarClausula(prompt);
    const content = result.choices?.[0]?.message?.content ?? '';
    const parsed = JSON.parse(content);
    setGeneratedClause(parsed.clause || '');
    setLegalBasis(parsed.legal_basis || '');
    showSuccess("Cláusula gerada com IA!");
  };

  const loadLibrary = async () => {
    // RLS permite: o usuário vê seus itens e também exemplos públicos
    const { data, error } = await supabase
      .from('clauses_library')
      .select('*')
      .order('updated_at', { ascending: false });

    if (error) throw error;
    setLibrary((data || []) as ClauseRow[]);
  };

  const saveToLibrary = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Usuário não autenticado');

    const name = prompt?.slice(0, 70) || 'Cláusula sem título';
    const { data, error } = await supabase
      .from('clauses_library')
      .insert({
        user_id: user.id,
        name,
        content: generatedClause || '—',
        legal_basis: legalBasis || null,
        risk_level: null,
        is_example: false,
      })
      .select()
      .single();

    if (error) throw error;
    setLibrary(prev => [data as ClauseRow, ...prev]);
    showSuccess("Cláusula salva na sua biblioteca!");
  };

  const openEdit = (row: ClauseRow) => {
    setEditing(row);
    setEditName(row.name);
    setEditContent(row.content);
    setEditLegal(row.legal_basis || "");
    setEditOpen(true);
  };

  const confirmEdit = async () => {
    if (!editing) return;
    const { data, error } = await supabase
      .from('clauses_library')
      .update({
        name: editName,
        content: editContent,
        legal_basis: editLegal || null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', editing.id)
      .select()
      .single();

    if (error) throw error;
    setLibrary(prev => prev.map(r => r.id === editing.id ? (data as ClauseRow) : r));
    setEditOpen(false);
    setEditing(null);
    showSuccess("Cláusula atualizada!");
  };

  const removeRow = async (row: ClauseRow) => {
    const { error } = await supabase
      .from('clauses_library')
      .delete()
      .eq('id', row.id);

    if (error) throw error;
    setLibrary(prev => prev.filter(r => r.id !== row.id));
    showSuccess("Cláusula excluída!");
  };

  useEffect(() => {
    loadLibrary();
  }, []);

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
                  <Button variant="outline" className="bg-gray-800/50 border-gray-700" onClick={saveToLibrary}><Save className="h-4 w-4 mr-2" /> Salvar na Biblioteca</Button>
                </div>
              </div>
              <div className="space-y-4">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader><CardTitle className="text-base">Base Legal (IA)</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-gray-300">{legalBasis || "A base legal será exibida aqui."}</p></CardContent>
                </Card>
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader><CardTitle className="text-base">Sugestões da IA</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-risk-gold">"Deseja incluir multa rescisória automática em caso de inadimplemento?"</p></CardContent>
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
            <CardHeader>
              <CardTitle>Biblioteca Inteligente de Cláusulas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Busca semântica: 'rescisão com multa'..."
                    className="bg-gray-800 border-gray-700 pl-9 w-full sm:w-80"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead>Nome</TableHead>
                    <TableHead>Base Legal</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Atualizado</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map(item => (
                    <TableRow key={item.id} className="border-gray-700">
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="text-sm text-gray-300">{item.legal_basis || "-"}</TableCell>
                      <TableCell>
                        {item.is_example 
                          ? <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Exemplo</Badge>
                          : <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Meu</Badge>
                        }
                      </TableCell>
                      <TableCell className="text-sm text-gray-300">{new Date(item.updated_at).toLocaleString()}</TableCell>
                      <TableCell className="text-right space-x-1">
                        {!item.is_example && (
                          <>
                            <Button variant="ghost" size="icon" onClick={() => openEdit(item)}><Edit2 className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="icon" className="text-red-400" onClick={() => removeRow(item)}><Trash2 className="h-4 w-4" /></Button>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
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
                  {logsData.map(log => <TableRow key={log.date + log.action} className="border-gray-700"><TableCell>{log.date}</TableCell><TableCell>{log.user}</TableCell><TableCell>{log.action}</TableCell><TableCell>{log.doc}</TableCell><TableCell>{log.result}</TableCell></TableRow>)}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Dialogo de Edição */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle>Editar Cláusula</DialogTitle>
            <DialogDescription className="text-gray-300">Atualize os campos e salve suas alterações.</DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div>
              <Label>Nome</Label>
              <Input value={editName} onChange={(e) => setEditName(e.target.value)} className="bg-gray-800 border-gray-700 mt-1" />
            </div>
            <div>
              <Label>Conteúdo</Label>
              <Textarea value={editContent} onChange={(e) => setEditContent(e.target.value)} className="bg-gray-800 border-gray-700 mt-1" rows={6} />
            </div>
            <div>
              <Label>Base Legal</Label>
              <Input value={editLegal} onChange={(e) => setEditLegal(e.target.value)} className="bg-gray-800 border-gray-700 mt-1" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setEditOpen(false)}>Cancelar</Button>
            <Button onClick={confirmEdit}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClausulaCopilot;