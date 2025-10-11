import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const kpis = [
  { title: "Imóveis com relatório completo", value: "214", status: "🟢" },
  { title: "Imóveis com pendências", value: "26", status: "🟠" },
  { title: "Relatórios automáticos emitidos", value: "1.038", status: "🟢" },
  { title: "Relatórios com alerta IA", value: "17", status: "🔴" },
  { title: "Última atualização", value: "11/10/2025", status: "✅" },
];

const PainelRelatorios = () => {
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
          <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tipo de imóvel" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Status jurídico" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Localização" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Origem do dado" /></SelectTrigger></Select>
          <Button variant="secondary" className="flex-grow sm:flex-grow-0">Filtrar</Button>
        </CardContent>
      </Card>
      <p className="text-sm text-risk-gold text-center">💡 “9 imóveis apresentam divergência de área registrada superior a 5%; sugere-se verificação junto ao cartório e cadastro municipal.”</p>
    </div>
  );
};

export default PainelRelatorios;