import { ShieldCheck, Rocket, Sparkles, BarChart3, Workflow, Clock } from "lucide-react";

export const ValuePropsSection = () => {
  const items = [
    { icon: <Sparkles className="w-6 h-6 text-primary" />, title: "IA que trabalha por você", desc: "Automatize análises, gere cláusulas e acelere decisões com Copilot jurídico." },
    { icon: <Workflow className="w-6 h-6 text-primary" />, title: "Fluxos de trabalho inteligentes", desc: "Padronize processos com automações simples, rastreáveis e eficientes." },
    { icon: <BarChart3 className="w-6 h-6 text-primary" />, title: "Indicadores em tempo real", desc: "Acompanhe prazos, produtividade, risco e desempenho em um só painel." },
    { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: "Segurança e conformidade", desc: "Criptografia, trilhas de auditoria e controles de acesso por perfil." },
    { icon: <Rocket className="w-6 h-6 text-primary" />, title: "Onboarding rápido", desc: "Implante em dias, não meses. Importação guiada de documentos e dados." },
    { icon: <Clock className="w-6 h-6 text-primary" />, title: "Ganhos de eficiência", desc: "Corte tempo operacional em até 60% e foque no que importa." },
  ];

  return (
    <section id="beneficios" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Resultados que fazem diferença</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
            A Leisin combina automação + IA + governança para elevar sua operação jurídica ao próximo nível.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                {it.icon}
                <h3 className="font-semibold text-lg">{it.title}</h3>
              </div>
              <p className="text-muted-foreground mt-3">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};