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
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
            +1600 empresas já usam T3 Diligence
          </h3>
          <div className="relative mt-6 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {clients.concat(clients).map((client, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-16 mx-8 flex items-center justify-center">
                  <img src={client.logo} alt={client.name} className="max-h-12 max-w-full grayscale opacity-60" />
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