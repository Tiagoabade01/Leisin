import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Download, GitCompare, BrainCircuit } from "lucide-react";

import PesquisaConsulta from "@/components/biblioteca/PesquisaConsulta";
import VisualizadorLegal from "@/components/biblioteca/VisualizadorLegal";
import AnaliseIA from "@/components/biblioteca/AnaliseIA";
import HistoricoNormativo from "@/components/biblioteca/HistoricoNormativo";
import RelacionamentosJuridicos from "@/components/biblioteca/RelacionamentosJuridicos";

const LeisDecretos = () => {
  return (
    <Layout>
      <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Leis e Decretos</h1>
            <p className="text-gray-400 max-w-3xl">
              A inteligência jurídica do Leisin: consulte, interprete e aplique leis e decretos com IA integrada e atualização automática.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Nova Pesquisa</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><GitCompare className="h-4 w-4 mr-2" /> Comparar Versões</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> Gerar Relatório IA</Button>
          </div>
        </header>

        <Tabs defaultValue="pesquisa" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
            <TabsTrigger value="pesquisa">Pesquisa e Consulta</TabsTrigger>
            <TabsTrigger value="visualizador">Visualizador Legal</TabsTrigger>
            <TabsTrigger value="ia">Análise IA (Leisin Lex)</TabsTrigger>
            <TabsTrigger value="historico">Histórico Normativo</TabsTrigger>
            <TabsTrigger value="relacionamentos">Relacionamentos</TabsTrigger>
          </TabsList>

          <TabsContent value="pesquisa" className="mt-6">
            <PesquisaConsulta />
          </TabsContent>
          <TabsContent value="visualizador" className="mt-6">
            <VisualizadorLegal />
          </TabsContent>
          <TabsContent value="ia" className="mt-6">
            <AnaliseIA />
          </TabsContent>
          <TabsContent value="historico" className="mt-6">
            <HistoricoNormativo />
          </TabsContent>
          <TabsContent value="relacionamentos" className="mt-6">
            <RelacionamentosJuridicos />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default LeisDecretos;