import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const contractEvolution = [
  { name: 'Jan', Emitidos: 20, Concluídos: 15 },
  { name: 'Fev', Emitidos: 25, Concluídos: 22 },
  { name: 'Mar', Emitidos: 30, Concluídos: 28 },
  { name: 'Abr', Emitidos: 28, Concluídos: 26 },
];

const contractTypes = [ { name: 'Serviços', value: 50 }, { name: 'Societário', value: 20 }, { name: 'Imobiliário', value: 30 } ];
const COLORS = ['#6A5ACD', '#2EF3C1', '#FFBB28'];

const ContractAnalysis = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Análise de Contratos</CardTitle></CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2 text-sm text-white">Evolução de Contratos</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={contractEvolution}>
              <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
              <YAxis stroke="#a1a1aa" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
              <Legend />
              <Line type="monotone" dataKey="Emitidos" stroke="#6A5ACD" />
              <Line type="monotone" dataKey="Concluídos" stroke="#2EF3C1" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-sm text-white">Contratos por Tipo</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={contractTypes} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} labelLine={false} label={({ percent }) => `${(percent * 100).toFixed(0)}%`}>
                {contractTypes.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContractAnalysis;