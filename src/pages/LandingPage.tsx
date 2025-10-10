import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { PlatformPreviewSection } from '@/components/landing/PlatformPreviewSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PlatformPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;