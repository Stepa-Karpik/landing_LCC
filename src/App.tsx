import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { SmoothScroll } from "./components/ui/SmoothScroll";
import { LanguageProvider } from "./context/LanguageContext";
import { AboutCompanyPage } from "./pages/AboutCompanyPage";
import { ContactsPage } from "./pages/ContactsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";
import { RepairPage } from "./pages/RepairPage";
import { ServicesPage } from "./pages/ServicesPage";
import { TechnologyPage } from "./pages/TechnologyPage";

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <SmoothScroll />
        <ScrollProgress />
        <ScrollToTop />
        <div className="min-h-screen bg-white text-[#1c1b1b]">
          <Header />
          <AnimatedRoutes />
          <Footer />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutCompanyPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/repair" element={<RepairPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/industries" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}
