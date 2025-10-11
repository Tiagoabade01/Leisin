import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { BrainCircuit } from "lucide-react";

const settings = [
  { setting: "Autenticação de 2 fatores (2FA)", value: "✅ Ativa" },
  { setting: "Expiração de senha", value: "90 dias" },
  { setting: "Limite de tentativas de login", value: "5" },
  { setting: "Sessões simultâneas", value: "2 por usuário" },
  { setting: "Backup automático de credenciais", value: "Diário" },
];

const SegurancaSessoes = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Segurança e Sessões</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {settings.map(s => (
              <TableRow key={s.setting} className="border-gray-700">
                <TableCell className="font-medium text-gray-400">{s.setting}</TableCell>
                <TableCell>{s.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-start gap-2 mt-4 p-3 bg-gray-800/50 rounded-lg">
          <BrainCircuit className="h-5 w-5 text-tech-green flex-shrink-0 mt-1" />
          <p className="text-sm text-risk-gold">“Sessão inativa em Recife há 90 dias. IA recomenda exclusão automática do token para evitar vulnerabilidade.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SegurancaSessoes;