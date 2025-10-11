import Layout from "@/components/Layout";
import { GlobalDashboard } from "@/components/master/GlobalDashboard";
import { ApiStatus } from "@/components/master/ApiStatus";
import { ModuleMonitor } from "@/components/master/ModuleMonitor";
import { LogsAudit } from "@/components/master/LogsAudit";
import { PerformanceMetrics } from "@/components/master/PerformanceMetrics";
import { UserControl } from "@/components/master/UserControl";
import { LicenseManagement } from "@/components/master/LicenseManagement";
import { SystemAlerts } from "@/components/master/SystemAlerts";
import { RoadmapUpdates } from "@/components/master/RoadmapUpdates";
import { HealthMap } from "@/components/master/HealthMap";

const VisaoGeral = () => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Painel de Controle Master</h1>
        <p className="text-gray-300 mb-8">Visão geral da saúde, performance e status operacional de toda a plataforma T3.</p>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Coluna Principal */}
          <div className="xl:col-span-3 space-y-6">
            <GlobalDashboard />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ModuleMonitor />
              <LogsAudit />
            </div>
          </div>

          {/* Coluna Lateral */}
          <div className="xl:col-span-1 space-y-6">
            <ApiStatus />
            <PerformanceMetrics />
            <SystemAlerts />
          </div>

          {/* Linha Inferior */}
          <div className="xl:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <UserControl />
              <LicenseManagement />
              <RoadmapUpdates />
              <HealthMap />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VisaoGeral;