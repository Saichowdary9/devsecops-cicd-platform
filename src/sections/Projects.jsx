import { projects } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-line">
      <div className="container-page">
        <SectionHeading
          title="Featured projects"
          description="Hands-on builds where I'm applying the DevOps toolchain end-to-end, not just reading about it."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
