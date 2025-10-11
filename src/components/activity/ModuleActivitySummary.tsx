import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Signature, DollarSign, Shield, BrainCircuit, Plug } from "lucide-react";

const modules = [
  { name: "Jurídico", actions: 87, lastUpdate: "14:22", status: "Estável", icon: Scale, color: "text-tech-green" },
  { name: "Contratos", actions: 53, lastUpdate: "14:18", status: "Estável", icon: Signature, color: "text-tech-green" },
  { name: "Financeiro", actions: 42, lastUpdate: "13:48", status: "Estável", icon: DollarSign, color: "text-tech-green" },
  { name: "Compliance", actions: 19, lastUpdate: "13:11", status: "Acompanhamento", icon: Shield, color: "text-yellow-400" },
  { name: "IA Copilot", actions: 28, lastUpdate: "13:45", status: "Ativo", icon: BrainCircuit, color: "text-tech-green" },
  { name: "Integrações", actions: 15, lastUpdate: "12:55", status: "Estável", icon: Plug, color: "text-tech-green" },
];

const ModuleActivitySummary = () => {
  return (
    <div className="space-y-4 h-full">
      <h3 className="text-lg font-semibold text-white">Atividades por Módulo</h3>
      {modules.map(mod => (
        <Card key={mod.name} className="bg-petroleum-blue border-gray-700 text-white cursor-pointer hover:border-tech-green/50 transition-colors">
          <CardContent className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <mod.icon className={`h-5 w-5 ${mod.color}`} />
                <p className="font-semibold">{mod.name}</p>
              </div>
              <p className={`text-xs font-medium ${mod.color}`}>● {mod.status}</p>
            </div>
            <div className="flex justify-between items-baseline mt-2 text-sm">
              <p className="text-gray-400">Ações (24h): <span className="font-bold text-white">{mod.actions}</span></p>
              <p className="text-gray-400">Última: <span className="font-mono text-white">{mod.lastUpdate}</span></p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ModuleActivitySummary;