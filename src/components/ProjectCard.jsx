import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ProjectCard = ({ project, onClick }) => {
  const { theme } = useTheme();
  const { title, description, thumbnail, technologies } = project;
  
  // Limitar a descrição para não ficar muito grande no card
  const shortDescription = description.length > 120 
    ? description.slice(0, 120) + '...' 
    : description;
  
  // Limitar tecnologias exibidas no card
  const displayTechnologies = technologies.slice(0, 3);
  const hasMoreTech = technologies.length > 3;
  
  return (
    <div 
      onClick={onClick}
      className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-800 hover:bg-gray-750 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40' 
          : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-xl'
      }`}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={thumbnail || '/assets/images/placeholder-project.jpg'} 
          alt={`Miniatura do projeto ${title}`} 
          className="w-full h-full object-contain bg-gray-100 dark:bg-gray-800 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-2 sm:mb-3">
          <h3 className="text-lg sm:text-xl font-semibold line-clamp-2">{title}</h3>
          <div 
            className={`p-2 rounded-full transition-transform group-hover:rotate-45 ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </div>
        </div>
        
        <p className={`mb-3 sm:mb-4 text-sm line-clamp-3 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {displayTechnologies.map((tech, index) => (
            <span 
              key={index} 
              className={`text-xs px-2 py-1 rounded ${
                theme === 'dark' 
                  ? 'bg-gray-700 text-blue-300' 
                  : 'bg-gray-100 text-blue-700'
              }`}
            >
              {tech}
            </span>
          ))}
          {hasMoreTech && (
            <span 
              className={`text-xs px-2 py-1 rounded ${
                theme === 'dark' 
                  ? 'bg-gray-700 text-gray-400' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              +{technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;