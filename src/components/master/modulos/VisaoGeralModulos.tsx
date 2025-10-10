import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Ticket, PlugZap, UserCheck, PlusCircle, Users, FileText } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const kpiData = [
  { title: "Módulos Ativos", value: "12/15", icon: Package },
  { title: "Licenças Ativas", value: "480", icon: Ticket },
  { title: "Integrações Habilitadas", value: "8", icon: PlugZap },
  { title: "Permissões Pendentes", value: "3", icon: UserCheck },
];

const usersByRoleData = [
  { name: 'Master', value: 5 },
  { name: 'Gestor', value: 30 },
  { name: 'Analista', value: 150 },
  { name: 'Viewer', value: 295 },
];

const VisaoGeralModulos = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-2">
        <Button><PlusCircle className="h-4 w-4 mr-2" /> Ativar Módulo</Button>
        <Button variant="outline" className="bg-gray-800 border-gray-700"><Users className="h-4 w-4 mr-2" /> Criar Papel</Button>
        <Button variant="outline" className="bg-gray-800 border-gray-700"><PlugZap className="h-4 w-4 mr-2" /> Conectar Integração</Button>
        <Button variant="outline" className="bg-gray-800 border-gray-700"><FileText className="h-4 w-4 mr-2" /> Ver Logs</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map(kpi => (
          <Card key={kpi.title} className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-gray-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle>Usuários por Tipo de Acesso</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={usersByRoleData}>
                <XAxis dataKey="name" stroke="#a1a1aa" />
                <YAxis stroke="#a1a1aa" />
                <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader><CardTitle>Últimas Alterações Críticas</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li><strong>10/10/25 13:42:</strong> Usuário <strong>Tiago Abade</strong> alterou permissões do módulo <strong>Financeiro</strong>.</li>
              <li><strong>10/10/25 11:05:</strong> Usuário <strong>João Lima</strong> desativou o módulo <strong>IA & Automação</strong>.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisaoGeralModulos;