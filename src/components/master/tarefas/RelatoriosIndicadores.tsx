import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const productivityData = [
  { name: 'Maria Lima', tasks: 25 },
  { name: 'Tiago Abade', tasks: 18 },
  { name: 'João Vitor', tasks: 22 },
  { name: 'Ana Silva', tasks: 30 },
];

const slaData = [
  { name: 'Financeiro', sla: 2.1 },
  { name: 'Jurídico', sla: 3.5 },
  { name: 'Comercial', sla: 1.2 },
  { name: 'Suporte', sla: 0.8 },
];

const RelatoriosIndicadores = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">Produtividade por Usuário (Últimos 30d)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productivityData}>
                <XAxis dataKey="name" stroke="#a1a1aa" />
                <YAxis stroke="#a1a1aa" />
                <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                <Bar dataKey="tasks" fill="#8884d8" name="Tarefas Concluídas" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle className="text-white">SLA Médio de Conclusão por Área (dias)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={slaData} layout="vertical">
                <XAxis type="number" stroke="#a1a1aa" />
                <YAxis type="category" dataKey="name" stroke="#a1a1aa" width={80} />
                <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                <Bar dataKey="sla" fill="#82ca9d" name="Dias" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-blue-400" />
          <CardTitle className="text-white">Resumo Executivo da IA</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">"Esta semana: 148 tarefas concluídas (↑12% vs. semana anterior), com 9 tarefas críticas ainda pendentes no setor Financeiro. O tempo médio de conclusão para tarefas jurídicas aumentou em 8%."</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RelatoriosIndicadores;