import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const viability = [
  { param: "Área do terreno", value: "1.000", unit: "m²" },
  { param: "CA", value: "4.0", unit: "" },
  { param: "Área construída máxima", value: "4.000", unit: "m²" },
  { param: "TO", value: "0.7", unit: "" },
  { param: "Gabarito máximo", value: "48", unit: "m" },
  { param: "Pavimentos possíveis", value: "16", unit: "" },
];

const ViabilidadeConstrutiva = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Viabilidade Construtiva e Uso</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Parâmetro</TableHead><TableHead>Valor</TableHead><TableHead>Unidade</TableHead></TableRow></TableHeader>
          <TableBody>
            {viability.map(v => (
              <TableRow key={v.param} className="border-gray-700">
                <TableCell>{v.param}</TableCell>
                <TableCell>{v.value}</TableCell>
                <TableCell>{v.unit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold my-4">💡 “Com base no uso pretendido (residencial), é possível projetar até 80 unidades de 50m² cada, respeitando CA e TO.”</p>
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-semibold text-sm">Simulações:</h4>
          <Button size="sm" variant="secondary">Residencial</Button>
          <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700">Comercial</Button>
          <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700">Misto</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ViabilidadeConstrutiva;