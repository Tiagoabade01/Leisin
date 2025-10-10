import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, ArrowUp, AlertTriangle, CheckCircle, XCircle, Play } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-full p-6 md:p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button className="md:hidden text-gray-400">
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard Geral</h1>
            <p className="text-gray-400">Visão executiva do escritório</p>
          </div>
        </div>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
      </header>

      {/* Grid de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Casos Ativos */}
        <Card className="bg-gray-800 border-gray-700 text-white lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-gray-400 font-medium">Casos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-5xl font-bold">18</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
                  <span>Ativos 10</span>
                  <span className="flex items-center"><Play className="w-3 h-3 mr-1 text-green-500 fill-current" /> Durante / 6</span>
                  <div className="flex items-center space-x-2">
                    <span>Riscos:</span>
                    <span className="flex items-center"><AlertTriangle className="w-4 h-4 text-yellow-500 fill-current" /> 1</span>
                    <span className="flex items-center"><XCircle className="w-4 h-4 text-red-500 fill-current" /> 3</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>Contratos</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contratos */}
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-gray-400 font-medium">Contratos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">5</p>
            <div className="flex items-center space-x-2 text-sm text-gray-400 mt-2">
              <span>Riscos:</span>
              <span className="flex items-center"><AlertTriangle className="w-4 h-4 text-yellow-500 fill-current" /> 1</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 text-yellow-500" /> 3</span>
              <span className="flex items-center"><XCircle className="w-4 h-4 text-red-500 fill-current" /> 1</span>
            </div>
          </CardContent>
        </Card>

        {/* Riscos Diligência */}
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-gray-400 font-medium">Riscos Diligência</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">2</p>
            <ul className="text-sm text-gray-400 mt-2 list-disc list-inside">
              <li>Imóvel afinado (ONR)</li>
              <li>Prédio com AVCB vencido</li>
            </ul>
          </CardContent>
        </Card>

        {/* Due Diligences */}
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-gray-400 font-medium">Due Diligences</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">5</p>
            <div className="flex items-center space-x-2 text-sm text-gray-400 mt-2">
              <span>Riscos:</span>
              <span className="flex items-center"><div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div> 1</span>
              <span className="flex items-center"><div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div> 3</span>
              <span className="flex items-center"><div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div> 1</span>
            </div>
          </CardContent>
        </Card>

        {/* Prazos */}
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-gray-400 font-medium">Prazos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-5xl font-bold">2</p>
                <div className="text-sm text-gray-400 mt-2">
                  <p>Ativos</p>
                  <p className="flex items-center text-red-500"><AlertTriangle className="w-4 h-4 mr-1" /> 1 Vencido</p>
                </div>
              </div>
              <div className="w-12 h-24 flex flex-col justify-end items-center">
                <div className="w-2 h-12 bg-green-500 rounded-full"></div>
                <div className="w-full border-t border-dashed border-gray-600 my-2"></div>
                <div className="w-2 h-4 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Faturamento */}
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-gray-400 font-medium">Faturamento</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">R$ 135,0K</p>
            <div className="flex items-center space-x-2 text-sm mt-2">
              <span className="flex items-center text-green-500"><ArrowUp className="w-4 h-4" /> 7%</span>
              <span className="text-gray-400">DAU. RS 42K</span>
            </div>
          </CardContent>
        </Card>

        {/* Prazos Status */}
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-gray-400 font-medium">Prazos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-4">
              <span className="text-red-500">A Fazer</span> / 1 Vencido
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center"><div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>Em andamento</li>
              <li className="flex items-center"><div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>Agendado</li>
              <li className="flex items-center"><div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>Concluído</li>
            </ul>
          </CardContent>
        </Card>

        {/* Status Inbox */}
        <Card className="bg-gray-800 border-gray-700 text-white lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-gray-400 font-medium">Status Inbox (e-Mail / WhatsApp)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-center"><AlertTriangle className="w-4 h-4 text-yellow-500 mr-3" /> A Fazer</div>
              <div className="flex items-center justify-end"></div>
              <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div> Em andamento</div>
              <div className="font-bold text-xl text-right">11</div>
              <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div> Agendado</div>
              <div className="font-bold text-xl text-right"></div>
              <div className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-3" /> Concluído</div>
              <div className="font-bold text-xl text-right">32</div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Dashboard;