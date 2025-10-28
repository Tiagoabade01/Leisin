import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { ClientsSection } from '@/components/landing/ClientsSection';
import { ValuePropsSection } from '@/components/landing/ValuePropsSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { UseCasesSection } from '@/components/landing/UseCasesSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { PlatformPreviewSection } from '@/components/landing/PlatformPreviewSection';
import { IntegrationsSection } from '@/components/landing/IntegrationsSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { SecurityComplianceSection } from '@/components/landing/SecurityComplianceSection';
import { MetricsSection } from '@/components/landing/MetricsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { CTASection } from '@/components/landing/CTASection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <HeroSection />
        <ClientsSection />
        <ValuePropsSection />
        <FeaturesSection />
        <UseCasesSection />
        <HowItWorksSection />
        <PlatformPreviewSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <SecurityComplianceSection />
        <MetricsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;