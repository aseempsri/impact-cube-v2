import { Link } from 'react-router-dom'
import { FACES } from '../data/faces'
import { BrandMark } from './Icons'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <BrandMark /> IMPACT CUBE
            </div>
            <p style={{ maxWidth: 300 }}>
              Stronger Organisations. Greater Impact. We help social-impact organisations
              strengthen the colourful, connected capabilities behind their mission.
            </p>
          </div>
          <div>
            <h4>The Six Faces</h4>
            <ul>
              {FACES.map((f) => (
                <li key={f.id}>
                  <Link to={f.path}>
                    <span style={{ color: f.accent, fontWeight: 700 }}>{f.num}</span> — {f.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Organisation</h4>
            <ul>
              <li>
                <Link to="/how-we-work">How We Work</Link>
              </li>
              <li>
                <Link to="/our-work">Our Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:info@adrika.co.in">info@adrika.co.in</a>
              </li>
              <li>
                <a href="tel:+919318441235">+91-9318441235</a>
              </li>
              <li>
                <a href="tel:+919235777101">+91-9235777101</a>
              </li>
              <li>
                597, Airhe Road, Chandmari, Post- Lamhi
                <br />
                Varanasi, Uttar Pradesh - 221007
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Impact Cube. All rights reserved.</span>
          <span>Diagnose. Design. Deliver.</span>
        </div>
      </div>
    </footer>
  )
}
