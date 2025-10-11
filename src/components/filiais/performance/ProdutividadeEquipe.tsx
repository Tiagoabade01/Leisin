import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const productivityData = [
  { usuario: "Felipe Ramos", funcao: "Coord. Jurídico", tarefas: 122, eficiencia: "97%", status: "🟢" },
  { usuario: "Ana Souza", funcao: "Financeiro", tarefas: 84, eficiencia: "89%", status: "🟡" },
  { usuario: "Pedro Lima", funcao: "CRM", tarefas: 51, eficiencia: "93%", status: "🟢" },
  { usuario: "Carla Mendes", funcao: "Administrativo", tarefas: 66, eficiencia: "91%", status: "🟢" },
  { usuario: "João Pereira", funcao: "Estagiário", tarefas: 44, eficiencia: "85%", status: "🟡" },
];

const ProdutividadeEquipe = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Produtividade por Equipe e Usuário</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Usuário</TableHead><TableHead>Função</TableHead><TableHead>Tarefas Concluídas</TableHead><TableHead>Eficiência</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {productivityData.map(item => (
              <TableRow key={item.usuario} className="border-gray-700">
                <TableCell>{item.usuario}</TableCell>
                <TableCell>{item.funcao}</TableCell>
                <TableCell>{item.tarefas}</TableCell>
                <TableCell>{item.eficiencia}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Pedro Lima tem taxa de eficiência de 93% e tempo médio de resposta 30% inferior à média. Deseja promovê-lo a responsável de CRM da filial?”</p>
      </CardContent>
    </Card>
  );
};

export default ProdutividadeEquipe;