import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Download, GitCompare, BrainCircuit } from "lucide-react";

import PainelPesquisa from "@/components/biblioteca/jurisprudencia/PainelPesquisa";
import JurisprudenciaResultados from "@/components/biblioteca/jurisprudencia/JurisprudenciaResultados";
import PareceresTecnicos from "@/components/biblioteca/jurisprudencia/PareceresTecnicos";
import AnaliseIAJuris from "@/components/biblioteca/jurisprudencia/AnaliseIAJuris";
import RelatoriosConexoes from "@/components/biblioteca/jurisprudencia/RelatoriosConexoes";

const JurisprudenciaPareceres = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Jurisprudência e Pareceres</h1>
          <p className="text-gray-400 max-w-3xl">
            Entendimento jurídico aplicado — decisões, pareceres e doutrinas interpretadas e correlacionadas automaticamente pela inteligência do Leisin.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Nova Pesquisa</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><GitCompare className="h-4 w-4 mr-2" /> Comparar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> Analisar com IA</Button>
        </div>
      </header>

      <Tabs defaultValue="pesquisa" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="pesquisa">Pesquisa Avançada</TabsTrigger>
          <TabsTrigger value="jurisprudencia">Jurisprudência</TabsTrigger>
          <TabsTrigger value="pareceres">Pareceres Técnicos</TabsTrigger>
          <TabsTrigger value="ia">Análise IA</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
        </TabsList>

        <TabsContent value="pesquisa" className="mt-6">
          <PainelPesquisa />
        </TabsContent>
        <TabsContent value="jurisprudencia" className="mt-6">
          <JurisprudenciaResultados />
        </TabsContent>
        <TabsContent value="pareceres" className="mt-6">
          <PareceresTecnicos />
        </TabsContent>
        <TabsContent value="ia" className="mt-6">
          <AnaliseIAJuris />
        </TabsContent>
        <TabsContent value="relatorios" className="mt-6">
          <RelatoriosConexoes />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JurisprudenciaPareceres;