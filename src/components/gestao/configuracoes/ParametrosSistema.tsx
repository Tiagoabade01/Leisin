import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { BrainCircuit } from "lucide-react";

const params = [
  { param: "Idioma padrão", value: "Português (BR)" },
  { param: "Fuso horário global", value: "GMT-3 (Brasília)" },
  { param: "Moeda padrão", value: "R$ Real (BRL)" },
  { param: "Data inicial do sistema", value: "01/01/2024" },
  { param: "Modo de exibição de datas", value: "DD/MM/AAAA" },
  { param: "Tempo de inatividade para logout", value: "30 min" },
];

const ParametrosSistema = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Parâmetros do Sistema</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {params.map(p => (
              <TableRow key={p.param} className="border-gray-700">
                <TableCell className="font-medium text-gray-400">{p.param}</TableCell>
                <TableCell>{p.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-start gap-2 mt-4 p-3 bg-gray-800/50 rounded-lg">
          <BrainCircuit className="h-5 w-5 text-tech-green flex-shrink-0 mt-1" />
          <p className="text-sm text-risk-gold">“Usuários da filial Lisboa estão com fuso incorreto (-2h). Deseja corrigir automaticamente?”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ParametrosSistema;