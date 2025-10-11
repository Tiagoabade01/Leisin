import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const oldText = "Art. 7º: O contratante deverá garantir a entrega da obra no prazo máximo de 18 meses.";
const newText = "Art. 7º: O contratante deverá garantir a entrega da obra no prazo máximo de 24 meses, salvo caso fortuito.";

const ComparadorDeDocumentos = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Comparador de Documentos</CardTitle></CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Versão Antiga</h3>
            <Textarea readOnly rows={5} value={oldText} className="bg-gray-800 border-gray-700 font-mono text-sm" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Nova Versão</h3>
            <Textarea readOnly rows={5} value={newText} className="bg-gray-800 border-gray-700 font-mono text-sm" />
          </div>
        </div>
        <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “Alteração detectada na cláusula 7 — o prazo aumentou 6 meses. Recomendação: revisar penalidades por atraso.”</p>
      </CardContent>
    </Card>
  );
};

export default ComparadorDeDocumentos;