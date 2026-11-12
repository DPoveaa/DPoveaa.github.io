import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import './portfolio.css';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') === 'light' ? 'light' : 'dark');

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
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <footer className="portfolio-footer">
          <div className="site-wrap">
            <p>© {new Date().getFullYear()} Daniel Povea</p>
            <a href="#inicio">Voltar ao início</a>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
