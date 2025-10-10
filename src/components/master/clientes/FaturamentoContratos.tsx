import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const contracts = [
  { id: 'CTR-203', client: 'T3 Partners', type: 'SaaS', value: 12000, expiry: '15/11/2025', status: 'Ativo', signedAt: '02/09/2025' },
  { id: 'CTR-204', client: 'Nivem Construtora', type: 'SaaS', value: 34680, expiry: '12/03/2026', status: 'Ativo', signedAt: '12/03/2025' },
];

const FaturamentoContratos = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">Faturamento e Contratos</CardTitle>
          <Button>Emitir Nova Fatura</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-gray-800/50"><TableHead className="text-gray-200">Cliente</TableHead><TableHead className="text-gray-200">Nº Contrato</TableHead><TableHead className="text-gray-200">Tipo</TableHead><TableHead className="text-gray-200">Valor</TableHead><TableHead className="text-gray-200">Vencimento</TableHead><TableHead className="text-gray-200">Status</TableHead><TableHead className="text-gray-200">Assinado em</TableHead></TableRow></TableHeader>
          <TableBody>
            {contracts.map(contract => (
              <TableRow key={contract.id} className="border-gray-700">
                <TableCell>{contract.client}</TableCell>
                <TableCell>{contract.id}</TableCell>
                <TableCell>{contract.type}</TableCell>
                <TableCell>R$ {contract.value.toFixed(2)}</TableCell>
                <TableCell>{contract.expiry}</TableCell>
                <TableCell><Badge>{contract.status}</Badge></TableCell>
                <TableCell>{contract.signedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default FaturamentoContratos;