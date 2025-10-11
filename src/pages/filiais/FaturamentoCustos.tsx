import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, BarChart2, GitCompare, Download } from "lucide-react";

import VisaoGeralFinanceira from "@/components/filiais/faturamento/VisaoGeralFinanceira";
import ReceitasFaturamento from "@/components/filiais/faturamento/ReceitasFaturamento";
import CustosDespesas from "@/components/filiais/faturamento/CustosDespesas";
import MargensRentabilidade from "@/components/filiais/faturamento/MargensRentabilidade";
import RelatoriosProjecaoIA from "@/components/filiais/faturamento/RelatoriosProjecaoIA";

const FaturamentoCustosPage = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Faturamento e Custos</h1>
          <p className="text-gray-400 max-w-3xl">
            A inteligência financeira de cada filial — visualize receitas, custos e margens de forma integrada, precisa e automatizada.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Novo Lançamento</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Gerar DRE</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><GitCompare className="h-4 w-4 mr-2" /> Comparar Filiais</Button>
        </div>
      </header>

      <Tabs defaultValue="visao_geral" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="visao_geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="receitas">Receitas</TabsTrigger>
          <TabsTrigger value="custos">Custos</TabsTrigger>
          <TabsTrigger value="margens">Margens</TabsTrigger>
          <TabsTrigger value="projecoes">Projeções IA</TabsTrigger>
        </TabsList>

        <TabsContent value="visao_geral" className="mt-6">
          <VisaoGeralFinanceira />
        </TabsContent>
        <TabsContent value="receitas" className="mt-6">
          <ReceitasFaturamento />
        </TabsContent>
        <TabsContent value="custos" className="mt-6">
          <CustosDespesas />
        </TabsContent>
        <TabsContent value="margens" className="mt-6">
          <MargensRentabilidade />
        </TabsContent>
        <TabsContent value="projecoes" className="mt-6">
          <RelatoriosProjecaoIA />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const FaturamentoCustos = () => (
  <Layout>
    <FaturamentoCustosPage />
  </Layout>
);

export default FaturamentoCustos;