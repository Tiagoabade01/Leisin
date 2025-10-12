import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, GitCompare, Download, BrainCircuit } from "lucide-react";

import PainelExecutivoGlobal from "@/components/filiais/relatorios/PainelExecutivoGlobal";
import RelatoriosPorArea from "@/components/filiais/relatorios/RelatoriosPorArea";
import ComparativosInterfiliais from "@/components/filiais/relatorios/ComparativosInterfiliais";
import IaAnaliticaProjecao from "@/components/filiais/relatorios/IaAnaliticaProjecao";
import ExportacoesIntegracoes from "@/components/filiais/relatorios/ExportacoesIntegracoes";

const RelatoriosConsolidados = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Relatórios Consolidados</h1>
          <p className="text-gray-400 max-w-3xl">
            A visão global da operação: relatórios unificados, comparativos inteligentes e IA executiva para decisões estratégicas.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><BarChart2 className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><GitCompare className="h-4 w-4 mr-2" /> Comparar Filiais</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> Gerar Previsão IA</Button>
        </div>
      </header>

      <Tabs defaultValue="painel" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="painel">Painel Executivo</TabsTrigger>
          <TabsTrigger value="areas">Relatórios por Área</TabsTrigger>
          <TabsTrigger value="comparativos">Comparativos</TabsTrigger>
          <TabsTrigger value="ia">IA Analítica</TabsTrigger>
          <TabsTrigger value="exportacoes">Exportações & BI</TabsTrigger>
        </TabsList>

        <TabsContent value="painel" className="mt-6">
          <PainelExecutivoGlobal />
        </TabsContent>
        <TabsContent value="areas" className="mt-6">
          <RelatoriosPorArea />
        </TabsContent>
        <TabsContent value="comparativos" className="mt-6">
          <ComparativosInterfiliais />
        </TabsContent>
        <TabsContent value="ia" className="mt-6">
          <IaAnaliticaProjecao />
        </TabsContent>
        <TabsContent value="exportacoes" className="mt-6">
          <ExportacoesIntegracoes />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RelatoriosConsolidados;