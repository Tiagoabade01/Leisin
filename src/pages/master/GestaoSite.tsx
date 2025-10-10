import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Edit, Save, Eye, Mail, PlusCircle, Trash2 } from "lucide-react";

const initialHeroContent = {
  headline: "A Plataforma Definitiva para Diligência Jurídica e Imobiliária",
  subheadline: "Automatize processos, mitigue riscos e feche negócios com mais segurança e velocidade. Transforme sua operação com a T3 Diligence.",
  ctaButton: "Começar Teste Gratuito de 14 Dias",
};

const initialFeatures = [
  { id: 1, title: "IA Jurídica Avançada", description: "Analise matrículas, contratos e certidões em segundos com nossa IA treinada." },
  { id: 2, title: "Risk Mapper Integrado", description: "Visualize grafos de relações complexas entre pessoas, empresas e imóveis." },
  { id: 3, title: "Automação de Documentos", description: "Gere dossiês completos e minutas de contrato com um clique." },
];

const initialLeads = [
    { id: 1, name: "Mariana Costa", email: "mariana.c@construtorafuturo.com", message: "Gostaria de agendar uma demonstração para minha equipe.", status: "Novo" },
    { id: 2, name: "Jorge Almeida", email: "jorge.a@advocaciaunida.com.br", message: "Qual o preço para o plano Enterprise com 50 usuários?", status: "Contatado" },
    { id: 3, name: "Beatriz Lima", email: "beatriz.lima@imobfast.com", message: "O sistema integra com o DocuSign?", status: "Novo" },
];

const GestaoSite = () => {
  const [heroContent, setHeroContent] = useState(initialHeroContent);
  const [features, setFeatures] = useState(initialFeatures);
  const [leads, setLeads] = useState(initialLeads);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Gestão do Site</h1>
      <p className="text-gray-400 mb-8">Edite o conteúdo, gerencie páginas e acompanhe os leads do seu site público.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Coluna da Esquerda: Conteúdo */}
        <div className="space-y-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Seção Principal (Hero)</CardTitle>
                <CardDescription className="text-gray-400">O primeiro impacto do seu visitante.</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="bg-gray-700 border-gray-600"><Eye className="h-4 w-4 mr-2" /> Ver no Site</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="headline">Título Principal</Label>
                <Textarea id="headline" value={heroContent.headline} onChange={e => setHeroContent({...heroContent, headline: e.target.value})} className="bg-gray-700 border-gray-600" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subheadline">Subtítulo</Label>
                <Textarea id="subheadline" value={heroContent.subheadline} onChange={e => setHeroContent({...heroContent, subheadline: e.target.value})} className="bg-gray-700 border-gray-600" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ctaButton">Texto do Botão (CTA)</Label>
                <Input id="ctaButton" value={heroContent.ctaButton} onChange={e => setHeroContent({...heroContent, ctaButton: e.target.value})} className="bg-gray-700 border-gray-600" />
              </div>
              <Button><Save className="h-4 w-4 mr-2" /> Salvar Alterações</Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle>Funcionalidades em Destaque</CardTitle>
              <CardDescription className="text-gray-400">Os principais benefícios do seu produto.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {features.map((feature, index) => (
                <div key={feature.id} className="p-3 bg-gray-700/50 rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                        <Label htmlFor={`feature-title-${feature.id}`}>Título {index + 1}</Label>
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-red-500 hover:bg-red-500/10"><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  <Input id={`feature-title-${feature.id}`} value={feature.title} className="bg-gray-700 border-gray-600" />
                  <Label htmlFor={`feature-desc-${feature.id}`}>Descrição</Label>
                  <Textarea id={`feature-desc-${feature.id}`} value={feature.description} className="bg-gray-700 border-gray-600" />
                </div>
              ))}
              <div className="flex justify-between">
                <Button variant="outline" className="bg-gray-700 border-gray-600"><PlusCircle className="h-4 w-4 mr-2" /> Adicionar Funcionalidade</Button>
                <Button><Save className="h-4 w-4 mr-2" /> Salvar Funcionalidades</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coluna da Direita: Leads e Páginas */}
        <div className="space-y-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle>Caixa de Entrada (Leads)</CardTitle>
              <CardDescription className="text-gray-400">Mensagens recebidas pelo formulário de contato.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead>Contato</TableHead><TableHead>Status</TableHead><TableHead>Ações</TableHead></TableRow></TableHeader>
                <TableBody>
                  {leads.map(lead => (
                    <TableRow key={lead.id} className="border-gray-700">
                      <TableCell>
                        <div className="font-medium">{lead.name}</div>
                        <div className="text-xs text-gray-400">{lead.email}</div>
                      </TableCell>
                      <TableCell><Badge variant={lead.status === 'Novo' ? 'default' : 'secondary'}>{lead.status}</Badge></TableCell>
                      <TableCell><Button variant="outline" size="sm" className="bg-gray-700 border-gray-600"><Mail className="h-3 w-3 mr-1" /> Responder</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader><CardTitle>Gestão de Páginas</CardTitle></CardHeader>
            <CardContent className="text-center text-gray-500 py-10">
              <p>Em breve: Crie e edite páginas como "Sobre Nós", "Recursos" e "Contato" para o menu do seu site.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GestaoSite;