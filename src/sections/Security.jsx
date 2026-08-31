import { securityPrinciples } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import { Icon } from '../components/icons';

export default function Security() {
  return (
    <section id="security" className="border-t border-line bg-base-raised">
      <div className="section-pad container-page">
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-pulse/40 bg-pulse/10 text-pulse">
            <Icon name="ShieldCheck" className="h-5 w-5" />
          </div>
          <SectionHeading
            title="Security by design"
            description="Security isn't a final step bolted on before shipping — it's a set of constraints my projects are built around from the start."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {securityPrinciples.map((item) => (
            <div key={item.title} className="bg-base p-6">
              <Icon name={item.icon} className="h-5 w-5 text-pulse" />
              <h3 className="mt-4 text-sm font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
