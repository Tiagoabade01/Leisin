import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, Download, Brain, FileText } from "lucide-react";
import ComplianceDashboard from "@/components/audit/ComplianceDashboard";
import AutomatedAudits from "@/components/audit/AutomatedAudits";
import AuditTable from "@/components/audit/AuditTable";
import AuditAIInsights from "@/components/audit/AuditAIInsights";
import NewAuditModal from "@/components/modals/NewAuditModal";

const ConformidadeAuditoria = () => {
  const [openAuditModal, setOpenAuditModal] = React.useState(false);

  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Conformidade e Auditoria</h1>
          <p className="text-gray-400 max-w-3xl">
            Supervisão completa da integridade corporativa — da governança jurídica à rastreabilidade de ações e documentos.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setOpenAuditModal(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Auditoria</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><FileText className="h-4 w-4 mr-2" /> Ver Logs</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ComplianceDashboard />
          <AutomatedAudits />
          <AuditTable />
        </div>
        <div className="lg:col-span-1">
          <AuditAIInsights />
        </div>
      </div>

      <NewAuditModal open={openAuditModal} onOpenChange={setOpenAuditModal} />
    </div>
  );
};

export default ConformidadeAuditoria;