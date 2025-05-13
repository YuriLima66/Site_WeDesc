import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroCarousel = () => {
  const slides = [
    {
      title: "Nós somos a WeDesc",
      subtitle: "Suporte de TI, Backup, E-mail, Cloud, Segurança",
      description:
        "Há mais de 10 anos, transformamos desafios em soluções tecnológicas que fazem a diferença para nossos clientes.",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1470",
      link: "/it-support",
    },
    {
      title: "Soluções em Tecnologia",
      subtitle: "Gestão de TI, Segurança e Cloud",
      description:
        "Soluções completas em tecnologia da informação para empresas de todos os portes, com atendimento personalizado e especializado.",
      image:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      link: "/cloud",
    },
    {
      title: "Proteção para seu negócio",
      subtitle: "Segurança de dados para empresas",
      description:
        "Mantenha seus dados protegidos com nossas soluções de segurança digital, backup e monitoramento 24/7.",
      image:
        "https://images.unsplash.com/photo-1618044619888-009e412ff12a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      link: "/security",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();

  const nextSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    const next = (currentSlide + 1) % slides.length;

    setTimeout(() => {
      setCurrentSlide(next);
      setIsAnimating(false);
    }, 500);
  }, [currentSlide, isAnimating, slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touchStart = e.touches[0].clientX;

      const handleTouchMove = (e: TouchEvent) => {
        const touchEnd = e.touches[0].clientX;
        const diff = touchStart - touchEnd;

        // Swipe threshold of 50px
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            // Swipe left - next slide
            nextSlide();
          } else {
            // Swipe right - previous slide
            if (isAnimating) return;

            setIsAnimating(true);
            const prev = (currentSlide - 1 + slides.length) % slides.length;

            setTimeout(() => {
              setCurrentSlide(prev);
              setIsAnimating(false);
            }, 500);
          }

          document.removeEventListener("touchmove", handleTouchMove);
        }
      };

      document.addEventListener("touchmove", handleTouchMove, { once: true });
    },
    [currentSlide, isAnimating, nextSlide, slides.length]
  );

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide-container absolute inset-0 flex items-center ${
            index === currentSlide ? "active" : ""
          }`}
          style={{
            zIndex: index === currentSlide ? 10 : 0,
            opacity: index === currentSlide ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              filter: "brightness(0.5)",
            }}
          />
          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="max-w-3xl">
              <span className="inline-block text-sm md:text-base mb-3 font-semibold border-b-2 border-wedesc-yellow pb-1">
                {slide.subtitle}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8">
                {slide.description}
              </p>
              <Link
                to={slide.link}
                className="inline-flex items-center bg-wedesc-yellow hover:bg-wedesc-yellow/90 text-black font-medium px-4 md:px-6 py-2 md:py-3 rounded-md transition-all duration-300"
              >
                <span>Saiba Mais</span>
                <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-wedesc-yellow w-10"
                : "bg-gray-400 opacity-60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
