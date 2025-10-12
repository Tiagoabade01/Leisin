import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BrainCircuit } from "lucide-react";

const logs = [
    { user: "Dr. Rafael Lima", module: "Contratos", action: "Exportou PDF de contrato confidencial", date: "12/10/2025 - 14:32", ip: "187.33.45.120" },
    { user: "IA Leisin Guard", module: "Segurança", action: "Bloqueou acesso suspeito", date: "12/10/2025 - 11:15", ip: "104.28.213.109" },
];

const AuditoriaAcessos = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white font-serif">Auditoria de Acessos</h1>
        <p className="text-gray-400 max-w-3xl">
          Sistema de rastreamento completo de quem acessou, o que acessou e quando acessou qualquer dado dentro do Leisin.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle>Logs de Acesso</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Data/Hora</TableHead><TableHead>Usuário</TableHead><TableHead>Módulo</TableHead><TableHead>Ação</TableHead><TableHead>Origem (IP)</TableHead></TableRow></TableHeader>
              <TableBody>
                {logs.map(log => (
                  <TableRow key={log.date} className="border-gray-700">
                    <TableCell>{log.date}</TableCell>
                    <TableCell>{log.user}</TableCell>
                    <TableCell>{log.module}</TableCell>
                    <TableCell>{log.action}</TableCell>
                    <TableCell>{log.ip}</TableCell>
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
            <p className="text-sm text-risk-gold">“Acesso suspeito detectado: tentativa de login de IP fora do país. Sessão bloqueada preventivamente e notificação enviada ao DPO.”</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuditoriaAcessos;