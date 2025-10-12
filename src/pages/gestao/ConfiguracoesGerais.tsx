import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, Globe } from "lucide-react";

import ParametrosSistema from "@/components/gestao/configuracoes/ParametrosSistema";
import ModulosRecursos from "@/components/gestao/configuracoes/ModulosRecursos";
import PoliticasRegras from "@/components/gestao/configuracoes/PoliticasRegras";
import SegurancaSessoes from "@/components/gestao/configuracoes/SegurancaSessoes";
import BackupsLogs from "@/components/gestao/configuracoes/BackupsLogs";

const ConfiguracoesGerais = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Configurações Gerais</h1>
          <p className="text-gray-400 max-w-3xl">
            O cérebro de controle do Leisin — configure como o sistema opera, integra, comunica e se comporta em toda a organização.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button><Save className="h-4 w-4 mr-2" /> Salvar Alterações</Button>
          <Button variant="secondary"><Globe className="h-4 w-4 mr-2" /> Aplicar a Todas as Filiais</Button>
        </div>
      </header>

      <Tabs defaultValue="parametros" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="parametros">Parâmetros</TabsTrigger>
          <TabsTrigger value="modulos">Módulos</TabsTrigger>
          <TabsTrigger value="politicas">Políticas</TabsTrigger>
          <TabsTrigger value="seguranca">Segurança</TabsTrigger>
          <TabsTrigger value="backups">Backups e Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="parametros" className="mt-6">
          <ParametrosSistema />
        </TabsContent>
        <TabsContent value="modulos" className="mt-6">
          <ModulosRecursos />
        </TabsContent>
        <TabsContent value="politicas" className="mt-6">
          <PoliticasRegras />
        </TabsContent>
        <TabsContent value="seguranca" className="mt-6">
          <SegurancaSessoes />
        </TabsContent>
        <TabsContent value="backups" className="mt-6">
          <BackupsLogs />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ConfiguracoesGerais;