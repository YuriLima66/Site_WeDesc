import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      toast({
        title: "Mensagem enviada",
        description: "Obrigado por entrar em contato! Retornaremos em breve.",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description:
          "Por favor, tente novamente ou entre em contato por telefone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-24">
          <div
            className="absolute inset-0 z-0 opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Vamos Conversar Sobre Seu Projeto?
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Estamos prontos para entender suas necessidades e apresentar as
                melhores soluções para o seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Contact Info & Map */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Nossos Contatos
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-wm4-orange p-2 bg-wm4-orange/10 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">
                          Telefone
                        </h3>
                        <p className="text-gray-600">(11) 4040-5072</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-wm4-orange p-2 bg-wm4-orange/10 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">
                          E-mail
                        </h3>
                        <p className="text-gray-600">contato@wm4.com.br</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-wm4-orange p-2 bg-wm4-orange/10 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">
                          Endereço
                        </h3>
                        <p className="text-gray-600">
                          Av.Adolfo Bastos, 598 - Jardim Bela Vista
                          <br />
                          Santo André - SP
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-wm4-orange p-2 bg-wm4-orange/10 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">
                          Horário
                        </h3>
                        <p className="text-gray-600">
                          Segunda a Sexta
                          <br />
                          8h às 18h
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/551140405072"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center mt-8 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-colors w-full"
                  >
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Fale pelo WhatsApp
                  </a>
                </div>

                {/* Google Maps */}
                <div className="h-80 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.4409031465448!2d-46.53957789999999!3d-23.6601857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42f231a4557b%3A0x260fedc7d60d612f!2sR.%20Adolfo%20Bastos%2C%20598%20-%20Jardim%20Bela%20Vista%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009041-000!5e0!3m2!1spt-BR!2sbr!4v1745870477255!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Envie sua Mensagem
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="block text-gray-700 mb-2">
                      Nome
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                      className="w-full border-gray-300 focus:ring-wm4-orange focus:border-wm4-orange"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="block text-gray-700 mb-2">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu.email@exemplo.com"
                      required
                      className="w-full border-gray-300 focus:ring-wm4-orange focus:border-wm4-orange"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="block text-gray-700 mb-2">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(XX) XXXXX-XXXX"
                      className="w-full border-gray-300 focus:ring-wm4-orange focus:border-wm4-orange"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="block text-gray-700 mb-2"
                    >
                      Mensagem
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Como podemos ajudar você?"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wm4-orange focus:border-wm4-orange"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-wm4-orange hover:bg-wm4-orange/90 text-white py-3 px-6 rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
