import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const logs = [
  "[10/10/2025 - 14:23] IA Leisin Lex atualizou cláusula 4.2 conforme nova jurisprudência STJ.",
  "[09/10/2025 - 09:11] Usuário: Dr. João Mendes aprovou revisão no Parecer 45/2024.",
];

const AuditoriaLogsIA = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Auditoria e Logs IA</CardTitle></CardHeader>
      <CardContent>
        <div className="p-4 bg-gray-900/50 rounded-lg font-mono text-sm space-y-2">
          {logs.map((log, index) => <p key={index}>{log}</p>)}
        </div>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Três documentos foram alterados fora da política de aprovação. IA bloqueou publicação até nova revisão manual.”</p>
      </CardContent>
    </Card>
  );
};

export default AuditoriaLogsIA;