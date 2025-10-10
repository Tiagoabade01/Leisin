import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  { name: 'Starter', price: '149', users: '1 Usuário', features: ['Jurídico Operacional', 'Gestão de Documentos', 'IA Básica'], popular: false },
  { name: 'Pro', price: '690', users: 'Até 5 Usuários', features: ['Tudo do Starter', 'Due Diligence', 'Gestão de Contratos', 'CRM Jurídico'], popular: true },
  { name: 'Business', price: '2.490', users: 'Até 20 Usuários', features: ['Tudo do Pro', 'Risk Mapper', 'Automação Avançada', 'Módulo Imobiliário'], popular: false },
  { name: 'Enterprise', price: 'Custom', users: 'Ilimitado', features: ['Tudo do Business', 'Integrações API', 'SSO', 'Gerente de Conta'], popular: false },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Planos para todos os portes</h2>
          <p className="text-lg text-gray-400 mt-2">Comece pequeno e cresça conosco. Sem surpresas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map(plan => (
            <div key={plan.name} className={`bg-gray-900 p-6 rounded-lg flex flex-col ${plan.popular ? 'border-2 border-primary' : ''}`}>
              {plan.popular && <div className="text-center bg-primary text-primary-foreground py-1 px-4 rounded-full -mt-10 mx-auto mb-4 text-sm font-semibold">Mais Popular</div>}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.users}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price === 'Custom' ? 'Sob' : `R$ ${plan.price}`}</span>
                <span className="text-gray-400">{plan.price !== 'Custom' && '/mês'}</span>
                {plan.price === 'Custom' && <p className="text-gray-400">Consulta</p>}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/app" className="w-full">
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  {plan.price === 'Custom' ? 'Contate-nos' : 'Escolher Plano'}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};