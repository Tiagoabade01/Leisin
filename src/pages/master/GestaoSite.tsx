import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Save, Eye, Mail, PlusCircle, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from '@/components/ui/switch';

// --- DADOS SINCRONIZADOS COM A LANDING PAGE ---

const initialHeroContent = {
  preHeadline: "Plataforma de Inteligência Jurídica",
  headline: "A Plataforma Definitiva para Diligência Jurídica e Imobiliária",
  subheadline: "Automatize processos, mitigue riscos e feche negócios com mais segurança e velocidade. Transforme sua operação com a T3 Diligence.",
  ctaButton: "Começar Teste Gratuito de 14 Dias",
  backgroundImage: "/placeholder.svg",
};

const initialClients = [
  { id: 1, name: 'Ipiranga', logo: '/placeholder.svg' },
  { id: 2, name: 'Mascarenhas Barbosa', logo: '/placeholder.svg' },
  { id: 3, name: 'QCA', logo: '/placeholder.svg' },
  { id: 4, name: 'Client 4', logo: '/placeholder.svg' },
  { id: 5, name: 'Client 5', logo: '/placeholder.svg' },
  { id: 6, name: 'Client 6', logo: '/placeholder.svg' },
  { id: 7, name: 'Client 7', logo: '/placeholder.svg' },
  { id: 8, name: 'Client 8', logo: '/placeholder.svg' },
];

const initialFeatures = [
  { id: 1, title: "Dashboard Executivo", description: "Visão 360º da sua operação com KPIs em tempo real para decisões estratégicas." },
  { id: 2, title: "Jurídico Operacional", description: "Gerencie casos, contratos, tarefas e documentos em um local centralizado e seguro." },
  { id: 3, title: "Gestão de Tarefas e Prazos", description: "Nunca mais perca um prazo com quadros Kanban, alertas e automação de SLAs." },
  { id: 4, title: "Compliance e Análise de Risco", description: "Mitigue riscos com Due Diligence, Risk Mapper e auditorias de conformidade." },
  { id: 5, title: "Imobiliário Integrado", description: "Solução completa para o setor, com dossiês de propriedade e integrações cartoriais." },
  { id: 6, title: "Financeiro", description: "Controle contas a pagar/receber, fluxo de caixa e orçamentos por projeto." },
  { id: 7, title: "Contábil", description: "Simplifique sua contabilidade com centros de custo, DREs e integrações." },
  { id: 8, title: "Comunicação Unificada", description: "Centralize E-mail e WhatsApp, com históricos e Chat Copilot com IA." },
  { id: 9, title: "CRM Jurídico", description: "Gerencie o pipeline de oportunidades, clientes e propostas de forma integrada." },
  { id: 10, title: "IA e Automação", description: "Use IA para analisar matrículas, redigir cláusulas e automatizar dossiês." },
  { id: 11, title: "Gestão de Filiais", description: "Controle equipes, faturamento e relatórios consolidados de múltiplas unidades." },
  { id: 12, title: "Gestão / Core", description: "Personalize a plataforma, gerencie usuários, permissões e faturamento." },
  { id: 13, title: "Biblioteca Jurídica", description: "Centralize seu conhecimento com pesquisa por IA em leis, modelos e jurisprudência." },
  { id: 14, title: "Governança & LGPD", description: "Garanta a conformidade com controle de dados sensíveis e auditoria de acessos." },
];

const initialPlatformPreview = {
    headline: "Visualize o Futuro da sua Operação Jurídica",
    subheadline: "Nossa plataforma transforma dados complexos em insights claros e acionáveis, permitindo que você se concentre no que realmente importa: a estratégia.",
    points: [
        "Analise matrículas imobiliárias em segundos com o **MatrículaLens**.",
        "Gere minutas contratuais inteligentes com o **CláusulaCopilot**.",
        "Mapeie conexões e riscos societários com o **Risk Mapper**."
    ],
    ctaButton: "Solicite uma demonstração",
    image: "/placeholder.svg"
};

