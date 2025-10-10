import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Administration = () => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Administração & Configurações</h1>
        <Tabs defaultValue="perfil" className="w-full">
          <TabsList>
            <TabsTrigger value="perfil">Perfil & Conta</TabsTrigger>
            <TabsTrigger value="organizacoes">Organizações e Filiais</TabsTrigger>
            <TabsTrigger value="integracoes">Integrações</TabsTrigger>
            <TabsTrigger value="seguranca">Segurança e LGPD</TabsTrigger>
          </TabsList>
          <TabsContent value="perfil">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Gestão de Perfil e Conta</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="organizacoes">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Gestão de Organizações e Filiais</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="integracoes">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Configuração de Integrações</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="seguranca">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Configurações de Segurança e LGPD</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Administration;