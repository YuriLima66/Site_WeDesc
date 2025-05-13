
import React, { useEffect } from "react";
import HeroCarousel from "../components/home/HeroCarousel";
import ServicesSection from "../components/home/ServicesSection";
import SegmentsSection from "../components/home/SegmentsSection";
import CtaSection from "../components/home/CtaSection";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "WeDesc - Soluções em Tecnologia";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroCarousel />
        <ServicesSection />
        <SegmentsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
