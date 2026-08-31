import { resume } from '../data/portfolioData';
import { Icon } from '../components/icons';

export default function Resume() {
  return (
    <section id="resume" className="section-pad border-t border-line">
      <div className="container-page">
        <div className="card flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div className="max-w-prose">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {resume.headline}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">{resume.text}</p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a href={resume.fileUrl} download className="btn-primary">
              <Icon name="ArrowUpRight" className="h-4 w-4 rotate-45" />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
