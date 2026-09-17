import { useCallback, useEffect, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { CASE_STUDIES, FACES, PROBLEMS, type Face } from '../data/faces'
import { CubeModule } from '../components/CubeModule'
import { FaceCard } from '../components/FaceCard'
import { SceneImage, sceneForCase } from '../components/SceneImage'
import {
  ArrowIcon,
  DeliverIcon,
  DesignIcon,
  DiagnoseIcon,
  ProblemIcon,
} from '../components/Icons'

export function Home() {
  const [activeFace, setActiveFace] = useState<Face>(FACES[0])
  const onActiveFaceChange = useCallback((face: Face) => setActiveFace(face), [])

  useEffect(() => {
    document.title = 'Home | Impact Cube'
  }, [])

  return (
    <>
      <section className="hero hero--home">
        <div className="hero-atmosphere" aria-hidden="true">
          <SceneImage scene="hero" className="scene--hero-bleed" aspect="wide" />
          <span className="hero-veil" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="brand-word">
              IMPACT{' '}
              <span className="brand-word-cube" style={{ color: activeFace.accent }}>
                CUBE
              </span>
            </p>
            <p className="eyebrow">
              <span
                className="eyebrow-dot"
                aria-hidden="true"
                style={{
                  background: activeFace.accent,
                  boxShadow: `0 0 0 4px ${activeFace.accent}40`,
                }}
              />
              Stronger Organisations. Greater Impact.
            </p>
            <h1 id="hero-cube" className="hero-title">
              Your extended institutional support team.
            </h1>
            <p className="lede">
              We help lean social-impact teams build the capabilities behind their mission — with a
              colourful, connected cube of six faces.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary btn-lift">
                Strengthen Your Organisation
              </Link>
              <Link to="/the-cube" className="btn btn-secondary btn-lift">
                Explore the Cube
              </Link>
            </div>
          </div>
          <div className="hero-cube-panel">
            <CubeModule
              labelledBy="hero-cube"
              featured
              onActiveFaceChange={onActiveFaceChange}
            />
          </div>
        </div>
      </section>

      <section className="section section-problems">
        <div className="container">
          <div className="section-head center" style={{ maxWidth: 720 }}>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Sound familiar?
            </p>
            <h2>Big missions do not always come with big teams.</h2>
            <p className="max-prose" style={{ margin: '0 auto' }}>
              Organisational friction is normal. Impact Cube turns each sticky spot into practical,
              hands-on support.
            </p>
          </div>
          <div className="problem-board">
            {PROBLEMS.map((p, i) => (
              <article
                key={p.challenge}
                className="problem-tile"
                style={
                  {
                    ['--accent' as string]: p.accent,
                    ['--delay' as string]: `${i * 0.04}s`,
                  } as CSSProperties
                }
              >
                <div className="problem-tile-icon" aria-hidden="true">
                  <ProblemIcon id={p.icon} />
                </div>
                <div className="problem-tile-body">
                  <p className="problem-label problem-label--friction">The friction</p>
                  <p className="challenge">{p.challenge}</p>
                  <div className="problem-arrow" aria-hidden="true">
                    <span />
                    <ArrowIcon />
                  </div>
                  <p className="problem-label problem-label--fix">The fix</p>
                  <p className="response">{p.response}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-faces">
        <div className="container">
          <div className="section-head center" style={{ maxWidth: 720 }}>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Six Faces. One Mission.
            </p>
            <h2>One connected organisational system.</h2>
          </div>

          <div className="face-cycle" aria-hidden="true">
            {FACES.map((f, i) => (
              <div key={f.id} className="face-cycle-item" style={{ color: f.ink }}>
                <span className="face-cycle-dot" style={{ background: f.accent }} />
                <span className="face-cycle-name">{f.name}</span>
                {i < FACES.length - 1 ? <span className="face-cycle-join">→</span> : null}
              </div>
            ))}
          </div>

          <div className="cube-faces">
            {FACES.map((f) => (
              <FaceCard key={f.id} face={f} />
            ))}
          </div>

          <p className="center" style={{ marginTop: 32 }}>
            <Link to="/the-cube" className="btn btn-primary btn-lift">
              See how the faces connect
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" style={{ color: '#F7C95A' }}>
              How we work
            </p>
            <h2>Diagnose. Design. Deliver.</h2>
            <p className="max-prose" style={{ color: '#CBD8E0' }}>
              We do not stop at recommendations. We help put them into practice.
            </p>
          </div>
          <div className="method-steps">
            {[
              {
                n: '01',
                t: 'Diagnose',
                d: 'Understand before solving — organisational assessment, gap analysis, digital and funding readiness review.',
                icon: <DiagnoseIcon />,
              },
              {
                n: '02',
                t: 'Design',
                d: 'Build the right solution — strategy, framework, SOP, dashboard, roadmap or communication structure.',
                icon: <DesignIcon />,
              },
              {
                n: '03',
                t: 'Deliver',
                d: 'Make it happen — implementation support, reports, proposals, dashboards, systems and documentation.',
                icon: <DeliverIcon />,
              },
            ].map((s) => (
              <div key={s.n} className="method-step">
                <div className="method-icon" aria-hidden="true">
                  {s.icon}
                </div>
                <p className="num">{s.n}</p>
                <h3 style={{ color: '#fff' }}>{s.t}</h3>
                <p style={{ color: '#CBD8E0' }}>{s.d}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link to="/how-we-work" className="btn btn-on-navy">
              How We Work <ArrowIcon />
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-fun">
        <div className="container">
          <div className="hc-panel">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Impact Cube Health Check
              </p>
              <h2>Where is your organisation strongest — and where does it need support?</h2>
              <p className="max-prose">
                A short assessment across the six faces gives an indicative institutional readiness
                profile: a score for each face and a priority recommendation.
              </p>
              <div className="hc-scale" aria-hidden="true">
                {FACES.map((f) => (
                  <span key={f.id} style={{ background: f.accent }} />
                ))}
              </div>
              <p className="small">18 questions · three per face · 1–5 maturity scale</p>
              <Link to="/contact" className="btn btn-sun btn-lift">
                Check Your Cube
              </Link>
              <p className="hint">
                The full interactive Health Check tool is in development. Contact us to run a guided
                version with our team in the meantime.
              </p>
            </div>
            <SceneImage scene="health" aspect="square" className="scene--float" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex-between">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Proof
              </p>
              <h2>Selected work with partner organisations.</h2>
            </div>
            <Link to="/our-work" className="btn btn-secondary">
              View Our Work
            </Link>
          </div>
          <div className="grid-3">
            {CASE_STUDIES.slice(0, 3).map((c) => (
              <div className="case-card" key={c.id}>
                <SceneImage scene={sceneForCase(c.id)} aspect="wide" />
                <div className="case-body">
                  <div className="case-tags">
                    {c.faces.slice(0, 2).map((id) => {
                      const f = FACES.find((x) => x.id === id)!
                      return (
                        <span
                          key={id}
                          className="tag-chip"
                          style={{ background: `${f.accent}22`, color: f.ink }}
                        >
                          {f.name}
                        </span>
                      )
                    })}
                  </div>
                  <h3>
                    {c.id === 1 && 'Stronger reporting for an education NGO'}
                    {c.id === 2 && 'Funding readiness for a growing nonprofit'}
                    {c.id === 3 && 'Field-to-office knowledge systems'}
                  </h3>
                  <p className="small mb-0">
                    Cross-face support that left teams with clearer processes and usable tools —
                    not just another slide deck.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div
            className="callout"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <h3 className="mb-0">We do not just advise. We help you build.</h3>
              <p className="mb-0 small">
                Tell us what your organisation is working through — we will help you find the right
                starting point.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-lift">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
