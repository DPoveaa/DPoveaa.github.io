import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Footer = ({ onLogoClick }) => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = (e) => {
    e.preventDefault();
    if (onLogoClick) {
      onLogoClick();
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#inicio" onClick={scrollToTop} className="text-xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Povea
              </span>
            </a>
            <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Desenvolvedor FullStack
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/DPoveaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:text-blue-500 transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/daniel-povea-507893222/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:text-blue-500 transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
            <a 
              href="mailto:danieldpcaires@gmail.com" 
              className={`hover:text-blue-500 transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-6 border-t border-gray-700 pt-6 text-center">
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} Daniel Povea. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;