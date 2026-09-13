import ProjectCard from '../ProjectCard'
import { projects } from '../../data/portfolioData'

function ProjectsSection() {
  return (
    <section className="work-section" id="work">
      <div className="section-heading">
        <p className="section-number">02 / Selected work</p>

        <h2>Engineering projects with a clear purpose.</h2>

        <p>
          My projects explore aviation systems, full-stack communities, and
          data analysis.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection