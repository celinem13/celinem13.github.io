import { skillGroups } from '../../data/portfolioData'

function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <p className="section-number">04 / Technical toolkit</p>

        <h2>Tools I use to build, test, and understand software.</h2>

        <p>
          My toolkit spans full-stack application development, data workflows,
          systems programming, and collaborative engineering.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.category}>
            <h3>{group.category}</h3>

            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection