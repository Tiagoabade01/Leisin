import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { BrainCircuit, History, Scale, Book, FileText } from "lucide-react";

const sources = [
  { id: "leis", label: "Leis e Decretos", icon: Scale },
  { id: "jurisprudencia", label: "Jurisprudências", icon: Book },
  { id: "pareceres", label: "Pareceres e Doutrinas", icon: FileText },
  { id: "modelos", label: "Modelos Internos", icon: FileText },
  { id: "proprietaria", label: "Base Proprietária", icon: FileText },
];

const recentQueries = [
  "responsabilidade de construtoras",
  "diferença entre Reurb-S e Reurb-E",
  "decisões recentes do STJ sobre incorporação",
];

const PainelLateralIA = () => {
  return (
    <div className="space-y-6 h-full">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-base">Filtros e Bases de Conhecimento</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {sources.map(source => (
            <div key={source.id} className="flex items-center gap-2">
              <Checkbox id={source.id} defaultChecked />
              <Label htmlFor={source.id} className="flex items-center gap-2 text-sm cursor-pointer">
                <source.icon className="h-4 w-4" />
                {source.label}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle className="text-base">Histórico e Aprendizado</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {recentQueries.map((query, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white cursor-pointer">
              <History className="h-4 w-4" />
              <p className="truncate">{query}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-tech-green" />
          <CardTitle className="text-white text-base">IA Insight</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-risk-gold">“Com base em suas últimas 15 pesquisas, o Leisin identificou interesse predominante em direito imobiliário. Deseja criar uma área de estudo dedicada?”</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PainelLateralIA;