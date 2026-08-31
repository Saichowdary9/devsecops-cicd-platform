import { journeySteps } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

export default function Journey() {
  return (
    <section id="journey" className="section-pad border-t border-line">
      <div className="container-page">
        <SectionHeading
          title="My DevOps journey"
          description="A learning roadmap, built one layer at a time rather than a list of tools I've merely heard of."
        />

        <ol className="relative mt-14 max-w-2xl">
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px bg-line"
            aria-hidden="true"
          />
          {journeySteps.map((step, i) => (
            <li key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-mono text-sm text-pulse">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="pt-1.5">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
