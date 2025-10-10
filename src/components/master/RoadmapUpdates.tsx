import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, History, Book } from "lucide-react";

export const RoadmapUpdates = () => (
  <Card className="bg-gray-800 border-gray-700 text-white">
    <CardHeader>
      <CardTitle>Roadmap & Atualizações</CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="flex items-center"><Rocket className="w-4 h-4 mr-2 text-purple-400" /><span>Próxima feature: Módulo de IA Preditiva</span></div>
      <div className="flex items-center"><History className="w-4 h-4 mr-2 text-gray-400" /><span>Última versão: 2.5.0 (15/07/2024)</span></div>
      <div className="flex items-center"><Book className="w-4 h-4 mr-2 text-blue-400" /><span>Ver documentação técnica</span></div>
    </CardContent>
  </Card>
);