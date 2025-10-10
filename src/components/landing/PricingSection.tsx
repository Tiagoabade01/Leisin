import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  { 
    name: 'Free', 
    price: '0', 
    description: 'Para testar funcionalidades essenciais e organizar seus primeiros casos.', 
    features: [
      '1 Usuário', 
      'Até 3 Casos Ativos', 
      'Gestão de Documentos Básica',
      'Tarefas Simples'
    ], 
    cta: 'Comece de Graça',
    popular: false
  },
  { 
    name: 'Starter', 
    price: '149', 
    description: 'Para profissionais solo e escritórios pequenos.', 
    features: [
      'Tudo do Free, e mais:',
      'Gestão de Casos e Processos',
      'Controle de Documentos',
      'Tarefas e Prazos Básicos',
      'Biblioteca Jurídica'
    ], 
    cta: 'Iniciar teste de 14 dias',
    popular: false
  },
  { 
    name: 'Pro', 
    price: '690', 
    description: 'Para times que precisam de mais colaboração e IA.', 
    features: [
      'Tudo do Starter, e mais:',
      'Contratos e Assinaturas', 
      'Due Diligence & Certidões', 
      'CRM Jurídico', 
      'Comunicação Unificada',
      'Nível de IA Padrão'
    ], 
    cta: 'Iniciar teste de 14 dias',
    popular: true
  },
  { 
    name: 'Business', 
    price: '2.490', 
    description: 'Para escritórios com automações e risco avançado.', 
    features: [
      'Tudo do Pro, e mais:',
      'Risk Mapper Avançado', 
      'Módulo Imobiliário Integrado',
      'Módulo Financeiro Completo', 
      'Governança & LGPD',
      'Nível de IA Avançada'
    ], 
    cta: 'Iniciar teste de 14 dias',
    popular: false
  },
  { 
    name: 'Enterprise', 
    price: 'Sob Consulta', 
    description: 'Para grandes grupos com necessidades complexas.', 
    features: [
      'Tudo do Business, e mais:',
      'Gestão de Filiais', 
      'Integrações & SSO', 
      'Módulo Contábil',
      'Suporte com Gerente Dedicado'
    ], 
    cta: 'Fale Conosco',
    popular: false
  },
];

const comparisonFeatures = [
  { name: 'Jurídico Operacional', plans: ['Free', 'Starter', 'Pro', 'Business', 'Enterprise'] },
  { name: 'Contratos & Assinaturas', plans: ['Pro', 'Business', 'Enterprise'] },
  { name: 'Due Diligence / Certidões', plans: ['Pro', 'Business', 'Enterprise'] },
  { name: 'Risk Mapper', plans: ['Business', 'Enterprise'] },
  { name: 'Terrenos / Dossiês / MatrículaLens', plans: ['Pro', 'Business', 'Enterprise'] },
  { name: 'CRM Jurídico', plans: ['Pro', 'Business', 'Enterprise'] },
  { name: 'Financeiro/Contábil interno', plans: ['Business', 'Enterprise'] },
  { name: 'Filiais / RBAC avançado / SSO', plans: ['Enterprise'] },
  { name: 'Nível de IA', plans: { Free: 'N/A', Starter: 'Básica', Pro: 'Padrão', Business: 'Avançada', Enterprise: 'Avançada+Custom' } },
];

export const PricingSection = () => {
  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Planos transparentes para cada fase do seu negócio</h2>
          <p className="text-lg text-muted-foreground mt-2">Escolha o plano que se adapta perfeitamente à sua necessidade.</p>
          <p className="text-sm text-primary font-semibold mt-4">Todos os planos pagos incluem um teste gratuito de 14 dias com acesso a todas as funcionalidades. Sem necessidade de cartão de crédito.</p>
        </div>
        
        {/* Cards de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16 items-stretch">
          {plans.map(plan => (
            <Card key={plan.name} className={cn("flex flex-col shadow-lg border-2 transition-all", plan.popular ? "border-primary" : "border-transparent")}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{plan.name}</CardTitle>
                  {plan.popular && <Badge>Mais Popular</Badge>}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-4xl font-bold">R$ {plan.price}</span>
                  {plan.price !== 'Sob Consulta' && plan.price !== '0' && <span className="text-muted-foreground">/mês</span>}
                </div>
                <ul className="space-y-2 text-sm">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>{plan.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Tabela Comparativa */}
        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">Compare as Funcionalidades</h3>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="py-4 pr-4 font-semibold">Funcionalidade</th>
                        {plans.map(p => <th key={p.name} className="w-1/5 py-4 px-2 text-center font-semibold">{p.name}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {comparisonFeatures.map(feature => (
                        <tr key={feature.name} className="border-b">
                            <td className="py-3 pr-4 text-sm font-medium">{feature.name}</td>
                            {plans.map(plan => (
                                <td key={plan.name} className="py-3 px-2 text-center">
                                    {typeof feature.plans === 'object' && !Array.isArray(feature.plans) ? 
                                        <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{feature.plans[plan.name]}</span> :
                                    Array.isArray(feature.plans) && feature.plans.includes(plan.name) ? 
                                        <Check className="w-5 h-5 text-primary mx-auto" /> : 
                                        <Minus className="w-5 h-5 text-muted-foreground mx-auto" />}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </section>
  );
};