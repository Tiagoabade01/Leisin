import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const kpis = [
  { metrica: "Tentativas de Login", valor: "1.283 / semana", status: "🟢 Normal", tendencia: "▼ -6%" },
  { metrica: "Alertas de Acesso Indevido", valor: "4", status: "🟡 Sob observação", tendencia: "▲ +12%" },
  { metrica: "Logs Processados", valor: "2,4M / mês", status: "🟢 Estável", tendencia: "=" },
  { metrica: "Backups Realizados", valor: "32 / mês", status: "🟢 100% concluídos", tendencia: "▲ +1%" },
  { metrica: "Ataques Bloqueados (Firewall)", valor: "89", status: "🟢 Seguros", tendencia: "▼ -5%" },
];

const PainelSeguranca = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Painel de Segurança em Tempo Real</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Métrica</TableHead><TableHead>Valor Atual</TableHead><TableHead>Status</TableHead><TableHead>Tendência</TableHead></TableRow></TableHeader>
          <TableBody>
            {kpis.map(item => (
              <TableRow key={item.metrica} className="border-gray-700">
                <TableCell>{item.metrica}</TableCell>
                <TableCell>{item.valor}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.tendencia}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Atividade incomum detectada: login simultâneo de um mesmo usuário em São Paulo e Fortaleza. Sessão secundária bloqueada automaticamente.”</p>
      </CardContent>
    </Card>
  );
};

export default PainelSeguranca;