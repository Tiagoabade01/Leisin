import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const history = [
    { date: "10/10/25", event: "Cessão parcial de direitos", doc: "Livro 342 / Folha 77", involved: "Terlla → AMV", obs: "Regular" },
    { date: "05/08/24", event: "Averbação de construção", doc: "Matrícula 78.431", involved: "Terlla", obs: "Área: 4.000m²" },
    { date: "21/01/23", event: "Compra e venda", doc: "Escritura pública", involved: "João → Terlla", obs: "R$ 2.100.000" },
];

const DossieTimeline = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Histórico Registral e Transações</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data</TableHead><TableHead>Evento</TableHead><TableHead>Documento</TableHead><TableHead>Envolvidos</TableHead><TableHead>Observação</TableHead></TableRow></TableHeader>
          <TableBody>
            {history.map(item => (
              <TableRow key={item.date} className="border-gray-700">
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.event}</TableCell>
                <TableCell>{item.doc}</TableCell>
                <TableCell>{item.involved}</TableCell>
                <TableCell>{item.obs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 “Foram identificadas 3 averbações com divergência de área construída — recomenda retificação junto ao cartório.”</p>
      </CardContent>
    </Card>
  );
};

export default DossieTimeline;