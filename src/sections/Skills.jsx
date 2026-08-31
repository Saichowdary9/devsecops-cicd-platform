import { skillCategories } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import TechBadge from '../components/TechBadge';
import { Icon } from '../components/icons';

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line">
      <div className="container-page">
        <SectionHeading
          title="Skills & tools"
          description="The stack I'm actively practicing with, organized by where it fits in the delivery pipeline."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.id} className="card card-hover p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-base text-pulse">
                  <Icon name={category.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {category.title}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
