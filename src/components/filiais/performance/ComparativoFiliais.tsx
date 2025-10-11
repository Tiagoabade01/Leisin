import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const comparisonData = [
  { filial: "São Paulo", produtividade: "88%", margem: "32%", roi: "141%", satisfacao: 89, status: "🟢" },
  { filial: "Campinas", produtividade: "91%", margem: "29%", roi: "155%", satisfacao: 92, status: "🟢" },
  { filial: "Belo Horizonte", produtividade: "83%", margem: "34%", roi: "137%", satisfacao: 86, status: "🟡" },
  { filial: "Curitiba", produtividade: "94%", margem: "31%", roi: "161%", satisfacao: 95, status: "🟢" },
  { filial: "Recife", produtividade: "79%", margem: "28%", roi: "128%", satisfacao: 84, status: "🔴" },
];

const ComparativoFiliais = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Comparativo entre Filiais</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Filial</TableHead><TableHead>Produtividade</TableHead><TableHead>Margem</TableHead><TableHead>ROI</TableHead><TableHead>Satisfação</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {comparisonData.map(item => (
              <TableRow key={item.filial} className="border-gray-700">
                <TableCell>{item.filial}</TableCell>
                <TableCell>{item.produtividade}</TableCell>
                <TableCell>{item.margem}</TableCell>
                <TableCell>{item.roi}</TableCell>
                <TableCell>{item.satisfacao}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “A filial Recife apresentou queda de produtividade de 9%. IA detectou alta rotatividade na equipe jurídica. Deseja acionar o módulo RH Integrado?”</p>
      </CardContent>
    </Card>
  );
};

export default ComparativoFiliais;