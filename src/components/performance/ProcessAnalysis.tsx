import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const successRate = [
  { name: 'Trabalhista', Êxito: 85, Perda: 15 },
  { name: 'Cível', Êxito: 78, Perda: 22 },
  { name: 'Tributário', Êxito: 65, Perda: 35 },
];

const ProcessAnalysis = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Análise de Processos</CardTitle></CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2 text-sm">Taxa de Êxito vs. Perda por Área</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={successRate} layout="vertical" stackOffset="expand">
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" stroke="#a1a1aa" fontSize={12} width={80} />
              <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
              <Legend />
              <Bar dataKey="Êxito" fill="#2EF3C1" stackId="a" />
              <Bar dataKey="Perda" fill="#FF8042" stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Placeholder for another chart */}
        <div className="h-[200px] flex items-center justify-center text-gray-500">
          <p>Gráfico de Linha de Tempo Processual</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessAnalysis;