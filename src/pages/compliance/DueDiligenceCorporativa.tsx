import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Download, Brain } from "lucide-react";
import NewAnalysisModal from "@/components/modals/NewAnalysisModal";
import React from "react";

import DashboardAnalises from "@/components/diligence/DashboardAnalises";
import PesquisaColeta from "@/components/diligence/PesquisaColeta";
import ClassificacaoRisco from "@/components/diligence/ClassificacaoRisco";
import RelatoriosDossies from "@/components/diligence/RelatoriosDossies";
import MonitoramentoContinuo from "@/components/diligence/MonitoramentoContinuo";
import IAPreditiva from "@/components/diligence/IAPreditiva";

const DueDiligenceCorporativa = () => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Due Diligence Corporativa</h1>
          <p className="text-gray-400 max-w-3xl">
            Análise completa, integrada e automatizada da conformidade jurídica, financeira, reputacional e ESG de empresas e pessoas.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setOpenModal(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Análise</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Relatórios</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> Ver Risco IA</Button>
        </div>
      </header>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-gray-800">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="pesquisa">Pesquisa & Coleta</TabsTrigger>
          <TabsTrigger value="classificacao">Classificação IA</TabsTrigger>
          <TabsTrigger value="dossies">Dossiês</TabsTrigger>
          <TabsTrigger value="monitoramento">Monitoramento</TabsTrigger>
          <TabsTrigger value="ia_preditiva">IA Preditiva</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="mt-6">
          <DashboardAnalises />
        </TabsContent>
        <TabsContent value="pesquisa" className="mt-6">
          <PesquisaColeta />
        </TabsContent>
        <TabsContent value="classificacao" className="mt-6">
          <ClassificacaoRisco />
        </TabsContent>
        <TabsContent value="dossies" className="mt-6">
          <RelatoriosDossies />
        </TabsContent>
        <TabsContent value="monitoramento" className="mt-6">
          <MonitoramentoContinuo />
        </TabsContent>
        <TabsContent value="ia_preditiva" className="mt-6">
          <IAPreditiva />
        </TabsContent>
      </Tabs>
      <NewAnalysisModal open={openModal} onOpenChange={setOpenModal} context="Due Diligence Corporativa" defaultType="pj" />
    </div>
  );
};

export default DueDiligenceCorporativa;