import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="section-number">06 / Contact</p>

          <h2>Let&apos;s build something useful.</h2>

          <p className="contact-intro">
            I&apos;m open to software engineering opportunities involving
            application development, data workflows, and technical
            problem-solving.
          </p>

          <p className="contact-location">
            Based in Orange County, California
          </p>
        </div>

        <div className="contact-links">
          <a
            className="contact-link"
            href="mailto:celinemangahas13@gmail.com"
          >
            <span>Email me</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            className="contact-link"
            href="/Celine_Mangahas_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span>View résumé</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            className="contact-link"
            href="https://www.linkedin.com/in/celine-mangahas"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            className="contact-link"
            href="https://github.com/celinem13"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection