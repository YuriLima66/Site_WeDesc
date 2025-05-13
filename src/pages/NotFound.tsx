
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-20">
          <h1 className="text-6xl font-bold text-wm4-orange">404</h1>
          <h2 className="text-3xl font-semibold mt-4 mb-6">Página não encontrada</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link
            to="/"
            className="px-8 py-3 bg-wm4-orange text-white font-semibold rounded-md hover:bg-wm4-orange/90 transition-all duration-300 ease-in-out"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
