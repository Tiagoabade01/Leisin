import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Minus } from "lucide-react";

const plans = [
  { name: 'Starter', price: '149', description: 'Para profissionais solo e escritórios pequenos.', features: ['Jurídico Operacional', 'Gestão de Documentos'], cta: 'Começar Agora' },
  { name: 'Pro', price: '690', description: 'Para times que precisam de mais colaboração e IA.', features: ['Tudo do Starter', 'Due Diligence / Certidões', 'Contratos & Assinaturas', 'CRM Jurídico', 'Nível de IA Padrão'], cta: 'Escolher Pro' },
  { name: 'Business', price: '2.490', description: 'Para escritórios com automações e risco avançado.', features: ['Tudo do Pro', 'Risk Mapper', 'Terrenos / Dossiês', 'Financeiro Interno', 'Nível de IA Avançada'], cta: 'Escolher Business' },
  { name: 'Enterprise', price: 'Sob Consulta', description: 'Para grandes grupos com necessidades complexas.', features: ['Tudo do Business', 'Filiais & RBAC Avançado', 'Integrações & SSO', 'Gerente de Conta Dedicado', 'SLA Customizado'], cta: 'Fale Conosco' },
];

const comparisonFeatures = [
  { name: 'Jurídico Operacional', plans: ['Starter', 'Pro', 'Business', 'Enterprise'] },
  { name: 'Contratos & Assinaturas', plans: ['Pro', 'Business', 'Enterprise'] },
  { name: 'Due Diligence / Certidões', plans: ['Pro', 'Business', 'Enterprise'] },
  { name: 'Risk Mapper', plans: ['Business', 'Enterprise'] },
  { name: 'Terrenos / Dossiês / MatrículaLens', plans: ['Pro', 'Business', 'Enterprise'] },
  { name: 'CRM Jurídico', plans: ['Pro', 'Business', 'Enterprise'] },
  { name: 'Financeiro/Contábil interno', plans: ['Business', 'Enterprise'] },
  { name: 'Filiais / RBAC avançado / SSO', plans: ['Enterprise'] },
  { name: 'Nível de IA', plans: { Starter: 'Básica', Pro: 'Padrão', Business: 'Avançada', Enterprise: 'Avançada+Custom' } },
];

export const PricingSection = () => {
  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Planos transparentes para cada fase do seu negócio</h2>
          <p className="text-lg text-muted-foreground mt-2">Escolha o plano que se adapta perfeitamente à sua necessidade.</p>
        </div>
        
        {/* Cards de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map(plan => (
            <Card key={plan.name} className="flex flex-col shadow-lg border-2 border-transparent hover:border-primary transition-all">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-4xl font-bold">R$ {plan.price}</span>
                  {plan.price !== 'Sob Consulta' && <span className="text-muted-foreground">/mês</span>}
                </div>
                <ul className="space-y-2 text-sm">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{plan.cta}</Button>
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