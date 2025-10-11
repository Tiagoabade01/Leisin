import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const usageData = [
  { model: "Contrato de Prestação de Serviços", uses: 142, compliance: "98%", lastUpdate: "10/10/25" },
  { model: "Petição Inicial Cível", uses: 89, compliance: "95%", lastUpdate: "09/10/25" },
  { model: "Contrato de Parceria Comercial", uses: 0, compliance: "88%", lastUpdate: "01/01/24" },
];

const RelatoriosUso = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Relatórios de Uso e Atualização</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Modelo</TableHead><TableHead>Usos (30d)</TableHead><TableHead>Conformidade</TableHead><TableHead>Última Atualização</TableHead></TableRow></TableHeader>
          <TableBody>
            {usageData.map(item => (
              <TableRow key={item.model} className="border-gray-700">
                <TableCell>{item.model}</TableCell>
                <TableCell>{item.uses}</TableCell>
                <TableCell>{item.compliance}</TableCell>
                <TableCell>{item.lastUpdate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “O modelo ‘Contrato de Parceria Comercial’ não é utilizado há mais de 8 meses. IA recomenda revisão ou exclusão do repositório.”</p>
      </CardContent>
    </Card>
  );
};

export default RelatoriosUso;