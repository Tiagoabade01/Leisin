import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Map } from "lucide-react";
import DataLayers from "./DataLayers";

const InteractiveRiskMap = () => {
  const [points, setPoints] = React.useState<{ x: number; y: number; level: 'low' | 'medium' | 'high' | 'critical'; label: string }[]>([]);
  
  const generatePoints = () => {
    const sample = Array.from({ length: 8 }).map((_v, i) => ({
      x: Math.random() * 85 + 5,
      y: Math.random() * 75 + 10,
      level: (['low','medium','high','critical'] as const)[Math.floor(Math.random() * 4)],
      label: `Ponto ${i + 1}`
    }));
    setPoints(sample);
  };

  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <CardTitle className="text-white">Mapa Interativo de Riscos</CardTitle>
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-green-500"></div>Baixo</span>
            <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-yellow-500"></div>Moderado</span>
            <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-orange-500"></div>Alto</span>
            <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-red-500"></div>Crítico</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative">
        <div className="flex flex-wrap items-center gap-2 mb-4 p-2 bg-gray-900/30 rounded-md">
          <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tipo de Risco" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Entidade" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Período" /></SelectTrigger></Select>
          <Button variant="secondary" className="flex-grow sm:flex-grow-0" onClick={generatePoints}>Filtrar Mapa</Button>
        </div>
        <div className="h-96 flex items-center justify-center bg-gray-900/50 rounded-lg border border-dashed border-gray-700 relative overflow-hidden">
          <div className="text-center text-gray-500">
            <Map className="mx-auto h-16 w-16 mb-2" />
            <p>Visualização do mapa 3D interativo de riscos</p>
          </div>
          {points.map((p, idx) => (
            <div
              key={idx}
              className={`absolute w-3 h-3 rounded-full ${
                p.level === 'low' ? 'bg-green-500' :
                p.level === 'medium' ? 'bg-yellow-500' :
                p.level === 'high' ? 'bg-orange-500' : 'bg-red-500'
              }`}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              title={`${p.label}`}
            />
          ))}
        </div>
        <DataLayers />
        <p className="text-sm text-risk-gold mt-4 text-center">💡 "Zona Leste/SP: concentração alta de ações trabalhistas e pendências ambientais."</p>
      </CardContent>
    </Card>
  );
};

export default InteractiveRiskMap;