import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BrainCircuit } from "lucide-react";

const PrecificacaoAvançada = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Modelos de Precificação</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="p-3 bg-gray-700/50 rounded-md"><strong>Recorrente Fixo:</strong> Cobrança mensal/anual padrão.</div>
          <div className="p-3 bg-gray-700/50 rounded-md"><strong>Por Uso (Pay-per-use):</strong> Cobrança por consumo (ex: requisições de IA, documentos gerados).</div>
          <div className="p-3 bg-gray-700/50 rounded-md"><strong>Híbrido:</strong> Valor base fixo + cobrança por consumo excedente.</div>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2"><BrainCircuit className="h-5 w-5 text-blue-400" /><CardTitle className="text-white">Simulador de Margem (IA)</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2"><Label>Preço de Venda</Label><Input type="number" defaultValue="890" className="bg-gray-700 border-gray-600" /></div>
          <div className="space-y-2"><Label>Custo-Base (Infra, APIs)</Label><Input type="number" defaultValue="210" className="bg-gray-700 border-gray-600" /></div>
          <Button className="w-full">Calcular Margem</Button>
          <div className="text-center pt-2">
            <p className="text-gray-300">Margem Operacional Estimada:</p>
            <p className="text-2xl font-bold text-green-400">76.4%</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrecificacaoAvançada;