import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CASE_STUDIES, FACES, type FaceId } from '../data/faces'
import { ArrowIcon } from '../components/Icons'
import { SceneImage, sceneForCase } from '../components/SceneImage'

function faceMeta(id: FaceId) {
  return FACES.find((f) => f.id === id)!
}

const CASE_BLURBS: Record<number, { title: string; summary: string }> = {
  1: {
    title: 'Stronger reporting for an education NGO',
    summary: 'Systems, technology, insights and communication working together for clearer donor and board reporting.',
  },
  2: {
    title: 'Funding readiness for a growing nonprofit',
    summary: 'Strategy and sustainability support to move from reactive fundraising to a clearer funding pipeline.',
  },
  3: {
    title: 'Field-to-office knowledge systems',
    summary: 'Practical documentation and communication rhythms that free programme time without losing field voice.',
  },
  4: {
    title: 'Learning loops that teams actually use',
    summary: 'Insights and sustainability paired so evidence informs both programme decisions and resource planning.',
  },
  5: {
    title: 'From person-dependent to system-enabled',
    summary: 'Strategy, systems and technology redesigned so growth does not rely on a handful of heroes.',
  },
  6: {
    title: 'Stories that match the numbers',
    summary: 'Communication face work that turns dense institutional progress into clear stakeholder narratives.',
  },
}

export function OurWork() {
  useEffect(() => {
    document.title = 'Our Work | Impact Cube'
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Proof
            </p>
            <h1>Our Work</h1>
            <p className="lede">
              Each case study is tagged by the faces it strengthened — because most real
              organisational challenges cut across more than one capability at a time.
            </p>
          </div>
          <div className="callout">
            <p className="mb-0">
              <strong>Example:</strong> Building a stronger reporting system for an education NGO —
              Systems + Technology + Insights + Communication.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {CASE_STUDIES.map((c) => {
              const blurb = CASE_BLURBS[c.id]
              return (
                <div className="case-card" key={c.id}>
                  <SceneImage scene={sceneForCase(c.id)} aspect="wide" />
                  <div className="case-body">
                    <div className="case-tags">
                      {c.faces.map((id) => {
                        const f = faceMeta(id)
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
                    <h3>{blurb.title}</h3>
                    <p className="small">{blurb.summary}</p>
                    <Link to="/contact" className="face-link small" style={{ fontWeight: 700 }}>
                      Talk about similar work <ArrowIcon />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="hint" style={{ marginTop: 24 }}>
            Case titles and imagery are illustrative until replaced with permissioned client
            examples and verified outcomes.
          </p>
        </div>
      </section>

      <section className="section section-fun section-tight">
        <div className="container center">
          <h2>Want to see how this could work for your organisation?</h2>
          <Link to="/contact" className="btn btn-primary btn-lift">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
