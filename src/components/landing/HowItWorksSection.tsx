import { CheckCircle2 } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    { title: "Conecte seus dados", text: "Importe documentos, cadastros e integrações com poucos cliques." },
    { title: "Configure fluxos e papéis", text: "Padronize processos e permissões por equipe e área." },
    { title: "Ative o Copilot", text: "Gere cláusulas, resumos, insights e relatórios automaticamente." },
    { title: "Meça resultados", text: "Acompanhe KPIs e otimize operações com base em dados." },
  ];

  return (
    <section id="como-funciona" className="py-20">
      <div className="container grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Como funciona</h2>
          <p className="text-lg text-muted-foreground mt-4">Em minutos, sua operação já está rodando com eficiência máxima.</p>
          <div className="mt-8 space-y-5">
            {steps.map((s) => (
              <div key={s.title} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border shadow-lg bg-background">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop"
            alt="Demonstração da plataforma Leisin"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};