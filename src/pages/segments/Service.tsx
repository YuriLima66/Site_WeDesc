
import React from "react";
import SegmentTemplate from "../../components/templates/SegmentTemplate";
import { Calendar, Clock, LineChart, Users, FileText, PieChart } from "lucide-react";

const Service: React.FC = () => {
  const challenges = [
    {
      title: "Mobilidade Segura",
      description: "Profissionais de serviços precisam acessar sistemas e dados da empresa de qualquer lugar, sem comprometer a segurança das informações."
    },
    {
      title: "Disponibilidade de Sistemas",
      description: "Sistemas de gestão, atendimento e operação precisam estar sempre disponíveis para garantir excelência no serviço aos clientes."
    },
    {
      title: "Proteção de Dados Sensíveis",
      description: "Informações de clientes, contratos e projetos precisam ser protegidas contra vazamentos e acessos não autorizados."
    },
    {
      title: "Escalabilidade",
      description: "Infraestrutura de TI que acompanhe o crescimento da empresa, sem interrupções ou necessidade de grandes investimentos."
    }
  ];

  const solutions = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Suporte Técnico Especializado",
      description: "Atendimento ágil e prioritário para manter seus sistemas de gestão e atendimento sempre operacionais.",
      link: "/it-support"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Acesso Remoto Seguro",
      description: "Soluções de VPN e acesso remoto para que sua equipe trabalhe de qualquer lugar com total segurança.",
      link: "/security"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Backup em Nuvem",
      description: "Proteção automática de dados críticos com verificação diária e recuperação rápida em caso de incidentes.",
      link: "/cloud"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Gestão de E-mail Profissional",
      description: "Administração completa de e-mails corporativos com proteção avançada contra spam, phishing e malware."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Infraestrutura em Nuvem",
      description: "Servidores virtuais escaláveis que acompanham o crescimento da sua empresa sem interrupções de serviço."
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Monitoramento Proativo",
      description: "Acompanhamento 24/7 de servidores e sistemas críticos para identificar e resolver problemas antes que afetem seu negócio."
    }
  ];

  const benefits = [
    {
      title: "Foco no Negócio Principal",
      description: "Deixe a tecnologia conosco e concentre seus recursos e tempo no atendimento aos seus clientes e crescimento do negócio."
    },
    {
      title: "Mobilidade com Segurança",
      description: "Equipe produtiva trabalhando de qualquer lugar, com acesso seguro aos sistemas e informações da empresa."
    },
    {
      title: "Continuidade Operacional",
      description: "Redução drástica de interrupções nos sistemas críticos, garantindo atendimento contínuo aos clientes."
    },
    {
      title: "Proteção de Reputação",
      description: "Segurança avançada que protege dados de clientes e evita vazamentos que poderiam comprometer a confiança na sua empresa."
    },
    {
      title: "Economia com TI",
      description: "Redução de custos operacionais com infraestrutura otimizada e prevenção de problemas que poderiam gerar prejuízos."
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
      segmentName="Serviços"
      subtitle="Para empresas de Serviços, a mobilidade e segurança dos dados são essenciais. A WeDesc garante que sua equipe tenha acesso seguro aos sistemas de qualquer lugar, mantendo a produtividade e protegendo informações sensíveis de clientes."
      backgroundImage="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      clients={clients}
    />
  );
};

export default Service;
