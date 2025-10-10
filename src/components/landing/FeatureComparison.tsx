import { Check, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  { 
    category: 'Jurídico Operacional', 
    items: [
      { name: 'Gestão de Casos e Processos', plans: { trial: true, pro: true, business: true, enterprise: true } },
      { name: 'Gestão de Contratos', plans: { trial: 'Básico', pro: true, business: true, enterprise: true } },
      { name: 'Timesheets e Faturamento', plans: { trial: false, pro: true, business: true, enterprise: true } },
    ]
  },
  { 
    category: 'Compliance & Risco', 
    items: [
      { name: 'Due Diligence Automatizada', plans: { trial: '10/mês', pro: true, business: true, enterprise: true } },
      { name: 'Risk Mapper (Grafo de Relações)', plans: { trial: false, pro: false, business: true, enterprise: true } },
      { name: 'Certidões e Documentos Oficiais', plans: { trial: false, pro: 'Básico', business: true, enterprise: true } },
    ]
  },
  { 
    category: 'IA & Automação', 
    items: [
      { name: 'CláusulaCopilot', plans: { trial: 'Básico', pro: 'Padrão', business: 'Avançado', enterprise: 'Custom' } },
      { name: 'MatrículaLens', plans: { trial: false, pro: 'Básico', business: 'Avançado', enterprise: 'Custom' } },
      { name: 'Playbooks de Operações', plans: { trial: false, pro: false, business: true, enterprise: true } },
    ]
  },
];

const planOrder = ['trial', 'pro', 'business', 'enterprise'];
const planNames = { trial: 'Trial', pro: 'Pro', business: 'Business', enterprise: 'Enterprise' };

export const FeatureComparison = () => {
  const renderCheck = (value: boolean | string) => {
    if (value === true) return <Check className="w-5 h-5 text-primary mx-auto" />;
    if (value === false) return <Minus className="w-5 h-5 text-muted-foreground/50 mx-auto" />;
    return <span className="text-sm text-muted-foreground">{value}</span>;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Compare as Funcionalidades</h2>
          <p className="text-lg text-muted-foreground mt-2">Encontre o plano perfeito para as suas necessidades.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4"></th>
                {planOrder.map(planId => (
                  <th key={planId} className="p-4 text-center text-white font-semibold">{planNames[planId]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map(category => (
                <>
                  <tr key={category.category}>
                    <td colSpan={5} className="p-4 pt-8 text-primary font-bold text-lg">{category.category}</td>
                  </tr>
                  {category.items.map(item => (
                    <tr key={item.name} className="border-b border-secondary">
                      <td className="p-4 text-muted-foreground">{item.name}</td>
                      {planOrder.map(planId => (
                        <td key={planId} className="p-4 text-center">
                          {renderCheck(item.plans[planId])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};