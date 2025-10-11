import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const responsibilities = [
  { usuario: "Dr. Felipe Ramos", area: "Contratos Empresariais", responsabilidade: "Responsável Jurídico", prioridade: "Alta", status: "🟢" },
  { usuario: "Dra. Bianca Prado", area: "Compliance Ambiental", responsabilidade: "Revisão Técnica", prioridade: "Média", status: "🟢" },
  { usuario: "Ana Souza", area: "Financeiro SP", responsabilidade: "Fechamento Contábil", prioridade: "Alta", status: "🟢" },
  { usuario: "Pedro Lima", area: "CRM", responsabilidade: "Atendimento ao Cliente", prioridade: "Baixa", status: "🟡" },
];

const Responsabilidades = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Responsabilidades e Áreas de Atuação</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Usuário</TableHead><TableHead>Área / Projeto</TableHead><TableHead>Responsabilidade</TableHead><TableHead>Prioridade</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {responsibilities.map(item => (
              <TableRow key={item.usuario + item.area} className="border-gray-700">
                <TableCell>{item.usuario}</TableCell>
                <TableCell>{item.area}</TableCell>
                <TableCell>{item.responsabilidade}</TableCell>
                <TableCell>{item.prioridade}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Três contratos de alto valor ainda não têm advogado designado. Deseja aplicar a atribuição automática por especialidade?”</p>
      </CardContent>
    </Card>
  );
};

export default Responsabilidades;