import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
// import { ClientsSection } from '@/components/landing/ClientsSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { PlatformPreviewSection } from '@/components/landing/PlatformPreviewSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <HeroSection />
        {/* <ClientsSection /> */}
        <FeaturesSection />
        <PlatformPreviewSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;