import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2 } from "lucide-react";

const RelationshipGraph = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Rede de Relacionamentos (Risk Graph)</CardTitle></CardHeader>
      <CardContent>
        <div className="h-64 flex items-center justify-center bg-gray-900/50 rounded-lg border border-dashed border-gray-700">
          <div className="text-center text-gray-500">
            <Share2 className="mx-auto h-12 w-12 mb-2" />
            <p>Visualização do grafo de relacionamentos</p>
          </div>
        </div>
        <div className="mt-4 space-y-2 text-sm">
            <p className="text-risk-gold">💡 “Sócio A possui vínculo com 4 empresas — 2 em situação crítica de compliance.”</p>
            <p className="text-risk-gold">💡 “Contrato #1849 conecta 3 empreendimentos com pendências ambientais similares.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelationshipGraph;