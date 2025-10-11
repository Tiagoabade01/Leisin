import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PlusCircle, Download, Brain, BarChart2 } from "lucide-react";
import PainelRelatorios from "@/components/relatorios/PainelRelatorios";
import RelatoriosTecnicosJuridicos from "@/components/relatorios/RelatoriosTecnicosJuridicos";
import RelatoriosUrbanisticosFiscais from "@/components/relatorios/RelatoriosUrbanisticosFiscais";
import ComparativosIndicadores from "@/components/relatorios/ComparativosIndicadores";
import ExportacoesIntegracoes from "@/components/relatorios/ExportacoesIntegracoes";
import RelatoriosAIInsights from "@/components/relatorios/RelatoriosAIInsights";

const RelatoriosImovelPage = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Relatórios de Imóvel</h1>
          <p className="text-gray-400 max-w-3xl">
            Do dado ao diagnóstico — relatórios completos, auditáveis e inteligentes sobre cada imóvel ou carteira patrimonial.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Novo Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart2 className="h-4 w-4 mr-2" /> Comparar Imóveis</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> Gerar Relatório IA</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <PainelRelatorios />
          <RelatoriosTecnicosJuridicos />
          <RelatoriosUrbanisticosFiscais />
          <ComparativosIndicadores />
          <ExportacoesIntegracoes />
        </div>
        <div className="lg:col-span-1">
          <RelatoriosAIInsights />
        </div>
      </div>
    </div>
  );
};

const RelatoriosImovel = () => (
  <Layout>
    <RelatoriosImovelPage />
  </Layout>
);

export default RelatoriosImovel;