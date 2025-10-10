import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AI = () => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Inteligência Artificial & Automação</h1>
        <Tabs defaultValue="central" className="w-full">
          <TabsList>
            <TabsTrigger value="central">Central de IA</TabsTrigger>
            <TabsTrigger value="clausula">ClausulaCopilot</TabsTrigger>
            <TabsTrigger value="matricula">MatrículaLens</TabsTrigger>
            <TabsTrigger value="risk">Risk Mapper</TabsTrigger>
            <TabsTrigger value="checklist">Auto-Checklist</TabsTrigger>
            <TabsTrigger value="playbooks">Playbooks</TabsTrigger>
          </TabsList>
          <TabsContent value="central">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Painel da Central de IA</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="clausula">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Assistente de Cláusulas</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="matricula">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Análise de Matrículas</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="risk">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Mapeamento de Riscos</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="checklist">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Checklists Automáticos</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="playbooks">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Automações (Playbooks)</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AI;