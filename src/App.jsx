import './App.css'
import ProjectCard from './components/ProjectCard'

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

const projects = [
  {
    id: 'cockpit-telemetry-monitor',
    category: 'Systems engineering · C++',
    title: 'Cockpit Telemetry Monitor',
    description:
      'A real-time aircraft telemetry simulator and cockpit-style Qt dashboard that evaluates flight readings and displays warning conditions.',
    technologies: ['C++17', 'Qt 6', 'CMake', 'CTest', 'WSL 2'],
    highlights: [
      'Simulates airspeed, altitude, heading, engine temperature, and fuel.',
      'Separates shared telemetry logic from the console and graphical interfaces.',
      'Includes automated tests for high-temperature and low-fuel warnings.',
    ],
    repositoryUrl:
      'https://github.com/celinem13/cockpit-telemetry-monitor',
  },
  {
    id: 'nerdnest',
    category: 'Full-stack application',
    title: 'NerdNest',
    description:
      'A community platform that helps people create profiles, discover local interest groups, and connect through posts and events.',
    technologies: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
    ],
    highlights: [
      'Built registration, login, and session restoration with JWT authentication.',
      'Created REST API endpoints for profiles, posts, and events.',
      'Connected a React interface to an Express API and MongoDB Atlas database.',
    ],
    repositoryUrl: 'https://github.com/celinem13/NerdNest',
  },
  {
    id: 'kaizo-ironmon-analysis',
    category: 'Data analysis · R and Python',
    title: 'Kaizo Ironmon Analysis',
    description:
      'An exploratory and statistical analysis of 467 Pokémon FireRed and LeafGreen Kaizo Ironmon runs.',
    technologies: [
      'R',
      'Python',
      'Pandas',
      'ggplot2',
      'Statistical analysis',
    ],
    highlights: [
      'Examined Pokémon stats, types, moves, rankings, and win outcomes.',
      'Tested variable distributions using the Shapiro–Wilk test.',
      'Found that Speed was not significantly associated with winning in the analyzed data.',
    ],
    repositoryUrl: 'https://github.com/celinem13/KaizoIronmonData',
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
      </main>

      <footer className="site-footer">
        <p>© 2026 Celine Mangahas</p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}

export default App