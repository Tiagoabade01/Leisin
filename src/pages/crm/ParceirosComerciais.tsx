import React, { useState, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Download, BarChart2, BrainCircuit, FileText } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { showSuccess } from '@/utils/toast';

// --- MOCK DATA ---
const kpis = [
  { title: "Total de Parceiros", value: "72", status: "green" },
  { title: "Parceiros Ativos", value: "54", status: "green" },
  { title: "Novos no Mês", value: "6", status: "yellow" },
  { title: "Contratos Vigentes", value: "48", status: "green" },
  { title: "Volume de Indicações", value: "137", status: "green" },
  { title: "Valor em Comissão", value: "R$ 214.800", status: "green" },
];

const initialPartners = [
  { id: 1, name: "Atlas Partners", type: "Escritório", responsible: "Dr. Ricardo", status: "Ativo", contracts: 5, revenue: 460000 },
  { id: 2, name: "Grupo Futura", type: "Consultoria", responsible: "Dra. Larissa", status: "Ativo", contracts: 3, revenue: 210000 },
  { id: 3, name: "Conecta Jurídico", type: "Captador", responsible: "Dr. Felipe", status: "Pendente", contracts: 2, revenue: 85000 },
  { id: 4, name: "Rede Legal", type: "Institucional", responsible: "Dr. João", status: "Encerrado", contracts: 4, revenue: 300000 },
];

const commissions = [
  { partner: "Atlas Partners", opportunity: "Caso Atlas Imobiliário", value: 380000, commission: 10, toPay: 38000, status: "Pago" },
  { partner: "Grupo Futura", opportunity: "Ação Tributária", value: 210000, commission: 8, toPay: 16800, status: "Pendente" },
  { partner: "Conecta Jurídico", opportunity: "Novo Cliente T3", value: 95000, commission: 5, toPay: 4750, status: "Agendado" },
];

const topPartnersData = [
  { name: 'Atlas Partners', revenue: 460000 },
  { name: 'Rede Legal', revenue: 300000 },
  { name: 'Grupo Futura', revenue: 210000 },
  { name: 'Conecta Jurídico', revenue: 85000 },
];

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const getStatusBadge = (status: string) => {
  if (status === "Ativo") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Ativo</Badge>;
  if (status === "Pendente") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟡 Pendente</Badge>;
  if (status === "Encerrado") return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">🔴 Encerrado</Badge>;
  return <Badge variant="secondary">{status}</Badge>;
};

const getCommissionStatusBadge = (status: string) => {
    if (status === "Pago") return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🟢 Pago</Badge>;
    if (status === "Pendente") return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">🟠 Pendente</Badge>;
    if (status === "Agendado") return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">🔵 Agendado</Badge>;
    return <Badge variant="secondary">{status}</Badge>;
};

const ParceirosComerciais = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    showSuccess("Parceiro criado com sucesso!");
  };

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Parceiros Comerciais</h1>
          <p className="text-gray-400 max-w-3xl">
            Central de gestão e inteligência para parcerias jurídicas e comerciais — contratos, comissões, desempenho e relacionamento, tudo em um só lugar.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}><PlusCircle className="h-4 w-4 mr-2" /> Novo Parceiro</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><FileText className="h-4 w-4 mr-2" /> Gerar Contrato</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Ver Relatórios</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> IA Analisar</Button>
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

          {/* Base de Parceiros */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Base de Parceiros</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Parceiro</TableHead><TableHead>Tipo</TableHead><TableHead>Responsável</TableHead><TableHead>Status</TableHead><TableHead>Contratos</TableHead><TableHead>Receita Gerada</TableHead></TableRow></TableHeader>
                <TableBody>
                  {initialPartners.map(item => (
                    <TableRow key={item.id} className="border-gray-700">
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{item.responsible}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
                      <TableCell>{item.contracts}</TableCell>
                      <TableCell>{formatCurrency(item.revenue)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Contratos e Comissões */}
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle className="text-white">Contratos e Comissões</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Parceiro</TableHead><TableHead>Oportunidade</TableHead><TableHead>Valor</TableHead><TableHead>Comissão</TableHead><TableHead>A Pagar</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody>
                  {commissions.map(item => (
                    <TableRow key={item.opportunity} className="border-gray-700">
                      <TableCell>{item.partner}</TableCell>
                      <TableCell>{item.opportunity}</TableCell>
                      <TableCell>{formatCurrency(item.value)}</TableCell>
                      <TableCell>{item.commission}%</TableCell>
                      <TableCell>{formatCurrency(item.toPay)}</TableCell>
                      <TableCell>{getCommissionStatusBadge(item.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Painel Lateral IA */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
            <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-tech-green" /><CardTitle className="text-white">IA de Relacionamento</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Os parceiros da região de São Paulo geraram 63% das novas oportunidades no trimestre. Deseja ampliar a bonificação regional?”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“O parceiro ‘Conecta Jurídico’ possui 3 comissões pendentes há mais de 15 dias. Deseja emitir lembrete automático?”</p>
              <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Parceiro Atlas Partners possui engajamento alto e conversão de 71%. Sistema recomenda ampliar comissão de 10% para 12% como incentivo.”</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white border-gray-700">
          <DialogHeader><DialogTitle>Novo Parceiro Comercial</DialogTitle></DialogHeader>
          <form onSubmit={handleSave}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2"><Label htmlFor="name">Nome / Empresa</Label><Input id="name" name="name" className="bg-gray-800 border-gray-600" required /></div>
              <div className="space-y-2"><Label htmlFor="type">Tipo</Label><Input id="type" name="type" className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="doc">CNPJ / CPF</Label><Input id="doc" name="doc" className="bg-gray-800 border-gray-600" /></div>
              <div className="space-y-2"><Label htmlFor="commission">Comissão (%)</Label><Input id="commission" name="commission" type="number" className="bg-gray-800 border-gray-600" /></div>
            </div>
            <DialogFooter><Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancelar</Button><Button type="submit">Salvar Parceiro</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ParceirosComerciais;