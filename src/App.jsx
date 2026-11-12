import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ProjectDetail from './components/ProjectDetail';
import './portfolio.css';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') === 'light' ? 'light' : 'dark');
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, toggleTheme: () => setTheme((current) => current === 'dark' ? 'light' : 'dark') }}>
      <div className="portfolio-site">
        <header className="portfolio-header">
          <div className="site-wrap">
            <a className="site-wordmark" href="#inicio">Povea<span>.</span></a>
            <nav aria-label="Menu principal">
              <a href="#projetos">Projetos</a>
              <a href="#sobre">Sobre</a>
              <a href="#contato">Contato</a>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main>
          <HeroSection />
          <ProjectsSection onProjectClick={setCurrentProject} modalOpen={!!currentProject} />
          <AboutSection />
          <ContactSection />
        </main>
        <footer className="portfolio-footer">
          <div className="site-wrap">
            <p>© {new Date().getFullYear()} Daniel Povea</p>
            <a href="#inicio">Voltar ao início ↑</a>
          </div>
        </footer>
        {currentProject && <ProjectDetail project={currentProject} onClose={() => setCurrentProject(null)} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
