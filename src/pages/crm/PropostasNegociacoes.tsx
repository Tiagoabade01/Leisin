import React, { useState, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Download, BarChart2, BrainCircuit, FileText, GitCompare, Check, X, Clock } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { showSuccess } from '@/utils/toast';

// --- MOCK DATA ---
const kpis = [
  { title: "Propostas Enviadas", value: "248", status: "green" },
  { title: "Em Negociação", value: "96", status: "orange" },
  { title: "Fechadas", value: "138", status: "green" },
  { title: "Perdidas", value: "14", status: "red" },
  { title: "Ticket Médio", value: "R$ 89.700", status: "green" },
  { title: "Tempo Médio de Fechamento", value: "9,5 dias", status: "blue" },
];

const initialProposals = [
  { id: 1, cliente: "Banco Futura", tipo: "Assessoria Tributária", responsavel: "Dr. Ricardo", status: "Em Negociação", valor: 180000, prob: 74 },
  { id: 2, cliente: "Construtora Atlas", tipo: "Due Diligence", responsavel: "Dra. Larissa", status: "Enviada", valor: 95000, prob: 65 },
  { id: 3, cliente: "T3 Select", tipo: "Contrato de Aquisição", responsavel: "Dr. Ricardo", status: "Aprovada", valor: 220000, prob: 95 },
  { id: 4, cliente: "Grupo Hera", tipo: "Consultoria Cível", responsavel: "Dr. Felipe", status: "Em revisão", valor: 80000, prob: 50 },
];

const approvalFlow = [
    { etapa: "Criação da Proposta", responsavel: "Dr. Ricardo", status: "Concluído", data: "10/10/25", icon: Check, color: "text-green-400" },
    { etapa: "Revisão Jurídica", responsavel: "Dra. Larissa", status: "Em análise", data: "11/10/25", icon: Clock, color: "text-yellow-400" },
    { etapa: "Aprovação Financeira", responsavel: "Gestor Comercial", status: "Pendente", data: "—", icon: X, color: "text-gray-400" },
    { etapa: "Envio ao Cliente", responsavel: "IA Automática", status: "Agendado", data: "12/10/25", icon: Clock, color: "text-blue-400" },
];

const evolutionData = [
    { name: 'Sem 1', propostas: 12 }, { name: 'Sem 2', propostas: 18 }, { name: 'Sem 3', propostas: 15 }, { name: 'Sem 4', propostas: 21 },
];

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const getStatusBadge = (status: string) => {
  if (status === "Aprovada") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 {status}</Badge>;
  if (status === "Em Negociação") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 {status}</Badge>;
  if (status === "Enviada") return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">🔵 {status}</Badge>;
  if (status === "Em revisão") return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">🟡 {status}</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const PropostasNegociacoes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    showSuccess("Proposta criada com sucesso!");
  };

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Propostas e Negociações</h1>
          <p className="text-gray-400 max-w-3xl">
            Da proposta à assinatura — acompanhe, analise e feche negócios jurídicos com automação, segurança e inteligência.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Proposta</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> Gerar com IA</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700">Aprovações</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {kpis.map(kpi => (
              <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">{kpi.title}</CardTitle></CardHeader>
                <CardContent>
                  <p className={`text-2xl font-bold text-${kpi.status}-400`}>{kpi.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Gestão de Propostas */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Gestão de Propostas</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Cliente</TableHead><TableHead>Tipo</TableHead><TableHead>Responsável</TableHead><TableHead>Status</TableHead><TableHead>Valor</TableHead><TableHead>Prob. Fechamento (IA)</TableHead></TableRow></TableHeader>
                <TableBody>
                  {initialProposals.map(item => (
                    <TableRow key={item.id} className="border-gray-700">
                      <TableCell>{item.cliente}</TableCell>
                      <TableCell>{item.tipo}</TableCell>
                      <TableCell>{item.responsavel}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
                      <TableCell>{formatCurrency(item.valor)}</TableCell>
                      <TableCell>{item.prob}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Aprovações e Gráfico */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <Card className="bg-petroleum-blue border-gray-700 text-white">
              <CardHeader><CardTitle className="text-white">Fluxo de Aprovação (Proposta #1)</CardTitle></CardHeader>
              <CardContent>
                <Table>
                  <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Etapa</TableHead><TableHead>Responsável</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                  <TableBody>
                    {approvalFlow.map(item => (
                      <TableRow key={item.etapa} className="border-gray-700">
                        <TableCell>{item.etapa}</TableCell>
                        <TableCell>{item.responsavel}</TableCell>
                        <TableCell className="flex items-center gap-2"><item.icon className={`h-4 w-4 ${item.color}`} /> {item.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="bg-petroleum-blue border-gray-700 text-white">
              <CardHeader><CardTitle className="text-white">Evolução Semanal</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={evolutionData}>
                    <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
                    <YAxis stroke="#a1a1aa" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: '#1C2A3A' }} />
                    <Bar dataKey="propostas" fill="#007BFF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Painel Lateral IA */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">IA DealFlow</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“A proposta do Banco Futura tem 74% de chance de fechamento. Sugerimos enviar cláusula adicional de exclusividade e agendar reunião até sexta-feira.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“As propostas de consultoria preventiva têm taxa de conversão 22% superior às contenciosas. Sugere-se priorizar esse tipo de oferta.”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Proposta para Construtora Atlas está parada há 5 dias. Deseja enviar follow-up automático?”</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Nova Proposta</DialogTitle></DialogHeader>
          <form onSubmit={handleSave}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="cliente">Cliente</Label><Input id="cliente" name="cliente" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="tipo">Tipo de Serviço</Label><Input id="tipo" name="tipo" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="valor">Valor (R$)</Label><Input id="valor" name="valor" type="number" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="responsavel">Responsável</Label><Input id="responsavel" name="responsavel" className="bg-gray-800 border-gray-600" required /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Criar Proposta</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PropostasNegociacoes;