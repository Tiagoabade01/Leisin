import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { TestimonialSection } from '@/components/landing/TestimonialSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { CtaSection } from '@/components/landing/CtaSection';
import { Footer } from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;