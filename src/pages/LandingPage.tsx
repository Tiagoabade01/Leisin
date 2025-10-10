import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { PlatformPreviewSection } from '@/components/landing/PlatformPreviewSection';
import { FeatureComparison } from '@/components/landing/FeatureComparison';
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
        <ClientsSection />
        <FeaturesSection />
        <PlatformPreviewSection />
        <FeatureComparison />
        <PricingSection />
        <IntegrationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;