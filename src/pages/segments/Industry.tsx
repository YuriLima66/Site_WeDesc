
import React from "react";
import SegmentTemplate from "../../components/templates/SegmentTemplate";
import {
  Settings,
  LineChart,
  Truck,
  Shield,
  BarChart,
  Server,
} from "lucide-react";

const Industry: React.FC = () => {
  const challenges = [
    {
      title: "Continuidade Operacional",
      description:
        "Paradas não programadas na produção geram prejuízos significativos. É essencial ter sistemas redundantes e monitoramento constante.",
    },
    {
      title: "Segurança Industrial",
      description:
        "Proteção de sistemas industriais, PLCs e dados de produção contra ameaças cibernéticas que podem comprometer a operação.",
    },
    {
      title: "Integração de Sistemas",
      description:
        "Conectar sistemas de chão de fábrica com ERP e gestão corporativa de forma segura e eficiente é um desafio crítico.",
    },
    {
      title: "Acesso Remoto Seguro",
      description:
        "Permitir monitoramento e controle remoto de processos industriais sem comprometer a segurança da rede e dos equipamentos.",
    },
  ];

  const solutions = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Gestão de Infraestrutura Industrial",
      description:
        "Monitoramento 24/7 de servidores e equipamentos críticos para garantir a continuidade operacional da produção.",
      link: "/it-support",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança OT/IT",
      description:
        "Proteção especializada para ambientes industriais, com foco na segurança de sistemas de controle e automação.",
      link: "/security",
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Backup Crítico",
      description:
        "Soluções de backup redundantes para dados de produção, parametrizações de máquinas e sistemas críticos.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Conectividade Industrial",
      description:
        "Redes segmentadas e protegidas para conexão de equipamentos industriais, garantindo segurança e performance.",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "VPN Industrial Segura",
      description:
        "Acesso remoto seguro para manutenção, monitoramento e suporte de equipamentos e sistemas industriais.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Infraestrutura Redundante",
      description:
        "Sistemas de alta disponibilidade para garantir operação contínua mesmo em caso de falhas de hardware ou software.",
      link: "/cloud",
    },
  ];

  const benefits = [
    {
      title: "Zero Downtime",
      description:
        "Redução drástica de paradas não programadas com monitoramento proativo e resposta rápida a incidentes.",
    },
    {
      title: "Proteção contra Ameaças",
      description:
        "Defesa robusta contra ataques cibernéticos direcionados a ambientes industriais, incluindo ransomware e ameaças avançadas.",
    },
    {
      title: "Suporte Especializado",
      description:
        "Equipe técnica com conhecimento em ambientes industriais, entendendo os requisitos específicos de sistemas de produção.",
    },
    {
      title: "Resposta Rápida",
      description:
        "Atendimento prioritário para incidentes em sistemas críticos, minimizando o impacto na produção.",
    },
    {
      title: "Controle Total",
      description:
        "Visibilidade completa sobre a infraestrutura de TI industrial, permitindo decisões informadas e planejamento eficiente.",
    },
    {
      title: "Conformidade",
      description:
        "Atendimento a requisitos regulatórios e de segurança para ambientes industriais, com documentação e procedimentos adequados.",
    },
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
      segmentName="Indústria"
      subtitle="Para a Indústria, a segurança dos dados de produção e a continuidade operacional são cruciais. A WeDesc protege sua rede contra ciberataques com nossas Soluções de Segurança avançadas e garante o acesso remoto seguro à gestão."
      backgroundImage="/public/lovable-uploads/imageTeamOfExperts.png"
      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      clients={clients}
    />
  );
};

export default Industry;
