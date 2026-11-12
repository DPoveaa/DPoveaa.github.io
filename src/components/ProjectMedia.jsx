import { useRef, useState } from 'react';

const assetPath = '/assets/images/';
const logos = {
  TypeScript: 'TypeScript.png', JavaScript: 'javascript.png', Python: 'Python.png',
  React: 'React.png', 'Next.js': 'Next.js.svg', Angular: 'Angular.svg',
  'Node.js': 'Node.js.svg', PostgreSQL: 'Postgresql_elephant.svg.png', Knex: 'knex-logo.svg',
  'Tailwind CSS': 'Tailwind CSS.svg', Docker: 'docker-logo.png', Linux: 'Linux.svg',
  Ubuntu: 'Ubuntu.svg', Selenium: 'Selenium.svg', Puppeteer: 'puppeteer.png',
  HTML: 'html-5.png', CSS: 'CSS3.png', 'C#': 'CSharp-logo.svg',
  Unity: 'Unity.svg', Godot: 'godot-mystory.svg', MySQL: 'MySQL.png',
  MongoDB: 'MongoDB.svg', SQL: 'SQL.png', AWS: 'AWS.svg',
};

const aliases = { 'React 18': 'React', 'ReactJS': 'React', 'HTML5': 'HTML', 'CSS3': 'CSS',
  'CSS3 Animações': 'CSS', 'Godot Engine': 'Godot', 'Ubuntu Server': 'Ubuntu' };

export function TechnologyIcons({ technologies = Object.keys(logos), cover = false }) {
  return (
    <span className={cover ? 'folio-cover-tech' : 'folio-tech'} role="list" aria-label="Tecnologias">
      {technologies.map((tech) => {
        const logo = logos[aliases[tech] || tech];
        return (
          <span className="folio-tech-item" role="listitem" key={tech} title={tech}>
            {logo && <img src={assetPath + logo} alt={cover ? tech : ''} draggable="false" />}
            {!cover && <span>{tech}</span>}
          </span>
        );
      })}
    </span>
  );
}

function Ribbon({ index, count, onAdvance, active }) {
  const start = useRef(null);
  const skipClick = useRef(false);
  const [pull, setPull] = useState(0);

  return (
    <button type="button" className="folio-ribbon" disabled={!active} data-pulling={pull > 0} style={{ '--ribbon-pull': `${pull}px` }}
      aria-label={`Trocar mídia. ${index + 1} de ${count}`}
      title="Puxe a fita ou clique para trocar a mídia"
      onPointerDown={(event) => {
        if (!event.isPrimary || event.button !== 0) return;
        skipClick.current = false;
        start.current = event.clientY;
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (start.current !== null) setPull(Math.min(28, Math.max(0, event.clientY - start.current)));
      }}
      onPointerUp={(event) => {
        if (start.current === null) return;
        const dragged = event.clientY - start.current;
        skipClick.current = Math.abs(dragged) > 8;
        start.current = null;
        setPull(0);
        if (dragged >= 19) onAdvance();
      }}
      onPointerCancel={() => { start.current = null; setPull(0); }}
      onClick={(event) => {
        if (!skipClick.current || event.detail === 0) onAdvance();
        skipClick.current = false;
      }}>
      <span aria-hidden="true">{index + 1}/{count}</span>
    </button>
  );
}

export function ProjectMedia({ project, index = 0, onAdvance, active }) {
  const media = [...new Set([project.pageImage, ...project.images, project.thumbnail].filter(Boolean))];
  if (!media.length) return null;
  const source = media[index];
  const youtube = source.match(/^https:\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]{11})(?:[?&#]|$)/)?.[1];
  const video = /\.mp4$/i.test(source);
  const poster = project.pageImage || project.thumbnail;
  const name = project.title.split(' - ')[0];
  const caption = source === project.pageImage ? project.pageImageCaption : null;

  return (
    <figure className="folio-preview" data-folio-media>
      <div className="folio-media-frame">
        {active && youtube ? (
          <iframe key={source} title={`Vídeo de ${name}`} src={`https://www.youtube-nocookie.com/embed/${youtube}`}
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        ) : active && video ? (
          <video key={source} src={source} poster={poster} controls playsInline preload="metadata"
            aria-label={`Vídeo de ${name}`} />
        ) : (
          <img src={youtube || video ? poster : source} draggable="false"
            alt={source === project.pageImage ? project.pageImageAlt : `Imagem de ${name}`} loading="lazy" />
        )}
        {media.length > 1 && <Ribbon index={index} count={media.length} active={active}
          onAdvance={() => onAdvance((index + 1) % media.length)} />}
      </div>
      <figcaption className={media.length > 1 ? 'folio-media-caption has-ribbon' : 'folio-media-caption'}>
        {youtube ? <a href={source} target="_blank" rel="noreferrer">Ver no YouTube</a> : caption}
      </figcaption>
      {active && <span className="sr-only" aria-live="polite">{youtube || video ? 'Vídeo' : 'Imagem'} {index + 1} de {media.length}</span>}
    </figure>
  );
}
