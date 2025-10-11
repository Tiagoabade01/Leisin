import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const versionData = [
  { doc: "Contrato Padrão HIS", type: "Interno", version: "2.3", resp: "Dra. Paula Andrade", date: "10/10/2025", status: "Aprovado", impact: "Alto" },
  { doc: "Lei 14.133/2021", type: "Federal", version: "4.0", resp: "IA Leisin Lex", date: "09/10/2025", status: "Atualizado", impact: "Médio" },
  { doc: "Parecer 47/2024", type: "Público", version: "1.1", resp: "Dr. Ricardo Lemos", date: "05/10/2025", status: "Revisado", impact: "Baixo" },
];

const ControleDeVersoes = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Controle de Versões e Revisores</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Documento</TableHead><TableHead>Tipo</TableHead><TableHead>Versão</TableHead><TableHead>Responsável</TableHead><TableHead>Data</TableHead><TableHead>Status</TableHead><TableHead>Impacto</TableHead></TableRow></TableHeader>
          <TableBody>
            {versionData.map(item => (
              <TableRow key={item.doc} className="border-gray-700">
                <TableCell>{item.doc}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.version}</TableCell>
                <TableCell>{item.resp}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.impact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Foram detectadas 4 revisões consecutivas no contrato ‘Locação Comercial’. IA recomenda consolidar as versões em um único documento final.”</p>
      </CardContent>
    </Card>
  );
};

export default ControleDeVersoes;