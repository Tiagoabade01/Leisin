import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const kpis = [
  { title: "Imóveis analisados", value: "217", status: "🟢" },
  { title: "Zoneamentos atualizados", value: "192", status: "🟢" },
  { title: "Imóveis com restrições", value: "48", status: "🟠" },
  { title: "Irregularidades detectadas", value: "9", status: "🔴" },
  { title: "Relatórios emitidos", value: "146", status: "🟢" },
];

const DashboardAnalises = () => {
  return (
    <div className="space-y-6">
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

      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardContent className="p-4 flex flex-wrap items-center gap-2">
          <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tipo de análise" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Status" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Localização" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Uso pretendido" /></SelectTrigger></Select>
          <Button variant="secondary" className="flex-grow sm:flex-grow-0">Filtrar</Button>
        </CardContent>
      </Card>
      <p className="text-sm text-risk-gold text-center">💡 “12 imóveis localizados em ZEU possuem potencial adicional de aproveitamento via outorga onerosa.”</p>
    </div>
  );
};

export default DashboardAnalises;