
import React, { useEffect } from "react";
import { Cloud, Database, Server, Mail, Home, DollarSign } from "lucide-react";
import ServiceTemplate from "../../components/templates/ServiceTemplate";

const CloudSolutions: React.FC = () => {
  useEffect(() => {
    document.title = "Soluções em Nuvem | WeDesc";
  }, []);

  const features = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backup na Nuvem",
      description: "Proteção de dados automatizada e segura, com armazenamento off-site que garante a recuperação rápida em caso de desastres ou perdas acidentais.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "VPS Dedicada",
      description: "Servidores virtuais privados com recursos garantidos, alta disponibilidade e desempenho consistente para suas aplicações críticas de negócio.",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "File Server Cloud",
      description: "Acesso seguro aos arquivos da empresa de qualquer lugar, com controle granular de permissões e colaboração em tempo real entre equipes.",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Gerenciamento de E-mails",
      description: "Administração completa de soluções como Microsoft 365, Google Workspace e outros, garantindo comunicação empresarial segura e confiável.",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Suporte a Home Office",
      description: "Infraestrutura em nuvem que permite trabalho remoto seguro, produtivo e integrado com os sistemas da empresa, sem comprometer a segurança.",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Otimização de Custos",
      description: "Modelo de pagamento por uso que elimina investimentos pesados em hardware e reduz custos operacionais de TI, com escalabilidade sob demanda.",
    },
  ];

  const expertise = [
    "Migração segura de infraestrutura local para a nuvem",
    "Implementação de ambientes híbridos (local + nuvem)",
    "Otimização de desempenho e custos em serviços cloud",
    "Gestão de identidade e acessos em ambientes de nuvem",
    "Configuração de alta disponibilidade e recuperação de desastres",
    "Integração entre múltiplas plataformas de nuvem",
    "Monitoramento e gerenciamento contínuo de recursos cloud",
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
      title="Soluções em Nuvem"
      subtitle="Leve sua empresa para a nuvem com flexibilidade e segurança. Oferecemos soluções que otimizam custos, permitem trabalho remoto e modernizam sua TI."
      description="A adoção de tecnologias em nuvem não é mais uma tendência futura, mas uma realidade essencial para empresas que buscam agilidade, flexibilidade e vantagem competitiva. Na WeDesc, auxiliamos organizações de todos os portes a aproveitar os benefícios da computação em nuvem de forma segura e eficiente. Nossa abordagem começa com uma avaliação cuidadosa das suas necessidades específicas, seguida pelo desenvolvimento de uma estratégia de migração e implementação que minimiza interrupções e maximiza o retorno sobre o investimento. Do backup de dados críticos à infraestrutura completa como serviço, nossas soluções em nuvem são desenhadas para escalar conforme sua empresa cresce, eliminando a necessidade de grandes investimentos iniciais em hardware."
      features={features}
      expertise={expertise}
      backgroundImage="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1470"
      ctaText="Descubra o poder da nuvem"
      clients={clients}
    />
  );
};

export default CloudSolutions;
