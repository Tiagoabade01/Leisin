import { Check } from "lucide-react";

export const SecurityComplianceSection = () => {
  const points = [
    "Criptografia em repouso e em trânsito",
    "RLS (Row-Level Security) e trilhas de auditoria",
    "Controles de acesso por papel e equipe",
    "Backups automáticos e retenção configurável",
    "Conformidade com LGPD e boas práticas",
    "Logs de acesso e detecção de anomalias",
  ];

  return (
    <section id="seguranca" className="py-20 bg-secondary">
      <div className="container grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Segurança e Conformidade</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Arquitetura pensada para ambientes corporativos com alta exigência de segurança e governança.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden border shadow bg-background">
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
            alt="Segurança corporativa"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};