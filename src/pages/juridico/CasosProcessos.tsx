import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PlusCircle, Download, Brain, Calendar } from "lucide-react";
import ProcessKPIs from "@/components/casos/ProcessKPIs";
import ProcessList from "@/components/casos/ProcessList";
import DeadlinesPanel from "@/components/casos/DeadlinesPanel";
import LegalAIInsights from "@/components/casos/LegalAIInsights";

const CasosProcessos = () => {
  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Casos & Processos</h1>
            <p className="text-gray-400 max-w-3xl">
              Gestão completa de processos judiciais e consultivos — controle, automação e análise preditiva jurídica.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button><PlusCircle className="h-4 w-4 mr-2" /> Novo Processo</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Importar Andamentos</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> Gerar Relatório IA</Button>
            <Button variant="secondary"><Calendar className="h-4 w-4 mr-2" /> Visualizar Calendário</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <ProcessKPIs />
            <ProcessList />
            <DeadlinesPanel />
          </div>
          <div className="lg:col-span-1">
            <LegalAIInsights />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CasosProcessos;