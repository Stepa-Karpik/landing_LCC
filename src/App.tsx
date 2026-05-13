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
    <div className="min-h-screen bg-stone-100 text-neutral-950">
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
