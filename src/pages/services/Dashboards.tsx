import React from "react";
import ServiceTemplate from "../../components/templates/ServiceTemplate";
import { LineChart, PieChart, Timer, Zap, Eye, Database } from "lucide-react";

const Dashboards: React.FC = () => {
  const features = [
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Visualização Interativa",
      description:
        "Transforme dados complexos em gráficos e painéis interativos que facilitam a compreensão e análise.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Integração com Múltiplas Fontes",
      description:
        "Conecte-se facilmente a diversos sistemas e bases de dados, unificando informações de diferentes origens.",
    },
    {
      icon: <Timer className="h-8 w-8" />,
      title: "Dados em Tempo Real",
      description:
        "Acompanhe indicadores e métricas atualizados automaticamente, permitindo decisões baseadas nos dados mais recentes.",
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "KPIs Personalizados",
      description:
        "Defina indicadores de desempenho específicos para o seu negócio e monitore-os em painéis customizados.",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Insights Visuais",
      description:
        "Identifique padrões, tendências e anomalias rapidamente através de visualizações intuitivas e objetivas.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Otimizada",
      description:
        "Dashboards leves e responsivos que funcionam em qualquer dispositivo, do desktop ao smartphone.",
    },
  ];

  const expertise = [
    "Desenvolvimento de dashboards no Microsoft Power BI",
    "Criação de relatórios interativos customizados",
    "Modelagem de dados avançada para análises complexas",
    "Implementação de DAX para cálculos personalizados",
    "Integração com diversas fontes de dados",
    "Capacitação da sua equipe para autonomia analítica",
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
      title="Dashboards Power BI"
      subtitle="Transforme seus dados em insights visuais poderosos que impulsionam decisões estratégicas."
      description="Os Dashboards Power BI da WM4 vão além de simples visualizações de dados. Criamos painéis interativos e inteligentes que transformam informações brutas em insights acionáveis para seu negócio. Com nossa expertise em análise de dados e desenvolvimento no Microsoft Power BI, criamos dashboards personalizados que atendem às necessidades específicas da sua empresa, seja para análise de vendas, monitoramento de produção, gestão financeira ou qualquer outro aspecto crítico do seu negócio. Nossos dashboards permitem que você visualize tendências, identifique oportunidades e tome decisões baseadas em dados com confiança e rapidez."
      features={features}
      expertise={expertise}
      backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      clients={clients}
    />
  );
};

export default Dashboards;
