import { Button } from "@/components/ui/button";
import { PlusCircle, Download, Brain, History } from "lucide-react";
import IaReportGenerator from "@/components/reports/IaReportGenerator";
import ReportCategoryCard from "@/components/reports/ReportCategoryCard";
import DataExport from "@/components/reports/DataExport";
import ReportHistory from "@/components/reports/ReportHistory";
import { Scale, Banknote, ShieldAlert } from "lucide-react";

const legalReports = {
  kpis: [
    { metric: "Contratos ativos", value: "326", change: "+6%" },
    { metric: "Taxa de êxito processual", value: "87%", change: "+3%" },
    { metric: "Tempo médio de revisão", value: "2.8 dias", change: "-11%" },
    { metric: "Índice de conformidade", value: "94%", change: "+4%" },
  ],
  reports: ["Contratos", "Processos", "Diligências", "Compliance"],
};

const financialReports = {
  kpis: [
    { metric: "Receita jurídica (Mês)", value: "R$ 218k", change: "+11%" },
    { metric: "Margem líquida", value: "28%", change: "+2%" },
    { metric: "Inadimplência", value: "3.2%", change: "-1%" },
  ],
  reports: ["DRE Detalhado", "Faturamento por Cliente", "Fluxo de Caixa", "Honorários Pendentes"],
};

const riskReports = {
  kpis: [
    { metric: "Risco médio global", value: "2.8 / 5", change: "-8%" },
    { metric: "Certidões vencidas", value: "9", change: "-3%" },
    { metric: "Casos com risco alto", value: "12", change: "0%" },
  ],
  reports: ["Mapa de Risco", "Radar de Compliance", "Auditorias Críticas", "Análise de Cláusulas"],
};

const RelatoriosExportacoes = () => {
  return (
    <div className="bg-[#0A0F14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-serif">Relatórios & Exportações</h1>
          <p className="text-gray-400 max-w-3xl">
            Crie, visualize e exporte relatórios automáticos com IA — dados jurídicos, financeiros e corporativos em um só painel.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><PlusCircle className="h-4 w-4 mr-2" /> Novo Relatório</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><Download className="h-4 w-4 mr-2" /> Exportar Dados</Button>
          <Button variant="outline" className="bg-petroleum-blue border-gray-700"><History className="h-4 w-4 mr-2" /> Ver Histórico</Button>
          <Button variant="secondary"><Brain className="h-4 w-4 mr-2" /> IA Copilot</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <IaReportGenerator />
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <ReportCategoryCard title="Relatórios Jurídicos" icon={Scale} data={legalReports} />
            <ReportCategoryCard title="Relatórios Financeiros & DRE" icon={Banknote} data={financialReports} />
            <ReportCategoryCard title="Relatórios de Risco & Compliance" icon={ShieldAlert} data={riskReports} />
          </div>
        </div>
        <div className="lg:col-span-1">
          <DataExport />
        </div>
      </div>

      <div className="mt-6">
        <ReportHistory />
      </div>
    </div>
  );
};

export default RelatoriosExportacoes;