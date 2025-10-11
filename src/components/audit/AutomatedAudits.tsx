import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const auditTypes = [
  "Auditoria Jurídica: contratos, prazos, decisões e RRTs.",
  "Auditoria Fiscal: notas, DRE, retenções e obrigações acessórias.",
  "Auditoria Societária: cadastros, sócios, CNDs, capital social.",
  "Auditoria de Parceiros: histórico de compliance e documentos.",
  "Auditoria de Terrenos / Imóveis: licenças, matrículas e alvarás.",
];

const AutomatedAudits = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Tipos de Auditoria Automática</CardTitle></CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
          {auditTypes.map(type => <li key={type}>{type}</li>)}
        </ul>
        <p className="text-sm text-risk-gold mt-4">💡 “A auditoria da Nivem Construtora detectou divergência entre CND estadual e federal — status ajustado para ‘irregular’.”</p>
      </CardContent>
    </Card>
  );
};

export default AutomatedAudits;