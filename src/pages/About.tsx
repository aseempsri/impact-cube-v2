import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HeartOrgIcon, TeamIcon } from '../components/Icons'
import { SceneImage } from '../components/SceneImage'

const AUDIENCES = [
  {
    title: 'Grassroots NGOs',
    body: 'Strong field work with limited institutional systems — building a stronger backbone for the mission.',
  },
  {
    title: 'Small and mid-sized NGOs',
    body: 'Specialist needs without specialist teams — accessing capability without building a large team.',
  },
  {
    title: 'Growing nonprofits',
    body: 'Processes and data that have not kept pace with growth — moving from person-dependent to system-enabled.',
  },
  {
    title: 'Social-impact organisations',
    body: 'Needing structured planning, evidence and communication that connect to execution.',
  },
  {
    title: 'CSR implementation partners',
    body: 'Needing dependable reporting and programme systems that build stakeholder confidence.',
  },
]

export function About() {
  useEffect(() => {
    document.title = 'About | Impact Cube'
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              About Impact Cube
            </p>
            <h1>Your extended institutional support team.</h1>
            <p className="lede">
              Impact Cube exists to strengthen the institutional backbone behind social-impact work —
              so that strong programmes are matched by strong organisations.
            </p>
          </div>
          <SceneImage scene="about" aspect="wide" className="scene--float" />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="grid-2">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Why we exist
              </p>
              <h2>Strong programmes need strong organisations.</h2>
              <p className="max-prose">
                Many organisations possess strong programme knowledge, committed teams and deep
                community relationships. Their impact can still be constrained by gaps in planning,
                systems, digital tools, assessment, analysis, fundraising readiness and
                institutional documentation. Larger organisations employ specialists for these
                functions; smaller organisations usually cannot. Impact Cube is designed to close
                that gap.
              </p>
            </div>
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                How we are different
              </p>
              <h2>Diagnosis, design and delivery — together.</h2>
              <p className="max-prose">
                We are not positioned as another generic NGO consultancy, and not simply a freelance
                task provider either. We connect each piece of work to the organisation&apos;s
                broader needs and systems, and we stay involved until the solution is actually in
                use.
              </p>
              <div style={{ marginTop: 20 }}>
                <SceneImage scene="pattern" aspect="wide" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Who we work with
            </p>
            <h2>Built for organisations with big missions and lean teams.</h2>
          </div>
          <div className="audience-grid">
            {AUDIENCES.map((a) => (
              <div className="audience-tile" key={a.title}>
                <div className="aud-icon" aria-hidden="true">
                  <HeartOrgIcon />
                </div>
                <h3>{a.title}</h3>
                <p className="small mb-0">{a.body}</p>
              </div>
            ))}
            <div
              className="audience-tile"
              style={{ background: 'linear-gradient(160deg, var(--teal-light), var(--warm))', borderColor: 'transparent' }}
            >
              <div className="aud-icon" aria-hidden="true">
                <TeamIcon />
              </div>
              <h3>Not sure where you fit?</h3>
              <p className="small mb-0">
                Most organisations recognise themselves in more than one profile.{' '}
                <Link to="/contact">Talk to us.</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-fun">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Our team
            </p>
            <h2>The people behind the six faces.</h2>
          </div>
          <div className="team-grid">
            {[
              {
                name: 'Rajneesh',
                title: 'Strategy lead',
                role: 'Strategy & planning',
                note: 'Direction, Theory of Change, roadmaps',
                photo: `${import.meta.env.BASE_URL}images/team-strategy-lead.jpg`,
                alt: 'Rajneesh, Strategy lead, seated at a desk in a bright office',
              },
              {
                name: 'Aman',
                title: 'Systems lead',
                role: 'Systems & operations',
                note: 'SOPs, workflows, governance',
                photo: `${import.meta.env.BASE_URL}images/team-systems-lead.jpg`,
                alt: 'Aman, Systems lead, seated at a desk in a bright office',
              },
              {
                name: 'Shubhram',
                title: 'Insights lead',
                role: 'Insights & MEL',
                note: 'Evidence, dashboards, learning loops',
                photo: `${import.meta.env.BASE_URL}images/team-insights-lead.jpg`,
                alt: 'Shubhram, Insights lead, working at a laptop in a bright office',
              },
              {
                name: 'Aseem',
                title: 'Comms lead',
                role: 'Communication',
                note: 'Reports, stories, stakeholder clarity',
                photo: `${import.meta.env.BASE_URL}images/team-comms-lead.jpg`,
                alt: 'Aseem, Comms lead, working at a laptop in a bright office',
              },
            ].map((t) => (
              <div className="team-card" key={t.name}>
                {t.photo ? (
                  <figure className="scene scene--portrait scene--float team-photo">
                    <img src={t.photo} alt={t.alt ?? t.name} loading="lazy" decoding="async" />
                  </figure>
                ) : (
                  <SceneImage scene="motif" aspect="portrait" />
                )}
                <h4>{t.name}</h4>
                {t.title ? <p className="team-title">{t.title}</p> : null}
                <p className="role">{t.role}</p>
                <p>{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container center">
          <h2>Want to know more about how we work?</h2>
          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <Link to="/how-we-work" className="btn btn-secondary">
              How We Work
            </Link>
            <Link to="/contact" className="btn btn-primary btn-lift">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
