import { about } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-line">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading title="About me" />

        <div>
          <div className="space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p} className="max-w-prose text-base leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {about.focusAreas.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-md border border-line bg-surface px-4 py-3 text-sm text-ink"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
