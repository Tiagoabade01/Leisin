import { Button } from "@/components/ui/button";
import { BarChart, Brain } from "lucide-react";
import PerformanceKPIs from "@/components/performance/PerformanceKPIs";
import ContractAnalysis from "@/components/performance/ContractAnalysis";
import ProcessAnalysis from "@/components/performance/ProcessAnalysis";
import OperationalEfficiency from "@/components/performance/OperationalEfficiency";
import TeamPerformance from "@/components/performance/TeamPerformance";
import LegalCopilot from "@/components/performance/LegalCopilot";

const PerformanceJuridica = () => {
  return (
    <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Performance Jurídica</h1>
          <p className="text-gray-400 max-w-3xl">
            Análise de desempenho operacional, eficiência contratual e produtividade jurídica — dados em tempo real com apoio de IA.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><BarChart className="h-4 w-4 mr-2" /> Exportar Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700">Ver Comparativos</Button>
          <Button variant="secondary"><Brain className="h-4 w-4 mr-2" /> IA Copilot</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <PerformanceKPIs />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <ContractAnalysis />
            <ProcessAnalysis />
          </div>
          <OperationalEfficiency />
          <TeamPerformance />
        </div>
        <div className="lg:col-span-1">
          <LegalCopilot />
        </div>
      </div>
    </div>
  );
};

export default PerformanceJuridica;