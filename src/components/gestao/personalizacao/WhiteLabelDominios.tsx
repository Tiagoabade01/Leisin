import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BrainCircuit } from "lucide-react";

const WhiteLabelDominios = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>White-Label e Domínios Personalizados</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Domínio Personalizado</Label>
          <Input defaultValue="app.advocaciaatlas.com.br" className="bg-gray-800 border-gray-700" />
        </div>
        <div className="space-y-2">
          <Label>Tela de Login</Label>
          <Input type="file" className="bg-gray-800 border-gray-700" />
        </div>
        <div className="flex items-start gap-2 mt-4">
          <BrainCircuit className="h-5 w-5 text-tech-green flex-shrink-0 mt-1" />
          <p className="text-sm text-risk-gold">“Domínio personalizado ativo: portal.advocaciaatlas.com.br. Todos os acessos redirecionam automaticamente com SSL configurado.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WhiteLabelDominios;