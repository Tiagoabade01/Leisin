import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const kpis = [
  { title: "Total de imóveis", value: "218", status: "🟢" },
  { title: "Com pendências", value: "34", status: "🟠" },
  { title: "Matrícula válida", value: "192", status: "🟢" },
  { title: "Zoneamento atualizado", value: "148", status: "🟢" },
  { title: "Problemas de titularidade", value: "6", status: "🔴" },
];

const ImoveisKPIs = () => {
  return (
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
  );
};

export default ImoveisKPIs;