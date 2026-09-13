function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          Software Engineer <span aria-hidden="true">•</span> Orange County,
          California
        </p>

        <h1>Turning complex data into software people can trust.</h1>

        <p className="hero-intro">
          I&apos;m Celine, a software engineer with experience building Python
          and SQL flight-data workflows and hands-on projects across React,
          Node.js, C++, and data analysis.
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
  )
}

export default HeroSection