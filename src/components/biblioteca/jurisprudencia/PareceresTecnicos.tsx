import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PareceresTecnicos = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle>Pareceres Técnicos e Doutrinários</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2 text-white">Tipos de Parecer</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Parecer Jurídico Interno</li>
            <li>Parecer Público (TCE, CGU, AGU, MPF, etc.)</li>
            <li>Parecer Técnico (Urbanístico, Ambiental, Contábil)</li>
            <li>Doutrina (artigos e publicações acadêmicas)</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg">
          <h3 className="font-semibold mb-2 text-white">Exemplo de Análise</h3>
          <p className="text-sm text-gray-300">"O parecer da AGU nº 34/2022 reforça a aplicação subsidiária da Lei 8.666/93..."</p>
          <p className="text-sm text-risk-gold mt-4">💡 IA Insight: “IA correlacionou automaticamente este parecer com o Tema 1.084/STJ.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PareceresTecnicos;