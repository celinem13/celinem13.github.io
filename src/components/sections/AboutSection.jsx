function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-layout">
        <div className="about-copy">
          <p className="section-number">05 / About and education</p>

          <h2>Building software—and helping others understand it.</h2>

          <div className="about-text">
            <p>
              I&apos;m a software engineer and educator based in Orange County,
              California. I&apos;m drawn to projects where complex information
              can become a dependable, useful tool.
            </p>

            <p>
              My work has included automating aviation data workflows,
              developing full-stack applications, and building systems-focused
              C++ projects.
            </p>

            <p>
              Teaching programming and robotics has also shaped how I work: I
              break problems into understandable parts, communicate decisions
              clearly, and stay patient while debugging.
            </p>
          </div>
        </div>

        <article className="education-card">
          <p className="education-label">Education</p>

          <h3>California State Polytechnic University, Pomona</h3>

          <p className="education-degree">
            Bachelor of Science in Computer Science
          </p>

          <p className="education-period">2018 — 2022</p>

          <ul className="education-details">
            <li>Kellogg Honors College</li>
            <li>Computer Science Mentor</li>
            <li>CPP Game Development Club President</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default AboutSection