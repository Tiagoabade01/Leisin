import { BarChart3, ShieldCheck, FileSignature, Bot, Wallet, CalendarCheck } from 'lucide-react';

const features = [
  { icon: <BarChart3 className="w-7 h-7 text-white" />, title: "Previsão de Desfechos", description: "Utilize dados preditivos para prever o tempo de duração e possíveis desfechos de processos." },
  { icon: <ShieldCheck className="w-7 h-7 text-white" />, title: "Acesso para Clientes", description: "Ofereça visualização de processos e movimentações para seus clientes ou escritórios." },
  { icon: <FileSignature className="w-7 h-7 text-white" />, title: "Relatórios Personalizados", description: "Extraia relatórios gerenciais e tome decisões estratégicas com mais confiança." },
  { icon: <Bot className="w-7 h-7 text-white" />, title: "Automação Inteligente", description: "Cadastre processos automaticamente e receba informações antecipadas para agir." },
  { icon: <Wallet className="w-7 h-7 text-white" />, title: "Gestão Financeira", description: "Administre fluxos financeiros e emita NF-e diretamente no sistema, tudo em um só lugar." },
  { icon: <CalendarCheck className="w-7 h-7 text-white" />, title: "Controle de Agendas", description: "Controle as agendas dos advogados e agenda Jurídica em um único local." },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-secondary text-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Funcionalidades do nosso <span className="text-primary">sistema para escritório de advocacia</span></h2>
          <p className="text-lg text-muted-foreground mt-2">Tudo que você precisa para uma gestão jurídica eficiente.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="bg-primary p-6 rounded-lg text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white font-sans">{feature.title}</h3>
              <p className="opacity-90 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};