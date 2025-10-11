import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, User, Scale } from "lucide-react";

const timelineData = [
  { date: "12/10/2025", event: "Atualização automática: Lei 14.789/25 (Reurb)", icon: Bot, color: "text-green-400" },
  { date: "08/10/2025", event: "Revisão de cláusulas: Contrato de Parceria", icon: User, color: "text-blue-400" },
  { date: "03/10/2025", event: "Inclusão de jurisprudência STJ Tema 1079", icon: Scale, color: "text-yellow-400" },
  { date: "01/10/2025", event: "IA Leisin Lex atualizou modelos internos", icon: Bot, color: "text-green-400" },
];

const LinhaDoTempoJuridica = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Linha do Tempo Jurídica</CardTitle></CardHeader>
      <CardContent>
        <div className="relative pl-4">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-700"></div>
          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-6 flex items-center gap-4">
              <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-6 w-6 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                <item.icon className={`h-4 w-4 ${item.color}`} />
              </div>
              <div className="pl-8">
                <p className="font-semibold text-white">{item.event}</p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Detectada revogação parcial da Lei 13.465/2017. 12 modelos foram atualizados automaticamente para refletir a mudança.”</p>
      </CardContent>
    </Card>
  );
};

export default LinhaDoTempoJuridica;