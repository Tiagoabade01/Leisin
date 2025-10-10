import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical, PlusCircle, CreditCard, Users, TrendingDown, Repeat, Target, List, LayoutGrid } from "lucide-react";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import { SalesPipelineKanban } from '@/components/crm/SalesPipelineKanban';
import { SalesPipelineList } from '@/components/crm/SalesPipelineList';

// Dados Iniciais
const initialStages = [
  { id: 'lead', title: 'Lead', opportunities: [
    { id: 'op1', title: 'Projeto Website', client: 'Imobiliária Futuro', value: 12000 },
    { id: 'op2', title: 'Consultoria LGPD', client: 'Advocacia Pontes', value: 8500 }
  ]},
  { id: 'proposta', title: 'Proposta Enviada', opportunities: [
    { id: 'op3', title: 'Sistema de Gestão', client: 'Construtora Alfa', value: 25000 }
  ]},
  { id: 'negociacao', title: 'Em Negociação', opportunities: [
    { id: 'op4', title: 'Plano White Label', client: 'Grupo Investidor Sul', value: 50000 },
    { id: 'op5', title: 'Módulo Financeiro', client: 'Escritório Central', value: 18000 }
  ]},
  { id: 'fechado', title: 'Fechado / Ganho', opportunities: [
    { id: 'op6', title: 'Contrato Enterprise', client: 'Incorporadora T3', value: 80000 }
  ]}
];

const mrrData = [
  { name: 'Jan', MRR: 32000 }, { name: 'Fev', MRR: 35000 }, { name: 'Mar', MRR: 41000 },
  { name: 'Abr', MRR: 43000 }, { name: 'Mai', MRR: 48000 }, { name: 'Jun', MRR: 45231 },
];

const VendasAssinaturas = () => {
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');
  const [stages, setStages] = useState(initialStages);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Vendas & Assinaturas</h1>
      <p className="text-gray-400 mb-8">Controle completo do ciclo comercial do SaaS.</p>

      <Tabs defaultValue="crm" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800">
          <TabsTrigger value="crm">CRM de Vendas</TabsTrigger>
          <TabsTrigger value="assinaturas">Gestão de Assinaturas</TabsTrigger>
          <TabsTrigger value="metricas">Métricas de SaaS</TabsTrigger>
        </TabsList>

        <TabsContent value="crm" className="mt-6">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Pipeline de Vendas</CardTitle>
                <CardDescription className="text-gray-400">Gerencie suas oportunidades de negócio.</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant={viewMode === 'kanban' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('kanban')}><LayoutGrid className="h-4 w-4" /></Button>
                <Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('list')}><List className="h-4 w-4" /></Button>
                <Button><PlusCircle className="w-4 h-4 mr-2" /> Nova Oportunidade</Button>
              </div>
            </CardHeader>
            <CardContent>
              {viewMode === 'kanban' ? (
                <SalesPipelineKanban stages={stages} setStages={setStages} />
              ) : (
                <SalesPipelineList stages={stages} />
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assinaturas" className="mt-6">
          {/* Conteúdo da aba de assinaturas... */}
        </TabsContent>

        <TabsContent value="metricas" className="mt-6">
          {/* Conteúdo da aba de métricas... */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VendasAssinaturas;