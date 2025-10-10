import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, BarChart2, Link, PlusCircle } from "lucide-react";

import VisaoGeralFinanceiro from "@/components/master/financeiro/VisaoGeralFinanceiro";
import FaturasPagamentos from "@/components/master/financeiro/FaturasPagamentos";
import ReceitasAssinaturas from "@/components/master/financeiro/ReceitasAssinaturas";
import InadimplenciaRecuperacao from "@/components/master/financeiro/InadimplenciaRecuperacao";
import NotasFiscais from "@/components/master/financeiro/NotasFiscais";
import RelatoriosFinanceiros from "@/components/master/financeiro/RelatoriosFinanceiros";
import IntegracoesContabeis from "@/components/master/financeiro/IntegracoesContabeis";
import InteligenciaFinanceira from "@/components/master/financeiro/InteligenciaFinanceira";

const FinanceiroCobrancas = () => {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Financeiro & Cobranças</h1>
          <p className="text-gray-300 max-w-3xl">O motor financeiro da T3 — controle total sobre assinaturas, faturas, pagamentos, inadimplências e projeções de receita.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button><PlusCircle className="h-4 w-4 mr-2" /> Nova Fatura</Button>
          <Button variant="outline" className="bg-gray-800 border-gray-700"><FileText className="h-4 w-4 mr-2" /> Emitir Nota</Button>
          <Button variant="outline" className="bg-gray-800 border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
          <Button variant="outline" className="bg-gray-800 border-gray-700"><Link className="h-4 w-4 mr-2" /> Integrações</Button>
        </div>
      </header>
      
      <Tabs defaultValue="visao_geral" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-gray-800">
          <TabsTrigger value="visao_geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="faturas">Faturas & Pagamentos</TabsTrigger>
          <TabsTrigger value="receitas">Receitas & Assinaturas</TabsTrigger>
          <TabsTrigger value="inadimplencia">Inadimplência</TabsTrigger>
          <TabsTrigger value="notas_fiscais">Notas Fiscais</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          <TabsTrigger value="integracoes">Integrações</TabsTrigger>
          <TabsTrigger value="ia">Inteligência (IA)</TabsTrigger>
        </TabsList>

        <TabsContent value="visao_geral" className="mt-6"><VisaoGeralFinanceiro /></TabsContent>
        <TabsContent value="faturas" className="mt-6"><FaturasPagamentos /></TabsContent>
        <TabsContent value="receitas" className="mt-6"><ReceitasAssinaturas /></TabsContent>
        <TabsContent value="inadimplencia" className="mt-6"><InadimplenciaRecuperacao /></TabsContent>
        <TabsContent value="notas_fiscais" className="mt-6"><NotasFiscais /></TabsContent>
        <TabsContent value="relatorios" className="mt-6"><RelatoriosFinanceiros /></TabsContent>
        <TabsContent value="integracoes" className="mt-6"><IntegracoesContabeis /></TabsContent>
        <TabsContent value="ia" className="mt-6"><InteligenciaFinanceira /></TabsContent>
      </Tabs>
    </div>
  );
};

export default FinanceiroCobrancas;