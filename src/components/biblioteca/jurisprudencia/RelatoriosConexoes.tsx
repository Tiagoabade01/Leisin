import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

const RelatoriosConexoes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Relatórios Automáticos</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {["Jurisprudência dominante por tema", "Pareceres correlacionados", "Impacto em contratos ativos"].map(report => (
            <div key={report} className="p-3 bg-gray-800/50 rounded-lg flex justify-between items-center">
              <span className="text-sm">{report}</span>
              <Button size="sm" variant="secondary">Gerar</Button>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Mapa de Conexões Jurídicas</CardTitle></CardHeader>
        <CardContent className="h-48 flex items-center justify-center bg-gray-900/50 rounded-lg">
          <div className="text-center text-gray-500">
            <Share2 className="mx-auto h-10 w-10 mb-2" />
            <p>Grafo de Relações</p>
          </div>
        </CardContent>
        <p className="text-sm text-risk-gold p-4">💡 IA Insight: “O STJ publicou decisão que revoga precedente aplicado no contrato nº 456/24. IA sugeriu revisão automática da cláusula correspondente.”</p>
      </Card>
    </div>
  );
};

export default RelatoriosConexoes;