
import React, { useEffect } from "react";
import { Shield, Lock, AlertTriangle, Database, Key, FileCheck } from "lucide-react";
import ServiceTemplate from "../../components/templates/ServiceTemplate";

const SecuritySolutions: React.FC = () => {
  useEffect(() => {
    document.title = "Soluções em Segurança | WeDesc";
  }, []);

  const features = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backup Seguro e Automatizado",
      description: "Proteja seus dados críticos com sistemas de backup automáticos, criptografados e com verificações diárias de integridade, garantindo recuperação rápida em caso de incidentes.",
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Monitoramento Proativo 24/7",
      description: "Vigilância constante de servidores e estações de trabalho, identificando e neutralizando ameaças antes que causem danos à sua empresa.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Firewall de Ponta",
      description: "Proteção avançada de perímetro que bloqueia tentativas de invasão, filtra tráfego malicioso e garante a integridade da sua rede corporativa.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Controle de Acesso e Navegação",
      description: "Políticas granulares que garantem que apenas pessoas autorizadas acessem informações sensíveis e filtros de conteúdo que protegem contra sites maliciosos.",
    },
    {
      icon: <Key className="h-8 w-8" />,
      title: "VPNs Seguras",
      description: "Conexões criptografadas que permitem acesso remoto seguro aos sistemas da empresa, protegendo dados em trânsito e garantindo privacidade.",
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Auditoria e Conformidade",
      description: "Verificações regulares de segurança e relatórios detalhados que ajudam a manter sua empresa em conformidade com regulamentações de proteção de dados.",
    },
  ];

  const expertise = [
    "Proteção contra ransomware e malware avançados",
    "Implementação de arquitetura de segurança em camadas",
    "Testes de vulnerabilidade e correção proativa",
    "Gestão de incidentes de segurança com resposta rápida",
    "Criptografia de dados sensíveis em repouso e em trânsito",
    "Treinamento de conscientização em segurança para colaboradores",
    "Proteção de e-mail contra phishing e ataques direcionados",
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
      title="Soluções em Segurança"
      subtitle="Proteja o ativo mais valioso da sua empresa: seus dados. Implementamos defesas robustas contra ameaças digitais, garantindo a confidencialidade e integridade."
      description="Na era digital, a segurança da informação não é mais um luxo, mas uma necessidade crítica para qualquer negócio. Na WeDesc, oferecemos soluções de segurança abrangentes e em camadas, projetadas para defender sua empresa contra as ameaças cibernéticas cada vez mais sofisticadas. Nosso enfoque combina tecnologias de ponta, monitoramento constante e respostas rápidas a incidentes, criando um escudo digital robusto ao redor da sua organização. Compreendemos que cada violação de dados tem custos financeiros e reputacionais significativos, por isso nossa prioridade é garantir que seus sistemas e informações permaneçam protegidos 24 horas por dia, 7 dias por semana."
      features={features}
      expertise={expertise}
      backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1470"
      ctaText="Proteja sua empresa hoje"
      clients={clients}
    />
  );
};

export default SecuritySolutions;
