import { Button } from "@/components/ui/button";
import { BrainCircuit, Download, GitCompare } from "lucide-react";
import ChatInterface from "@/components/biblioteca/ia/ChatInterface";
import PainelLateralIA from "@/components/biblioteca/ia/PainelLateralIA";

const PesquisaIA = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8 flex flex-col h-full">
      <header className="flex-shrink-0">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Pesquisa por IA</h1>
            <p className="text-gray-400 max-w-3xl">
              Uma nova forma de pesquisar e compreender o Direito — com respostas explicadas, fundamentadas e conectadas às fontes oficiais.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary"><BrainCircuit className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><GitCompare className="h-4 w-4 mr-2" /> Comparar Fontes</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
        <div className="lg:col-span-2 h-full min-h-[70vh]">
          <ChatInterface />
        </div>
        <div className="lg:col-span-1 h-full">
          <PainelLateralIA />
        </div>
      </main>
    </div>
  );
};

export default PesquisaIA;