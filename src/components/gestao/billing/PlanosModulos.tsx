import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const plans = [
  { name: "Starter", modules: "Jurídico Básico", users: 3, price: "R$ 390/mês", billing: "Mensal" },
  { name: "Business", modules: "Jurídico + Financeiro + CRM", users: 10, price: "R$ 890/mês", billing: "Mensal / Anual" },
  { name: "Pro", modules: "Todos os Módulos + IA", users: 25, price: "R$ 1.290/mês", billing: "Mensal / Anual" },
  { name: "Enterprise", modules: "Todos os Módulos + API + Suporte Premium", users: "Ilimitado", price: "Sob Consulta", billing: "Personalizado" },
];

const PlanosModulos = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Planos e Módulos</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Plano</TableHead><TableHead>Módulos Incluídos</TableHead><TableHead>Usuários</TableHead><TableHead>Preço</TableHead><TableHead>Cobrança</TableHead></TableRow></TableHeader>
          <TableBody>
            {plans.map(item => (
              <TableRow key={item.name} className="border-gray-700">
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.modules}</TableCell>
                <TableCell>{item.users}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.billing}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “25% dos clientes no plano Starter atingiram o limite de usuários. IA sugere campanha de upgrade automático.”</p>
      </CardContent>
    </Card>
  );
};

export default PlanosModulos;