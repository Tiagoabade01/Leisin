import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bot, FileText, Scale, GanttChartSquare } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: 'IA Copilot',
    description: 'Automatize a criação de cláusulas, análise de documentos e obtenha insights com nossa inteligência artificial.',
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: 'Gestão de Documentos',
    description: 'Centralize e organize todos os seus contratos, processos e documentos importantes em um só lugar.',
  },
  {
    icon: <Scale className="w-8 h-8 text-primary" />,
    title: 'Compliance e Risco',
    description: 'Monitore riscos, realize due diligence e garanta a conformidade com as regulamentações de forma automatizada.',
  },
  {
    icon: <GanttChartSquare className="w-8 h-8 text-primary" />,
    title: 'Gestão de Tarefas',
    description: 'Controle prazos, delegue tarefas e acompanhe o andamento de todas as atividades do seu time.',
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Tudo que você precisa, em um só lugar</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
            Explore as funcionalidades que transformam a gestão jurídica.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="pt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};