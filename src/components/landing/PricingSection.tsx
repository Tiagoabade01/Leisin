import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Iniciante',
    price: 'Grátis',
    period: 'para sempre',
    description: 'Para profissionais autônomos e pequenas equipes começando.',
    features: ['1 Usuário', 'Gestão de 10 casos', 'IA Copilot Básico', 'Suporte por email'],
    cta: 'Começar Agora',
  },
  {
    name: 'Profissional',
    price: 'R$ 99',
    period: '/usuário/mês',
    description: 'Para equipes em crescimento que precisam de mais poder e automação.',
    features: ['Usuários ilimitados', 'Casos ilimitados', 'IA Copilot Avançado', 'Gestão de Documentos', 'Suporte Prioritário'],
    cta: 'Escolher Plano',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Customizado',
    period: '',
    description: 'Para grandes departamentos jurídicos com necessidades específicas.',
    features: ['Tudo do Profissional', 'Compliance e Risco', 'Onboarding dedicado', 'SLA de suporte', 'Segurança Avançada'],
    cta: 'Fale Conosco',
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Planos flexíveis para todos os tamanhos</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
            Escolha o plano que melhor se adapta às suas necessidades e comece a transformar sua gestão jurídica hoje.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-primary' : ''}`}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};