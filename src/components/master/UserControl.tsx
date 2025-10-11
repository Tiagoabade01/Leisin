import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const UserControl = () => (
  <Card className="bg-gray-800 border-gray-700 text-white">
    <CardHeader>
      <CardTitle className="text-white">Controle de Usuários e Acessos</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold">210</p>
          <p className="text-xs text-gray-400">Ativos</p>
        </div>
        <div>
          <p className="text-2xl font-bold">12</p>
          <p className="text-xs text-gray-400">Inativos</p>
        </div>
        <div>
          <p className="text-2xl font-bold">3</p>
          <p className="text-xs text-gray-400">Pendentes</p>
        </div>
      </div>
      <p className="text-center mt-4 text-sm text-gray-300">Último login: admin@t3.com (há 5 min)</p>
    </CardContent>
  </Card>
);