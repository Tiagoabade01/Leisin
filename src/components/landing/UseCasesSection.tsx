import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FileText, Scale, Briefcase } from "lucide-react";

export const UseCasesSection = () => {
  const cases = [
    {
      icon: <FileText className="w-5 h-5 text-primary" />,
      title: "Contratos e Obrigações",
      desc: "Modelos inteligentes, versionamento, alertas de prazos e extração de obrigações via IA.",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    },
    {
      icon: <Scale className="w-5 h-5 text-primary" />,
      title: "Contencioso e Prazos",
      desc: "Controle de andamentos, prazos processuais, timesheets e relatórios automatizados.",
      img: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=2070&auto=format&fit=crop",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      title: "Compliance e Due Diligence",
      desc: "Risco reputacional, documentos oficiais, KYC, matrículas e relatórios executivos.",
      img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section id="casos-uso" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Casos de uso que geram valor imediato</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">Do dia a dia jurídico à estratégia executiva.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((c) => (
            <Card key={c.title} className="overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-44 object-cover" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  {c.icon}
                  <CardTitle>{c.title}</CardTitle>
                </div>
                <CardDescription className="pt-2">{c.desc}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};