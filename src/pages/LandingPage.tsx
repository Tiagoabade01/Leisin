import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { IntegrationsSection } from '@/components/landing/IntegrationsSection';
import { ClientsSection } from '@/components/landing/ClientsSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <PricingSection />
        <IntegrationsSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;