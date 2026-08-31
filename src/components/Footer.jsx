import { personal, contact, footer } from '../data/portfolioData';
import { Icon } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-ink">{personal.name}</p>
          <p className="mt-1 text-sm text-ink-soft">{footer.tagline}</p>
        </div>

        <div className="flex gap-5">
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-ink-soft transition-colors hover:text-signal"
          >
            <Icon name="Github" className="h-5 w-5" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-ink-soft transition-colors hover:text-signal"
          >
            <Icon name="Linkedin" className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Send an email"
            className="text-ink-soft transition-colors hover:text-signal"
          >
            <Icon name="Mail" className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-line/60">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.note}</p>
          <p>&copy; {year} {personal.name}</p>
        </div>
      </div>
    </footer>
  );
}
