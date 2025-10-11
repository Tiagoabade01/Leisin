import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const params = [
  { param: "Zona", value: "ZEU", source: "GeoSP" },
  { param: "Coeficiente de Aproveitamento (CA)", value: "4.0", source: "Lei 16.402/2016" },
  { param: "Taxa de Ocupação (TO)", value: "0.7", source: "PDE SP" },
  { param: "Gabarito", value: "48m", source: "LPUOS" },
  { param: "Recuos", value: "Frente 5m / Laterais 3m", source: "PDE SP" },
  { param: "Usos Permitidos", value: "HIS, HMP, Residencial, Comercial", source: "PDE SP" },
];

const ZoneamentoLegislacao = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Zoneamento e Legislação</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Parâmetro</TableHead><TableHead>Valor</TableHead><TableHead>Fonte</TableHead></TableRow></TableHeader>
          <TableBody>
            {params.map(p => (
              <TableRow key={p.param} className="border-gray-700">
                <TableCell className="font-medium">{p.param}</TableCell>
                <TableCell>{p.value}</TableCell>
                <TableCell>{p.source}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 Análise IA: “O imóvel cumpre CA e TO; porém excede o gabarito máximo permitido pela LPUOS em 3m.”</p>
      </CardContent>
    </Card>
  );
};

export default ZoneamentoLegislacao;