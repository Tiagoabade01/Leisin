import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SaaSAdmin = () => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Painel Administrativo do SaaS</h1>
        <Tabs defaultValue="usuarios" className="w-full">
          <TabsList>
            <TabsTrigger value="usuarios">Gestão de Usuários/Perfis</TabsTrigger>
            <TabsTrigger value="licencas">Controle de Licenças</TabsTrigger>
            <TabsTrigger value="logs">Logs e Auditoria</TabsTrigger>
            <TabsTrigger value="marketplace">Marketplace de Extensões</TabsTrigger>
          </TabsList>
          <TabsContent value="usuarios">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Gerenciamento de Usuários</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="licencas">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Gerenciamento de Módulos e Licenças</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="logs">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Visualizador de Logs e Auditoria</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="marketplace">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Marketplace de Integrações</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default SaaSAdmin;