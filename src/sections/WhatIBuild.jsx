import { buildCards } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import { Icon } from '../components/icons';

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="section-pad border-t border-line">
      <div className="container-page">
        <SectionHeading title="What I build" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {buildCards.map((card) => (
            <div key={card.title} className="card card-hover p-6">
              <Icon name={card.icon} className="h-5 w-5 text-signal" />
              <h3 className="mt-4 font-display text-base font-semibold text-ink">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
