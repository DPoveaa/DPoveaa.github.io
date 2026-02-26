import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { SKILLS } from '../utils/constants';

const AboutSection = () => {
  const { theme } = useTheme();
  
  const categories = {
    'Linguagens': ['Python', 'C#', 'JavaScript', 'TypeScript', 'Unity'],
    'Frontend': ['ReactJS', 'Angular', 'Next.js', 'Tailwind CSS'],
    'Backend': ['Node.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'Knex', 'SQL'],
    'DevOps & Cloud': ['AWS', 'Docker', 'Linux', 'Ubuntu Server'],
    'Ferramentas & Automação': ['Puppeteer', 'Selenium', 'DBeaver']
  };
  
  return (
    <section 
      id="sobre" 
      className={`py-20 ${
        theme === 'dark' 
          ? 'bg-gray-800' 
          : 'bg-gray-100'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 via-blue-400 via-purple-600 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Sobre Mim
            </span>
          </h2>
          
          <div className={`mb-12 p-6 rounded-xl ${
            theme === 'dark' 
              ? 'bg-gray-900 shadow-xl shadow-black/20' 
              : 'bg-white shadow-xl shadow-gray-200/60'
          }`}>
            <p className={`text-lg mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
                Desenvolvedor com trajetória focada em automação, bots e web scraping desde 2020. Atuo como freelancer desde 2024, onde gerencio o ciclo completo de projetos — desde a concepção e desenvolvimento até o deploy e manutenção.
            </p>

               <p className={`text-lg mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
                Tenho domínio técnico em Python, C#, JavaScript e TypeScript, além de sólida experiência em containerização com Docker. No lado da infraestrutura, transito entre ambientes Windows e Linux (Ubuntu Server), com expertise em gerenciamento de servidores via SSH, deploy de aplicações e monitoramento de processos com PM2.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-8">
            Minhas Competências
          </h3>
          
          <div className="space-y-8">
            {Object.entries(categories).map(([category, skills]) => (
              <div key={category}>
                <h4 className={`text-xl font-semibold mb-3 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map(skill => {
                    const skillInfo = SKILLS.find(s => s.name === skill) || { name: skill, icon: "📦" };
                    return (
                      <div 
                        key={skill}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                          theme === 'dark' 
                            ? 'bg-gray-700 text-gray-200' 
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        {skillInfo.icon.startsWith('/') ? (
                          <img 
                            src={skillInfo.icon} 
                            alt={`${skillInfo.name} logo`}
                            className="w-5 h-5 object-contain"
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