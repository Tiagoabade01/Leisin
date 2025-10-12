import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle, KeyRound, FileText, BrainCircuit } from "lucide-react";

import VisaoGeralIntegracoes from '@/components/master/integracoes/VisaoGeralIntegracoes';
import APIConfigurationPanel from '@/components/integrations/APIConfigurationPanel';
import ApiComercial from '@/components/master/integracoes/ApiComercial';
import ChavesTokens from '@/components/master/integracoes/ChavesTokens';
import MonitoramentoLogs from '@/components/master/integracoes/MonitoramentoLogs';
import FaturamentoConsumo from '@/components/master/integracoes/FaturamentoConsumo';
import DiagnosticosIA from '@/components/master/integracoes/DiagnosticosIA';

const IntegracoesApi = () => {
  const [activeTab, setActiveTab] = useState('visao_geral');

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Integrações & API Comercial</h1>
          <p className="text-gray-300 max-w-3xl">O núcleo de conexão da T3 — controle total de integrações, tokens, consumo e parcerias comerciais via API.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => setActiveTab('gerenciar')}><PlusCircle className="h-4 w-4 mr-2" /> Nova Integração</Button>
          <Button onClick={() => setActiveTab('chaves')} variant="outline" className="bg-gray-800 border-gray-700"><KeyRound className="h-4 w-4 mr-2" /> Gerar Token</Button>
          <Button onClick={() => setActiveTab('logs')} variant="outline" className="bg-gray-800 border-gray-700"><FileText className="h-4 w-4 mr-2" /> Ver Logs</Button>
          <Button onClick={() => setActiveTab('diagnosticos')} variant="outline" className="bg-gray-800 border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> Diagnóstico IA</Button>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 lg:grid-cols-7 bg-gray-800">
          <TabsTrigger value="visao_geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="gerenciar">Gerenciar APIs</TabsTrigger>
          <TabsTrigger value="api_comercial">API Comercial</TabsTrigger>
          <TabsTrigger value="chaves">Chaves & Tokens</TabsTrigger>
          <TabsTrigger value="logs">Monitoramento</TabsTrigger>
          <TabsTrigger value="faturamento">Faturamento</TabsTrigger>
          <TabsTrigger value="diagnosticos">Diagnósticos IA</TabsTrigger>
        </TabsList>

        <TabsContent value="visao_geral" className="mt-6"><VisaoGeralIntegracoes /></TabsContent>
        <TabsContent value="gerenciar" className="mt-6"><APIConfigurationPanel /></TabsContent>
        <TabsContent value="api_comercial" className="mt-6"><ApiComercial /></TabsContent>
        <TabsContent value="chaves" className="mt-6"><ChavesTokens /></TabsContent>
        <TabsContent value="logs" className="mt-6"><MonitoramentoLogs /></TabsContent>
        <TabsContent value="faturamento" className="mt-6"><FaturamentoConsumo /></TabsContent>
        <TabsContent value="diagnosticos" className="mt-6"><DiagnosticosIA /></TabsContent>
      </Tabs>
    </div>
  );
};

export default IntegracoesApi;