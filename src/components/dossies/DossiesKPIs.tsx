import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const kpis = [
  { title: "Dossiês ativos", value: "236", status: "🟢" },
  { title: "Dossiês em atualização", value: "41", status: "🟡" },
  { title: "Dossiês incompletos", value: "19", status: "🟠" },
  { title: "Dossiês auditados (30d)", value: "72", status: "🟢" },
  { title: "Dossiês críticos (risco alto)", value: "6", status: "🔴" },
];

const DossiesKPIs = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpis.map(kpi => (
          <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">{kpi.title}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{kpi.status} {kpi.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-sm text-risk-gold text-center">💡 “5 imóveis apresentam sobreposição de matrícula e divergência cadastral; 3 possuem ônus não baixados.”</p>
    </div>
  );
};

export default DossiesKPIs;