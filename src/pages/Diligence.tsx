import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Diligence = () => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Due Diligence & Compliance</h1>
        <Tabs defaultValue="nova" className="w-full">
          <TabsList>
            <TabsTrigger value="nova">Nova Due Diligence</TabsTrigger>
            <TabsTrigger value="checklists">Checklists Inteligentes</TabsTrigger>
            <TabsTrigger value="pessoas">Pessoas e Empresas</TabsTrigger>
            <TabsTrigger value="certidoes">Certidões</TabsTrigger>
          </TabsList>
          <TabsContent value="nova">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Iniciar Nova Due Diligence</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="checklists">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Modelos de Checklists</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="pessoas">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Consulta de Pessoas e Empresas</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="certidoes">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Gestão de Certidões</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Diligence;