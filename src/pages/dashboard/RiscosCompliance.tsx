import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Brain, Map, PlusCircle } from "lucide-react";
import RiskKPIs from "@/components/compliance/RiskKPIs";
import RiskMap from "@/components/compliance/RiskMap";
import CertificatesMonitor from "@/components/compliance/CertificatesMonitor";
import AuditCompliance from "@/components/compliance/AuditCompliance";
import ContractReputationalRisk from "@/components/compliance/ContractReputationalRisk";
import ComplianceCopilot from "@/components/compliance/ComplianceCopilot";

const RiscosCompliancePage = () => {
  return (
    <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Riscos & Compliance</h1>
          <p className="text-gray-400 max-w-3xl">
            Controle total de riscos, conformidades, certidões e auditorias — IA que protege, previne e prevê.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><PlusCircle className="h-4 w-4 mr-2" /> Nova Auditoria</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> Gerar Relatório IA</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><FileText className="h-4 w-4 mr-2" /> Exportar Certidões</Button>
          <Button variant="secondary"><Map className="h-4 w-4 mr-2" /> Visualizar Mapa</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <RiskKPIs />
          <RiskMap />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <CertificatesMonitor />
            <AuditCompliance />
          </div>
          <ContractReputationalRisk />
        </div>
        <div className="lg:col-span-1">
          <ComplianceCopilot />
        </div>
      </div>
    </div>
  );
};

const RiscosCompliance = () => (
  <Layout>
    <RiscosCompliancePage />
  </Layout>
);

export default RiscosCompliance;