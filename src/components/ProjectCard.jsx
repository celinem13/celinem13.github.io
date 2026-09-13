function ProjectCard({ project }) {
  const {
    category,
    title,
    description,
    technologies,
    highlights,
    repositoryUrl,
  } = project

  return (
    <article className="project-card">
      <div className="project-summary">
        <p className="project-category">{category}</p>
        <h3>{title}</h3>
        <p>{description}</p>

        <div
          className="tag-list"
          aria-label={`${title} technologies`}
        >
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <div className="project-details">
        <ul>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <a
          className="project-link"
          href={repositoryUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View the ${title} repository on GitHub`}
        >
          View repository <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

export default ProjectCard