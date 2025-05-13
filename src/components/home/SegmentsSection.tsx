
import React from "react";
import { Link } from "react-router-dom";
import { Clipboard, ZapIcon, LineChart, Shield } from "lucide-react";

interface ProcessCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  step: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ title, icon, description, step }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 ease-in-out border-b-4 border-transparent hover:border-wedesc-yellow">
      <div className="absolute -mt-10 -ml-2 bg-wedesc-yellow text-black text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center">
        {step}
      </div>
      <div className="text-wedesc-yellow mb-4 flex justify-center mt-3">{icon}</div>
      <h3 className="text-xl font-bold text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const SegmentsSection: React.FC = () => {
  const processes = [
    {
      title: "Avaliação",
      icon: <Clipboard className="w-12 h-12" />,
      description: "Fazemos um 'raio X' completo da sua TI (equipamentos, infra, sistemas) para entender pontos fortes e fracos e criar um plano de ação.",
      step: 1,
    },
    {
      title: "Ação",
      icon: <ZapIcon className="w-12 h-12" />,
      description: "Agimos rápido nos pontos de maior risco para proteger seus dados e garantir a disponibilidade dos serviços.",
      step: 2,
    },
    {
      title: "Planejamento",
      icon: <LineChart className="w-12 h-12" />,
      description: "Acompanhamos as entregas, apresentamos planos de investimento alinhados ao seu orçamento e garantimos as melhores decisões de TI.",
      step: 3,
    },
    {
      title: "Gerenciamento",
      icon: <Shield className="w-12 h-12" />,
      description: "Assumimos sua TI para você focar no negócio. Mantemos tudo seguro, eficiente, com suporte diferenciado e prevenção de falhas, 365 dias por ano.",
      step: 4,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Fazemos</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nossa metodologia é projetada para garantir a transformação digital da sua empresa,
            com foco em resultados e na eliminação de riscos operacionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {processes.map((process, index) => (
            <ProcessCard
              key={index}
              title={process.title}
              icon={process.icon}
              description={process.description}
              step={process.step}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
