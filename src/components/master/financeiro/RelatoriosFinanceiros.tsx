import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { showLoading, dismissToast, showSuccess } from '@/utils/toast';

const reports = [
  "Receita Recorrente Mensal (MRR/ARR)",
  "Receita por Módulo e Cliente",
  "Faturas Pendentes e Vencidas",
  "Fluxo de Caixa Projetado",
];

const RelatoriosFinanceiros = () => {
  const handleGenerate = (reportName: string) => {
    const toastId = showLoading(`Gerando relatório: ${reportName}...`);
    setTimeout(() => {
      dismissToast(toastId);
      showSuccess('Relatório gerado com sucesso!');
    }, 2000);
  };

  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Relatórios Financeiros</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {reports.map(report => (
          <div key={report} className="p-4 bg-gray-700/50 rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-3"><FileText className="h-5 w-5 text-gray-300" /><span>{report}</span></div>
            <Button onClick={() => handleGenerate(report)} variant="outline" className="bg-gray-700 border-gray-600">Gerar Relatório</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RelatoriosFinanceiros;