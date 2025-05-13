import React from "react";
import ServiceTemplate from "../../components/templates/ServiceTemplate";
import {
  BarChart,
  Clock,
  LineChart,
  Shield,
  Settings,
  Share2,
} from "lucide-react";

const ERP: React.FC = () => {
  const features = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Gestão Integrada",
      description:
        "Integre todos os departamentos da sua empresa em uma única plataforma, permitindo fluxo contínuo de informações e processos.",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Relatórios Gerenciais",
      description:
        "Acesse dados em tempo real e relatórios personalizados para tomar decisões mais assertivas baseadas em informações concretas.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Automação de Processos",
      description:
        "Elimine tarefas manuais repetitivas e reduza erros com fluxos automatizados de processos empresariais.",
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Módulos Integrados",
      description:
        "Financeiro, estoque, vendas, compras, produção e muito mais, tudo perfeitamente conectado em um único sistema.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança de Dados",
      description:
        "Proteção avançada para suas informações empresariais, com controle de acesso, backup e conformidade com legislações.",
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Análises Preditivas",
      description:
        "Utilize inteligência artificial para prever tendências de mercado e comportamento de consumidores, antecipando decisões.",
    },
  ];

  const expertise = [
    "Implementação personalizada adaptada ao seu negócio",
    "Capacitação completa da sua equipe",
    "Migração segura de dados existentes",
    "Customização de módulos específicos para sua indústria",
    "Suporte técnico especializado e contínuo",
    "Atualizações regulares com novas funcionalidades",
  ];

  const clients = [
    {
      name: "JB",
      logo: "/public/lovable-uploads/98342ab0-ecd9-46ff-9a1a-c8bc3361ce31.png",
    },
    {
      name: "Cooper",
      logo: "/public/lovable-uploads/5b33450f-8e33-4447-ba3b-50e9095397f9.png",
    },
    {
      name: "Dr.Hato",
      logo: "/public/lovable-uploads/595010d2-c46c-40a6-bc89-774ac52700b3.png",
    },
    {
      name: "Medicall Farma",
      logo: "/public/lovable-uploads/29e246d6-adac-43f8-9998-de57761ca50c.png",
    },
    {
      name: "Cosmac",
      logo: "/public/lovable-uploads/11a772e0-dbe4-45ac-bd32-e9e9d8ce6408.png",
    },
  ];

  return (
    <ServiceTemplate
      title="ERP Empresarial"
      subtitle="Sistema completo de gestão empresarial que integra todos os processos do seu negócio em uma única plataforma."
      description="O ERP da WM4 é uma solução completa para gestão empresarial, desenvolvida para centralizar e otimizar todos os processos operacionais do seu negócio. Diferentemente de sistemas genéricos, nosso ERP é customizável para atender às particularidades de cada indústria, garantindo que você tenha as ferramentas certas para suas necessidades específicas. Com interface intuitiva, painéis de controle personalizados e acesso via web ou aplicativo móvel, oferecemos uma solução que não apenas organiza seus dados, mas os transforma em insights valiosos para impulsionar o crescimento do seu negócio."
      features={features}
      expertise={expertise}
      backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
      clients={clients}
    />
  );
};

export default ERP;
