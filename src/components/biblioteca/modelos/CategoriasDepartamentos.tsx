import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Folder } from "lucide-react";

const CategoriasDepartamentos = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Categorias e Departamentos</CardTitle></CardHeader>
      <CardContent>
        <div className="font-mono text-sm space-y-2 bg-gray-900/50 p-4 rounded-lg">
          <div className="flex items-center gap-2"><Folder className="h-4 w-4 text-blue-400" /> Trabalhista</div>
          <div className="pl-6 border-l border-gray-600 ml-2 space-y-1">
            <p>├─ Contrato de Emprego CLT</p>
            <p>└─ Termo de Confidencialidade</p>
          </div>
          <div className="flex items-center gap-2 mt-2"><Folder className="h-4 w-4 text-blue-400" /> Societário</div>
          <div className="pl-6 border-l border-gray-600 ml-2 space-y-1">
            <p>├─ Contrato Social</p>
            <p>└─ Acordo de Quotistas</p>
          </div>
          <div className="flex items-center gap-2 mt-2"><Folder className="h-4 w-4 text-blue-400" /> Imobiliário</div>
          <div className="pl-6 border-l border-gray-600 ml-2 space-y-1">
            <p>├─ Promessa de Compra e Venda</p>
            <p>└─ Contrato de Locação</p>
          </div>
        </div>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “O contrato de locação vinculado à categoria Imobiliário pode ser atualizado com novas cláusulas de reajuste sugeridas pelo módulo Financeiro.”</p>
      </CardContent>
    </Card>
  );
};

export default CategoriasDepartamentos;