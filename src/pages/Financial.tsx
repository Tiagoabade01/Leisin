import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Financial = () => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Financeiro & Contábil</h1>
        <Tabs defaultValue="contratos" className="w-full">
          <TabsList>
            <TabsTrigger value="contratos">Contratos de Prestação</TabsTrigger>
            <TabsTrigger value="contas">Contas a Pagar/Receber</TabsTrigger>
            <TabsTrigger value="conciliacao">Conciliação Bancária</TabsTrigger>
            <TabsTrigger value="relatorios">Relatórios DRE/Fluxo</TabsTrigger>
          </TabsList>
          <TabsContent value="contratos">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Gestão de Contratos de Serviços</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="contas">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Gestão de Contas</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="conciliacao">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Conciliação de Contas Bancárias</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="relatorios">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Relatórios Financeiros</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Financial;