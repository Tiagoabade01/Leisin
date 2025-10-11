import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, GitCompare, Download, BrainCircuit } from "lucide-react";

import DashboardGlobal from "@/components/filiais/performance/DashboardGlobal";
import KpisOperacionais from "@/components/filiais/performance/KpisOperacionais";
import IndicadoresFinanceiros from "@/components/filiais/performance/IndicadoresFinanceiros";
import ProdutividadeEquipe from "@/components/filiais/performance/ProdutividadeEquipe";
import ComparativoFiliais from "@/components/filiais/performance/ComparativoFiliais";
import RelatoriosIA from "@/components/filiais/performance/RelatoriosIA";

const IndicadoresPerformancePage = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Indicadores de Performance</h1>
          <p className="text-gray-400 max-w-3xl">
            Acompanhe, compare e otimize o desempenho de cada filial com indicadores dinâmicos, IA analítica e relatórios integrados.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><BarChart2 className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><GitCompare className="h-4 w-4 mr-2" /> Comparar Filiais</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar Dados</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> Ver Insights</Button>
        </div>
      </header>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-gray-800">
          <TabsTrigger value="dashboard">Dashboard Global</TabsTrigger>
          <TabsTrigger value="operacional">KPIs Operacionais</TabsTrigger>
          <TabsTrigger value="financeiro">Financeiros</TabsTrigger>
          <TabsTrigger value="produtividade">Produtividade</TabsTrigger>
          <TabsTrigger value="comparativo">Comparativo</TabsTrigger>
          <TabsTrigger value="ia">Relatórios IA</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="mt-6">
          <DashboardGlobal />
        </TabsContent>
        <TabsContent value="operacional" className="mt-6">
          <KpisOperacionais />
        </TabsContent>
        <TabsContent value="financeiro" className="mt-6">
          <IndicadoresFinanceiros />
        </TabsContent>
        <TabsContent value="produtividade" className="mt-6">
          <ProdutividadeEquipe />
        </TabsContent>
        <TabsContent value="comparativo" className="mt-6">
          <ComparativoFiliais />
        </TabsContent>
        <TabsContent value="ia" className="mt-6">
          <RelatoriosIA />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const IndicadoresPerformance = () => (
  <Layout>
    <IndicadoresPerformancePage />
  </Layout>
);

export default IndicadoresPerformance;