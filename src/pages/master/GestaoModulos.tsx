import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VisaoGeralModulos from "@/components/master/modulos/VisaoGeralModulos";
import ListaModulos from "@/components/master/modulos/ListaModulos";
import PermissoesPapeis from "@/components/master/modulos/PermissoesPapeis";
import LicencasPlanos from "@/components/master/modulos/LicencasPlanos";
import IntegracoesApis from "@/components/master/modulos/IntegracoesApis";
import LogsAuditoria from "@/components/master/modulos/LogsAuditoria";

const GestaoModulos = () => {
  return (
    <div className="p-6 md:p-8">
      <h1 className="text-3xl font-bold text-white mb-2">Gestão de Módulos & Acessos</h1>
      <p className="text-gray-300 mb-8">Controle total sobre módulos ativos, permissões, integrações e acessos do sistema.</p>
      
      <Tabs defaultValue="visao_geral" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-gray-800">
          <TabsTrigger value="visao_geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="modulos">Módulos</TabsTrigger>
          <TabsTrigger value="permissoes">Permissões</TabsTrigger>
          <TabsTrigger value="licencas">Licenças</TabsTrigger>
          <TabsTrigger value="integracoes">Integrações</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="visao_geral" className="mt-6">
          <VisaoGeralModulos />
        </TabsContent>
        <TabsContent value="modulos" className="mt-6">
          <ListaModulos />
        </TabsContent>
        <TabsContent value="permissoes" className="mt-6">
          <PermissoesPapeis />
        </TabsContent>
        <TabsContent value="licencas" className="mt-6">
          <LicencasPlanos />
        </TabsContent>
        <TabsContent value="integracoes" className="mt-6">
          <IntegracoesApis />
        </TabsContent>
        <TabsContent value="logs" className="mt-6">
          <LogsAuditoria />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GestaoModulos;