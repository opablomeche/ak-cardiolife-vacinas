import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AgeGroupsSection from "@/components/AgeGroupsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import VaccinesSection from "@/components/VaccinesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
