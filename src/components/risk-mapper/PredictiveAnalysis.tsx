import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const PredictiveAnalysis = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white sticky top-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white">Análise Preditiva (IA)</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2 text-white">Tendências Regionais</h4>
          <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Empresas de engenharia na região de Campinas apresentam aumento de 22% em autuações ambientais nos últimos 6 meses.”</p>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <h4 className="font-semibold text-sm mb-2 text-white">Insights Preditivos</h4>
          <div className="space-y-3">
            <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Probabilidade de novo litígio fiscal na zona oeste: <strong className="text-yellow-400">42%</strong>.”</p>
            <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Empresas de energia solar têm 2,3x mais risco ambiental no Nordeste.”</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictiveAnalysis;