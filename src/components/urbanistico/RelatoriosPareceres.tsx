import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RelatoriosPareceres = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Relatórios e Pareceres Jurídico-Urbanísticos</CardTitle></CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2 text-white">Estrutura do Relatório Automatizado</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
          <li>Resumo executivo (dados do imóvel e localização)</li>
          <li>Análise Jurídica: matrícula, titularidade, certidões, ônus</li>
          <li>Análise Urbanística: zoneamento, índices, restrições</li>
          <li>Irregularidades detectadas e recomendações</li>
        </ul>
        <p className="text-sm text-risk-gold my-4">💡 Conclusão da IA: “O imóvel é juridicamente regular, urbanisticamente viável, com necessidade de atualização cadastral e alvará de uso.”</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" variant="secondary">Exportar PDF</Button>
          <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700">Exportar GeoJSON</Button>
          <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700">Enviar via API</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatoriosPareceres;