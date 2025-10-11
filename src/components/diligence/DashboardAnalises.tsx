import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, BrainCircuit } from "lucide-react";

const kpis = [
  { title: "Empresas analisadas no mês", value: "146", change: "+22%", changeType: "increase" },
  { title: "Alertas de alto risco", value: "12", change: "-15%", changeType: "decrease" },
  { title: "Dossiês concluídos", value: "134", change: "+11%", changeType: "increase" },
  { title: "Conformidade média", value: "91%", change: "estável", changeType: "neutral" },
  { title: "Tempo médio de análise", value: "3h42", change: "-8%", changeType: "decrease" },
];

const DashboardAnalises = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpis.map(kpi => (
          <Card key={kpi.title} className="bg-petroleum-blue border-gray-700 text-white">
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-400">{kpi.title}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{kpi.value}</p>
              <p className={`text-xs flex items-center ${kpi.changeType === 'increase' ? 'text-tech-green' : kpi.changeType === 'decrease' ? 'text-red-400' : 'text-gray-400'}`}>
                {kpi.changeType === 'increase' && <ArrowUp className="h-3 w-3 mr-1" />}
                {kpi.changeType === 'decrease' && <ArrowDown className="h-3 w-3 mr-1" />}
                {kpi.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardContent className="p-4 flex flex-wrap items-center gap-2">
          <Input placeholder="Buscar por Nome, CNPJ, CPF..." className="bg-gray-800 border-gray-700 flex-grow" />
          <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Status" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Tipo de Análise" /></SelectTrigger></Select>
          <Select><SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700"><SelectValue placeholder="Profundidade" /></SelectTrigger></Select>
          <Button variant="secondary">Filtrar</Button>
        </CardContent>
      </Card>

      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white text-base">Insight da IA</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">“Empresas do setor de construção têm 32% mais alertas fiscais que as de serviços.”</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardAnalises;