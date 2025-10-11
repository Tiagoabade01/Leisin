import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const rentabilidadeData = [
    { name: 'Margem Bruta', value: 45.8 },
    { name: 'Margem Líquida', value: 31.7 },
    { name: 'ROI Regional', value: 162 },
];

const MargensRentabilidade = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Margens e Indicadores de Rentabilidade</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={rentabilidadeData} layout="vertical">
              <XAxis type="number" stroke="#a1a1aa" tickFormatter={(v) => `${v}%`} />
              <YAxis type="category" dataKey="name" stroke="#a1a1aa" width={120} />
              <Tooltip contentStyle={{ backgroundColor: '#1C2A3A' }} />
              <Bar dataKey="value" fill="#CBB26A" name="Percentual" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <p className="text-sm text-risk-gold text-center">💡 IA Insight: “Filial Campinas alcançou ROI de 162% no trimestre após automatização de dossiês. IA sugere replicar o playbook em outras unidades.”</p>
    </div>
  );
};

export default MargensRentabilidade;