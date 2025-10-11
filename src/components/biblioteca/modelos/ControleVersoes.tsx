import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitCompare } from "lucide-react";

const history = [
  { version: "2.0", user: "IA Leisin Lex", date: "10/10/2025", event: "Atualizado pela IA Leisin Lex" },
  { version: "1.1", user: "Dra. Paula", date: "22/07/2024", event: "Revisado pela Dra. Paula" },
  { version: "1.0", user: "Dr. João", date: "11/03/2024", event: "Criado por Dr. João" },
];

const ControleVersoes = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Controle de Versões e Histórico (Contrato de Prestação de Serviços)</CardTitle>
        <Button variant="outline" className="bg-gray-800 border-gray-700"><GitCompare className="h-4 w-4 mr-2" /> Comparar Versões</Button>
      </CardHeader>
      <CardContent>
        <div className="relative pl-4">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-700"></div>
          {history.map((item, index) => (
            <div key={index} className="relative mb-6 flex items-center gap-4">
              <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-6 w-6 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                <span className="text-xs font-mono">{item.version}</span>
              </div>
              <div className="pl-8">
                <p className="font-semibold text-white">{item.event}</p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Essa minuta teve 3 revisões em 2025. A IA consolidou as versões em um novo documento unificado com alterações destacadas.”</p>
      </CardContent>
    </Card>
  );
};

export default ControleVersoes;