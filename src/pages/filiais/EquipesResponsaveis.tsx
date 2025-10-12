import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, GitMerge, UserCheck, BarChart2 } from "lucide-react";

import EstruturaHierarquica from "@/components/filiais/equipes/EstruturaHierarquica";
import PerfisUsuarios from "@/components/filiais/equipes/PerfisUsuarios";
import Responsabilidades from "@/components/filiais/equipes/Responsabilidades";
import MetasDesempenho from "@/components/filiais/equipes/MetasDesempenho";
import IntegracaoIA from "@/components/filiais/equipes/IntegracaoIA";

const EquipesResponsaveis = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Equipes e Responsáveis</h1>
          <p className="text-gray-400 max-w-3xl">
            Monte, gerencie e acompanhe as equipes de cada unidade com clareza e controle — papéis, desempenho, metas e responsabilidades em um só painel.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Novo Membro</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><GitMerge className="h-4 w-4 mr-2" /> Editar Organograma</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><UserCheck className="h-4 w-4 mr-2" /> Atribuir Responsabilidade</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
        </div>
      </header>

      <Tabs defaultValue="organograma" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-800">
          <TabsTrigger value="organograma">Organograma e Hierarquia</TabsTrigger>
          <TabsTrigger value="cadastro">Cadastro de Membros e Papéis</TabsTrigger>
          <TabsTrigger value="metas">Metas e Indicadores</TabsTrigger>
          <TabsTrigger value="produtividade">Produtividade e Desempenho</TabsTrigger>
          <TabsTrigger value="integracao">Integração com Módulos e IA</TabsTrigger>
        </TabsList>

        <TabsContent value="organograma" className="mt-6">
          <EstruturaHierarquica />
        </TabsContent>
        <TabsContent value="cadastro" className="mt-6">
          <PerfisUsuarios />
        </TabsContent>
        <TabsContent value="metas" className="mt-6">
          <MetasDesempenho />
        </TabsContent>
        <TabsContent value="produtividade" className="mt-6">
          <Responsabilidades />
        </TabsContent>
        <TabsContent value="integracao" className="mt-6">
          <IntegracaoIA />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EquipesResponsaveis;