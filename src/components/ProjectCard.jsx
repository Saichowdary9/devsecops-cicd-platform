import { Icon } from './icons';
import TechBadge from './TechBadge';

export default function ProjectCard({ project }) {
  const { title, status, description, tech, highlights, liveUrl, githubUrl } = project;

  return (
    <article className="card card-hover flex flex-col overflow-hidden">
      {/* terminal-style header bar */}
      <div className="flex items-center gap-2 border-b border-line bg-base/60 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line-hover" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-hover" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-hover" />
        <span className="ml-3 truncate font-mono text-xs text-ink-faint">{status}</span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{description}</p>

        <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
          {highlights.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-ink-soft">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pulse" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3 pt-1">
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              View Project
            </a>
          ) : (
            <span
              className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md border border-line px-6 py-3 text-sm font-semibold text-ink-faint"
              title="Not deployed yet"
            >
              View Project
            </span>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
            <Icon name="ExternalLink" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
