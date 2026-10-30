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
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5 border bg-blue-500/10 border-blue-500/30 text-blue-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Disponível para novos projetos & soluções</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Olá! Eu sou <span className="bg-gradient-to-r from-blue-500 via-purple-500 via-blue-400 via-purple-600 to-blue-500 bg-clip-text text-transparent whitespace-nowrap animate-gradient">Daniel Povea</span>
              </h1>
              
              <p className={`text-lg md:text-xl mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Desenvolvedor <strong>Full Stack</strong> com foco em <strong>TypeScript, React, Next.js, Node.js e Python</strong>. Especialista em automações, bots, arquitetura de sistemas e soluções ponta a ponta.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projetos"
                  onClick={(e) => handleClick(e, 'projetos')}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25 flex items-center gap-2"
                >
                  <span>Ver Todos os Projetos</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </a>
                <a 
                  href="https://github.com/DPoveaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3.5 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border ${
                    theme === 'dark' 
                      ? 'bg-gray-800 hover:bg-gray-700 text-white border-gray-700' 
                      : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-300 shadow-sm'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub (@DPoveaa)</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 opacity-70 blur-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 shadow-2xl ${
                theme === 'dark' ? 'border-gray-800' : 'border-white'
              }`}>
                <img
                  src="/assets/images/Perfil.jpeg"
                  alt="Daniel Povea"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;