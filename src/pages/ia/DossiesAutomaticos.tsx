import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  PlusCircle, BrainCircuit, FileText, Download, Search, GitBranch, Folder, Bot, FilePlus,
  AlertTriangle, Signature, Banknote, Building, Home, Share2
} from "lucide-react";

// --- MOCK DATA & SUBCOMPONENTS ---

const historyData = [
  { type: "Pessoa Física", name: "João Andrade", date: "11/10/25", status: "Concluído" },
  { type: "Empresa", name: "Construtora Vale Verde Ltda", date: "11/10/25", status: "Concluído" },
  { type: "Imóvel", name: "Matrícula 35.774 - SP", date: "11/10/25", status: "Concluído" },
  { type: "Pessoa Jurídica", name: "Grupo Realiza Participações", date: "10/10/25", status: "Em Progresso" },
  { type: "Imóvel", name: "Matrícula 11.023 - Guarulhos", date: "09/10/25", status: "Concluído" },
];

const riskAnalysisData = [
  { categoria: "Judicial", exemplo: "Processos cíveis e trabalhistas", risco: "Médio" },
  { categoria: "Tributário", exemplo: "Dívidas ativas federais / estaduais", risco: "Alto" },
  { categoria: "Societário", exemplo: "Sócio envolvido em ação falimentar", risco: "Alto" },
  { categoria: "Cartorial", exemplo: "Penhora / hipoteca / indisponibilidade", risco: "Alto" },
  { categoria: "Financeiro", exemplo: "Score de crédito / histórico bancário", risco: "Médio" },
  { categoria: "Compliance", exemplo: "Ausência de CNDs / atraso em certidões", risco: "Alto" },
];

const getStatusBadge = (status: string) => {
  if (status === "Concluído") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">✅ Concluído</Badge>;
  if (status === "Em Progresso") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">⏳ Em Progresso</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const getRiskBadge = (risco: string) => {
    if (risco === "Alto") return <Badge variant="destructive">🔴 Alto</Badge>;
    if (risco === "Médio") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Médio</Badge>;
    return <Badge variant="secondary">🟡 Baixo</Badge>;
};

const DossiesAutomaticos = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Dossiês Automáticos</h1>
          <p className="text-gray-400 max-w-3xl">
            De um CPF, CNPJ ou matrícula, a IA do Leisin monta um dossiê completo: jurídico, financeiro, societário e patrimonial — em minutos, não dias.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Novo Dossiê</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700">Comparar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700">Agendar Atualização</Button>
        </div>
      </header>

      <Tabs defaultValue="geracao" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="geracao">Geração e Histórico</TabsTrigger>
          <TabsTrigger value="assistente">Assistente de Criação</TabsTrigger>
          <TabsTrigger value="analise">Análise de Risco</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          <TabsTrigger value="integracoes">Integrações</TabsTrigger>
        </TabsList>

        <TabsContent value="geracao" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Painel de Geração e Histórico</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tipo</TableHead><TableHead>Nome / ID</TableHead><TableHead>Data</TableHead><TableHead>Status</TableHead><TableHead>Ações</TableHead></TableRow></TableHeader>
                <TableBody>
                  {historyData.map(item => (
                    <TableRow key={item.name} className="border-gray-700">
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
                      <TableCell><Button variant="ghost" size="sm">🔍 Visualizar</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-risk-gold mt-4">💡 Insight IA: “Detectado padrão de vínculos entre CNPJ Vale Verde e 3 matrículas analisadas recentemente. Deseja unificar os dossiês?”</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assistente" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Assistente de Criação (IA Builder)</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2"><Label>Dados Básicos</Label><Input placeholder="Insira CPF, CNPJ, matrícula ou nome..." className="bg-gray-800 border-gray-700" /></div>
                <div className="space-y-2"><Label>Tipo de Dossiê</Label><div className="flex gap-2"><Button variant="secondary">Completo</Button><Button variant="outline" className="bg-gray-800/50">Jurídico</Button><Button variant="outline" className="bg-gray-800/50">Imobiliário</Button></div></div>
                <div className="space-y-2"><Label>Profundidade</Label><div className="flex gap-2"><Button variant="secondary">Detalhado</Button><Button variant="outline" className="bg-gray-800/50">Rápido</Button><Button variant="outline" className="bg-gray-800/50">Investigativo</Button></div></div>
                <Button className="w-full">Gerar Dossiê</Button>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h3 className="font-semibold mb-2 text-white flex items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /> Análise Preliminar da IA</h3>
                <p className="text-sm text-gray-300">“Com base no CPF informado, encontrei vínculo societário com a empresa Atlântico Incorporadora e registro de imóvel ativo na matrícula 28.502/SP.”</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analise" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Análise Jurídica e de Risco</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700"><TableHead>Categoria</TableHead><TableHead>Exemplo</TableHead><TableHead>Risco</TableHead></TableRow></TableHeader>
                <TableBody>
                  {riskAnalysisData.map(item => (
                    <TableRow key={item.categoria} className="border-gray-700">
                      <TableCell>{item.categoria}</TableCell>
                      <TableCell>{item.exemplo}</TableCell>
                      <TableCell>{getRiskBadge(item.risco)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “O sócio da empresa apresenta 4 processos ativos e 1 imóvel penhorado. O risco societário é classificado como alto.”</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="relatorios" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Relatórios Multicamadas</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Pessoa Física:</strong> dados civis, vínculos, processos, imóveis, sociedades.</li>
                <li><strong>Pessoa Jurídica:</strong> quadro societário, pendências fiscais, reputação.</li>
                <li><strong>Imóvel:</strong> matrícula, ônus, proprietários, averbações, zoneamento.</li>
                <li><strong>Financeiro:</strong> histórico de faturamento, dívidas, score.</li>
                <li><strong>Compliance:</strong> CNDs, certidões, obrigações, ESG.</li>
              </ul>
              <div className="h-64 flex items-center justify-center bg-gray-900/50 rounded-lg border border-dashed border-gray-700">
                <div className="text-center text-gray-500"><Share2 className="mx-auto h-12 w-12 mb-2" /><p>Painel de Conexões (Grafo de Vínculos)</p></div>
              </div>
              <p className="text-sm text-risk-gold md:col-span-2">💡 IA Insight: “A Construtora Vale Verde Ltda. compartilha CNPJ e endereços com 2 empresas em investigação tributária. Relacionar e sinalizar como risco moderado.”</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integracoes" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Exportações e Integrações Externas</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Integrações Principais</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>BigDataCorp, Receita Federal, SINTEGRA</li>
                  <li>ARISP, Cartórios, SERP Nacional</li>
                  <li>CENSEC, BacenJud, CNIB</li>
                  <li>TJRJ, TJSP, CNJ, JUCESP</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Exportações</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>PDF (Relatório Executivo)</li>
                  <li>DOCX (Relatório Detalhado)</li>
                  <li>JSON (para integração)</li>
                  <li>HTML (visualização com token)</li>
                </ul>
              </div>
              <p className="text-sm text-risk-gold md:col-span-2">💡 IA Insight: “Dossiê ‘Pessoa Jurídica’ exportado para o módulo Compliance com 97% de dados consolidados. Gerar alerta de atualização trimestral?”</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DossiesAutomaticos;