import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FACES, type Face } from '../data/faces'
import { CubeModule } from '../components/CubeModule'
import { FaceIcon } from '../components/Icons'

const CYCLE_LINES: Record<Face['id'], string> = {
  strategy: 'Strategy defines direction.',
  systems: 'Systems create repeatable ways of working.',
  technology: 'Technology improves efficiency.',
  insights: 'Insights reveal what works.',
  sustainability: 'Sustainability secures the resources to continue.',
  communication:
    'Communication documents progress, presents results, and carries learning back into the next strategic cycle.',
}

const STEP_MS = 2800
const LAST_STEP_EXTRA_MS = 1000

function CapabilityCycle() {
  const [active, setActive] = useState(0)
  const [textKey, setTextKey] = useState(0)
  const face = FACES[active]

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setActive(FACES.length - 1)
      return
    }
    const delay = active === FACES.length - 1 ? STEP_MS + LAST_STEP_EXTRA_MS : STEP_MS
    const id = window.setTimeout(() => {
      setActive((i) => (i + 1) % FACES.length)
    }, delay)
    return () => window.clearTimeout(id)
  }, [active])

  useEffect(() => {
    setTextKey((k) => k + 1)
  }, [active])

  return (
    <div className="capability-cycle">
      <div className="cycle-row" role="list">
        {FACES.map((f, i) => {
          const state =
            i < active ? 'is-done' : i === active ? 'is-active' : 'is-pending'
          return (
            <div key={f.id} style={{ display: 'contents' }}>
              <button
                type="button"
                key={`${f.id}-${i === active ? textKey : 'idle'}`}
                className={`cycle-item ${state}`}
                style={{ color: f.ink, ['--accent' as string]: f.accent }}
                role="listitem"
                aria-current={i === active ? 'step' : undefined}
                onClick={() => setActive(i)}
              >
                <span className="cycle-icon-wrap">
                  <FaceIcon id={f.id} />
                </span>
                <p className="cycle-name">{f.name}</p>
              </button>
              {i < FACES.length - 1 ? (
                <span
                  className={`cycle-arrow${i < active ? ' is-lit' : ''}`}
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}
            </div>
          )
        })}
      </div>

      <p
        key={textKey}
        className="cycle-caption"
        style={{ color: face.ink }}
      >
        {CYCLE_LINES[face.id]}
      </p>
    </div>
  )
}

export function TheCube() {
  useEffect(() => {
    document.title = 'The Cube | Impact Cube'
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-head center" style={{ maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Why &ldquo;Impact Cube&rdquo;?
            </p>
            <h1 id="cube-page-cube">Six Faces. One Mission.</h1>
            <p className="lede" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              The cube is not merely a logo. It is the organising philosophy, visual language and
              navigation model of Impact Cube — colourful, connected, and built to turn.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight cube-page-stage">
        <div className="container cube-page-stage-inner">
          <CubeModule labelledBy="cube-page-cube" featured />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head center" style={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              The capability cycle
            </p>
            <h2>Each face feeds the next.</h2>
          </div>
          <CapabilityCycle />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              The six faces in detail
            </p>
          </div>
          {FACES.map((f) => (
            <div
              key={f.id}
              className="face-detail-row"
              style={{ ['--accent' as string]: f.accent, color: f.ink }}
            >
              <div className="fd-icon">
                <FaceIcon id={f.id} />
              </div>
              <div>
                <p className="face-num" style={{ color: f.ink, margin: 0 }}>
                  {f.num}
                </p>
                <h3>{f.name}</h3>
                <p className="small mb-0">{f.question}</p>
              </div>
              <div>
                <p className="small" style={{ fontWeight: 700, color: 'var(--navy)' }}>
                  {f.line}
                </p>
                <p className="small mb-0">Outcome: {f.outcome}</p>
              </div>
              <div>
                <Link to={f.path} className="btn btn-secondary">
                  Explore {f.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-tight section-fun">
        <div className="container center">
          <h2>Not sure where to start?</h2>
          <p className="max-prose" style={{ margin: '0 auto 20px' }}>
            Most organisations recognise themselves in more than one face at once. That is the point
            — tell us what you are working through and we will help you find the right combination.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lift">
            Strengthen Your Organisation
          </Link>
        </div>
      </section>
    </>
  )
}