const initialPlans = [
  { id: 'free', name: 'Free', price: '0', description: 'Para testar funcionalidades essenciais e organizar seus primeiros casos.', features: ['1 Usuário', 'Até 3 Casos Ativos', 'Gestão de Documentos Básica', 'Tarefas Simples'], cta: 'Comece de Graça', popular: false },
  { id: 'starter', name: 'Starter', price: '149', description: 'Para profissionais solo e escritórios pequenos.', features: ['Tudo do Free, e mais:', 'Gestão de Casos e Processos', 'Controle de Documentos', 'Tarefas e Prazos Básicos', 'Biblioteca Jurídica'], cta: 'Iniciar teste de 14 dias', popular: false },
  { id: 'pro', name: 'Pro', price: '690', description: 'Para times que precisam de mais colaboração e IA.', features: ['Tudo do Starter, e mais:', 'Contratos e Assinaturas', 'Due Diligence & Certidões', 'CRM Jurídico', 'Comunicação Unificada', 'Nível de IA Padrão'], cta: 'Iniciar teste de 14 dias', popular: true },
  { id: 'business', name: 'Business', price: '2.490', description: 'Para escritórios com automações e risco avançado.', features: ['Tudo do Pro, e mais:', 'Risk Mapper Avançado', 'Módulo Imobiliário Integrado', 'Módulo Financeiro Completo', 'Governança & LGPD', 'Nível de IA Avançada'], cta: 'Iniciar teste de 14 dias', popular: false },
  { id: 'enterprise', name: 'Enterprise', price: 'Sob Consulta', description: 'Para grandes grupos com necessidades complexas.', features: ['Tudo do Business, e mais:', 'Gestão de Filiais', 'Integrações & SSO', 'Módulo Contábil', 'Suporte com Gerente Dedicado'], cta: 'Fale Conosco', popular: false },
];

const initialContact = {
    headline: "Descubra como nosso Software Jurídico pode mudar sua operação!",
    subheadline: "Preencha os dados e fale com nosso time para conhecer os módulos ideais para sua operação.",
    image: "/placeholder.svg"
};

const initialLeads = [
    { id: 1, name: "Mariana Costa", email: "mariana.c@construtorafuturo.com", message: "Gostaria de agendar uma demonstração para minha equipe.", status: "Novo" },
    { id: 2, name: "Jorge Almeida", email: "jorge.a@advocaciaunida.com.br", message: "Qual o preço para o plano Enterprise com 50 usuários?", status: "Contatado" },
];

