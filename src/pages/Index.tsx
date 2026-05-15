import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AgeGroupsSection from "@/components/sections/AgeGroupsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import VaccinesSection from "@/components/sections/VaccinesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AgeGroupsSection />
      <HowItWorksSection />
      <VaccinesSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
