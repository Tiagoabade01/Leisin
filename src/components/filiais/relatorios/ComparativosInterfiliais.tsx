import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const comparisonData = [
  { filial: "São Paulo", receita: "R$ 1,08M", lucro: "R$ 410K", roi: "152%", casos: 312, eficiencia: "89%" },
  { filial: "Campinas", receita: "R$ 960K", lucro: "R$ 365K", roi: "158%", casos: 288, eficiencia: "92%" },
  { filial: "Curitiba", receita: "R$ 820K", lucro: "R$ 320K", roi: "162%", casos: 247, eficiencia: "94%" },
  { filial: "BH", receita: "R$ 740K", lucro: "R$ 260K", roi: "141%", casos: 201, eficiencia: "85%" },
  { filial: "Recife", receita: "R$ 680K", lucro: "R$ 210K", roi: "131%", casos: 200, eficiencia: "81%" },
];

const ComparativosInterfiliais = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Comparativos Interfiliais</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Filial</TableHead><TableHead>Receita</TableHead><TableHead>Lucro</TableHead><TableHead>ROI</TableHead><TableHead>Casos Ativos</TableHead><TableHead>Eficiência</TableHead></TableRow></TableHeader>
          <TableBody>
            {comparisonData.map(item => (
              <TableRow key={item.filial} className="border-gray-700">
                <TableCell>{item.filial}</TableCell>
                <TableCell>{item.receita}</TableCell>
                <TableCell>{item.lucro}</TableCell>
                <TableCell>{item.roi}</TableCell>
                <TableCell>{item.casos}</TableCell>
                <TableCell>{item.eficiencia}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Campinas mantém o melhor ROI da rede (158%). IA recomenda aplicar seu modelo de faturamento híbrido nas filiais BH e Recife.”</p>
      </CardContent>
    </Card>
  );
};

export default ComparativosInterfiliais;