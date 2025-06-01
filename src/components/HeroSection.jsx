import React from 'react';
import { useTheme } from '../hooks/useTheme';

const HeroSection = () => {
  const { theme } = useTheme();
  
  return (
    <section id="inicio" className="pt-24 pb-20 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Olá, eu sou <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Daniel Povea</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium mb-6">
                <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>Desenvolvedor FullStack</span> com experiência em React, JavaScript e TypeScript
              </h2>
              
              <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Especialista em criar soluções web inovadoras e responsivas, 
                com foco em experiência do usuário e arquitetura de software de alta qualidade.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="#projetos"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium transition-all"
                >
                  Ver Projetos
                </a>
                <a 
                  href="#contato"
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