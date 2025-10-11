import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const kpis = [
  { title: "Total de Oportunidades", value: "127" },
  { title: "Fechadas com Sucesso", value: "47 (37%)" },
  { title: "Valor em Negociação", value: "R$ 4,3 mi" },
  { title: "Ticket Médio", value: "R$ 91.500" },
  { title: "Tempo Médio de Fechamento", value: "18 dias" },
];

const funnelData = [
  { name: 'Captação', value: 127 },
  { name: 'Qualificação', value: 98 },
  { name: 'Proposta', value: 72 },
  { name: 'Negociação', value: 55 },
  { name: 'Fechado', value: 47 },
];

const CrmDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpis.map(kpi => (
          <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">{kpi.title}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{kpi.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Funil de Conversão</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={funnelData} layout="vertical">
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" stroke="#a1a1aa" width={100} />
              <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
              <Legend />
              <Bar dataKey="value" fill="#007BFF" name="Oportunidades" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default CrmDashboard;