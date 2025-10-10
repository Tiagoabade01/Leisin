import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const licensesData = [
  { client: 'Terlla Incorporadora', plan: 'Enterprise', licenses: 25, activeModules: 'Todos', lastInvoice: '09/10/2025' },
  { client: 'Nivem Construtora', plan: 'Business', licenses: 10, activeModules: 'Jurídico, Financeiro, CRM', lastInvoice: '08/10/2025' },
];

const LicencasPlanos = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Licenças por Cliente</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800/50"><TableHead className="text-gray-200">Cliente</TableHead><TableHead className="text-gray-200">Plano</TableHead><TableHead className="text-gray-200">Licenças</TableHead><TableHead className="text-gray-200">Módulos Ativos</TableHead><TableHead className="text-gray-200">Última Fatura</TableHead><TableHead className="text-right text-gray-200">Ações</TableHead></TableRow></TableHeader>
          <TableBody>
            {licensesData.map(lic => (
              <TableRow key={lic.client} className="border-gray-700">
                <TableCell>{lic.client}</TableCell>
                <TableCell>{lic.plan}</TableCell>
                <TableCell>{lic.licenses}</TableCell>
                <TableCell>{lic.activeModules}</TableCell>
                <TableCell>{lic.lastInvoice}</TableCell>
                <TableCell className="text-right"><Button variant="outline" size="sm" className="bg-gray-700 border-gray-600">Gerenciar</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LicencasPlanos;