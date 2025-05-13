import React, { useEffect } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ClientLogosCarousel from "../clients/ClientLogosCarousel";

interface Challenge {
  title: string;
  description: string;
}

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface SegmentTemplateProps {
  segmentName: string;
  subtitle: string;
  backgroundImage: string;
  challenges: Challenge[];
  solutions: Solution[];
  benefits: Benefit[];
  clients?: Array<{ name: string; logo?: string }>;
}

const SegmentTemplate: React.FC<SegmentTemplateProps> = ({
  segmentName,
  subtitle,
  backgroundImage,
  challenges,
  solutions,
  benefits,
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
                Soluções WM4 para o Setor {segmentName}
              </h1>
              <p className="text-lg md:text-xl mb-8">{subtitle}</p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-wm4-orange hover:bg-wm4-orange/90 text-white py-3 px-8 rounded-md transition-all duration-300"
              >
                Transforme seu Negócio
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Enfrentando os Desafios do Setor {segmentName}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 border-l-4 border-wm4-orange shadow-md"
                >
                  <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Nossas Soluções Aplicadas ao {segmentName}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 text-center">
              Desenvolvemos soluções específicas para atender às necessidades
              únicas do setor {segmentName}, garantindo maior eficiência,
              controle e resultados para seu negócio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="p-6 flex-grow">
                    <div className="text-wm4-orange mb-4">{solution.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                  {solution.link && (
                    <div className="bg-gray-50 p-4 border-t border-gray-100">
                      <Link
                        to={solution.link}
                        className="text-wm4-orange hover:text-wm4-orange/80 font-medium flex items-center"
                      >
                        Saiba mais
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Resultados para Empresas de {segmentName}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-4 text-wm4-orange flex-shrink-0">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                Descubra como podemos ajudar sua empresa no setor {segmentName}
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco para uma avaliação personalizada e
                descubra como nossas soluções podem potencializar o crescimento
                do seu negócio.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-wm4-orange hover:bg-wm4-orange/90 text-white py-3 px-8 rounded-lg transition-colors"
              >
                Fale com nossos especialistas
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Clients Section - Conditional */}
        {clients.length > 0 && (
          <section className="py-20 bg-gray-900 ">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
                Clientes do Setor {segmentName} que Confiam na WM4
              </h2>

              <ClientLogosCarousel clients={clients} />
            </div>
          </section>
        )}

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

export default SegmentTemplate;
