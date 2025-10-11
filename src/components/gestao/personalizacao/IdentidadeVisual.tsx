import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Upload } from "lucide-react";

const IdentidadeVisual = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Identidade Visual e Temas</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Logotipo Principal</Label>
            <div className="flex items-center gap-2">
              <Input type="file" className="bg-gray-800 border-gray-700" />
              <Button variant="ghost" size="icon"><Upload className="h-4 w-4" /></Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Cor Primária</Label>
              <Input type="color" defaultValue="#007BFF" className="bg-gray-800 border-gray-700" />
            </div>
            <div className="space-y-2">
              <Label>Cor Secundária</Label>
              <Input type="color" defaultValue="#2EF3C1" className="bg-gray-800 border-gray-700" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Tipografia</Label>
            <Input defaultValue="Inter / IBM Plex Sans" className="bg-gray-800 border-gray-700" />
          </div>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg space-y-4">
          <h3 className="font-semibold text-white">Preview em Tempo Real</h3>
          <div className="h-40 bg-gray-900 rounded-md flex items-center justify-center text-gray-500">
            <p>Visualização do tema aplicado</p>
          </div>
          <div className="flex items-start gap-2">
            <BrainCircuit className="h-5 w-5 text-tech-green flex-shrink-0 mt-1" />
            <p className="text-sm text-risk-gold">“A combinação de azul e dourado está 9% mais associada a confiabilidade e autoridade jurídica. Deseja aplicar o estilo globalmente?”</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IdentidadeVisual;