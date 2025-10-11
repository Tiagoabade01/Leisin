import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PlusCircle, Download, Brain, FileText } from "lucide-react";
import DocumentCenter from "@/components/docs/DocumentCenter";
import TemplateLibrary from "@/components/docs/TemplateLibrary";
import ReportGenerator from "@/components/docs/ReportGenerator";
import DocumentAI from "@/components/docs/DocumentAI";

const DocumentosRelatorios = () => {
  return (
    <Layout>
      <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white font-serif">Documentos & Relatórios</h1>
            <p className="text-gray-400 max-w-3xl">
              Central de automação e controle documental jurídico — inteligência, auditoria e relatórios integrados.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button><PlusCircle className="h-4 w-4 mr-2" /> Novo Documento</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Brain className="h-4 w-4 mr-2" /> Gerar Relatório IA</Button>
            <Button variant="outline" className="bg-petroleum-blue border-gray-700"><FileText className="h-4 w-4 mr-2" /> Importar Certidão</Button>
            <Button variant="secondary"><Download className="h-4 w-4 mr-2" /> Exportar Dados</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <DocumentCenter />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <TemplateLibrary />
              <ReportGenerator />
            </div>
          </div>
          <div className="lg:col-span-1">
            <DocumentAI />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DocumentosRelatorios;