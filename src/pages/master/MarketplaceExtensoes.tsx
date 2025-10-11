import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, RefreshCw, Package, Upload } from "lucide-react";

import CatalogoExtensoes from "@/components/master/marketplace/CatalogoExtensoes";
import ExtensoesInstaladas from "@/components/master/marketplace/ExtensoesInstaladas";
import DesenvolvedoresApis from "@/components/master/marketplace/DesenvolvedoresApis";
import PlanosLicenciamento from "@/components/master/marketplace/PlanosLicenciamento";
import RelatoriosUso from "@/components/master/marketplace/RelatoriosUso";

const MarketplaceExtensoes = () => {
  return (
    <Layout>
      <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Marketplace de Extensões</h1>
            <p className="text-gray-400 max-w-3xl">
              Expanda o poder do seu escritório jurídico — novas funções, integrações e módulos sob demanda.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Nova Extensão</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><RefreshCw className="h-4 w-4 mr-2" /> Atualizar</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Package className="h-4 w-4 mr-2" /> Ver Instalações</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Upload className="h-4 w-4 mr-2" /> Publicar</Button>
          </div>
        </header>

        <Tabs defaultValue="catalogo" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
            <TabsTrigger value="catalogo">Catálogo</TabsTrigger>
            <TabsTrigger value="instaladas">Instaladas</TabsTrigger>
            <TabsTrigger value="desenvolvedores">Desenvolvedores</TabsTrigger>
            <TabsTrigger value="licenciamento">Licenciamento</TabsTrigger>
            <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="catalogo" className="mt-6">
            <CatalogoExtensoes />
          </TabsContent>
          <TabsContent value="instaladas" className="mt-6">
            <ExtensoesInstaladas />
          </TabsContent>
          <TabsContent value="desenvolvedores" className="mt-6">
            <DesenvolvedoresApis />
          </TabsContent>
          <TabsContent value="licenciamento" className="mt-6">
            <PlanosLicenciamento />
          </TabsContent>
          <TabsContent value="relatorios" className="mt-6">
            <RelatoriosUso />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default MarketplaceExtensoes;