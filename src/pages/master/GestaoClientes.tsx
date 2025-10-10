import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VisaoGeralClientes from "@/components/master/clientes/VisaoGeralClientes";
import BaseClientes from "@/components/master/clientes/BaseClientes";
import PipelineComercial from "@/components/master/clientes/PipelineComercial";
import FaturamentoContratos from "@/components/master/clientes/FaturamentoContratos";
import AtividadesTarefas from "@/components/master/clientes/AtividadesTarefas";
import InteligenciaClientes from "@/components/master/clientes/InteligenciaClientes";

const GestaoClientes = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Gestão de Clientes</h1>
      <p className="text-gray-300 mb-8">Central de inteligência e relacionamento com todos os clientes ativos, inativos e potenciais do ecossistema.</p>
      
      <Tabs defaultValue="visao_geral" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-gray-800">
          <TabsTrigger value="visao_geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="base_clientes">Base de Clientes</TabsTrigger>
          <TabsTrigger value="pipeline">Pipeline Comercial</TabsTrigger>
          <TabsTrigger value="faturamento">Faturamento</TabsTrigger>
          <TabsTrigger value="atividades">Atividades</TabsTrigger>
          <TabsTrigger value="inteligencia">Inteligência (IA)</TabsTrigger>
        </TabsList>

        <TabsContent value="visao_geral" className="mt-6">
          <VisaoGeralClientes />
        </TabsContent>
        <TabsContent value="base_clientes" className="mt-6">
          <BaseClientes />
        </TabsContent>
        <TabsContent value="pipeline" className="mt-6">
          <PipelineComercial />
        </TabsContent>
        <TabsContent value="faturamento" className="mt-6">
          <FaturamentoContratos />
        </TabsContent>
        <TabsContent value="atividades" className="mt-6">
          <AtividadesTarefas />
        </TabsContent>
        <TabsContent value="inteligencia" className="mt-6">
          <InteligenciaClientes />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GestaoClientes;