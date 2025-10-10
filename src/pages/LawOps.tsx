import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LawOps = () => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Escritório Jurídico (Law Ops)</h1>
        <Tabs defaultValue="casos" className="w-full">
          <TabsList>
            <TabsTrigger value="casos">Casos / Processos</TabsTrigger>
            <TabsTrigger value="clientes">Clientes</TabsTrigger>
            <TabsTrigger value="timesheets">Timesheets & Honorários</TabsTrigger>
            <TabsTrigger value="faturamento">Faturamento / NFs</TabsTrigger>
          </TabsList>
          <TabsContent value="casos">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Gestão de Casos e Processos</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="clientes">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Gestão de Clientes</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="timesheets">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Lançamento de Horas e Honorários</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="faturamento">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Faturamento e Notas Fiscais</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default LawOps;