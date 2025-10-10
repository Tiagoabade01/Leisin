import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const plans = [
  { id: 'starter', name: 'Starter', description: 'Para profissionais e pequenos escritórios.', monthlyPrice: 149, yearlyPrice: 1490, features: ['Jurídico Operacional', 'Gestão de Documentos', 'IA Básica', 'Suporte via Help Center'], popular: false },
  { id: 'pro', name: 'Pro', description: 'Para times que precisam de mais colaboração.', monthlyPrice: 690, yearlyPrice: 6900, features: ['Tudo do Starter', 'Due Diligence', 'Gestão de Contratos', 'CRM Jurídico', 'Suporte via E-mail'], popular: true },
  { id: 'business', name: 'Business', description: 'Para escritórios com automações e risco avançado.', monthlyPrice: 2490, yearlyPrice: 24900, features: ['Tudo do Pro', 'Risk Mapper', 'Automação Avançada', 'Módulo Imobiliário', 'Suporte E-mail+Chat'], popular: false },
  { id: 'enterprise', name: 'Enterprise', description: 'Para grandes grupos com necessidades complexas.', monthlyPrice: null, yearlyPrice: null, features: ['Tudo do Business', 'Integrações API', 'SSO', 'Gerente de Conta Dedicado', 'SLA Customizado'], popular: false },
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
                      R$ {billingCycle === 'monthly' ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12)}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                  </>
                ) : (
                  <span className="text-3xl font-bold">Sob Consulta</span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow text-sm">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/app" className="w-full mt-auto">
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  {plan.monthlyPrice === null ? 'Falar com consultor' : 'Contratar'}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};