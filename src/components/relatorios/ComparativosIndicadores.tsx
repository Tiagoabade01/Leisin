import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const comparisonData = [
  { imovel: "78.431", area: "1.000 m²", zoneamento: "ZEU", situacao: "Regular", valor: "R$ 1,95 mi", risco: "🟢 Baixo" },
  { imovel: "44.002", area: "2.300 m²", zoneamento: "ZPR", situacao: "Em análise", valor: "R$ 2,40 mi", risco: "🟠 Médio" },
  { imovel: "13.908", area: "500 m²", zoneamento: "ZC", situacao: "Restrição", valor: "R$ 760 mil", risco: "🔴 Alto" },
];

const ComparativosIndicadores = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Comparativos e Indicadores de Risco</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Imóvel</TableHead><TableHead>Área</TableHead><TableHead>Zoneamento</TableHead><TableHead>Situação</TableHead><TableHead>Valor Venal</TableHead><TableHead>Risco IA</TableHead></TableRow></TableHeader>
          <TableBody>
            {comparisonData.map(item => (
              <TableRow key={item.imovel} className="border-gray-700">
                <TableCell>{item.imovel}</TableCell>
                <TableCell>{item.area}</TableCell>
                <TableCell>{item.zoneamento}</TableCell>
                <TableCell>{item.situacao}</TableCell>
                <TableCell>{item.valor}</TableCell>
                <TableCell>{item.risco}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 “O imóvel nº 13.908 apresenta sobreposição de matrícula e restrição de gabarito. Potencial de mitigação via regularização simplificada.”</p>
      </CardContent>
    </Card>
  );
};

export default ComparativosIndicadores;