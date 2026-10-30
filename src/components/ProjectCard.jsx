import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ProjectCard = ({ project, onClick }) => {
  const { theme } = useTheme();
  const { 
    title, 
    description, 
    thumbnail, 
    technologies, 
    repository, 
    link, 
    badge,
    statusType 
  } = project;
  
  // Limitar a descrição para exibição no card
  const shortDescription = description.length > 115 
    ? description.slice(0, 115) + '...' 
    : description;
  
  // Limitar tecnologias exibidas no card
  const displayTechnologies = technologies.slice(0, 3);
  const hasMoreTech = technologies.length > 3;

  const isLive = statusType === 'live' || (link && !link.includes('github.com'));

  return (
    <div 
      onClick={onClick}
      className={`group flex flex-col justify-between rounded-2xl overflow-hidden transition-all duration-300 border cursor-pointer ${
        theme === 'dark' 
          ? 'bg-gray-800/90 border-gray-700/70 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10' 
          : 'bg-white border-gray-200/80 hover:border-blue-400 hover:shadow-xl shadow-gray-200/50'
      }`}
    >
      <div>
        {/* Thumbnail container with status badge */}
        <div className={`relative h-52 sm:h-56 overflow-hidden flex items-center justify-center transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-900/80' : 'bg-gray-100/90'
        }`}>
          <img 
            src={thumbnail || '/assets/images/portfolio-v1-0.png'} 
            alt={`Miniatura do projeto ${title}`} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Status Badge */}
          {badge && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-black/60 text-white shadow-lg border border-white/10">
              {isLive && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              )}
              {badge}
            </div>
          )}

          {/* Quick open hint button */}
          <div 
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 ${
              theme === 'dark' ? 'bg-black/60 text-blue-400' : 'bg-white/80 text-blue-600'
            }`}
            title="Ver detalhes completos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          </div>
        </div>
        
        {/* Card Body */}
        <div className="p-5">
          <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-1 group-hover:text-blue-500 transition-colors">
            {title}
          </h3>
          
          <p className={`mb-4 text-sm line-clamp-3 leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {shortDescription}
          </p>
          
          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {displayTechnologies.map((tech, index) => (
              <span 
                key={index} 
                className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                  theme === 'dark' 
                    ? 'bg-blue-950/40 text-blue-300 border border-blue-800/40' 
                    : 'bg-blue-50 text-blue-700 border border-blue-100'
                }`}
              >
                {tech}
              </span>
            ))}
            {hasMoreTech && (
              <span 
                className={`text-xs px-2 py-1 rounded-md ${
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

      {/* Card Footer with Direct Action Buttons */}
      <div className={`p-4 pt-3 border-t flex items-center justify-between gap-2 ${
        theme === 'dark' ? 'border-gray-700/60 bg-gray-900/30' : 'border-gray-100 bg-gray-50/70'
      }`}>
        {/* Code / Git Repo Link */}
        {repository ? (
          <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
              theme === 'dark'
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 hover:text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
            title="Acessar código-fonte no GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Código</span>
          </a>
        ) : <div />}

        {/* Live / App Access Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 ${
              isLive 
                ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20' 
                : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20'
            }`}
            title="Acessar projeto em funcionamento"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            <span>{isLive ? 'Acessar' : 'Ver Mais'}</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;