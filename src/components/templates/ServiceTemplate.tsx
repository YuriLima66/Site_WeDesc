import React, { useEffect } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ClientLogosCarousel from "../clients/ClientLogosCarousel";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  expertise: string[];
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  clients?: Array<{ name: string; logo?: string }>;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title,
  subtitle,
  description,
  features,
  expertise,
  backgroundImage,
  ctaText = "Fale com um Especialista",
  ctaLink = "/contact",
  clients = [],
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-24">
          <div
            className="absolute inset-0 z-0 opacity-30"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {title}
              </h1>
              <p className="text-lg md:text-xl mb-8">{subtitle}</p>
              <Link
                to={ctaLink}
                className="inline-flex items-center bg-wm4-orange hover:bg-wm4-orange/90 text-white py-3 px-8 rounded-md transition-all duration-300"
              >
                {ctaText}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Entenda o {title}
              </h2>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Recursos e Vantagens
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-wm4-orange mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Nossa Expertise em {title}
                  </h2>
                  <p className="text-gray-700 mb-8">
                    Com anos de experiência e um time especializado, a WM4 é a
                    parceira ideal para implementar soluções de {title} que
                    atendam suas necessidades específicas.
                  </p>
                  <ul className="space-y-4">
                    {expertise.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-wm4-orange/20 p-1 rounded-full mr-3 mt-1">
                          <div className="bg-wm4-orange rounded-full w-3 h-3"></div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-lg overflow-hidden h-96"
                >
                  <img
                    src="/public/lovable-uploads/imagePartOfOurTeam.png"
                    alt={`${title} expertise`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section - Updated with Carousel */}
        {clients.length > 0 && (
          <section className="py-4 bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-0 ">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Clientes Satisfeitos
              </h2>

              <ClientLogosCarousel clients={clients} />
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para Transformar seu Negócio?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco para uma avaliação personalizada e
                descubra como nossa solução de {title} pode impulsionar os
                resultados do seu negócio.
              </p>
              <Link
                to={ctaLink}
                className="inline-flex items-center bg-wm4-orange hover:bg-wm4-orange/90 text-white py-3 px-8 rounded-lg transition-colors"
              >
                {ctaText}
              </Link>
            </motion.div>
          </div>
        </section>
        {/* Visual Effect Section */}
        <div className="bg-gradient-to-b from-gray-900 to-black py-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              <div className="h-0.5 w-16 bg-wm4-orange mb-8"></div>
              <p className="text-lg text-gray-400 italic text-center max-w-2xl">
                "Tecnologia que transforma negócios, parceria que constrói
                sucesso."
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceTemplate;
