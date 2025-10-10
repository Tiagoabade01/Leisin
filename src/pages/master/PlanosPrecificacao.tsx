import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PlanosPrecificacao = () => {
  const plans = [
    { name: "Pro", price: "R$ 850", period: "/mês", features: ["10 Usuários", "Módulo Jurídico", "Módulo Compliance", "Suporte via E-mail"] },
    { name: "Enterprise", price: "R$ 2.500", period: "/mês", features: ["Usuários Ilimitados", "Todos os Módulos", "IA Copilot", "Suporte Prioritário 24/7"] },
    { name: "White Label", price: "Custom", period: "", features: ["Sua Marca", "Infraestrutura Dedicada", "Gestor de Contas", "API Exclusiva"] },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Planos & Precificação</h1>
      <p className="text-gray-400 mb-8">Controle estratégico de produtos e modelos comerciais.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map(plan => (
          <Card key={plan.name} className="bg-gray-800 border-gray-700 text-white flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription className="text-gray-400">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0">
              <Button className="w-full">Gerenciar Plano</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlanosPrecificacao;