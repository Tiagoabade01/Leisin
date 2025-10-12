import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";

// Mock data for a single client
const clientData = {
  id: '1',
  name: 'Construtora Atlas',
  document: '11.222.333/0001-44',
  email: 'contato@atlas.com',
};

const ClienteDetalhe = () => {
  const { clienteId } = useParams<{ clienteId: string }>();
  // In a real app, you'd fetch client data based on clienteId

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="mb-6">
        <Link to="/crm/clientes" className="flex items-center text-sm text-blue-400 hover:underline mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para Clientes
        </Link>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">{clientData.name}</h1>
            <p className="text-gray-300">{clientData.document} • {clientData.email}</p>
          </div>
          <div className="flex gap-2">
            <Button>Nova Atividade</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700">Gerar Relatório</Button>
          </div>
        </div>
      </header>

      <Tabs defaultValue="dados" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-gray-800">
          <TabsTrigger value="dados">Dados Gerais</TabsTrigger>
          <TabsTrigger value="casos">Casos e Contratos</TabsTrigger>
          <TabsTrigger value="comunicacao">Comunicação</TabsTrigger>
          <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
          <TabsTrigger value="ia">Insights (IA)</TabsTrigger>
        </TabsList>

        <TabsContent value="dados" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Dados Gerais</CardTitle></CardHeader>
            <CardContent><p>Informações cadastrais e certidões aqui...</p></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="casos" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Casos e Contratos</CardTitle></CardHeader>
            <CardContent><p>Lista de processos, contratos e documentos aqui...</p></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="comunicacao" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Comunicação e Atividades</CardTitle></CardHeader>
            <CardContent><p>Histórico de mensagens, reuniões e tarefas aqui...</p></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="financeiro" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Financeiro e Faturamento</CardTitle></CardHeader>
            <CardContent><p>Histórico de pagamentos, DRE do cliente aqui...</p></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ia" className="mt-6">
          <Card className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader><CardTitle>Insights e Análises (IA)</CardTitle></CardHeader>
            <CardContent><p>Score de relacionamento, probabilidade de renovação e sugestões da IA aqui...</p></CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClienteDetalhe;