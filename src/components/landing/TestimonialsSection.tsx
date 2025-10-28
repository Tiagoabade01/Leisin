import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const items = [
    {
      name: "Ana Souza",
      role: "Head Jurídico, Grupo Orion",
      quote: "A Leisin mudou nossa dinâmica: reduzimos 55% do tempo em tarefas repetitivas e passamos a atuar de forma estratégica.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Marcos Lima",
      role: "Sócio, ML Advogados",
      quote: "O Copilot é fantástico. Os relatórios e análises ganharam consistência e velocidade sem perder segurança.",
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Carla Ribeiro",
      role: "Compliance Manager, Valente Corp",
      quote: "Integrações nativas e governança impecável. Atendemos auditorias com facilidade e clareza.",
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="depoimentos" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">O que nossos clientes dizem</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">Resultados reais, com segurança e governança.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((t) => (
            <Card key={t.name} className="overflow-hidden">
              <img src={t.img} alt={t.name} className="w-full h-44 object-cover" />
              <CardContent className="p-6">
                <div className="flex items-center gap-1 text-yellow-500 mb-3">
                  <Star className="w-4 h-4 fill-yellow-500" />
                  <Star className="w-4 h-4 fill-yellow-500" />
                  <Star className="w-4 h-4 fill-yellow-500" />
                  <Star className="w-4 h-4 fill-yellow-500" />
                  <Star className="w-4 h-4 fill-yellow-500" />
                </div>
                <p className="text-base">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};