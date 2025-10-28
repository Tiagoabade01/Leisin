export const MetricsSection = () => {
  const metrics = [
    { value: "60%", label: "redução de tempo operacional" },
    { value: "3x", label: "mais velocidade na análise" },
    { value: "99.9%", label: "disponibilidade de plataforma" },
    { value: "24/7", label: "monitoramento e alertas" },
  ];

  return (
    <section id="metricas" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Resultados comprovados</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">Eficiência real com impacto no negócio.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border bg-card p-6 text-center">
              <div className="text-4xl font-extrabold">{m.value}</div>
              <div className="mt-2 text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};