import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const ImoveisAIInsights = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader className="flex flex-row items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-tech-green" />
        <CardTitle className="text-white text-base">Inteligência Cadastral (IA)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“12 imóveis estão com zoneamento desatualizado há mais de 2 anos; 3 têm matrículas duplicadas.”</p>
        <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Detectado conflito cadastral entre a matrícula 12.345 e 12.347 (mesma área física).”</p>
        <p className="text-sm text-gray-300 p-2 bg-gray-800/50 rounded-md">“Área de APP detectada parcialmente sobreposta ao terreno 0143.”</p>
      </CardContent>
    </Card>
  );
};

export default ImoveisAIInsights;