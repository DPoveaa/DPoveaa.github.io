import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = ({ onProjectClick }) => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState('all');
  
  // Custom prioritized categories
  const primaryCategories = [
    'all',
    'Fullstack & Web',
    'Bots & Automação',
    'E-commerce',
    'Jogos (Game Dev)',
    'Python & Scraping',
    'TypeScript',
    'C#'
  ];

  // Combine and remove duplicates
  const existingCategories = new Set(projects.flatMap(project => project.categories));
  const categories = [
    ...primaryCategories.filter(c => c === 'all' || existingCategories.has(c)),
    ...Array.from(existingCategories).filter(c => !primaryCategories.includes(c))
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));

  const totalLive = projects.filter(p => p.statusType === 'live').length;
  
  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 via-blue-400 via-purple-600 to-blue-500 bg-clip-text text-transparent animate-gradient">
            Meus Projetos & Repositórios
          </span>
        </h2>
        
        <p className={`text-base md:text-lg text-center max-w-3xl mx-auto mb-8 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Explore todos os meus projetos desenvolvidos. Cada projeto possui o <strong className="text-blue-500">código-fonte no GitHub</strong> e o link direto para <strong className="text-emerald-500">acesso em funcionamento</strong> ou demonstração.
        </p>

        {/* Quick Highlights Counter */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10 text-sm">
          <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${
            theme === 'dark' ? 'bg-gray-800/80 border-gray-700 text-gray-300' : 'bg-white border-gray-200 text-gray-700 shadow-sm'
          }`}>
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span>Total: <strong>{projects.length}</strong> repositórios catalogados</span>
          </div>
          <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${
            theme === 'dark' ? 'bg-gray-800/80 border-gray-700 text-emerald-400' : 'bg-white border-gray-200 text-emerald-600 shadow-sm'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span><strong>{totalLive}</strong> projetos online e ativos em produção</span>
          </div>
        </div>
        
        {/* Category Filter Pills */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-2.5 mb-12">
          {categories.map(category => {
            const count = category === 'all' 
              ? projects.length 
              : projects.filter(p => p.categories.includes(category)).length;

            return (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  filter === category 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105' 
                    : theme === 'dark' 
                      ? 'bg-gray-800/90 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700/60' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200 shadow-sm'
                }`}
              >
                <span>{category === 'all' ? 'Todos' : category}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  filter === category
                    ? 'bg-blue-800 text-white'
                    : theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-2 sm:px-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project}
                onClick={() => onProjectClick(project)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-lg font-medium text-gray-400">
                Nenhum projeto encontrado nesta categoria.
              </p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm"
              >
                Ver todos os projetos
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;