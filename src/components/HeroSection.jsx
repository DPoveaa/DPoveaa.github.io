export default function HeroSection() {
  return (
    <section id="inicio" className="portfolio-hero">
      <div className="site-wrap hero-layout">
        <div className="hero-copy">
          <p className="site-kicker">Desenvolvedor de Software</p>
          <h1>Daniel<br />Povea<span>.</span></h1>
          <p>Construo aplicações web, integrações e automações. Do primeiro componente à aplicação em produção.</p>
          <div className="hero-actions">
            <a className="hero-primary" href="#projetos">Explorar projetos <span aria-hidden="true">↓</span></a>
            <a className="hero-secondary" href="https://github.com/DPoveaa">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <figure className="hero-portrait">
          <img src="/assets/images/Perfil.jpeg" alt="Daniel Povea" fetchPriority="high" />
          <figcaption>São Paulo, Brasil</figcaption>
        </figure>
      </div>
    </section>
  );
}
