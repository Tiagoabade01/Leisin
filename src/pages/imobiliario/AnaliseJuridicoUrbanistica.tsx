import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PlusCircle, Download, Brain, Map } from "lucide-react";
import DashboardAnalises from "@/components/urbanistico/DashboardAnalises";
import ZoneamentoLegislacao from "@/components/urbanistico/ZoneamentoLegislacao";
import RestricoesIrregularidades from "@/components/urbanistico/RestricoesIrregularidades";
import ViabilidadeConstrutiva from "@/components/urbanistico/ViabilidadeConstrutiva";
import RelatoriosPareceres from "@/components/urbanistico/RelatoriosPareceres";
import AnaliseAIInsights from "@/components/urbanistico/AnaliseAIInsights";

const AnaliseJuridicoUrbanisticaPage = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Análise Jurídico-Urbanística</h1>
          <p className="text-gray-400 max-w-3xl">
            Interpretação automatizada das leis urbanas e da situação jurídica dos imóveis — precisão técnica e inteligência legal em um só ambiente.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Nova Análise</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Map className="h-4 w-4 mr-2" /> Ver no Mapa</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> Consultar Lei</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DashboardAnalises />
          <ZoneamentoLegislacao />
          <RestricoesIrregularidades />
          <ViabilidadeConstrutiva />
          <RelatoriosPareceres />
        </div>
        <div className="lg:col-span-1">
          <AnaliseAIInsights />
        </div>
      </div>
    </div>
  );
};

const AnaliseJuridicoUrbanistica = () => (
  <Layout>
    <AnaliseJuridicoUrbanisticaPage />
  </Layout>
);

export default AnaliseJuridicoUrbanistica;