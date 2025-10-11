import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const alerts = [
  { type: "CND Federal", doc: "Terlla Incorporadora", entity: "Empresa", expiry: "14/10/25", action: "Renovar" },
  { type: "Ambiental (IBAMA)", doc: "Nivem Construtora", entity: "Obra SP", expiry: "30/11/25", action: "Revisar" },
  { type: "FGTS", doc: "AMV Negócios", entity: "Grupo Financeiro", expiry: "18/10/25", action: "Emitir nova" },
  { type: "Matrícula", doc: "Terreno Guararema", entity: "Imóvel", expiry: "02/12/25", action: "Validar" },
];

const CertificatesTable = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <CardTitle className="text-white">Monitoramento de Validade e Alertas</CardTitle>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm" variant="secondary">Federal</Button>
            <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700">Estadual</Button>
            <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700">Municipal</Button>
            <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700">Trabalhista</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tipo</TableHead><TableHead>Documento</TableHead><TableHead>Entidade</TableHead><TableHead>Vencimento</TableHead><TableHead>Ação</TableHead></TableRow></TableHeader>
          <TableBody>
            {alerts.map(item => (
              <TableRow key={item.doc} className="border-gray-700">
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.doc}</TableCell>
                <TableCell>{item.entity}</TableCell>
                <TableCell>{item.expiry}</TableCell>
                <TableCell><Button variant="ghost" size="sm">{item.action}</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4 text-center">💡 “10 certidões vencerão nos próximos 15 dias. Deseja gerar todas automaticamente?”</p>
      </CardContent>
    </Card>
  );
};

export default CertificatesTable;