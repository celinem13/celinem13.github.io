import { experiences } from "../../../data/portfolioData";
import "./ExperienceSection.css";

function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-heading">
        <p className="section-number">03 / Experience</p>

        <h2>Software, data, and technical education.</h2>

        <p>
          My background combines aviation software with technical education,
          giving me experience both building systems and explaining complex
          ideas clearly.
        </p>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-item" key={experience.id}>
            <div className="experience-meta">
              <p>{experience.period}</p>
            </div>

            <div className="experience-content">
              <p className="experience-company">{experience.company}</p>
              <h3>{experience.role}</h3>

              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection