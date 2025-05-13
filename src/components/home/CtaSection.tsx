
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const CtaSection: React.FC = () => {
  const stats = [
    { value: "10+", label: "Anos de Experiência" },
    { value: "100+", label: "Clientes Atendidos" },
    { value: "30+", label: "Projetos Entregues" },
    { value: "80+", label: "Equipamentos Gerenciados" },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforme sua TI com a WeDesc
            </h2>
            <p className="text-gray-300 mb-8">
              A WeDesc oferece TI Full Service para reduzir riscos, otimizar custos e aumentar a eficiência da sua empresa. Nossa abordagem é focada em resultados para máxima disponibilidade e desempenho.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-wedesc-yellow rounded-full p-1 mr-3 mt-1">
                  <Check className="h-3 w-3 text-black" />
                </div>
                <span>Suporte técnico especializado</span>
              </div>
              <div className="flex items-start">
                <div className="bg-wedesc-yellow rounded-full p-1 mr-3 mt-1">
                  <Check className="h-3 w-3 text-black" />
                </div>
                <span>Segurança de dados avançada</span>
              </div>
              <div className="flex items-start">
                <div className="bg-wedesc-yellow rounded-full p-1 mr-3 mt-1">
                  <Check className="h-3 w-3 text-black" />
                </div>
                <span>Monitoramento proativo 24/7</span>
              </div>
              <div className="flex items-start">
                <div className="bg-wedesc-yellow rounded-full p-1 mr-3 mt-1">
                  <Check className="h-3 w-3 text-black" />
                </div>
                <span>Soluções em nuvem flexíveis</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center bg-wedesc-yellow hover:bg-wedesc-yellow/90 text-black font-medium px-6 py-3 rounded-md transition-all duration-300"
            >
              Fale com um Especialista
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg text-center"
              >
                <div className="text-wedesc-yellow text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-light italic text-gray-300 max-w-3xl mx-auto">
            "WeDesc: Transformamos desafios em soluções digitais que impulsionam o seu negócio para o futuro."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
