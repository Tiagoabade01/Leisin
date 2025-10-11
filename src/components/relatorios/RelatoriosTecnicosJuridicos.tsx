import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RelatoriosTecnicosJuridicos = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">Relatórios Técnicos e Jurídicos</CardTitle>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="secondary">Consolidado</Button>
            <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700">Técnico</Button>
            <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700">Jurídico</Button>
            <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700">Fiscal</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2 text-white">Estrutura Básica do Relatório</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
          <li>Identificação do imóvel: matrícula, área, endereço, uso, coordenadas.</li>
          <li>Situação Jurídica: titularidade, ônus, ações, pendências.</li>
          <li>Situação Registral: certidões, averbações, divergências.</li>
          <li>Situação Urbanística: zoneamento, recuos, CA, TO, gabarito, restrições.</li>
          <li>Análise Fiscal: IPTU, NIRF, CNDs, dívidas, débitos.</li>
          <li>Conclusão da IA Leisin: parecer final e classificação de risco.</li>
        </ul>
        <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border-l-2 border-tech-green">
          <p className="text-sm text-gray-300">💡 Exemplo de parecer IA: “O imóvel nº 78.431 está juridicamente regular e urbanisticamente viável, com potencial construtivo de 3.800m² e sem pendências fiscais registradas. Recomendação: atualização de CND até jan/2026.”</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatoriosTecnicosJuridicos;