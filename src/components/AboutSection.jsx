import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { SKILLS } from '../utils/constants';

const AboutSection = () => {
  const { theme } = useTheme();
  
  const categories = {
    'Linguagens Principais': ['TypeScript', 'JavaScript', 'Python', 'C#', 'SQL'],
    'Frontend & Web': ['ReactJS', 'Next.js', 'Angular', 'Tailwind CSS'],
    'Backend & Persistência': ['Node.js', 'PostgreSQL', 'MongoDB', 'MySQL', 'Knex'],
    'Infraestrutura & DevOps': ['Docker', 'Linux', 'Ubuntu Server', 'AWS'],
    'Automação & Game Engines': ['Selenium', 'Puppeteer', 'Unity', 'DBeaver']
  };
  
  return (
    <section 
      id="sobre" 
      className={`py-20 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-800/60' 
          : 'bg-gray-100/70'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 via-blue-400 via-purple-600 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Sobre Mim
            </span>
          </h2>
          
          <div className={`mb-12 p-6 sm:p-8 rounded-2xl border transition-all ${
            theme === 'dark' 
              ? 'bg-gray-900/90 border-gray-700/70 shadow-2xl shadow-black/40' 
              : 'bg-white border-gray-200/80 shadow-xl shadow-gray-200/50'
          }`}>
            <p className={`text-base sm:text-lg mb-4 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Desenvolvedor com sólida experiência na concepção e entrega de aplicações ponta a ponta, automações inteligentes, web scraping e bots de alta escala desde 2020. Atuando como freelancer e desenvolvedor full-stack, gerencio todo o ciclo de vida do software: desde o levantamento de requisitos, arquitetura e codificação até containerização, deploy em servidores Linux e manutenção contínua.
            </p>

            <p className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Domínio prático em <strong>TypeScript, Node.js, React, Next.js, Python e C#</strong>. Experiência na orquestração de containers com <strong>Docker</strong>, monitoramento de processos com <strong>PM2</strong> em ambientes <strong>Ubuntu Server</strong>, automação de navegadores com <strong>Selenium</strong> e <strong>Puppeteer</strong>, além de modelagem de dados relacionais e NoSQL com <strong>PostgreSQL, MySQL e MongoDB</strong>.
            </p>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Minhas Competências Técnicas
          </h3>
          
          <div className="space-y-6">
            {Object.entries(categories).map(([category, skills]) => (
              <div 
                key={category}
                className={`p-5 rounded-xl border ${
                  theme === 'dark' ? 'bg-gray-900/40 border-gray-800' : 'bg-white/70 border-gray-200'
                }`}
              >
                <h4 className={`text-base sm:text-lg font-bold mb-3 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map(skill => {
                    const skillInfo = SKILLS.find(s => s.name === skill) || { name: skill, icon: "📦" };
                    return (
                      <div 
                        key={skill}
                        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-transform hover:scale-105 ${
                          theme === 'dark' 
                            ? 'bg-gray-800 text-gray-200 border border-gray-700' 
                            : 'bg-gray-100 text-gray-800 border border-gray-200'
                        }`}
                      >
                        {skillInfo.icon && skillInfo.icon.startsWith('/') ? (
                          <img 
                            src={skillInfo.icon} 
                            alt={`${skillInfo.name} logo`}
                            className="w-4 h-4 object-contain"
                          />
                        ) : (
                          <span>{skillInfo.icon}</span>
                        )}
                        <span>{skillInfo.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;