const skills = [
  ['Interfaces', 'React, Next.js, TypeScript, Tailwind CSS'],
  ['Back-end e dados', 'Node.js, Express, PostgreSQL, Prisma, Knex'],
  ['Automação e operação', 'Python, Selenium, Docker, Linux, GitHub Actions'],
];

export default function AboutSection() {
  return (
    <section id="sobre" className="portfolio-about">
      <div className="site-wrap about-layout">
        <div>
          <p className="site-kicker">Sobre mim</p>
          <h2>Da interface<br />ao servidor<span>.</span></h2>
          <p>Fui o principal desenvolvedor da Kapsu, uma plataforma de e-commerce com checkout, portal de fornecedores e assistente de IA. Na Global Pharma Human, trabalhei no marketplace e cuidei da hospedagem e da migração de sites em Linux.</p>
        </div>
        <dl>
          {skills.map(([area, tools]) => (
            <div key={area}><dt>{area}</dt><dd>{tools}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}
