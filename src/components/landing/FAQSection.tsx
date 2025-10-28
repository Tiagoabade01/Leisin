import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    { q: "Como funciona o período gratuito?", a: "Você pode usar o plano Iniciante gratuitamente por tempo ilimitado, com limites de uso justos." },
    { q: "Posso migrar meus documentos?", a: "Sim, temos importação guiada e ajuda do nosso time para migrações maiores." },
    { q: "A IA é segura e auditável?", a: "Sim. Mantemos logs, limites e regras claras de uso, além de criptografia de dados." },
    { q: "Quais integrações estão disponíveis?", a: "OpenAI, Stripe, WhatsApp e APIs jurídicas como Receita, BigDataCorp, ARISP, Jusbrasil e outras." },
    { q: "Como é o suporte?", a: "Suporte por email no plano Iniciante e atendimento prioritário nos planos pagos." },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Perguntas frequentes</h2>
        <p className="text-lg text-muted-foreground text-center mt-4 mb-8">
          Tudo o que você precisa saber para começar com segurança.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, idx) => (
            <AccordionItem key={f.q} value={`item-${idx}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};