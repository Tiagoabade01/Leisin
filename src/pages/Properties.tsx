import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Properties = () => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Terrenos & Imóveis</h1>
        <Tabs defaultValue="matriculas" className="w-full">
          <TabsList>
            <TabsTrigger value="matriculas">Matrículas</TabsTrigger>
            <TabsTrigger value="certidoes">Certidões de Imóvel</TabsTrigger>
            <TabsTrigger value="dossie">Dossiê de Terreno</TabsTrigger>
            <TabsTrigger value="mapa">Mapa Georreferenciado</TabsTrigger>
          </TabsList>
          <TabsContent value="matriculas">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Gestão de Matrículas</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="certidoes">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Gestão de Certidões de Imóvel</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="dossie">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Dossiês de Terrenos</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
          <TabsContent value="mapa">
            <div className="mt-4 p-4 border rounded-md">
              <h2 className="text-xl font-semibold">Visualização de Mapas</h2>
              <p className="text-gray-500 mt-2">Conteúdo em construção.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Properties;