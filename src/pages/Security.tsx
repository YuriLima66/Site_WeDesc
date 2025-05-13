
import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Database, FileCheck, Server, Lock } from "lucide-react";

const Security: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const securityFeatures = [
    {
      title: "Backups Criptografados",
      description:
        "Seus dados são automaticamente backupeados e criptografados diariamente, garantindo a segurança e disponibilidade das suas informações mesmo em situações adversas.",
      icon: <Database className="h-12 w-12  " />,
    },
    {
      title: "Conformidade com LGPD",
      description:
        "Nossos sistemas estão em total conformidade com a Lei Geral de Proteção de Dados, garantindo que o tratamento dos seus dados siga os mais rígidos padrões de privacidade.",
      icon: <FileCheck className="h-12 w-12" />,
    },
    {
      title: "Infraestrutura Robusta",
      description:
        "Utilizamos servidores de última geração, com redundância, monitoramento 24/7 e proteção contra ameaças cibernéticas para garantir a continuidade do seu negócio.",
      icon: <Server className="h-12 w-12" />,
    },
    {
      title: "Criptografia Avançada",
      description:
        "Implementamos criptografia de ponta a ponta em todas as comunicações e no armazenamento de dados sensíveis, garantindo confidencialidade absoluta.",
      icon: <Lock className="h-12 w-12" />,
    },
  ];

  const securityTips = [
    "Utilize senhas fortes e únicas para cada sistema",
    "Ative a autenticação de dois fatores sempre que possível",
    "Mantenha seus softwares e sistemas operacionais atualizados",
    "Realize treinamentos periódicos de segurança com sua equipe",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-24">
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex items-center">
                  <Shield className="mr-4 h-12 w-12 text-wedesc-yellow" />
                  Segurança é Nossa Prioridade
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  Na WeDesc, entendemos que seus dados são um ativo valioso. Por
                  isso, implementamos as mais avançadas soluções de segurança
                  para proteger suas informações e garantir a continuidade do
                  seu negócio.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Pilares de Segurança da WeDesc
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="text-wedesc-yellow mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Protection */}
        <section className="py-20 bg-gray-800 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Proteção de Dados em Todos os Níveis
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Nosso sistema de segurança multicamadas protege seus dados
                    desde o ponto de entrada até o armazenamento final,
                    garantindo integridade, disponibilidade e confidencialidade
                    em todos os momentos.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-wedesc-yellow/20 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-wedesc-yellow rounded-full w-3 h-3"></div>
                      </div>
                      <span>Firewall avançado com detecção de intrusões</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-wedesc-yellow/20 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-wedesc-yellow rounded-full w-3 h-3"></div>
                      </div>
                      <span>Monitoramento contínuo de ameaças</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-wedesc-yellow/20 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-wedesc-yellow rounded-full w-3 h-3"></div>
                      </div>
                      <span>
                        Sistema de prevenção contra vazamentos de dados
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-wedesc-yellow/20 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-wedesc-yellow rounded-full w-3 h-3"></div>
                      </div>
                      <span>
                        Testes regulares de penetração e vulnerabilidades
                      </span>
                    </li>
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
                    src="/public/lovable-uploads/security.jpg"
                    alt="Data security"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Tips */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Dicas de Segurança para Sua Empresa
            </h2>

            <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-xl shadow-xl">
              <ul className="space-y-6">
                {securityTips.map((tip, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="text-wedesc-yellow mr-4">
                      <Shield className="h-6 w-6" />
                    </div>
                    <span>{tip}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="text-center mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg text-gray-300 mb-8">
                  Quer saber mais sobre como podemos proteger os dados do seu
                  negócio?
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-wedesc-yellow hover:bg-wedesc-yellow/90 text-white py-3 px-8 rounded-lg transition-colors"
                >
                  Fale com nossos especialistas
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
