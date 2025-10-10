import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowUp, ArrowDown, Users, Package, Banknote, Handshake, PlugZap, ShoppingCart,
  DollarSign, Target, Percent, BarChart3, PieChart, LineChart as LineChartIcon
} from "lucide-react";
import {
  Bar, BarChart, Line, LineChart, Pie, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Cell
} from "recharts";

const kpiData = [
  { title: "MRR (Receita Recorrente)", value: "R$ 45.231", change: "+20.1%", changeType: "increase", icon: DollarSign },
  { title: "Novas Assinaturas (Mês)", value: "+18", change: "+12.5%", changeType: "increase", icon: ShoppingCart },
  { title: "Taxa de Churn", value: "2.1%", change: "-0.5%", changeType: "decrease", icon: Percent },
  { title: "Usuários Ativos / Total", value: "480 / 500", change: "96% de uso", changeType: "neutral", icon: Users },
  { title: "Taxa de Conversão", value: "15.3%", change: "+1.2%", changeType: "increase", icon: Target },
];

const quickAccessLinks = [
  { to: "/master/gestao-modulos", label: "Módulos e Planos", icon: Package },
  { to: "/master/financeiro-cobrancas", label: "Financeiro", icon: Banknote },
  { to: "/master/gestao-clientes", label: "Clientes & CRM", icon: Handshake },
  { to: "/master/integracoes-api", label: "Integrações e API", icon: PlugZap },
];

const revenueData = [
  { name: 'Jan', receita: 4000, custo: 2400 },
  { name: 'Fev', receita: 3000, custo: 1398 },
  { name: 'Mar', receita: 5000, custo: 3800 },
  { name: 'Abr', receita: 4780, custo: 3908 },
  { name: 'Mai', receita: 5890, custo: 4800 },
  { name: 'Jun', receita: 6390, custo: 5800 },
];

const moduleData = [
  { name: 'Jurídico', value: 400 },
  { name: 'Compliance', value: 300 },
  { name: 'Financeiro', value: 200 },
  { name: 'CRM', value: 278 },
  { name: 'IA', value: 189 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const VisaoGeral = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Visão Geral</h1>
      <p className="text-gray-300 mb-8">Dashboard com indicadores chave de negócio e operacionais.</p>

      {/* KPIs em Tempo Real */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {kpiData.map((kpi) => (
          <Card key={kpi.title} className="bg-gray-800 border-gray-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-gray-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className={`text-xs ${kpi.changeType === 'increase' ? 'text-green-400' : kpi.changeType === 'decrease' ? 'text-red-400' : 'text-gray-400'} flex items-center`}>
                {kpi.changeType === 'increase' && <ArrowUp className="h-3 w-3 mr-1" />}
                {kpi.changeType === 'decrease' && <ArrowDown className="h-3 w-3 mr-1" />}
                {kpi.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Gráficos */}
        <Card className="lg:col-span-2 bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle>Receita vs. Custo Operacional</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
                <YAxis stroke="#a1a1aa" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                <Legend />
                <Line type="monotone" dataKey="receita" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="custo" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle>Distribuição de Módulos</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={moduleData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {moduleData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Acessos Rápidos e Outros Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <Card className="lg:col-span-1 bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle>Acesso Rápido</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            {quickAccessLinks.map(link => (
              <Link key={link.to} to={link.to} className="p-4 bg-gray-700/50 rounded-lg text-center hover:bg-gray-700 transition-colors">
                <link.icon className="h-6 w-6 mx-auto mb-2 text-gray-300" />
                <span className="text-sm font-medium">{link.label}</span>
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle>Atividade do Sistema (Últimos 7 dias)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueData.map(d => ({ name: d.name, atividade: d.receita * 1.5 }))}>
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} />
                <YAxis stroke="#a1a1aa" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} cursor={{fill: 'rgba(136, 132, 216, 0.2)'}}/>
                <Bar dataKey="atividade" fill="#8884d8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisaoGeral;