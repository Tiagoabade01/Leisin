import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const queries = [
  { type: "Matrícula por número", desc: "Retorna dados completos, titularidade, área, histórico", origin: "ARISP", result: "Completo" },
  { type: "Matrícula por CPF/CNPJ", desc: "Busca imóveis vinculados a pessoa física/jurídica", origin: "SERP", result: "6 imóveis encontrados" },
  { type: "Certidão de ônus", desc: "Emissão digital e validação automática", origin: "ONR", result: "Válida até 11/2026" },
  { type: "Averbação", desc: "Consulta eventos e histórico registral", origin: "ARISP", result: "3 averbações" },
  { type: "Cópia digital do registro", desc: "Baixa do arquivo completo (PDF/XML)", origin: "ARISP / SERP", result: "Disponível" },
];

const ConsultasAutomaticas = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Consultas e Atualizações Automáticas</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tipo de Consulta</TableHead><TableHead>Descrição</TableHead><TableHead>Origem</TableHead><TableHead>Resultado</TableHead></TableRow></TableHeader>
          <TableBody>
            {queries.map(q => (
              <TableRow key={q.type} className="border-gray-700">
                <TableCell className="font-medium">{q.type}</TableCell>
                <TableCell>{q.desc}</TableCell>
                <TableCell>{q.origin}</TableCell>
                <TableCell>{q.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Leisin: “Foi identificada uma diferença de área entre a matrícula e o IPTU — 3,4% de variação. Requer retificação documental.”</p>
      </CardContent>
    </Card>
  );
};

export default ConsultasAutomaticas;