import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SceneImage } from '../components/SceneImage'
import { DeliverIcon, DesignIcon, DiagnoseIcon, ProjectIcon, TeamIcon, TransformIcon } from '../components/Icons'

export function HowWeWork() {
  useEffect(() => {
    document.title = 'How We Work | Impact Cube'
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Working method
            </p>
            <h1>Diagnose. Design. Deliver.</h1>
            <p className="lede">
              We do not stop at recommendations. We help put them into practice — working alongside
              your team from first diagnosis to a working, in-use solution.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="method-steps method-steps--light" style={{ marginBottom: 36 }}>
            <div className="method-step">
              <div className="method-icon" aria-hidden="true">
                <DiagnoseIcon />
              </div>
              <p className="num">01</p>
              <h3>Diagnose</h3>
              <p className="small mb-0">Understand before solving.</p>
            </div>
            <div className="method-step">
              <div className="method-icon" aria-hidden="true">
                <DesignIcon />
              </div>
              <p className="num">02</p>
              <h3>Design</h3>
              <p className="small mb-0">Build the right solution.</p>
            </div>
            <div className="method-step">
              <div className="method-icon" aria-hidden="true">
                <DeliverIcon />
              </div>
              <p className="num">03</p>
              <h3>Deliver</h3>
              <p className="small mb-0">Make it happen.</p>
            </div>
          </div>

          <dl className="def-rows">
            <div className="def-row">
              <dt>01 — Diagnose</dt>
              <dd style={{ margin: 0 }}>
                <p className="small mb-0">
                  Organisational assessment, gap analysis, digital transformation review, impact
                  assessment, funding readiness, documentation review.
                </p>
                <p className="small" style={{ marginTop: 10 }}>
                  <strong>Output:</strong> Prioritised diagnosis and scope
                </p>
              </dd>
            </div>
            <div className="def-row">
              <dt>02 — Design</dt>
              <dd style={{ margin: 0 }}>
                <p className="small mb-0">
                  Strategy, framework, process, SOP, dashboard, roadmap, MEL framework, funding plan
                  or communication structure.
                </p>
                <p className="small" style={{ marginTop: 10 }}>
                  <strong>Output:</strong> Fit-for-purpose solution design
                </p>
              </dd>
            </div>
            <div className="def-row">
              <dt>03 — Deliver</dt>
              <dd style={{ margin: 0 }}>
                <p className="small mb-0">
                  Implementation support, reports, proposals, presentations, analysis, dashboards,
                  systems, tools and documentation.
                </p>
                <p className="small" style={{ marginTop: 10 }}>
                  <strong>Output:</strong> Working capability and usable deliverables
                </p>
              </dd>
            </div>
          </dl>
          <div className="pull-quote" style={{ marginTop: 40 }}>
            We do not stop at recommendations. We help put them into practice.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Engagement models
            </p>
            <h2>Three ways to work with us.</h2>
            <p className="max-prose">
              The right model depends on how wide the need is — a single deliverable, a broader
              organisational challenge, or ongoing multidisciplinary support.
            </p>
          </div>
          <div className="model-cards">
            <div className="model-card">
              <div className="model-icon" aria-hidden="true">
                <ProjectIcon />
              </div>
              <span className="tag">Project Support</span>
              <h3>One clearly defined requirement</h3>
              <p className="small">Best suited for a single, well-scoped need.</p>
              <p className="small mb-0" style={{ fontStyle: 'italic' }}>
                &ldquo;We need an annual report, a MEL framework, or a donor presentation.&rdquo;
              </p>
            </div>
            <div className="model-card">
              <div className="model-icon" aria-hidden="true">
                <TransformIcon />
              </div>
              <span className="tag">Transformation Support</span>
              <h3>A broader organisational challenge</h3>
              <p className="small">Best suited when a challenge spans multiple faces.</p>
              <p className="small mb-0" style={{ fontStyle: 'italic' }}>
                &ldquo;Our monitoring and reporting system needs redesign.&rdquo;
              </p>
            </div>
            <div className="model-card">
              <div className="model-icon" aria-hidden="true">
                <TeamIcon />
              </div>
              <span className="tag">Extended Team</span>
              <h3>Ongoing multidisciplinary support</h3>
              <p className="small">Best suited for continuous, evolving needs.</p>
              <p className="small mb-0" style={{ fontStyle: 'italic' }}>
                &ldquo;We need regular support with data, proposals, reports and systems.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight section-soft">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              What guides the work
            </p>
            <h2>Diagnosis, design and delivery — in that order.</h2>
            <p className="max-prose">
              We identify what needs to improve, design a fit-for-purpose solution, and work
              alongside the organisation to put that solution into practice. Impact Cube combines
              advisory thinking with hands-on execution, rather than handing over a report and
              moving on.
            </p>
          </div>
          <SceneImage scene="method" aspect="wide" className="scene--float" />
        </div>
      </section>

      <section className="section-tight">
        <div className="container center">
          <h2>Ready to start with a diagnosis?</h2>
          <p className="max-prose" style={{ margin: '0 auto 20px' }}>
            Tell us what your organisation is working through and we will recommend the right
            starting point.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lift">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
