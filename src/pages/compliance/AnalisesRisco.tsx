import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PlusCircle, Download, Brain, Map } from "lucide-react";
import RiskDashboardKPIs from "@/components/risks/RiskDashboardKPIs";
import RiskHeatmap from "@/components/risks/RiskHeatmap";
import IndividualAnalyses from "@/components/risks/IndividualAnalyses";
import ActiveAlerts from "@/components/risks/ActiveAlerts";
import RiskReports from "@/components/risks/RiskReports";
import RiskAIInsights from "@/components/risks/RiskAIInsights";

const AnalisesRiscoPage = () => {
  return (
    <div className="bg-[#0B0F14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Análises de Risco</h1>
          <p className="text-gray-400 max-w-3xl">
            O núcleo de inteligência que identifica, classifica e prevê riscos jurídicos, financeiros e reputacionais — em tempo real.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Nova Análise</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Map className="h-4 w-4 mr-2" /> Mapa de Risco</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <RiskDashboardKPIs />
          <RiskHeatmap />
          <IndividualAnalyses />
          <ActiveAlerts />
          <RiskReports />
        </div>
        <div className="lg:col-span-1">
          <RiskAIInsights />
        </div>
      </div>
    </div>
  );
};

const AnalisesRisco = () => (
  <Layout>
    <AnalisesRiscoPage />
  </Layout>
);

export default AnalisesRisco;