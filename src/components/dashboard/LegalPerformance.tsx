import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const processData = [
  { name: 'Jan', Abertos: 40, Encerrados: 30 },
  { name: 'Fev', Abertos: 45, Encerrados: 35 },
  { name: 'Mar', Abertos: 50, Encerrados: 42 },
  { name: 'Abr', Abertos: 48, Encerrados: 45 },
];

const contractData = [ { name: 'Imobiliário', value: 40 }, { name: 'Trabalhista', value: 25 }, { name: 'Societário', value: 20 }, { name: 'Outros', value: 15 } ];
const COLORS = ['#2EF3C1', '#00C49F', '#FFBB28', '#FF8042'];

const LegalPerformance = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Performance Jurídica</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2 text-white">Evolução Mensal de Processos</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={processData}>
              <XAxis dataKey="name" stroke="#a1a1aa" />
              <YAxis stroke="#a1a1aa" />
              <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
              <Legend />
              <Line type="monotone" dataKey="Abertos" stroke="#8884d8" />
              <Line type="monotone" dataKey="Encerrados" stroke="#2EF3C1" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-white">Contratos por Tipo</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={contractData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {contractData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
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

export default LegalPerformance;