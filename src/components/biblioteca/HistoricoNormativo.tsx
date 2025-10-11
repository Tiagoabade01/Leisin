import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitCompare } from "lucide-react";

const history = [
  { date: "2021", event: "Atualizada por Medida Provisória 1.085" },
  { date: "2018", event: "Alterada pelo Decreto 9.310" },
  { date: "2017", event: "Versão original publicada" },
];

const HistoricoNormativo = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Versões e Histórico Normativo (Lei 13.465/2017)</CardTitle>
        <Button variant="outline" className="bg-gray-800 border-gray-700"><GitCompare className="h-4 w-4 mr-2" /> Comparar Versões</Button>
      </CardHeader>
      <CardContent>
        <div className="relative pl-4">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-700"></div>
          {history.map((item, index) => (
            <div key={index} className="relative mb-6 flex items-center gap-4">
              <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-6 w-6 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                <span className="text-xs font-mono">{item.date}</span>
              </div>
              <div className="pl-8"><p className="font-semibold text-white">{item.event}</p></div>
            </div>
          ))}
        </div>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Alterações de 2021 impactam procedimentos de legitimação fundiária. IA sugere atualização dos modelos de Reurb-A e Reurb-S.”</p>
      </CardContent>
    </Card>
  );
};

export default HistoricoNormativo;