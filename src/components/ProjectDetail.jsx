import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ProjectDetail = ({ project, onClose }) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('descricao');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    title,
    description,
    images,
    technologies,
    features,
    link,
    repository,
    codeSnippets
  } = project;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleClose = () => {
    // Primeiro fecha o projeto
    onClose();
    // Depois rola até a seção de projetos
    setTimeout(() => {
      const projetosSection = document.getElementById('projetos');
      if (projetosSection) {
        projetosSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={handleClose}
          className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-colors ${
            theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span>Voltar aos projetos</span>
        </button>
      </div>

      <div className={`rounded-xl overflow-hidden shadow-2xl mb-10 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="relative aspect-video">
          {images && images.length > 0 ? (
            <>
              <img
                src={images[currentImageIndex]}
                alt={`Imagem do projeto ${title} - ${currentImageIndex + 1}`}
                className="w-full h-full object-contain bg-black"
              />
              
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full ${
                          currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-900">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-600 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <p className="text-gray-400">Sem imagens disponíveis</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`text-sm px-3 py-1 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-gray-700 text-blue-300' 
                    : 'bg-gray-100 text-blue-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-8">
            {repository && (
              <a
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
                Visualizar projeto
              </a>
            )}
          </div>

          {/* Tabs navigation */}
          <div className="border-b border-gray-700 mb-6">
            <nav className="flex gap-4 -mb-px">
              <button
                onClick={() => setActiveTab('descricao')}
                className={`py-2 font-medium ${
                  activeTab === 'descricao'
                    ? theme === 'dark' 
                      ? 'border-b-2 border-blue-500 text-blue-400' 
                      : 'border-b-2 border-blue-600 text-blue-600'
                    : theme === 'dark'
                      ? 'text-gray-400 hover:text-gray-300'
                      : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Descrição
              </button>
              {features && features.length > 0 && (
                <button
                  onClick={() => setActiveTab('recursos')}
                  className={`py-2 font-medium ${
                    activeTab === 'recursos'
                      ? theme === 'dark' 
                        ? 'border-b-2 border-blue-500 text-blue-400' 
                        : 'border-b-2 border-blue-600 text-blue-600'
                      : theme === 'dark'
                        ? 'text-gray-400 hover:text-gray-300'
                        : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Recursos
                </button>
              )}
              {codeSnippets && codeSnippets.length > 0 && (
                <button
                  onClick={() => setActiveTab('codigo')}
                  className={`py-2 font-medium ${
                    activeTab === 'codigo'
                      ? theme === 'dark' 
                        ? 'border-b-2 border-blue-500 text-blue-400' 
                        : 'border-b-2 border-blue-600 text-blue-600'
                      : theme === 'dark'
                        ? 'text-gray-400 hover:text-gray-300'
                        : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Código
                </button>
              )}
            </nav>
          </div>

          {/* Tab content */}
          <div>
            {activeTab === 'descricao' && (
              <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                <p className="whitespace-pre-line">{description}</p>
              </div>
            )}

            {activeTab === 'recursos' && features && (
              <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}

            {activeTab === 'codigo' && codeSnippets && (
              <div className="space-y-6">
                {codeSnippets.map((snippet, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-medium text-lg">{snippet.title}</h3>
                    <SyntaxHighlighter
                      language={snippet.language}
                      style={theme === 'dark' ? atomOneDark : atomOneLight}
                      customStyle={{
                        borderRadius: '0.5rem',
                        padding: '1rem',
                      }}
                    >
                      {snippet.code}
                    </SyntaxHighlighter>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;