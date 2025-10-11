import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Sparkles } from "lucide-react";

const TemplateLibrary = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white text-base">Modelos e Minutas (IA)</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Input
            placeholder="Ex: “Gerar minuta de contrato de prestação de serviços...”"
            className="bg-gray-800 border-gray-600"
          />
          <Button variant="secondary" className="w-full"><Sparkles className="h-4 w-4 mr-2" /> Gerar com IA</Button>
        </div>
        <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded-md">
                <span className="text-sm">Contrato de Confidencialidade (NDA)</span>
                <Button size="sm" variant="ghost" className="text-xs h-6">Usar</Button>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-800/50 rounded-md">
                <span className="text-sm">Petição Inicial (Cível)</span>
                <Button size="sm" variant="ghost" className="text-xs h-6">Usar</Button>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateLibrary;