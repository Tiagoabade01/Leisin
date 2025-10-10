import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const fields = ["Cliente", "Módulo", "Status", "Valor", "Data", "Responsável"];

const RelatoriosPersonalizados = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 bg-gray-800 border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Construtor de Relatórios</CardTitle></CardHeader>
        <CardContent>
          <div className="p-4 border border-dashed border-gray-600 rounded-lg text-center text-gray-400">
            <p>Área de Visualização do Relatório</p>
            <p className="text-xs">(Arraste os campos aqui)</p>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Campos e Filtros</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Campos Disponíveis</h3>
            <div className="space-y-2 p-3 bg-gray-700/50 rounded-md">
              {fields.map(field => (
                <div key={field} className="flex items-center gap-2"><Checkbox id={field} /><Label htmlFor={field}>{field}</Label></div>
              ))}
            </div>
          </div>
          <Button className="w-full">Gerar Relatório</Button>
          <Button variant="outline" className="w-full bg-gray-700 border-gray-600">Salvar Template</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RelatoriosPersonalizados;