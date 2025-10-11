import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CertidoesAverbacoes = () => {
  return (
    <Card className="bg-petroleum-blue border-gray-700 text-white">
      <CardHeader><CardTitle className="text-white">Certidões e Averbações</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-2 text-white">Certidões Disponíveis para Emissão</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>📜 Certidão de Propriedade e Ônus Reais</li>
            <li>🧾 Certidão Negativa de Débitos Imobiliários</li>
            <li>🏗️ Certidão de Construção / Habite-se</li>
            <li>🧠 Certidão Unificada (IA Leisin)</li>
          </ul>
          <p className="text-sm text-risk-gold mt-4">💡 IA Leisin: “Emitida nova certidão consolidada para matrícula nº 43.821, com base em dados ARISP e ONR — validade até 12/2026.”</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-white">Averbações</h3>
          <p className="text-sm text-gray-300">Automatiza a verificação de averbações de construção, hipoteca, servidão, usufruto e retificação. O sistema notifica quando houver ato novo registrado no cartório vinculado e pode gerar alertas automatizados de alteração de titularidade.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertidoesAverbacoes;