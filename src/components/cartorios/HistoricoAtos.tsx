import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const history = [
  { date: "11/10/25", type: "Averbação", matricula: "44.002", cartorio: "11º RI – São Paulo", obs: "Construção multifamiliar" },
  { date: "10/10/25", type: "Emissão de certidão", matricula: "43.821", cartorio: "ARISP", obs: "Via digital validada" },
  { date: "07/10/25", type: "Retificação", matricula: "78.431", cartorio: "1º RI – Guarulhos", obs: "Alteração de área construída" },
  { date: "05/10/25", type: "Transcrição", matricula: "78.431", cartorio: "1º RI – Guarulhos", obs: "Aquisição por Terlla Incorporadora" },
];

const HistoricoAtos = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Histórico de Atos e Eventos Cartoriais</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data</TableHead><TableHead>Tipo de Ato</TableHead><TableHead>Matrícula</TableHead><TableHead>Cartório</TableHead><TableHead>Observação</TableHead></TableRow></TableHeader>
          <TableBody>
            {history.map(item => (
              <TableRow key={item.date + item.type} className="border-gray-700">
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.matricula}</TableCell>
                <TableCell>{item.cartorio}</TableCell>
                <TableCell>{item.obs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Leisin: “Averbação do dia 11/10 ainda não consta no cadastro interno — atualizar Dossiê de Propriedade correspondente.”</p>
      </CardContent>
    </Card>
  );
};

export default HistoricoAtos;