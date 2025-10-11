import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const ClausulasInteligentes = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Cláusulas Inteligentes (IA)</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2 text-white">Exemplo de Cláusula Gerada</h3>
          <Textarea
            readOnly
            rows={8}
            className="bg-gray-800 border-gray-700 font-mono text-sm"
            value={`Cláusula 12 — Confidencialidade\n\nAmbas as partes comprometem-se a manter sigilo sobre informações comerciais, técnicas e estratégicas trocadas durante a vigência deste contrato.\n\n[Gerado automaticamente conforme LGPD e Política de Privacidade do Escritório]`}
          />
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg space-y-4">
          <h3 className="font-semibold text-white">Funções da IA</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Geração automática de cláusulas com base em contexto.</li>
            <li>Atualização dinâmica conforme leis e jurisprudências.</li>
            <li>Criação de cláusulas padrão com tags (ex: [EMPRESA]).</li>
            <li>Sugestões de cláusulas alternativas.</li>
          </ul>
          <p className="text-sm text-risk-gold pt-4 border-t border-gray-700">💡 IA Insight: “Essa cláusula de confidencialidade é incompatível com a LGPD Art. 7º. Deseja substituí-la pela versão atualizada?”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClausulasInteligentes;