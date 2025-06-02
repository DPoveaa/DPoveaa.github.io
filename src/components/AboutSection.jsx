import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { SKILLS } from '../utils/constants';

const AboutSection = () => {
  const { theme } = useTheme();
  
  const categories = {
    'Linguagens': ['Python', 'C++', 'C#', 'JavaScript', 'TypeScript'],
    'Frontend': ['ReactJS', 'Angular'],
    'Banco de Dados': ['MySQL', 'SQL'],
    'Especialidade': ['FullStack']
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
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
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
              Sou um desenvolvedor FullStack apaixonado por criar soluções tecnológicas eficientes e elegantes. 
              Minha formação técnica, combinada com minha experiência em diversos projetos, me permite 
              abordar problemas complexos e desenvolver aplicações completas do front-end ao back-end.
            </p>
            
            <p className={`text-lg ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Estou sempre em busca de novos desafios e oportunidades para expandir minhas habilidades e 
              conhecimentos no mundo da programação. Meu objetivo é desenvolver software que não apenas 
              funcione corretamente, mas também ofereça uma experiência excepcional aos usuários.
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