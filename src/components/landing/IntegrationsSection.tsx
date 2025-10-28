import { Brain, CreditCard, MessageSquare, Building2, FileSearch, Gavel } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const IntegrationsSection = () => {
  const integrations = [
    { icon: <Brain className="w-6 h-6 text-primary" />, name: "OpenAI", desc: "Geração de textos, resumos e insights com segurança." },
    { icon: <CreditCard className="w-6 h-6 text-primary" />, name: "Stripe", desc: "Billing, planos e pagamentos integrados." },
    { icon: <MessageSquare className="w-6 h-6 text-primary" />, name: "WhatsApp", desc: "Envio de mensagens oficiais e automações." },
    { icon: <Building2 className="w-6 h-6 text-primary" />, name: "Receita Federal", desc: "Consulta cadastral e validações." },
    { icon: <FileSearch className="w-6 h-6 text-primary" />, name: "BigDataCorp", desc: "Enriquecimento de dados e due diligence." },
    { icon: <Gavel className="w-6 h-6 text-primary" />, name: "Jusbrasil/ARISP", desc: "Pesquisa jurídica e registros imobiliários." },
  ];

  return (
    <section id="integracoes" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Integrações que potencializam sua operação</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">Conecte APIs e serviços essenciais diretamente na Leisin.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((i) => (
            <Card key={i.name}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  {i.icon}
                  <CardTitle>{i.name}</CardTitle>
                </div>
                <CardDescription className="pt-1">{i.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};