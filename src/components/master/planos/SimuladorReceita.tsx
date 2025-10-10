import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BrainCircuit } from "lucide-react";

const SimuladorReceita = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Simulador de Receita (IA)</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-semibold">Entradas da Simulação</h3>
          <div className="space-y-2"><Label>Plano</Label><Input defaultValue="Pro" className="bg-gray-700 border-gray-600" /></div>
          <div className="space-y-2"><Label>Novo Valor Proposto</Label><Input type="number" defaultValue="990" className="bg-gray-700 border-gray-600" /></div>
          <div className="space-y-2"><Label>Elasticidade de Preço (IA)</Label><Input defaultValue="-0.8 (Média)" className="bg-gray-700 border-gray-600" disabled /></div>
          <Button className="w-full">Simular Impacto</Button>
        </div>
        <div className="p-4 bg-gray-700/50 rounded-md space-y-3">
          <h3 className="font-semibold">Resultados da IA</h3>
          <p className="text-sm text-gray-300">"Se o plano Pro subir para R$ 990 (+11%), a receita anual projetada cresce <strong>5,3%</strong>, mas o churn pode aumentar em <strong>1,1%</strong> no primeiro trimestre."</p>
          <div className="pt-2 border-t border-gray-600">
            <p><strong>Novo MRR Projetado:</strong> R$ 73.500</p>
            <p><strong>ROI da Mudança:</strong> 12 meses</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimuladorReceita;