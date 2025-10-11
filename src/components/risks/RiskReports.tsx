import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const RiskReports = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Relatórios e Ações Preventivas</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-2 text-white">Estrutura do Dossiê</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Resumo executivo e Leisin Score</li>
            <li>Visão jurídica e fiscal</li>
            <li>Estrutura societária e beneficiários</li>
            <li>Compliance, ESG e reputação</li>
            <li>Benchmark do setor</li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="p-3 bg-gray-800/50 rounded-lg">
            <h3 className="font-semibold mb-1 text-white flex items-center gap-2"><BrainCircuit className="h-4 w-4 text-tech-green" /> Conclusão da IA</h3>
            <p className="text-xs text-gray-300">“Risco moderado — acompanhamento sugerido em 60 dias.”</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-white">Exportações</h3>
            <ul className="list-disc list-inside text-sm text-gray-300">
              <li>PDF executivo</li>
              <li>CSV / Excel para BI</li>
              <li>Integração via API</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskReports;