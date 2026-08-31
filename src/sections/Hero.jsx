import { personal } from '../data/portfolioData';
import PipelineVisual from '../components/PipelineVisual';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* faint grid backdrop, evokes network topology / infra diagrams */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#3A4557 1px, transparent 1px), linear-gradient(90deg, #3A4557 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="container-page grid gap-16 pb-24 sm:pb-32 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pulse" />
            </span>
            <span className="font-mono text-xs text-ink-soft">{personal.status}</span>
          </div>

          <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {personal.name}
          </h1>
          <p className="mt-3 font-display text-xl text-pulse sm:text-2xl">
            {personal.headline}
          </p>

          <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
            {personal.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PipelineVisual />
        </div>
      </div>
    </section>
  );
}
