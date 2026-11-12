import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';

const order = [2, 1, 3, 6, 13, 5, 8, 4, 9, 10, 7, 11, 12];
const chapters = order.map((id) => projects.find((project) => project.id === id));
const finalPage = chapters.length + 1;
const titleOf = (project) => project.title.split(' - ')[0];

function PageImage({ project }) {
  const source = project.pageImage || project.thumbnail;
  if (!source) return null;
  return (
    <figure className="folio-preview">
      <img src={source} alt={project.pageImageAlt || `Imagem de ${titleOf(project)}`} loading="lazy" />
      {project.pageImageCaption && <figcaption>{project.pageImageCaption}</figcaption>}
    </figure>
  );
}

function PageCorner({ direction, onClick, closeCover = false }) {
  return (
    <button type="button" className={`folio-corner folio-corner-${direction}`}
      aria-label={closeCover ? 'Fechar livro' : direction === 'next' ? 'Próxima página' : 'Página anterior'}
      onClick={onClick}>
      <span aria-hidden="true">{direction === 'next' ? '›' : '‹'}</span>
    </button>
  );
}

function IndexPage({ onSelect }) {
  return (
    <div className="folio-index">
      <h3>Índice</h3>
      <ol>
        {chapters.map((project, index) => (
          <li key={project.id}>
            <button type="button" onClick={() => onSelect(index + 2)}>
              <span>{String(index + 1).padStart(2, '0')}</span> {titleOf(project)}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Chapter({ project, onDetails }) {
  return (
    <article className="folio-chapter">
      <div className="folio-mobile-preview"><PageImage project={project} /></div>
      <h3><button type="button" onClick={() => onDetails(project)}>{titleOf(project)} <span aria-hidden="true">↗</span></button></h3>
      <p className="folio-summary">{project.description.split('\n\n')[0]}</p>
      <ul className="folio-tech" aria-label="Tecnologias">
        {project.technologies.slice(0, 6).map((tech) => <li key={tech}>{tech}</li>)}
      </ul>
    </article>
  );
}

function hideInactive(active) {
  return {
    'aria-hidden': !active,
    ref: (element) => { if (element) element.inert = !active; }
  };
}

export default function ProjectsSection({ onProjectClick, modalOpen }) {
  const [page, setPage] = useState(0);
  const [turning, setTurning] = useState(null);
  const pointer = useRef(null);
  const stage = useRef(null);
  const needsFocus = useRef(false);

  useEffect(() => {
    if (!turning) return;
    const timeout = window.setTimeout(() => setTurning(null), 1050);
    return () => window.clearTimeout(timeout);
  }, [turning]);

  useEffect(() => {
    if (needsFocus.current) {
      stage.current.focus({ preventScroll: true });
      needsFocus.current = false;
    }
  }, [page]);

  function go(next) {
    if (turning || next < 0 || next > finalPage || next === page) return;
    needsFocus.current = stage.current.contains(document.activeElement);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const sheet = next > page ? page : next;
      setTurning({ sheet, skip: Math.abs(next - page) > 1 });
    }
    setPage(next);
  }

  function onKeyDown(event) {
    if (modalOpen || event.altKey || event.ctrlKey || event.metaKey) return;
    const target = { ArrowRight: page + 1, ArrowLeft: page - 1, Home: 1 }[event.key];
    if (target === undefined) return;
    event.preventDefault();
    go(target);
  }

  function onPointerDown(event) {
    if (!event.isPrimary || event.button !== 0 || event.target.closest('button, a')) return;
    pointer.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerUp(event) {
    const start = pointer.current;
    pointer.current = null;
    if (start?.id !== event.pointerId) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.35) {
      go(page + (dx < 0 ? 1 : -1));
    }
  }

  return (
    <section id="projetos" className="portfolio-projects" aria-labelledby="folio-title">
      <div className="site-wrap">
        <h2 id="folio-title" className="sr-only">Portfólio de projetos</h2>
        <div className="folio-reader">
          <div ref={stage} tabIndex={0}
            className={`folio-stage ${page > 0 ? 'is-open' : ''} ${turning ? 'is-turning' : ''}`}
            aria-label="Livro de projetos. Use as setas para virar páginas. Home abre o índice."
            onKeyDown={onKeyDown} onPointerDown={onPointerDown} onPointerUp={onPointerUp}
            onPointerCancel={() => { pointer.current = null; }}>
            <div className="folio-volume">
              <div className="folio-rear" aria-hidden="true" />
              {Array.from({ length: finalPage + 1 }, (_, sheet) => {
                const turned = sheet < page;
                const front = sheet === page;
                const back = sheet + 1 === page;
                const moving = turning?.sheet === sheet;
                const project = chapters[sheet - 2];
                const nextProject = chapters[sheet - 1];
                const cover = sheet === 0;
                const zIndex = moving ? 2 * finalPage + 2 : turned ? finalPage + sheet + 1 : finalPage - sheet + 1;
                return (
                  <div key={sheet} className={`folio-leaf ${cover ? 'folio-binding' : ''} ${turned ? 'is-turned' : ''} ${turning?.skip && !moving ? 'skip-turn' : ''}`}
                    style={{ zIndex }} onTransitionEnd={(event) => {
                      if (event.target === event.currentTarget && event.propertyName === 'transform' && moving) setTurning(null);
                    }}>
                    <div className="folio-face folio-front" {...hideInactive(front)}>
                      {cover ? (
                        <button type="button" className="folio-cover" aria-label="Abrir livro" onClick={() => go(1)}>
                          <span className="folio-cover-frame">
                            <span className="folio-label">Daniel Povea</span>
                            <span className="folio-cover-title">Portfólio<br />de projetos</span>
                          </span>
                        </button>
                      ) : (
                        <>
                          <div className="folio-page-content">
                            {sheet === 1 ? <IndexPage onSelect={go} />
                              : <Chapter project={project} onDetails={onProjectClick} />}
                          </div>
                          {sheet < finalPage && <PageCorner direction="next" onClick={() => go(page + 1)} />}
                          <div className="folio-mobile-prev">
                            <PageCorner direction="prev" closeCover={sheet === 1} onClick={() => go(page - 1)} />
                          </div>
                        </>
                      )}
                    </div>
                    {sheet < finalPage && (
                      <div className={`folio-face folio-back ${cover ? 'folio-inside-cover' : ''}`} {...hideInactive(back)}>
                        {nextProject && <PageImage project={nextProject} />}
                        <PageCorner direction="prev" closeCover={cover} onClick={() => go(page - 1)} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
