import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = ({ onProjectClick }) => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', ...new Set(projects.flatMap(project => project.categories))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));
  
  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Meus Projetos
          </span>
        </h2>
        
        <p className={`text-lg text-center max-w-3xl mx-auto mb-12 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Abaixo você encontra alguns dos projetos que desenvolvi. Clique em um projeto para ver mais detalhes,
          incluindo tecnologias utilizadas, imagens e trechos de código.
        </p>
        
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : theme === 'dark' 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project}
                onClick={() => onProjectClick(project)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-lg font-medium">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;