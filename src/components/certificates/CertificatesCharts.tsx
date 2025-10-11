import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, PieChart, Pie, Tooltip, XAxis, YAxis, Legend, Cell } from 'recharts';

const expiryData = [
  { name: 'Federal', Vencendo: 12 },
  { name: 'Estadual', Vencendo: 8 },
  { name: 'Municipal', Vencendo: 15 },
  { name: 'Trabalhista', Vencendo: 5 },
];

const complianceData = [ { name: 'Regular', value: 91 }, { name: 'Irregular', value: 9 } ];
const COLORS = ['#32F2C1', '#E05959'];

const CertificatesCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white text-base">Vencimentos por Tipo</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={expiryData}>
              <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
              <YAxis stroke="#a1a1aa" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
              <Bar dataKey="Vencendo" fill="#CBB26A" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white text-base">Mapa de Conformidade</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={complianceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                {complianceData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1C2A3A', border: '1px solid #334155' }} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificatesCharts;