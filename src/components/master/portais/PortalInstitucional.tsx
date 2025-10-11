import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PortalInstitucional = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-petroleum-blue border-gray-700 text-white">
        <CardHeader><CardTitle>Portal Institucional e Público</CardTitle></CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Página institucional com informações do escritório.</li>
            <li>Consulta pública de certidões e processos.</li>
            <li>Publicação de comunicados e relatórios.</li>
            <li>Integração com Marketplace e Biblioteca Jurídica.</li>
            <li>SEO automático e integração com Google Search Console.</li>
          </ul>
        </CardContent>
      </Card>
      <div className="space-y-6">
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle className="text-base">Recursos Extras</CardTitle></CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              <li>Temas customizáveis e domínios próprios.</li>
              <li>Tradução automática e versão multilíngue.</li>
              <li>Chat integrado com IA Jurídica.</li>
            </ul>
          </CardContent>
        </Card>
        <p className="text-sm text-risk-gold">💡 IA Insight: “O portal público recebeu 2.400 acessos nesta semana. IA sugere incluir seção de insights jurídicos automatizados.”</p>
      </div>
    </div>
  );
};

export default PortalInstitucional;