import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reports = [
  "Receita Mensal Recorrente (MRR)",
  "Receita por plano e por filial",
  "Churn Rate (cancelamentos)",
  "Lifetime Value (LTV)",
  "Taxa de Adesão x Retenção",
];

const integrations = ["Stripe", "Pagar.me", "Mercado Pago", "Asaas", "QuickBooks", "Conta Azul", "Bling", "Power BI"];

const RelatoriosCobranca = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Relatórios de Cobrança</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {reports.map(report => (
            <div key={report} className="p-3 bg-gray-800/50 rounded-lg flex justify-between items-center">
              <span className="text-sm">{report}</span>
              <Button size="sm" variant="secondary">Gerar</Button>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Integrações</CardTitle></CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {integrations.map(int => (
            <Button key={int} variant="outline" className="bg-gray-800 border-gray-700">{int}</Button>
          ))}
        </CardContent>
        <p className="text-sm text-risk-gold p-4">💡 IA Insight: “A receita recorrente líquida aumentou 11% no último mês. IA identificou que 72% desse crescimento veio do módulo IA Jurídica.”</p>
      </Card>
    </div>
  );
};

export default RelatoriosCobranca;