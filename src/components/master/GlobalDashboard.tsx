import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, AlertCircle, BrainCircuit } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jurídico", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Compliance", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Financeiro", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "CRM", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "IA", total: Math.floor(Math.random() * 5000) + 1000 },
];

export const GlobalDashboard = () => (
  <Card className="bg-gray-800 border-gray-700 text-white xl:col-span-3">
    <CardHeader>
      <CardTitle>Dashboard Global</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-gray-700/50 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-400">Usuários Ativos</h3>
            <Users className="h-4 w-4 text-gray-400" />
          </div>
          <p className="text-2xl font-bold mt-1">142</p>
        </div>
        <div className="p-4 bg-gray-700/50 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-400">API Response</h3>
            <Clock className="h-4 w-4 text-gray-400" />
          </div>
          <p className="text-2xl font-bold mt-1">120ms</p>
        </div>
        <div className="p-4 bg-gray-700/50 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-400">Erros (24h)</h3>
            <AlertCircle className="h-4 w-4 text-gray-400" />
          </div>
          <p className="text-2xl font-bold mt-1">3</p>
        </div>
        <div className="p-4 bg-gray-700/50 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-400">Consultas IA</h3>
            <BrainCircuit className="h-4 w-4 text-gray-400" />
          </div>
          <p className="text-2xl font-bold mt-1">873</p>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Uso por Módulo</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
            <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);