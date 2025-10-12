import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BrainCircuit } from "lucide-react";

const dataMapping = [
  { type: "Dados pessoais", items: "12.532", risk: "🟡 Médio", status: "Monitorado" },
  { type: "Dados sensíveis", items: "1.348", risk: "🔴 Alto", status: "Criptografado" },
  { type: "Dados públicos", items: "2.117", risk: "🟢 Baixo", status: "Acesso liberado" },
];

const ControleDadosSensiveis = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white font-serif">Controle de Dados Sensíveis</h1>
        <p className="text-gray-400 max-w-3xl">
          Painel avançado para mapear, classificar e proteger dados pessoais e sensíveis processados pelo Leisin.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle>Mapeamento de Dados</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Tipo de Dado</TableHead><TableHead>Itens Mapeados</TableHead><TableHead>Nível de Risco</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
              <TableBody>
                {dataMapping.map(item => (
                  <TableRow key={item.type} className="border-gray-700">
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.items}</TableCell>
                    <TableCell>{item.risk}</TableCell>
                    <TableCell>{item.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader className="flex flex-row items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-tech-green" />
            <CardTitle>IA Insight</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-risk-gold">“Identificado CPF em campo não criptografado na base de contratos. Correção automática aplicada e registro arquivado na auditoria.”</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ControleDadosSensiveis;