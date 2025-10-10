import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Users, Bot, HardDrive, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const plans = [
  { 
    id: 'trial', 
    name: 'Trial Gratuito', 
    description: 'Explore os recursos essenciais por 30 dias.', 
    monthlyPrice: 0, 
    yearlyPrice: 0, 
    features: [
      { icon: Users, text: 'Até 3 usuários' },
      { icon: HardDrive, text: '10 GB de armazenamento' },
      { icon: Bot, text: 'IA Nível Básico' },
      { icon: LifeBuoy, text: 'Suporte via Help Center' },
    ], 
    popular: false,
    cta: 'Iniciar Teste Gratuito'
  },
  { 
    id: 'pro', 
    name: 'Pro', 
    description: 'Para times que precisam de mais colaboração.', 
    monthlyPrice: 690, 
    yearlyPrice: 6900, 
    features: [
      { icon: Users, text: 'Até 5 usuários' },
      { icon: HardDrive, text: '50 GB de armazenamento' },
      { icon: Bot, text: 'IA Nível Padrão' },
      { icon: LifeBuoy, text: 'Suporte via E-mail' },
    ], 
    popular: true,
    cta: 'Contratar Plano Pro'
  },
  { 
    id: 'business', 
    name: 'Business', 
    description: 'Para escritórios com automações e risco avançado.', 
    monthlyPrice: 2490, 
    yearlyPrice: 24900, 
    features: [
      { icon: Users, text: 'Até 20 usuários' },
      { icon: HardDrive, text: '200 GB de armazenamento' },
      { icon: Bot, text: 'IA Nível Avançado' },
      { icon: LifeBuoy, text: 'Suporte E-mail + Chat' },
    ], 
    popular: false,
    cta: 'Contratar Business'
  },
  { 
    id: 'enterprise', 
    name: 'Enterprise', 
    description: 'Para grandes grupos com necessidades complexas.', 
    monthlyPrice: null, 
    yearlyPrice: null, 
    features: [
      { icon: Users, text: 'Usuários Ilimitados' },
      { icon: HardDrive, text: 'Armazenamento customizado' },
      { icon: Bot, text: 'IA Privada / Custom' },
      { icon: LifeBuoy, text: 'Gerente de Conta Dedicado' },
    ], 
    popular: false,
    cta: 'Falar com Consultor'
  },
];

export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="plans" className="py-20 bg-background text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Planos para todos os portes</h2>
          <p className="text-lg text-muted-foreground mt-2">Comece pequeno e cresça conosco. Sem surpresas.</p>
        </div>

        <div className="flex justify-center mb-8">
          <Tabs defaultValue="monthly" onValueChange={(value) => setBillingCycle(value as 'monthly' | 'yearly')} className="w-auto">
            <TabsList className="bg-secondary">
              <TabsTrigger value="monthly">Mensal</TabsTrigger>
              <TabsTrigger value="yearly">Anual (2 meses grátis)</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {plans.map(plan => (
            <div key={plan.id} className={cn(
              "bg-secondary/50 p-6 rounded-lg flex flex-col border border-secondary transition-all duration-300",
              plan.popular ? 'border-primary/80 ring-2 ring-primary/50' : 'hover:border-primary/50'
            )}>
              {plan.popular && <div className="text-center bg-primary text-primary-foreground py-1 px-4 rounded-full -mt-10 mx-auto mb-4 text-sm font-semibold">Mais Popular</div>}
              <h3 className="text-2xl font-semibold mb-2 text-white">{plan.name}</h3>
              <p className="text-muted-foreground mb-4 text-sm min-h-[40px]">{plan.description}</p>
              
              <div className="mb-6">
                {plan.monthlyPrice !== null ? (
                  <>
                    <span className="text-4xl font-bold">
                      R$ {plan.id === 'trial' ? '0' : (billingCycle === 'monthly' ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12))}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                  </>
                ) : (
                  <span className="text-3xl font-bold">Sob Consulta</span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow text-sm">
                {plan.features.map(feature => (
                  <li key={feature.text} className="flex items-center gap-3">
                    <feature.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <Link to="/app" className="w-full mt-auto">
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};