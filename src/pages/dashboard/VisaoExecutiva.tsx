import { Button } from "@/components/ui/button";
import { FileText, BarChart, Brain, Presentation } from "lucide-react";
import KeyIndicators from "@/components/dashboard/KeyIndicators";
import LegalPerformance from "@/components/dashboard/LegalPerformance";
import FinancialRevenue from "@/components/dashboard/FinancialRevenue";
import RiskCompliance from "@/components/dashboard/RiskCompliance";
import TeamProductivity from "@/components/dashboard/TeamProductivity";
import AiCopilot from "@/components/dashboard/AiCopilot";

const VisaoExecutiva = () => {
  return (
    <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Visão Executiva</h1>
          <p className="text-gray-400 max-w-2xl">
            Visão panorâmica e estratégica do ecossistema jurídico-operacional da T3 — dados, métricas e IA em tempo real.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><FileText className="h-4 w-4 mr-2" /> Novo Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart className="h-4 w-4 mr-2" /> Exportar Dados</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> IA Copilot</Button>
          <Button variant="secondary"><Presentation className="h-4 w-4 mr-2" /> Modo Apresentação</Button>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <KeyIndicators />
          <LegalPerformance />
          <FinancialRevenue />
          <RiskCompliance />
          <TeamProductivity />
        </div>

        {/* AI Sidebar */}
        <div className="lg:col-span-1">
          <AiCopilot />
        </div>
      </div>
    </div>
  );
};

export default VisaoExecutiva;