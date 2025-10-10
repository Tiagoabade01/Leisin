export const ClientsSection = () => {
  // Placeholder logos - in a real scenario, these would be actual image files
  const logos = ['Advocacia Central', 'Construtora Sol', 'Grupo Invest', 'Imobiliária Futuro', 'Escritório Pontes', 'Incorporadora T3'];

  return (
    <section id="clients" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-muted-foreground text-sm font-semibold tracking-wider uppercase mb-8">
          CONFIADO PELOS LÍDERES DE MERCADO
        </h3>
        <div className="relative overflow-hidden group">
          <div className="flex animate-marquee group-hover:pause whitespace-nowrap">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="mx-8 text-2xl font-medium text-muted-foreground/60">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};