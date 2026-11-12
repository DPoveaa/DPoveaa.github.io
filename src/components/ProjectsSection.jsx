import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';

const priority = [2, 1, 3, 6, 13, 5, 8, 4, 9, 10, 7, 11, 12];
const chapters = [...projects].sort((a, b) => {
  const rank = (id) => priority.includes(id) ? priority.indexOf(id) : priority.length;
  return rank(a.id) - rank(b.id);
});
const number = (value) => String(value).padStart(2, '0');
const titleOf = (project) => project.title.split(' - ')[0];

function IndexPage({ current, onSelect }) {
  return (
    <div className="folio-index">
      <p className="folio-label">Daniel Povea / Projetos</p>
      <h3>Índice</h3>
      <ol>
        {chapters.map((project, index) => (
          <li key={project.id}>
            <button type="button" aria-current={current === index + 2 ? 'page' : undefined}
              onClick={() => onSelect(index + 2)}>
              <span>{number(index + 1)}</span> {titleOf(project)}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Chapter({ project, page, onDetails }) {
  return (
    <article className="folio-chapter">
      <div className="folio-chapter-meta">
        <span className="folio-label">Capítulo {number(page - 1)}</span>
        <span>{project.categories[0]}</span>
      </div>
      {project.thumbnail
        ? <img className="folio-plate" src={project.thumbnail} alt="" />
        : <div className="folio-plate folio-type-plate" aria-hidden="true">{titleOf(project)}</div>}
      <h3>{titleOf(project)}</h3>
      <p className="folio-summary">{project.description.split('\n\n')[0]}</p>
      <ul className="folio-tech" aria-label="Tecnologias">
        {project.technologies.slice(0, 6).map((tech) => <li key={tech}>{tech}</li>)}
      </ul>
      <button type="button" className="folio-details" onClick={() => onDetails(project)}>
        Ver projeto <span aria-hidden="true">↗</span>
      </button>
    </article>
  );
}

function Cover({ onOpen }) {
  return (
    <div className="folio-cover">
      <div className="folio-cover-frame">
        <p className="folio-label">Daniel Povea</p>
        <h3>Projetos<span>.</span></h3>
        <p>Aplicações web, automação e jogos</p>
        <button type="button" onClick={onOpen}>Abrir livro <span aria-hidden="true">→</span></button>
      </div>
    </div>
  );
}

export default function ProjectsSection({ onProjectClick, modalOpen }) {
  const [page, setPage] = useState(0);
  const [flip, setFlip] = useState(null);
  const touch = useRef(null);
  const stage = useRef(null);
  const needsFocus = useRef(false);
  const last = chapters.length + 1;

  useEffect(() => {
    if (!flip) return;
    const fallback = window.setTimeout(() => setFlip(null), 780);
    return () => window.clearTimeout(fallback);
  }, [flip]);

  useEffect(() => {
    if (needsFocus.current) {
      stage.current.focus({ preventScroll: true });
      needsFocus.current = false;
    }
  }, [page]);

  function go(next) {
    if (flip || next < 0 || next > last || next === page) return;
    needsFocus.current = stage.current.contains(document.activeElement);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setFlip({ from: page, forward: next > page });
    }
    setPage(next);
  }

  function renderPage(value, interactive = true) {
    if (value === 0) return <Cover onOpen={interactive ? () => go(1) : undefined} />;
    if (value === 1) return <IndexPage current={page} onSelect={interactive ? go : () => {}} />;
    return <Chapter project={chapters[value - 2]} page={value}
      onDetails={interactive ? onProjectClick : () => {}} />;
  }

  function renderLeft(value, interactive = true) {
    return value <= 1
      ? <div className="folio-endpaper"><span>DP</span><p>Caderno de projetos</p></div>
      : <IndexPage current={value} onSelect={interactive ? go : () => {}} />;
  }

  function onKeyDown(event) {
    if (modalOpen || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      go(page + (event.key === 'ArrowRight' ? 1 : -1));
    }
  }

  function onTouchEnd(event) {
    const start = touch.current;
    touch.current = null;
    if (!start) return;
    const finger = event.changedTouches[0];
    if (!finger) return;
    const dx = finger.clientX - start.clientX;
    const dy = finger.clientY - start.clientY;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      go(page + (dx < 0 ? 1 : -1));
    }
  }

  return (
    <section id="projetos" className="portfolio-projects" aria-labelledby="folio-title">
      <div className="site-wrap">
        <div className="folio-heading">
          <div>
            <p className="site-kicker">Portfólio</p>
            <h2 id="folio-title">Caderno de projetos<span>.</span></h2>
          </div>
          <p>{chapters.length} capítulos. Abra o livro ou vá direto ao índice.</p>
        </div>
        <div className="folio-reader" onKeyDown={onKeyDown}>
          <div ref={stage} tabIndex={0} className={`folio-stage ${page === 0 ? 'is-closed' : 'is-open'}`}
            aria-label="Livro de projetos. Use as setas para virar as páginas."
            onTouchStart={(event) => {
              touch.current = event.target.closest('button, a') ? null : event.touches[0];
            }}
            onTouchCancel={() => { touch.current = null; }}
            onTouchEnd={onTouchEnd}>
            {page > 0 && (
              <aside className="folio-left">
                {renderLeft(page)}
              </aside>
            )}
            <div className="folio-right">{renderPage(page)}</div>
            {flip && (
              <div className={`folio-turn ${flip.forward ? 'turn-forward' : page === 0 ? 'turn-close' : 'turn-back'}`}
                aria-hidden="true" ref={(element) => { if (element) element.inert = true; }} onAnimationEnd={() => setFlip(null)}>
                <div className="folio-turn-front">{renderPage(flip.forward ? flip.from : page, false)}</div>
                <div className="folio-turn-back">{renderLeft(flip.forward ? page : flip.from, false)}</div>
              </div>
            )}
          </div>
          <nav className="folio-controls" aria-label="Navegação do livro">
            <button type="button" aria-label="Página anterior" disabled={page === 0} aria-disabled={!!flip || undefined}
              onClick={() => go(page - 1)}>←</button>
            <button type="button" disabled={page === 1} aria-disabled={!!flip || undefined} onClick={() => go(1)}>Índice</button>
            <span aria-live="polite" aria-atomic="true">
              {page === 0 ? 'Capa' : page === 1 ? 'Sumário' : `${number(page - 1)} / ${number(chapters.length)}`}
            </span>
            <button type="button" disabled={page === 0} aria-disabled={!!flip || undefined} onClick={() => go(0)}>Capa</button>
            <button type="button" aria-label="Próxima página" disabled={page === last} aria-disabled={!!flip || undefined}
              onClick={() => go(page + 1)}>→</button>
          </nav>
        </div>
      </div>
    </section>
  );
}
