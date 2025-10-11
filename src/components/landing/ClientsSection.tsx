const clients = [
  { name: 'Ipiranga', logo: '/placeholder.svg' },
  { name: 'Mascarenhas Barbosa', logo: '/placeholder.svg' },
  { name: 'QCA', logo: '/placeholder.svg' },
  { name: 'Client 4', logo: '/placeholder.svg' },
  { name: 'Client 5', logo: '/placeholder.svg' },
  { name: 'Client 6', logo: '/placeholder.svg' },
  { name: 'Client 7', logo: '/placeholder.svg' },
  { name: 'Client 8', logo: '/placeholder.svg' },
];

export const ClientsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground">
            Confiança de <span className="text-primary">gigantes do mercado</span>
          </h2>
          <p className="text-muted-foreground mt-2">Mais de 1.600 empresas, incluindo líderes em seus setores, já usam T3norma.</p>
          <div className="relative mt-8 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap items-center">
              {clients.concat(clients).map((client, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-16 mx-8 flex items-center justify-center">
                  <span className="text-lg font-semibold text-muted-foreground">{client.name}</span>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-secondary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};