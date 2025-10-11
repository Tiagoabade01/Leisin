import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Filter, Download, Brain, Map } from "lucide-react";
import ActivityFilters from "@/components/activity/ActivityFilters";
import ModuleActivitySummary from "@/components/activity/ModuleActivitySummary";
import ActivityTimeline from "@/components/activity/ActivityTimeline";
import MonitoringAI from "@/components/activity/MonitoringAI";
import GlobalActivityMetrics from "@/components/activity/GlobalActivityMetrics";

const AtividadesRecentesPage = () => {
  return (
    <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8 flex flex-col">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Atividades Recentes</h1>
          <p className="text-gray-400 max-w-3xl">
            Central de operações e rastreabilidade em tempo real — acompanhe tudo o que acontece dentro do sistema.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Filter className="h-4 w-4 mr-2" /> Filtrar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar Logs</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> IA de Auditoria</Button>
          <Button variant="secondary"><Map className="h-4 w-4 mr-2" /> Ver Mapa de Eventos</Button>
        </div>
      </header>

      <ActivityFilters />

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        <div className="lg:col-span-1">
          <ModuleActivitySummary />
        </div>
        <div className="lg:col-span-2">
          <ActivityTimeline />
        </div>
        <div className="lg:col-span-1">
          <MonitoringAI />
        </div>
      </div>

      <div className="mt-6">
        <GlobalActivityMetrics />
      </div>
    </div>
  );
};

const AtividadesRecentes = () => (
  <Layout>
    <AtividadesRecentesPage />
  </Layout>
);

export default AtividadesRecentes;