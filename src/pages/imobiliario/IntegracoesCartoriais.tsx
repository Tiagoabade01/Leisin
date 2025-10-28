import { Button } from "@/components/ui/button";
import { PlusCircle, RefreshCw, FileText, Download } from "lucide-react";
import PainelConexoes from "@/components/cartorios/PainelConexoes";
import ConsultasAutomaticas from "@/components/cartorios/ConsultasAutomaticas";
import CertidoesAverbacoes from "@/components/cartorios/CertidoesAverbacoes";
import HistoricoAtos from "@/components/cartorios/HistoricoAtos";
import RelatoriosLogs from "@/components/cartorios/RelatoriosLogs";
import CartoriosAIInsights from "@/components/cartorios/CartoriosAIInsights";
import { appActions } from "@/utils/actions";

const IntegracoesCartoriais = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Integrações Cartoriais</h1>
          <p className="text-gray-400 max-w-3xl">
            Automação total entre o sistema jurídico e o registro público — matrículas, certidões e atos cartoriais com atualização em tempo real.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => appActions.newAnalysis("cartorial")}><PlusCircle className="h-4 w-4 mr-2" /> Nova Consulta</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => appActions.refreshAll()}><RefreshCw className="h-4 w-4 mr-2" /> Atualizar Todas</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => appActions.generateReport("Certidão Cartorial")}><FileText className="h-4 w-4 mr-2" /> Emitir Certidão</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700" onClick={() => appActions.exportLog("logs-cartoriais")}><Download className="h-4 w-4 mr-2" /> Exportar Log</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <PainelConexoes />
          <ConsultasAutomaticas />
          <CertidoesAverbacoes />
          <HistoricoAtos />
          <RelatoriosLogs />
        </div>
        <div className="lg:col-span-1">
          <CartoriosAIInsights />
        </div>
      </div>
    </div>
  );
};

export default IntegracoesCartoriais;