import './SiteHeader.css'
function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Celine Mangahas home">
        <span className="wordmark-initials" aria-hidden="true">
          CM
        </span>

        <span>Celine Mangahas</span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default SiteHeader