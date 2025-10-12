import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BarChart2, Briefcase, Shield } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const AppHomePage = () => {
  const { user } = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-2">Bem-vindo(a) ao leisin</h1>
      <p className="text-gray-400 mb-8">Seu centro de inteligência jurídica. Selecione um módulo para começar.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/dashboard/visao-executiva">
          <Card className="bg-petroleum-blue border-gray-700 text-white hover:border-tech-green transition-colors">
            <CardHeader><CardTitle className="flex items-center gap-2"><BarChart2 /> Dashboard Executivo</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-gray-400">Visão panorâmica e estratégica da sua operação.</p></CardContent>
          </Card>
        </Link>
        <Link to="/juridico/casos-processos">
          <Card className="bg-petroleum-blue border-gray-700 text-white hover:border-tech-green transition-colors">
            <CardHeader><CardTitle className="flex items-center gap-2"><Briefcase /> Jurídico Operacional</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-gray-400">Gerencie casos, contratos e tarefas do dia a dia.</p></CardContent>
          </Card>
        </Link>
        <Link to="/compliance/due-diligence-corporativa">
          <Card className="bg-petroleum-blue border-gray-700 text-white hover:border-tech-green transition-colors">
            <CardHeader><CardTitle className="flex items-center gap-2"><Shield /> Compliance e Risco</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-gray-400">Controle total de riscos, conformidade e auditorias.</p></CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

const AppHome = () => (
  <Layout>
    <AppHomePage />
  </Layout>
);

export default AppHome;