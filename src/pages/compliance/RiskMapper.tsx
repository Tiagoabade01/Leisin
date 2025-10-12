import { Button } from "@/components/ui/button";
import { PlusCircle, Download, Brain, Share2 } from "lucide-react";
import InteractiveRiskMap from "@/components/risk-mapper/InteractiveRiskMap";
import RelationshipGraph from "@/components/risk-mapper/RelationshipGraph";
import PredictiveAnalysis from "@/components/risk-mapper/PredictiveAnalysis";
import GeoReports from "@/components/risk-mapper/GeoReports";

const RiskMapper = () => {
  return (
    <div className="bg-[#081018] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Risk Mapper</h1>
          <p className="text-gray-400 max-w-3xl">
            Mapa inteligente de riscos corporativos e jurídicos — visualize, investigue e antecipe riscos no território, no setor e na rede de relacionamentos.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Nova Análise</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar Mapa</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Share2 className="h-4 w-4 mr-2" /> Ver Rede</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> IA Insight</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <InteractiveRiskMap />
          <RelationshipGraph />
          <GeoReports />
        </div>
        <div className="lg:col-span-1">
          <PredictiveAnalysis />
        </div>
      </div>
    </div>
  );
};

export default RiskMapper;