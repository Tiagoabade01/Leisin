import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const consumptionData = [
  { name: 'Parceiro A', value: 120000 },
  { name: 'Parceiro B', value: 85000 },
  { name: 'Cliente X', value: 50000 },
];

const ApiComercial = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Funcionalidades da API Pública</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p><strong>Cadastro de Clientes API:</strong> Gerencie parceiros e clientes que consomem a API.</p>
          <p><strong>Emissão de Chaves e Tokens:</strong> Crie e revogue credenciais de acesso seguro.</p>
          <p><strong>Limites de Requisição (Rate Limits):</strong> Defina limites por plano para garantir a estabilidade.</p>
          <p><strong>Planos de Uso:</strong> Ofereça tiers (Free, Pro, Enterprise) para monetizar o acesso.</p>
          <p><strong>Webhooks Configuráveis:</strong> Notifique sistemas externos sobre eventos importantes.</p>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700 text-white">
        <CardHeader><CardTitle className="text-white">Consumo por Cliente (API Comercial)</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={consumptionData} layout="vertical">
              <XAxis type="number" stroke="#a1a1aa" tickFormatter={(v) => `${v/1000}k`} />
              <YAxis type="category" dataKey="name" stroke="#a1a1aa" width={80} />
              <Tooltip contentStyle={{ backgroundColor: '#333' }} />
              <Bar dataKey="value" fill="#8884d8" name="Requisições" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApiComercial;