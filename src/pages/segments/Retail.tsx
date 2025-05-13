
import React from "react";
import SegmentTemplate from "../../components/templates/SegmentTemplate";
import { ShoppingBag, BarChart, Users, Search, Clock, LineChart } from "lucide-react";

const Retail: React.FC = () => {
  const challenges = [
    {
      title: "Disponibilidade do Sistema",
      description: "No varejo, cada minuto offline significa vendas perdidas. Sistemas de PDV, e-commerce e gestão de estoque precisam estar 100% disponíveis."
    },
    {
      title: "Segurança de Dados",
      description: "Proteção de dados de clientes e transações financeiras contra vazamentos e ataques cibernéticos é essencial para a confiança no seu negócio."
    },
    {
      title: "Infraestrutura Escalável",
      description: "Durante épocas de pico de vendas, sua infraestrutura de TI precisa suportar o aumento repentino de demanda sem falhas ou lentidão."
    },
    {
      title: "Integração Omnichannel",
      description: "Manter uma experiência consistente entre loja física e digital requer sistemas integrados e seguros para gestão de estoque e clientes."
    }
  ];

  const solutions = [
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Suporte Especializado para PDV",
      description: "Garantimos o funcionamento contínuo do seu sistema de vendas com monitoramento proativo e resposta rápida a incidentes.",
      link: "/it-support"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Proteção de Dados de Clientes",
      description: "Implementamos soluções de segurança robustas para proteger informações sensíveis de clientes e dados financeiros.",
      link: "/security"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Gestão de Infraestrutura",
      description: "Monitoramos e gerenciamos servidores, redes e dispositivos para garantir performance mesmo em períodos de alta demanda."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Backup Automatizado",
      description: "Sistemas de backup diários com verificação para garantir a recuperação rápida em caso de perda de dados ou ransomware."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Ambiente Omnichannel Seguro",
      description: "Soluções para integração segura entre plataformas físicas e digitais, mantendo a segurança dos dados em todos os canais."
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Suporte ao Home Office",
      description: "Acesso remoto seguro para sua equipe trabalhar de qualquer lugar, garantindo produtividade e proteção de dados.",
      link: "/cloud"
    }
  ];

  const benefits = [
    {
      title: "Operação Contínua",
      description: "Eliminação de tempo de inatividade nos sistemas críticos de vendas com monitoramento 24/7 e resposta rápida a incidentes."
    },
    {
      title: "Proteção Contra Ameaças",
      description: "Sistemas de segurança robustos que defendem seu negócio contra ransomware, phishing e outras ameaças cibernéticas."
    },
    {
      title: "Suporte Especializado",
      description: "Equipe técnica dedicada que entende as demandas específicas do varejo e responde rapidamente às necessidades."
    },
    {
      title: "Eficiência Operacional",
      description: "Redução de custos operacionais de TI e melhor utilização dos recursos tecnológicos com gestão profissional."
    },
    {
      title: "Escalabilidade",
      description: "Infraestrutura que cresce com o seu negócio, garantindo performance mesmo em períodos de alta demanda como Black Friday."
    }
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
    <SegmentTemplate 
      segmentName="Varejo"
      subtitle="No Varejo, cada segundo conta. A WeDesc garante que seus sistemas de PDV, estoque e e-commerce estejam sempre disponíveis e seguros com nosso Suporte de TI proativo e Soluções em Nuvem escaláveis."
      backgroundImage="https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1895&q=80"
      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      clients={clients}
    />
  );
};

export default Retail;
