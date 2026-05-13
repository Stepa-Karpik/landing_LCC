import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { IndustriesSection } from "./components/sections/QualitySection";
import { RepairSection } from "./components/sections/RepairSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { TechnicalBaseSection } from "./components/sections/TechnicalBaseSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1c1b1b]">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <IndustriesSection />
        <RepairSection />
        <TechnicalBaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
