
import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Briefcase, Users, Zap, Award, Check } from "lucide-react";

const Career: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Carreiras - WeDesc";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend
      // For this example, we'll simulate a successful form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success message
      toast({
        title: "Candidatura enviada com sucesso",
        description: "Agradecemos seu interesse. Analisaremos seu currículo e entraremos em contato em breve.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
      });
      setFile(null);
      
      // Reset file input
      const fileInput = document.getElementById('resume') as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      
    } catch (error) {
      toast({
        title: "Erro ao enviar candidatura",
        description: "Por favor, tente novamente ou entre em contato por email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Ambiente Colaborativo",
      description: "Trabalhe em um ambiente que valoriza o trabalho em equipe, a troca de conhecimentos e o crescimento coletivo."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Tecnologias de Ponta",
      description: "Tenha acesso às ferramentas e tecnologias mais modernas do mercado para desenvolver soluções inovadoras."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Desenvolvimento Profissional",
      description: "Invista em sua carreira com nossos programas de capacitação contínua, mentorias e plano de carreira estruturado."
    }
  ];

  const openPositions = [
    {
      title: "Analista de Suporte Técnico N1/N2",
      type: "Híbrido",
      description: "Profissional para atendimento de suporte técnico aos clientes, resolução de problemas, configuração de equipamentos e monitoramento de infraestrutura."
    },
    {
      title: "Especialista em Infraestrutura de TI",
      type: "Presencial",
      description: "Especialista para gerenciamento de servidores, redes, sistemas operacionais e infraestrutura de TI para nossos clientes corporativos."
    },
    {
      title: "Administrador de Redes e Segurança",
      type: "Híbrido",
      description: "Profissional para configuração e manutenção de firewalls, VPNs, redes segmentadas e implementação de políticas de segurança."
    },
    {
      title: "Analista Cloud (Azure/AWS/Google)",
      type: "Remoto",
      description: "Especialista para implementação e gestão de soluções em nuvem, migração de servidores e aplicações, backup em nuvem e serviços Microsoft 365."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-24">
          <div 
            className="absolute inset-0 z-0 opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')",
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex items-center">
                <Briefcase className="mr-4 h-12 w-12 text-wedesc-yellow" /> 
                Trabalhe na WeDesc
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Junte-se à nossa equipe de talentos e faça parte de uma empresa 
                que está na vanguarda das soluções de TI para empresas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Por Que Trabalhar Conosco?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <div className="text-wedesc-yellow mx-auto mb-6 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">O Que Oferecemos</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Vale Refeição", "Plano de Saúde", "Horário Flexível", "Home Office", "Capacitação Contínua", "Plano de Carreira", "Ambiente Descontraído", "Projetos Inovadores"].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center"
                  >
                    <Check className="h-5 w-5 text-wedesc-yellow mr-2" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Vagas Abertas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {openPositions.map((position, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-wedesc-yellow/10 text-black font-medium mb-4">
                      {position.type}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{position.title}</h3>
                    <p className="text-gray-600 mb-6">{position.description}</p>
                    <a 
                      href="#application-form" 
                      className="text-wedesc-yellow hover:text-wedesc-yellow/80 font-medium inline-flex items-center"
                    >
                      Candidatar-se
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div id="application-form" className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Envie Seu Currículo</h3>
              <p className="text-gray-600 mb-8">
                Mesmo que não encontre uma vaga específica para o seu perfil, 
                envie seu currículo para nosso banco de talentos. Estamos 
                sempre em busca de profissionais qualificados para nossa equipe.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu.email@exemplo.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Vaga de Interesse</Label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 py-2 px-3"
                      required
                    >
                      <option value="">Selecione uma vaga</option>
                      {openPositions.map((position, index) => (
                        <option key={index} value={position.title}>
                          {position.title}
                        </option>
                      ))}
                      <option value="Outro">Outra posição / Banco de Talentos</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-md border border-gray-300 py-2 px-3"
                    placeholder="Conte-nos um pouco sobre você e suas experiências..."
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Anexe seu Currículo (PDF, DOC, DOCX)</Label>
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <p className="text-sm text-gray-500">
                    Tamanho máximo do arquivo: 5MB
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-wedesc-yellow hover:bg-wedesc-yellow/90 text-black py-3 rounded-md font-medium transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
