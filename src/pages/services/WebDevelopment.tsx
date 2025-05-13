
import React from "react";
import ServiceTemplate from "../../components/templates/ServiceTemplate";
import { Globe, Code, Smartphone, Zap, Scale, Users } from "lucide-react";

const WebDevelopment: React.FC = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Sites Institucionais",
      description:
        "Desenvolvemos sites modernos, responsivos e otimizados que representam a identidade da sua marca e convertem visitantes em clientes.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Sistemas Web",
      description:
        "Criamos aplicações web personalizadas que automatizam processos, gerenciam informações e impulsionam a eficiência do seu negócio.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Design Responsivo",
      description:
        "Garantimos que todas as nossas soluções funcionem perfeitamente em qualquer dispositivo, do desktop ao smartphone.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Otimizada",
      description:
        "Soluções com alto desempenho, tempos de carregamento rápidos e experiência de usuário fluida.",
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Escalabilidade",
      description:
        "Arquitetura que cresce com seu negócio, suportando desde pequenas demandas até grandes volumes de acessos.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Experiência do Usuário",
      description:
        "Interfaces intuitivas e funcionais que priorizam as necessidades dos usuários e simplificam interações.",
    },
  ];

  const expertise = [
    "Desenvolvimento frontend com React, Angular e Vue",
    "Backend robusto com Node.js, PHP e .NET",
    "Integração com APIs e sistemas externos",
    "SEO e otimização para mecanismos de busca",
    "Implementação de analytics e métricas de performance",
    "Estratégias de segurança e proteção de dados",
  ];

  const clients = [
    { 
      name: "JB", 
      logo: "/public/lovable-uploads/98342ab0-ecd9-46ff-9a1a-c8bc3361ce31.png" 
    },
    { 
      name: "Cooper", 
      logo: "/public/lovable-uploads/5b33450f-8e33-4447-ba3b-50e9095397f9.png" 
    },
    { 
      name: "Dr.Hato", 
      logo: "/public/lovable-uploads/595010d2-c46c-40a6-bc89-774ac52700b3.png" 
    },
    { 
      name: "Medicall Farma", 
      logo: "/public/lovable-uploads/29e246d6-adac-43f8-9998-de57761ca50c.png" 
    },
    { 
      name: "Cosmac", 
      logo: "/public/lovable-uploads/11a772e0-dbe4-45ac-bd32-e9e9d8ce6408.png" 
    }
  ];

  return (
    <ServiceTemplate
      title="Desenvolvimento Web"
      subtitle="Sites e aplicações web personalizados que transformam a presença digital da sua empresa e impulsionam resultados."
      description="O desenvolvimento web da WM4 vai além da criação de sites bonitos. Construímos soluções digitais completas, baseadas em estratégia, experiência do usuário e tecnologias modernas. Nosso processo inicia com o entendimento profundo das necessidades do seu negócio para entregar uma solução web que não apenas impressione visualmente, mas também gere resultados concretos, seja convertendo visitantes, automatizando processos ou melhorando a comunicação com seus clientes."
      features={features}
      expertise={expertise}
      backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
      clients={clients}
    />
  );
};

export default WebDevelopment;
