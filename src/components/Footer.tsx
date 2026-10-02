import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/shield-logo.png"

export function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-brand">
          <Link className="brand" to="/" aria-label="Shield Skill Hub home">
            <span className="brand-mark">
              <img src={logo} alt="Shield Skill Hub Logo" />
            </span>
            <span className="brand-name">
              Shield <b>Skill Hub</b>
            </span>
          </Link>
          <p>
            The learning, institutional transformation, and career acceleration
            ecosystem powered by Shield Group. Connecting students, academic
            institutions, and industry testbeds.
          </p>
          <div className="socials" aria-label="Social media channels">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              ig
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              yt
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Ecosystem Blueprint</h3>
          <Link to="/emerging-tech">Emerging Tech (7 Tracks)</Link>
          <Link to="/non-tech">Non-Tech Labs</Link>
          <Link to="/industry-partners">Industry Partners &amp; Solutions</Link>
          <Link to="/institutions">Institutions &amp; CoE</Link>
          <Link to="/internships">Internships &amp; Placements</Link>
          <Link to="/general">General &amp; Mental Wellbeing</Link>
        </div>

        <div className="footer-links">
          <h3>Learning &amp; Career</h3>
          <Link to="/courses">All Courses</Link>
          <Link to="/programs">Flagship Accelerator</Link>
          <Link to="/projects">Capstone Projects</Link>
          <Link to="/resources">Roadmaps &amp; Cheat Sheets</Link>
          <a
            href="https://chaintrail.com/EnglishVerification/Shield_skillhub"
            target="_blank"
            rel="noreferrer"
          >
            Verify Credential ↗
          </a>
        </div>

        <div className="footer-contact">
          <h3>Start a conversation</h3>
          <a href="mailto:skill@shieldskillhub.com">skill@shieldskillhub.com</a>
          <p>Chennai &amp; Bengaluru Innovation Corridors, India</p>
          <Link to="/contact" className="button button-light">
            <span>Talk to an advisor</span>
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2025–2026 Shield Skill Hub · Powered by Shield Group</span>
        <div>
          <Link to="/resources">Documentation</Link>
          <Link to="/contact">Support &amp; FAQs</Link>
        </div>
      </div>
    </footer>
  )
}
export default Footer
