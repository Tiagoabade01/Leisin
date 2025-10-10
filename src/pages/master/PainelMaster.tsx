import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { GlobalDashboard } from "@/components/master/GlobalDashboard";
import { ModuleMonitor } from "@/components/master/ModuleMonitor";
import { ApiStatus } from "@/components/master/ApiStatus";
import { LogsAudit } from "@/components/master/LogsAudit";
import { PerformanceMetrics } from "@/components/master/PerformanceMetrics";
import { UserControl } from "@/components/master/UserControl";
import { LicenseManagement } from "@/components/master/LicenseManagement";
import { SystemAlerts } from "@/components/master/SystemAlerts";
import { RoadmapUpdates } from "@/components/master/RoadmapUpdates";
import { HealthMap } from "@/components/master/HealthMap";

const PainelMaster = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 lg:p-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Painel Master</h1>
        <Button asChild variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o App
          </Link>
        </Button>
      </header>
      <main className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <GlobalDashboard />
        <ModuleMonitor />
        <ApiStatus />
        <HealthMap />
        <LogsAudit />
        <PerformanceMetrics />
        <UserControl />
        <LicenseManagement />
        <SystemAlerts />
        <RoadmapUpdates />
      </main>
    </div>
  );
};

export default PainelMaster;