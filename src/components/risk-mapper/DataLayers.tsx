import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Building, Scale, TreePine, Banknote, Signature, User, Home } from "lucide-react";

const layers = [
  { id: "empresas", label: "Empresas", icon: Building },
  { id: "processos", label: "Processos", icon: Scale },
  { id: "ambiental", label: "Ambiental", icon: TreePine },
  { id: "financeiro", label: "Financeiro", icon: Banknote },
  { id: "contratual", label: "Contratual", icon: Signature },
  { id: "pessoal", label: "Pessoal", icon: User },
  { id: "terrenos", label: "Terrenos", icon: Home },
];

const DataLayers = () => {
  return (
    <Card className="absolute top-28 right-6 w-56 bg-gray-900/80 backdrop-blur-sm border-gray-700 text-white">
      <CardHeader className="p-3"><CardTitle className="text-base">Camadas de Dados</CardTitle></CardHeader>
      <CardContent className="p-3 space-y-3">
        {layers.map(layer => (
          <div key={layer.id} className="flex items-center gap-2">
            <Checkbox id={layer.id} />
            <Label htmlFor={layer.id} className="flex items-center gap-2 text-sm cursor-pointer">
              <layer.icon className="h-4 w-4" />
              {layer.label}
            </Label>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DataLayers;