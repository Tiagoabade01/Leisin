import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PlusCircle, Download, Brain, ListChecks } from "lucide-react";
import ContractKPIs from "@/components/contratos/ContractKPIs";
import ContractList from "@/components/contratos/ContractList";
import ObligationsPanel from "@/components/contratos/ObligationsPanel";
import ContractAIInsights from "@/components/contratos/ContractAIInsights";

const ContratosObrigacoes = () => {
  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Contratos & Obrigações</h1>
            <p className="text-gray-400 max-w-3xl">
              Gestão inteligente de contratos, obrigações e aditivos — automação, revisão e conformidade jurídica com IA.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button><PlusCircle className="h-4 w-4 mr-2" /> Novo Contrato</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> Gerar Minuta IA</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar Dados</Button>
            <Button variant="secondary"><ListChecks className="h-4 w-4 mr-2" /> Ver Obrigações</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <ContractKPIs />
            <ContractList />
            <ObligationsPanel />
          </div>
          <div className="lg:col-span-1">
            <ContractAIInsights />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContratosObrigacoes;