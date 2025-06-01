import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [theme, setTheme] = useState('dark');
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    document.documentElement.classList.toggle('light', savedTheme === 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  const openProject = (project) => {
    setCurrentProject(project);
    window.scrollTo(0, 0);
  };

  const closeProject = () => {
    setCurrentProject(null);
  };

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <Header onLogoClick={closeProject} onNavClick={closeProject} />
        
        {currentProject ? (
          <ProjectDetail project={currentProject} onClose={closeProject} />
        ) : (
          <>
            <HeroSection />
            <AboutSection />
            <ProjectsSection onProjectClick={openProject} />
            <ContactSection />
          </>
        )}
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;