import { github } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import TechBadge from '../components/TechBadge';
import { Icon } from '../components/icons';

export default function GitHubActivity() {
  return (
    <section id="github" className="section-pad border-t border-line">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            title="Backed by real repositories"
            description="Every project here is meant to exist as an actual, browsable repository — not just a description on a page."
          />
          <a
            href={github.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary shrink-0"
          >
            <Icon name="Github" className="h-4 w-4" />
            GitHub Profile
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {github.repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover group flex flex-col p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-base font-semibold text-ink group-hover:text-signal">
                  {repo.name}
                </h3>
                <Icon
                  name="ArrowUpRight"
                  className="h-4 w-4 shrink-0 text-ink-faint transition-colors group-hover:text-signal"
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {repo.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {repo.tech.slice(0, 6).map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs text-ink-faint">
          Repository links are placeholders until each project is published — no activity
          statistics are shown here that have not actually happened yet.
        </p>
      </div>
    </section>
  );
}
