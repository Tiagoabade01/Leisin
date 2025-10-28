import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, Download, Brain, Upload } from "lucide-react";
import CertificatesKPIs from "@/components/certificates/CertificatesKPIs";
import CertificatesTable from "@/components/certificates/CertificatesTable";
import CertificatesAIInsights from "@/components/certificates/CertificatesAIInsights";
import CertificatesCharts from "@/components/certificates/CertificatesCharts";
import CertificateFetchModal from "@/components/modals/CertificateFetchModal";

const CertidoesDocumentosOficiais = () => {
  const [openCertModal, setOpenCertModal] = React.useState(false);

  return (
    <div className="bg-[#0C1117] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Certidões e Documentos Oficiais</h1>
          <p className="text-gray-400 max-w-3xl">
            Central inteligente para emissão, monitoramento e validação de certidões jurídicas, fiscais e cadastrais — totalmente automatizada e integrada.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setOpenCertModal(true)}><PlusCircle className="h-4 w-4 mr-2" /> Nova Certidão</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> Emitir via API</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Upload className="h-4 w-4 mr-2" /> Upload Manual</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Gerar Relatório</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <CertificatesKPIs />
          <CertificatesTable />
          <CertificatesCharts />
        </div>
        <div className="lg:col-span-1">
          <CertificatesAIInsights />
        </div>
      </div>

      <CertificateFetchModal open={openCertModal} onOpenChange={setOpenCertModal} />
    </div>
  );
};

export default CertidoesDocumentosOficiais;