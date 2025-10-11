import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const kpis = [
  { metrica: "Receita Consolidada", valor: "R$ 4,28 milhões", meta: "R$ 4,00 milhões", status: "🟢" },
  { metrica: "Lucro Líquido Corporativo", valor: "R$ 1,35 milhão", meta: "R$ 1,2 milhão", status: "🟢" },
  { metrica: "Margem Média Global", valor: "31,5%", meta: "30%", status: "🟢" },
  { metrica: "Casos Jurídicos Ativos", valor: "1.248", meta: "-", status: "⚙️" },
  { metrica: "Taxa de Satisfação (NPS)", valor: "89", meta: "85", status: "🟢" },
];

const branchComparisonData = [
    { name: 'SP', resultado: 115 },
    { name: 'Campinas', resultado: 105 },
    { name: 'BH', resultado: 92 },
    { name: 'Curitiba', resultado: 121 },
    { name: 'Recife', resultado: 88 },
];

const PainelExecutivoGlobal = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Painel Executivo Global</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow className="border-gray-700 hover:bg-transparent"><TableHead>Métrica Global</TableHead><TableHead>Valor Atual</TableHead><TableHead>Meta</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {kpis.map(item => (
                <TableRow key={item.metrica} className="border-gray-700">
                  <TableCell>{item.metrica}</TableCell>
                  <TableCell>{item.valor}</TableCell>
                  <TableCell>{item.meta}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Resultado por Filial (%)</CardTitle></CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={branchComparisonData}>
                    <XAxis dataKey="name" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip contentStyle={{ backgroundColor: '#1C2A3A' }} />
                    <Bar dataKey="resultado" fill="#2EF3C1" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </CardContent>
      </Card>
      <p className="text-sm text-risk-gold text-center">💡 IA Insight: “O resultado líquido global aumentou 9% no trimestre, impulsionado por três filiais — Curitiba, SP e Campinas. IA sugere redistribuição de equipe jurídica para manter crescimento.”</p>
    </div>
  );
};

export default PainelExecutivoGlobal;