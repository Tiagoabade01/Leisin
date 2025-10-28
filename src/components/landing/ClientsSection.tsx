const clients = [
  { name: 'Ipiranga', logo: 'https://tailwindui.com/img/logos/158x48/ipiranga-logo-gray-400.svg' },
  { name: 'Mascarenhas Barbosa', logo: 'https://tailwindui.com/img/logos/158x48/statickit-logo-gray-400.svg' },
  { name: 'QCA', logo: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg' },
  { name: 'Tuple', logo: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg' },
  { name: 'SavvyCal', logo: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg' },
  { name: 'Reform', logo: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg' },
  { name: 'Statamic', logo: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg' },
  { name: 'Mirage', logo: 'https://tailwindui.com/img/logos/158x48/mirage-logo-gray-400.svg' },
];

export const ClientsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground">
            Confiança de <span className="text-primary">gigantes do mercado</span>
          </h2>
          <p className="text-muted-foreground mt-2">Mais de 1.600 empresas, incluindo líderes em seus setores, já usam leisin.</p>
          <div className="relative mt-8 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap items-center">
              {clients.concat(clients).map((client, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-16 mx-8 flex items-center justify-center">
                  <img src={client.logo} alt={client.name} className="max-h-10 w-auto" />
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