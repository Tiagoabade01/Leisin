import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const issues = [
  { type: "Ambiental", desc: "Imóvel dentro de zona APP parcial", source: "IBAMA", status: "🔴 Crítico", action: "Rever projeto" },
  { type: "Jurídica", desc: "Divergência de matrícula x IPTU", source: "Receita / ARISP", status: "🟠 Alerta", action: "Validar cadastro" },
  { type: "Urbanística", desc: "Recuo lateral insuficiente", source: "Lei LPUOS", status: "🟠 Alerta", action: "Ajustar planta" },
  { type: "Documental", desc: "Certidão vencida", source: "Prefeitura", status: "🟡 Pendente", action: "Renovar" },
];

const RestricoesIrregularidades = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Restrições e Irregularidades</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tipo</TableHead><TableHead>Descrição</TableHead><TableHead>Fonte</TableHead><TableHead>Status</TableHead><TableHead>Ação</TableHead></TableRow></TableHeader>
          <TableBody>
            {issues.map(i => (
              <TableRow key={i.type} className="border-gray-700">
                <TableCell>{i.type}</TableCell>
                <TableCell>{i.desc}</TableCell>
                <TableCell>{i.source}</TableCell>
                <TableCell>{i.status}</TableCell>
                <TableCell>{i.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Leisin: “O imóvel nº 0143 apresenta sobreposição parcial de 12m² com via pública — sugerir retificação de matrícula.”</p>
      </CardContent>
    </Card>
  );
};

export default RestricoesIrregularidades;