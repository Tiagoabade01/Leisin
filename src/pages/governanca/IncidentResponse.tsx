import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, ArrowRight } from "lucide-react";

const steps = ["Detecção", "Análise", "Mitigação", "Notificação", "Correção"];

const IncidentResponse = () => {
  return (
    <div className="bg-[#0A0E14] text-gray-100 min-h-full p-6 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white font-serif">Incident Response (Plano LGPD)</h1>
        <p className="text-gray-400 max-w-3xl">
          O centro de resposta e mitigação de incidentes de segurança e privacidade do Leisin.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader><CardTitle>Plano de Resposta a Incidentes</CardTitle></CardHeader>
          <CardContent className="flex flex-wrap items-center justify-center gap-4 text-center">
            {steps.map((step, index) => (
              <React.Fragment key={step}>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-sm font-semibold text-dourado-tributario">{index + 1}. {step}</p>
                </div>
                {index < steps.length - 1 && <ArrowRight className="h-6 w-6 text-gray-500 hidden md:block" />}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
        <Card className="bg-petroleum-blue border-gray-700 text-white">
          <CardHeader className="flex flex-row items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-tech-green" />
            <CardTitle>IA Insight</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-risk-gold">“Vazamento de metadados detectado no módulo de Faturamento. Correção automática aplicada, e relatório de incidente enviado ao DPO e gestor jurídico.”</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IncidentResponse;