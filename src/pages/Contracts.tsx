import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Contracts = () => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Contratos & Documentos (ContractOps)</h1>
        <Tabs defaultValue="modelos" className="w-full">
          <TabsList>
            <TabsTrigger value="modelos">Modelos</TabsTrigger>
            <TabsTrigger value="copilot">ClausulaCopilot</TabsTrigger>
            <TabsTrigger value="comparador">Comparador / Redlining</TabsTrigger>
            <TabsTrigger value="certidoes">Certidões</TabsTrigger>
            <TabsTrigger value="riskmapper">Risk Mapper</TabsTrigger>
          </TabsList>
          <TabsContent value="modelos">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Biblioteca de Modelos</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="copilot">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Assistente IA de Cláusulas</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="comparador">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Comparador de Versões</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="certidoes">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Gestão de Certidões</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="riskmapper">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Mapeamento de Riscos</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Contracts;