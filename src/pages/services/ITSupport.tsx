
import React, { useEffect } from "react";
import { Server, Shield, Clock, Users, Settings, CheckCircle } from "lucide-react";
import ServiceTemplate from "../../components/templates/ServiceTemplate";

const ITSupport: React.FC = () => {
  useEffect(() => {
    document.title = "Gestão e Suporte de TI | WeDesc";
  }, []);

  const features = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Atendimento Especializado",
      description: "Nossa equipe de profissionais certificados atende de forma rápida e eficiente, com conhecimento técnico avançado para resolver qualquer problema de TI.",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Gestão de Servidores e Infraestrutura",
      description: "Gerenciamento proativo de toda sua infraestrutura de TI, garantindo desempenho, disponibilidade e proteção contra falhas.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Prevenção de Incidentes",
      description: "Monitoramento contínuo e manutenção preventiva que identifica e resolve problemas antes que afetem seu negócio.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Suporte Remoto e Local Ágil",
      description: "Atendimento rápido, seja remotamente ou presencialmente, minimizando o tempo de inatividade e garantindo a continuidade das operações.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Planos Flexíveis",
      description: "Soluções personalizadas de acordo com o tamanho e necessidades específicas da sua empresa, com opções escaláveis que crescem junto com seu negócio.",
    },
  ];

  const expertise = [
    "Helpdesk e suporte aos usuários com atendimento rápido e eficiente",
    "Monitoramento 24/7 de servidores e infraestrutura crítica",
    "Gerenciamento de redes e otimização de desempenho",
    "Resolução rápida de problemas técnicos e gargalos operacionais",
    "Implementação de políticas de backup e recuperação de dados",
    "Documentação e gestão de ativos de TI",
    "Suporte especializado para ambiente híbrido (local e nuvem)",
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
      title="Gestão e Suporte de TI"
      subtitle="Deixe a TI conosco! Garantimos a operação contínua e segura da sua infraestrutura para você focar 100% no seu negócio e na inovação."
      description="Na WeDesc, nossa abordagem de Gestão e Suporte de TI é proativa e completa. Entendemos que problemas tecnológicos não são apenas inconvenientes - eles afetam diretamente sua produtividade e resultados. Por isso, oferecemos uma solução abrangente que vai além do simples 'conserto quando quebrar'. Nossa equipe especializada trabalha continuamente para monitorar, manter e otimizar sua infraestrutura tecnológica, identificando potenciais problemas antes que causem impacto no seu negócio. Com a WeDesc gerenciando sua TI, você pode focar no que realmente importa: sua atividade principal e estratégias de crescimento."
      features={features}
      expertise={expertise}
      backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1470"
      ctaText="Solicite uma avaliação gratuita"
      clients={clients}
    />
  );
};

export default ITSupport;
