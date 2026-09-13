import './App.css'

const strengths = [
  {
    label: 'Experience',
    value: 'Flight-data automation',
  },
  {
    label: 'Primary tools',
    value: 'Python · SQL · React · C++',
  },
  {
    label: 'Perspective',
    value: 'Engineering + technical education',
  },
]

function App() {
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Celine Mangahas home">
          <span className="wordmark-initials" aria-hidden="true">
            CM
          </span>
          <span>Celine Mangahas</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a
            href="https://github.com/celinem13"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              Software Engineer <span aria-hidden="true">•</span> Orange County,
              California
            </p>

            <h1>Turning complex data into software people can trust.</h1>

            <p className="hero-intro">
              I&apos;m Celine, a software engineer with experience building
              Python and SQL flight-data workflows and hands-on projects across
              React, Node.js, C++, and data analysis.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work
              </a>

              <a
                className="button button-secondary"
                href="https://github.com/celinem13"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>
          </div>

          <aside className="profile-panel" aria-label="Engineering profile">
            <p className="panel-number">01 / Engineering profile</p>

            <h2>
              Full-stack development, systems programming, and applied data.
            </h2>

            <dl>
              <div>
                <dt>Focus</dt>
                <dd>Reliable, user-focused software</dd>
              </div>

              <div>
                <dt>Foundation</dt>
                <dd>B.S. in Computer Science</dd>
              </div>

              <div>
                <dt>Background</dt>
                <dd>Aviation engineering and STEM education</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="strengths" aria-label="Technical strengths">
          {strengths.map((strength) => (
            <div className="strength" key={strength.label}>
              <p>{strength.label}</p>
              <strong>{strength.value}</strong>
            </div>
          ))}
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <p className="section-number">02 / Selected work</p>
            <h2>Engineering projects with a clear purpose.</h2>
            <p>
              My projects explore aviation systems, full-stack communities,
              data analysis, and tools for online creators.
            </p>
          </div>

          <article className="project-card">
            <div className="project-summary">
              <p className="project-category">Featured project · C++</p>
              <h3>Cockpit Telemetry Monitor</h3>
              <p>
                A C++ application that simulates cockpit telemetry, evaluates
                aircraft readings, and surfaces warnings for conditions such as
                elevated engine temperature and low fuel.
              </p>

              <div className="tag-list" aria-label="Project technologies">
                <span>C++</span>
                <span>CMake</span>
                <span>CTest</span>
                <span>Linux</span>
              </div>
            </div>

            <div className="project-details">
              <ul>
                <li>Separated telemetry and warning logic into reusable code.</li>
                <li>Added automated tests for safety-related warning rules.</li>
                <li>Built the project with a repeatable CMake workflow.</li>
              </ul>

              <a
                className="project-link"
                href="https://github.com/celinem13/cockpit-telemetry-monitor"
                target="_blank"
                rel="noreferrer"
              >
                View repository <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Celine Mangahas</p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}

export default App