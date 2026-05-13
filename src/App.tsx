import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { QualitySection } from "./components/sections/QualitySection";
import { RepairSection } from "./components/sections/RepairSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { TechnicalBaseSection } from "./components/sections/TechnicalBaseSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#9fa594] text-[#1c1b1b]">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <RepairSection />
        <TechnicalBaseSection />
        <QualitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
