import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const kpis = [
  { title: "Índice de Conformidade Global", value: "92%", status: "🟢" },
  { title: "Auditorias em andamento", value: "18", status: "🟡" },
  { title: "Pendências detectadas", value: "37", status: "🟠" },
  { title: "Não conformidades críticas", value: "5", status: "🔴" },
];

const radarData = [
  { subject: 'Jurídico', A: 94, fullMark: 100 },
  { subject: 'Fiscal', A: 88, fullMark: 100 },
  { subject: 'Ambiental', A: 91, fullMark: 100 },
  { subject: 'Contratual', A: 85, fullMark: 100 },
  { subject: 'Contábil', A: 95, fullMark: 100 },
];

const ComplianceDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-4">
        {kpis.map(kpi => (
          <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">{kpi.title}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{kpi.status} {kpi.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="md:col-span-2 bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Radar de Auditorias por Setor</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="#4A5568" />
              <PolarAngleAxis dataKey="subject" stroke="#A0AEC0" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#4A5568" />
              <Radar name="Conformidade" dataKey="A" stroke="#32F2C1" fill="#32F2C1" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComplianceDashboard;