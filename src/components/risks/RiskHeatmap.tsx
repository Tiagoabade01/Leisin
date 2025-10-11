import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";

const RiskHeatmap = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">Mapa de Calor (Heatmap de Riscos)</CardTitle>
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-green-500"></div>Baixo</span>
            <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-yellow-500"></div>Moderado</span>
            <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-orange-500"></div>Alto</span>
            <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-red-500"></div>Crítico</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Button size="sm" variant="secondary">Jurídico</Button>
          <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700">Financeiro</Button>
          <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700">Ambiental</Button>
          <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700">Reputacional</Button>
          <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700">Trabalhista</Button>
        </div>
        <div className="h-64 flex items-center justify-center bg-gray-900/50 rounded-lg border border-dashed border-gray-700">
          <div className="text-center text-gray-500">
            <Map className="mx-auto h-12 w-12 mb-2" />
            <p>Visualização do mapa de calor interativo</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskHeatmap;