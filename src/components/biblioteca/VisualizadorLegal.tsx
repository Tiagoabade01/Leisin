import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const VisualizadorLegal = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Lei nº 13.465/2017 — Regularização Fundiária Urbana</CardTitle>
          <Badge variant="secondary">⚙️ Atualizada em 23/06/2023</Badge>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 border-r border-gray-700 pr-4">
          <h3 className="font-semibold mb-2">Índice</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="text-white font-medium">Art. 1º</li>
            <li>Art. 2º</li>
            <li>Art. 3º</li>
          </ul>
        </aside>
        <div className="md:col-span-3">
          <p className="font-mono text-sm">Art. 1º - Esta Lei dispõe sobre a regularização fundiária urbana (Reurb)...</p>
          <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “O Art. 4º, §1º da Lei 13.465/2017 sofreu alteração pelo Decreto 9.310/2018. Deseja visualizar o texto comparado?”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisualizadorLegal;