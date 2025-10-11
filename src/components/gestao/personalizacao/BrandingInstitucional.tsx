import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BrainCircuit } from "lucide-react";

const BrandingInstitucional = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Branding Institucional</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Nome do Escritório/Empresa</Label>
          <Input defaultValue="Leisin Advocacia & Consultoria" className="bg-gray-800 border-gray-700" />
        </div>
        <div className="space-y-2">
          <Label>Slogan</Label>
          <Input defaultValue="Inteligência Jurídica para o Futuro" className="bg-gray-800 border-gray-700" />
        </div>
        <div className="space-y-2">
          <Label>Papel Timbrado Digital</Label>
          <Input type="file" className="bg-gray-800 border-gray-700" />
        </div>
        <div className="flex items-start gap-2 mt-4">
          <BrainCircuit className="h-5 w-5 text-tech-green flex-shrink-0 mt-1" />
          <p className="text-sm text-risk-gold">“Sua marca institucional foi aplicada a todos os relatórios e e-mails automáticos. Deseja sincronizar também com o portal externo?”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BrandingInstitucional;