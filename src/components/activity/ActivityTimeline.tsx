import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, DollarSign, BrainCircuit, User, Plug } from "lucide-react";

const activities = [
  { time: "14:22", type: "Jurídico", user: "Ana Faria", desc: "Revisou contrato #CT-208 (cliente Nivem)", status: "Concluído", icon: Scale },
  { time: "13:48", type: "Financeiro", user: "Sistema", desc: "Gerou boleto referente a honorários mensais", status: "Sucesso", icon: DollarSign },
  { time: "13:45", type: "IA", user: "Copilot Jurídico", desc: "Detectou cláusula com conflito em contrato #CT-145", status: "Alerta", icon: BrainCircuit },
  { time: "12:10", type: "Usuário", user: "João Lima", desc: "Atualizou cadastro do cliente Ferraz Empreendimentos", status: "Salvo", icon: User },
  { time: "11:37", type: "Integração", user: "API Neoway", desc: "Obteve dados cadastrais de CNPJ 45.612.333/0001-12", status: "OK", icon: Plug },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Alerta": return <Badge variant="default" className="bg-alert-orange text-white">⚠️ {status}</Badge>;
    case "Sucesso":
    case "Concluído":
    case "Salvo":
    case "OK":
      return <Badge variant="secondary" className="bg-tech-green/10 text-tech-green border-tech-green/20">✅ {status}</Badge>;
    default: return <Badge variant="outline">{status}</Badge>;
  }
};

const ActivityTimeline = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white h-full">
      <CardHeader><CardTitle className="text-white">Linha do Tempo</CardTitle></CardHeader>
      <CardContent>
        <div className="relative pl-6">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-700"></div>
          {activities.map((act, index) => (
            <div key={index} className="relative mb-6">
              <div className="absolute left-[-10px] top-1 h-6 w-6 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                <act.icon className="h-4 w-4 text-gray-400" />
              </div>
              <div className="pl-8">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">{act.user} <span className="text-gray-400 font-normal">em</span> {act.type}</p>
                  <p className="text-xs text-gray-400 font-mono">{act.time}</p>
                </div>
                <p className="text-sm text-gray-300 my-1">{act.desc}</p>
                {getStatusBadge(act.status)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;