import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Save, Globe } from "lucide-react";

import IdentidadeVisual from "@/components/gestao/personalizacao/IdentidadeVisual";
import LayoutNavegacao from "@/components/gestao/personalizacao/LayoutNavegacao";
import BrandingInstitucional from "@/components/gestao/personalizacao/BrandingInstitucional";
import IaLinguagem from "@/components/gestao/personalizacao/IaLinguagem";
import WhiteLabelDominios from "@/components/gestao/personalizacao/WhiteLabelDominios";

const PersonalizacaoPlataforma = () => {
  return (
    <Layout>
      <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Personalização da Plataforma</h1>
            <p className="text-gray-400 max-w-3xl">
              Deixe o Leisin com a sua identidade — visual, comunicação, fluxos e comportamento integrados à sua marca.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Eye className="h-4 w-4 mr-2" /> Visualizar Tema</Button>
            <Button><Save className="h-4 w-4 mr-2" /> Salvar Alterações</Button>
            <Button variant="secondary"><Globe className="h-4 w-4 mr-2" /> Aplicar Globalmente</Button>
          </div>
        </header>

        <Tabs defaultValue="identidade" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
            <TabsTrigger value="identidade">Identidade Visual</TabsTrigger>
            <TabsTrigger value="layout">Layout e Navegação</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="ia">IA e Linguagem</TabsTrigger>
            <TabsTrigger value="dominio">White-Label</TabsTrigger>
          </TabsList>

          <TabsContent value="identidade" className="mt-6">
            <IdentidadeVisual />
          </TabsContent>
          <TabsContent value="layout" className="mt-6">
            <LayoutNavegacao />
          </TabsContent>
          <TabsContent value="branding" className="mt-6">
            <BrandingInstitucional />
          </TabsContent>
          <TabsContent value="ia" className="mt-6">
            <IaLinguagem />
          </TabsContent>
          <TabsContent value="dominio" className="mt-6">
            <WhiteLabelDominios />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PersonalizacaoPlataforma;