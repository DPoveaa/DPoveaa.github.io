import React from 'react';
import { useTheme } from '../hooks/useTheme';

const HeroSection = () => {
  const { theme } = useTheme();

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="inicio" className="pt-24 pb-20 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Olá! Eu sou <span className="bg-gradient-to-r from-blue-500 via-purple-500 via-blue-400 via-purple-600 to-blue-500 bg-clip-text text-transparent whitespace-nowrap animate-gradient">Daniel Povea</span>
              </h1>
              
              <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Melhoria de processos e desenvolvimento de soluções
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="#projetos"
                  onClick={(e) => handleClick(e, 'projetos')}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium transition-all"
                >
                  Ver Projetos
                </a>
                <a 
                  href="#contato"
                  onClick={(e) => handleClick(e, 'contato')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    theme === 'dark' 
                      ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                  }`}
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
              theme === 'dark' ? 'border-blue-600' : 'border-blue-500'
            }`}>
              <img
                src="/assets/images/Perfil.jpeg"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;