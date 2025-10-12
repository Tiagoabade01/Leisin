import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle, Download, BrainCircuit, Settings } from "lucide-react";

import VisaoGeralMetricas from '@/components/master/relatorios/VisaoGeralMetricas';
import FinanceiroReceita from '@/components/master/relatorios/FinanceiroReceita';
import ClientesCrm from '@/components/master/relatorios/ClientesCrm';
import JuridicoContratos from '@/components/master/relatorios/JuridicoContratos';
import IaAutomacao from '@/components/master/relatorios/IaAutomacao';
import UsuariosDesempenho from '@/components/master/relatorios/UsuariosDesempenho';
import RelatoriosPersonalizados from '@/components/master/relatorios/RelatoriosPersonalizados';
import InteligenciaAnalitica from '@/components/master/relatorios/InteligenciaAnalitica';

const RelatoriosMetricas = () => {
  return (
    <div className="space-y-6 p-6 md:p-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Relatórios & Métricas</h1>
          <p className="text-gray-300 max-w-3xl">O cérebro analítico do T3 — visão total da operação, performance e rentabilidade em tempo real.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button><PlusCircle className="h-4 w-4 mr-2" /> Novo Relatório</Button>
          <Button variant="outline" className="bg-gray-800 border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar Dados</Button>
          <Button variant="outline" className="bg-gray-800 border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> IA Analítica</Button>
          <Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button>
        </div>
      </header>

      <Tabs defaultValue="visao_geral" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-gray-800">
          <TabsTrigger value="visao_geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
          <TabsTrigger value="clientes">Clientes</TabsTrigger>
          <TabsTrigger value="juridico">Jurídico</TabsTrigger>
          <TabsTrigger value="ia">IA & Automação</TabsTrigger>
          <TabsTrigger value="usuarios">Usuários</TabsTrigger>
          <TabsTrigger value="personalizados">Personalizados</TabsTrigger>
          <TabsTrigger value="inteligencia">Inteligência</TabsTrigger>
        </TabsList>

        <TabsContent value="visao_geral" className="mt-6"><VisaoGeralMetricas /></TabsContent>
        <TabsContent value="financeiro" className="mt-6"><FinanceiroReceita /></TabsContent>
        <TabsContent value="clientes" className="mt-6"><ClientesCrm /></TabsContent>
        <TabsContent value="juridico" className="mt-6"><JuridicoContratos /></TabsContent>
        <TabsContent value="ia" className="mt-6"><IaAutomacao /></TabsContent>
        <TabsContent value="usuarios" className="mt-6"><UsuariosDesempenho /></TabsContent>
        <TabsContent value="personalizados" className="mt-6"><RelatoriosPersonalizados /></TabsContent>
        <TabsContent value="inteligencia" className="mt-6"><InteligenciaAnalitica /></TabsContent>
      </Tabs>
    </div>
  );
};

export default RelatoriosMetricas;