const GestaoSite = () => {
  // States for each editable section
  const [heroContent, setHeroContent] = useState(initialHeroContent);
  const [clients, setClients] = useState(initialClients);
  const [features, setFeatures] = useState(initialFeatures);
  const [platformPreview, setPlatformPreview] = useState(initialPlatformPreview);
  const [plans, setPlans] = useState(initialPlans);
  const [contactContent, setContactContent] = useState(initialContact);
  const [leads, setLeads] = useState(initialLeads);

  // Generic handler for simple text inputs
  const handleInputChange = (setter, field, value) => {
    setter(prev => ({ ...prev, [field]: value }));
  };

  // Handlers for list items
  const handleListItemChange = (setter, id, field, value) => {
    setter(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addListItem = (setter, newItem) => {
    setter(prev => [...prev, newItem]);
  };

  const removeListItem = (setter, id) => {
    setter(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Gestão do Site</h1>
          <p className="text-gray-300">Edite o conteúdo, gerencie páginas e acompanhe os leads do seu site público.</p>
        </div>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="bg-gray-800 border-gray-700"><Eye className="h-4 w-4 mr-2" /> Ver Site ao Vivo</Button>
        </a>
      </div>

      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-6 bg-gray-800">
          <TabsTrigger value="hero">Seção Principal</TabsTrigger>
          <TabsTrigger value="clients">Clientes</TabsTrigger>
          <TabsTrigger value="features">Funcionalidades</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="pricing">Planos</TabsTrigger>
          <TabsTrigger value="contact">Contato & Leads</TabsTrigger>
        </TabsList>

        {/* Hero Section Tab */}
        <TabsContent value="hero" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Conteúdo da Seção Principal (Hero)</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2"><Label>Pré-título</Label><Input value={heroContent.preHeadline} onChange={e => handleInputChange(setHeroContent, 'preHeadline', e.target.value)} className="bg-gray-700 border-gray-600" /></div>
              <div className="space-y-2"><Label>Título Principal</Label><Textarea value={heroContent.headline} onChange={e => handleInputChange(setHeroContent, 'headline', e.target.value)} className="bg-gray-700 border-gray-600" /></div>
              <div className="space-y-2"><Label>Subtítulo</Label><Textarea value={heroContent.subheadline} onChange={e => handleInputChange(setHeroContent, 'subheadline', e.target.value)} className="bg-gray-700 border-gray-600" /></div>
              <div className="space-y-2"><Label>Texto do Botão (CTA)</Label><Input value={heroContent.ctaButton} onChange={e => handleInputChange(setHeroContent, 'ctaButton', e.target.value)} className="bg-gray-700 border-gray-600" /></div>
              <div className="space-y-2"><Label>URL da Imagem de Fundo</Label><Input value={heroContent.backgroundImage} onChange={e => handleInputChange(setHeroContent, 'backgroundImage', e.target.value)} className="bg-gray-700 border-gray-600" /></div>
              <Button><Save className="h-4 w-4 mr-2" /> Salvar Seção</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Clients Section Tab */}
        <TabsContent value="clients" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Seção de Clientes</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {clients.map(client => (
                <div key={client.id} className="flex items-center gap-4 p-2 bg-gray-700/50 rounded">
                  <Input placeholder="Nome do Cliente" value={client.name} onChange={e => handleListItemChange(setClients, client.id, 'name', e.target.value)} className="bg-gray-700 border-gray-600" />
                  <Input placeholder="URL do Logo" value={client.logo} onChange={e => handleListItemChange(setClients, client.id, 'logo', e.target.value)} className="bg-gray-700 border-gray-600" />
                  <Button variant="ghost" size="icon" onClick={() => removeListItem(setClients, client.id)} className="text-red-500 hover:bg-red-500/10"><Trash2 className="h-4 w-4" /></Button>
                </div>
              ))}
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => addListItem(setClients, { id: Date.now(), name: '', logo: '' })} className="bg-gray-700 border-gray-600"><PlusCircle className="h-4 w-4 mr-2" /> Adicionar Cliente</Button>
                <Button><Save className="h-4 w-4 mr-2" /> Salvar Seção</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Features Section Tab */}
        <TabsContent value="features" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Seção de Funcionalidades</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {features.map(feature => (
                <div key={feature.id} className="p-3 bg-gray-700/50 rounded-lg space-y-2">
                  <div className="flex justify-between items-center">
                    <Label>Funcionalidade</Label>
                    <Button variant="ghost" size="icon" onClick={() => removeListItem(setFeatures, feature.id)} className="text-red-500 hover:bg-red-500/10"><Trash2 className="h-4 w-4" /></Button>
                  </div>
                  <Input placeholder="Título" value={feature.title} onChange={e => handleListItemChange(setFeatures, feature.id, 'title', e.target.value)} className="bg-gray-700 border-gray-600" />
                  <Textarea placeholder="Descrição" value={feature.description} onChange={e => handleListItemChange(setFeatures, feature.id, 'description', e.target.value)} className="bg-gray-700 border-gray-600" />
                </div>
              ))}
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => addListItem(setFeatures, { id: Date.now(), title: '', description: '' })} className="bg-gray-700 border-gray-600"><PlusCircle className="h-4 w-4 mr-2" /> Adicionar Funcionalidade</Button>
                <Button><Save className="h-4 w-4 mr-2" /> Salvar Seção</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Platform Preview Tab */}
        <TabsContent value="preview" className="mt-6">
            <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader><CardTitle className="text-white">Seção de Preview da Plataforma</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2"><Label>Título</Label><Input value={platformPreview.headline} onChange={e => handleInputChange(setPlatformPreview, 'headline', e.target.value)} className="bg-gray-700 border-gray-600" /></div>
                    <div className="space-y-2"><Label>Subtítulo</Label><Textarea value={platformPreview.subheadline} onChange={e => handleInputChange(setPlatformPreview, 'subheadline', e.target.value)} className="bg-gray-700 border-gray-600" /></div>
                    <div className="space-y-2"><Label>Pontos de Destaque (um por linha)</Label><Textarea value={platformPreview.points.join('\n')} onChange={e => handleInputChange(setPlatformPreview, 'points', e.target.value.split('\n'))} className="bg-gray-700 border-gray-600" rows={3} /></div>
                    <div className="space-y-2"><Label>Texto do Botão (CTA)</Label><Input value={platformPreview.ctaButton} onChange={e => handleInputChange(setPlatformPreview, 'ctaButton', e.target.value)} className="bg-gray-700 border-gray-600" /></div>
                    <div className="space-y-2"><Label>URL da Imagem</Label><Input value={platformPreview.image} onChange={e => handleInputChange(setPlatformPreview, 'image', e.target.value)} className="bg-gray-700 border-gray-600" /></div>
                    <Button><Save className="h-4 w-4 mr-2" /> Salvar Seção</Button>
                </CardContent>
            </Card>
        </TabsContent>

        {/* Pricing Tab */}
        <TabsContent value="pricing" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Seção de Planos e Preços</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {plans.map(plan => (
                <div key={plan.id} className="p-3 bg-gray-700/50 rounded-lg space-y-2">
                  <div className="flex justify-between items-center">
                    <Input placeholder="Nome do Plano" value={plan.name} onChange={e => handleListItemChange(setPlans, plan.id, 'name', e.target.value)} className="bg-gray-700 border-gray-600 font-bold" />
                    <div className="flex items-center gap-2"><Label>Popular?</Label><Switch checked={plan.popular} onCheckedChange={checked => handleListItemChange(setPlans, plan.id, 'popular', checked)} /></div>
                    <Button variant="ghost" size="icon" onClick={() => removeListItem(setPlans, plan.id)} className="text-red-500 hover:bg-red-500/10"><Trash2 className="h-4 w-4" /></Button>
                  </div>
                  <Input placeholder="Preço (ex: 149 ou 'Sob Consulta')" value={plan.price} onChange={e => handleListItemChange(setPlans, plan.id, 'price', e.target.value)} className="bg-gray-700 border-gray-600" />
                  <Input placeholder="Descrição" value={plan.description} onChange={e => handleListItemChange(setPlans, plan.id, 'description', e.target.value)} className="bg-gray-700 border-gray-600" />
                  <Textarea placeholder="Funcionalidades (uma por linha)" value={plan.features.join('\n')} onChange={e => handleListItemChange(setPlans, plan.id, 'features', e.target.value.split('\n'))} className="bg-gray-700 border-gray-600" />
                  <Input placeholder="Texto do Botão (CTA)" value={plan.cta} onChange={e => handleListItemChange(setPlans, plan.id, 'cta', e.target.value)} className="bg-gray-700 border-gray-600" />
                </div>
              ))}
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => addListItem(setPlans, { id: `plan_${Date.now()}`, name: '', price: '', description: '', features: [], cta: '', popular: false })} className="bg-gray-700 border-gray-600"><PlusCircle className="h-4 w-4 mr-2" /> Adicionar Plano</Button>
                <Button><Save className="h-4 w-4 mr-2" /> Salvar Seção</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact & Leads Tab */}
        <TabsContent value="contact" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader><CardTitle className="text-white">Conteúdo da Seção de Contato</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2"><Label>Título</Label><Textarea value={contactContent.headline} onChange={e => handleInputChange(setContactContent, 'headline', e.target.value)} className="bg-gray-700 border-gray-600" /></div>
                <div className="space-y-2"><Label>Subtítulo</Label><Textarea value={contactContent.subheadline} onChange={e => handleInputChange(setContactContent, 'subheadline', e.target.value)} className="bg-gray-700 border-gray-600" /></div>
                <div className="space-y-2"><Label>URL da Imagem</Label><Input value={contactContent.image} onChange={e => handleInputChange(setContactContent, 'image', e.target.value)} className="bg-gray-700 border-gray-600" /></div>
                <Button><Save className="h-4 w-4 mr-2" /> Salvar Seção</Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader><CardTitle className="text-white">Caixa de Entrada (Leads)</CardTitle></CardHeader>
              <CardContent>
                <Table>
                  <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800"><TableHead className="text-gray-200">Contato</TableHead><TableHead className="text-gray-200">Status</TableHead><TableHead className="text-gray-200">Ações</TableHead></TableRow></TableHeader>
                  <TableBody>
                    {leads.map(lead => (
                      <TableRow key={lead.id} className="border-gray-700">
                        <TableCell><div className="font-medium">{lead.name}</div><div className="text-xs text-gray-300">{lead.email}</div></TableCell>
                        <TableCell><Badge variant={lead.status === 'Novo' ? 'default' : 'secondary'}>{lead.status}</Badge></TableCell>
                        <TableCell><Button variant="outline" size="sm" className="bg-gray-700 border-gray-600"><Mail className="h-3 w-3 mr-1" /> Responder</Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GestaoSite;