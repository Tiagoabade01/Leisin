import { Button } from "@/components/ui/button";
import { PlusCircle, Download, Brain, FileText } from "lucide-react";
import DossiesKPIs from "@/components/dossies/DossiesKPIs";
import DossiesTable from "@/components/dossies/DossiesTable";
import DossieTimeline from "@/components/dossies/DossieTimeline";
import DossiesAIInsights from "@/components/dossies/DossiesAIInsights";

const DossiesPropriedade = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Dossiês de Propriedade</h1>
          <p className="text-gray-400 max-w-3xl">
            O histórico completo e vivo de cada imóvel — integrando documentos, zoneamento, certidões, titularidade, transações e análises legais em um único dossiê digital.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary"><PlusCircle className="h-4 w-4 mr-2" /> Novo Dossiê</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Importar Imóvel</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><FileText className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> Exportar PDF</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DossiesKPIs />
          <DossiesTable />
          <DossieTimeline />
        </div>
        <div className="lg:col-span-1">
          <DossiesAIInsights />
        </div>
      </div>
    </div>
  );
};

export default DossiesPropriedade;