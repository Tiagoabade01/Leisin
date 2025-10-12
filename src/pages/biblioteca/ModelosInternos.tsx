import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Download, GitCompare, BrainCircuit } from "lucide-react";

import ModelosTemplates from "@/components/biblioteca/modelos/ModelosTemplates";
import ClausulasInteligentes from "@/components/biblioteca/modelos/ClausulasInteligentes";
import ControleVersoes from "@/components/biblioteca/modelos/ControleVersoes";
import CategoriasDepartamentos from "@/components/biblioteca/modelos/CategoriasDepartamentos";
import RelatoriosUso from "@/components/biblioteca/modelos/RelatoriosUso";

const ModelosInternos = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Modelos Internos</h1>
          <p className="text-gray-400 max-w-3xl">
            Um repositório inteligente de minutas e contratos internos — padronização, automação e conformidade em um só lugar.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Novo Modelo</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Importar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><GitCompare className="h-4 w-4 mr-2" /> Comparar Versões</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BrainCircuit className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
        </div>
      </header>

      <Tabs defaultValue="modelos" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="modelos">Modelos e Templates</TabsTrigger>
          <TabsTrigger value="clausulas">Cláusulas Inteligentes</TabsTrigger>
          <TabsTrigger value="versoes">Controle de Versões</TabsTrigger>
          <TabsTrigger value="categorias">Categorias</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios de Uso</TabsTrigger>
        </TabsList>

        <TabsContent value="modelos" className="mt-6">
          <ModelosTemplates />
        </TabsContent>
        <TabsContent value="clausulas" className="mt-6">
          <ClausulasInteligentes />
        </TabsContent>
        <TabsContent value="versoes" className="mt-6">
          <ControleVersoes />
        </TabsContent>
        <TabsContent value="categorias" className="mt-6">
          <CategoriasDepartamentos />
        </TabsContent>
        <TabsContent value="relatorios" className="mt-6">
          <RelatoriosUso />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ModelosInternos;