import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

const ProjectDetail = ({ project, onClose }) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('descricao');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  const {
    title,
    description,
    images,
    technologies,
    features,
    link,
    repository
  } = project;

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
          theme === 'dark' ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-gray-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-20 p-2 rounded-full transition-all duration-200 ${
            theme === 'dark' 
              ? 'hover:bg-gray-700 bg-gray-800/80 text-gray-300' 
              : 'hover:bg-gray-200 bg-white/80 text-gray-600'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col">
          {/* Image/Video Section */}
          <div className="relative h-[350px] md:h-[600px] bg-black/40 overflow-hidden flex items-center justify-center">
            {images && images.length > 0 ? (
              <>
                {(() => {
                  const current = images[currentImageIndex];
                  const youtubeMatch = current.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
                  if (youtubeMatch) {
                    const videoId = youtubeMatch[1];
                    return (
                      <div className="w-full h-full flex items-center justify-center bg-black">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`Vídeo do projeto ${title}`}
                          className="w-full aspect-video md:h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    );
                  } else if (current.toLowerCase().endsWith('.mp4') || current.toLowerCase().includes('video.mp4')) {
                    return (
                      <video
                        src={current}
                        controls
                        className="max-w-full max-h-full"
                      />
                    );
                  } else {
                    return (
                      <img
                        src={current}
                        alt={`${title} screenshot`}
                        className="max-w-full max-h-full object-contain"
                      />
                    );
                  }
                })()}
                
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Sem imagens disponíveis
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 via-blue-400 via-purple-600 to-blue-500 bg-clip-text text-transparent inline-block animate-gradient">
              {title}
            </h2>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`text-xs md:text-sm px-4 py-1.5 rounded-full font-medium ${
                    theme === 'dark' 
                      ? 'bg-blue-900/30 text-blue-300 border border-blue-800/50' 
                      : 'bg-blue-50 text-blue-700 border border-blue-100'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mb-10">
              {repository && (
                <a
                  href={repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gray-700 hover:bg-gray-600 text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  Repositório
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                  Veja em Ação
                </a>
              )}
            </div>

            {/* Tabs */}
            <div className={`flex gap-8 border-b mb-8 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <button
                onClick={() => setActiveTab('descricao')}
                className={`pb-3 transition-all relative font-semibold text-lg ${
                  activeTab === 'descricao' 
                    ? 'text-blue-500' 
                    : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'
                }`}
              >
                Descrição
                {activeTab === 'descricao' && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                )}
              </button>
              {features && features.length > 0 && (
                <button
                  onClick={() => setActiveTab('recursos')}
                  className={`pb-3 transition-all relative font-semibold text-lg ${
                    activeTab === 'recursos' 
                      ? 'text-blue-500' 
                      : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  Recursos
                  {activeTab === 'recursos' && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                  )}
                </button>
              )}
            </div>

            <div className="min-h-[250px]">
              {activeTab === 'descricao' ? (
                <div className={`prose prose-blue max-w-none ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p className="whitespace-pre-line leading-relaxed text-lg">
                    {description}
                  </p>
                </div>
              ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-black/5">
                      <span className="text-blue-500 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
