import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, FileText, AlertTriangle } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-8">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Painel de Casos</h1>
          <p className="text-gray-500">Visão geral dos seus casos e atividades recentes.</p>
        </div>
        <Button>
          <PlusCircle className="w-4 h-4 mr-2" />
          Criar Novo Caso
        </Button>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Casos Ativos</CardTitle>
            <CardDescription>Diligências em andamento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Aquisição Terreno XPTO</p>
                  <p className="text-sm text-gray-500">Permuta | São Paulo</p>
                </div>
                <Badge variant="secondary">Em Análise</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">SPE Condomínio Flores</p>
                  <p className="text-sm text-gray-500">Constituição | Rio de Janeiro</p>
                </div>
                <Badge variant="outline">Aguardando Doc.</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tarefas Pendentes</CardTitle>
            <CardDescription>Suas próximas ações e prazos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Revisar minuta de permuta</p>
                  <p className="text-sm text-red-500">Vence hoje</p>
                </div>
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Solicitar certidão negativa</p>
                  <p className="text-sm text-gray-500">Vence em 3 dias</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>Últimas atualizações nos dossiês</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <FileText className="w-5 h-5 mr-3 mt-1 text-gray-400" />
                <div>
                  <p className="font-medium">Matrícula 12.345 anexada</p>
                  <p className="text-sm text-gray-500">no caso "Aquisição Terreno XPTO"</p>
                </div>
              </div>
               <div className="flex items-start">
                <FileText className="w-5 h-5 mr-3 mt-1 text-gray-400" />
                <div>
                  <p className="font-medium">Contrato social atualizado</p>
                  <p className="text-sm text-gray-500">no caso "SPE Condomínio Flores"</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;