import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { SceneImage } from '../components/SceneImage'

const SUPPORT_OPTIONS = [
  {
    value: 'project',
    label: 'Project Support',
    detail: 'one clearly defined requirement',
  },
  {
    value: 'transformation',
    label: 'Transformation Support',
    detail: 'a broader organisational challenge',
  },
  {
    value: 'extended',
    label: 'Extended Team',
    detail: 'ongoing multidisciplinary support',
  },
  {
    value: 'unsure',
    label: 'Not sure yet',
    detail: '',
  },
] as const

type SupportValue = (typeof SUPPORT_OPTIONS)[number]['value']

function SupportSelect({
  id,
  name,
  value,
  onChange,
}: {
  id: string
  name: string
  value: SupportValue | ''
  onChange: (value: SupportValue) => void
}) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()
  const selected = SUPPORT_OPTIONS.find((o) => o.value === value)

  useEffect(() => {
    if (!open) return
    function onDoc(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={`support-select${open ? ' is-open' : ''}`} ref={rootRef}>
      <input type="hidden" name={name} value={value} required />
      <button
        type="button"
        id={id}
        className="support-select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={selected ? 'support-select-value' : 'support-select-placeholder'}>
          {selected ? (
            <>
              <strong>{selected.label}</strong>
              {selected.detail ? <span> — {selected.detail}</span> : null}
            </>
          ) : (
            'Select an option'
          )}
        </span>
        <span className="support-select-chevron" aria-hidden="true" />
      </button>
      {open ? (
        <ul id={listId} className="support-select-menu" role="listbox" aria-labelledby={id}>
          {SUPPORT_OPTIONS.map((opt) => {
            const isSelected = opt.value === value
            return (
              <li key={opt.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  className={`support-select-option${isSelected ? ' is-selected' : ''}`}
                  onClick={() => {
                    onChange(opt.value)
                    setOpen(false)
                  }}
                >
                  {isSelected ? <span className="support-select-check" aria-hidden="true">✓</span> : null}
                  <span>
                    <strong>{opt.label}</strong>
                    {opt.detail ? <span> — {opt.detail}</span> : null}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)
  const [support, setSupport] = useState<SupportValue | ''>('')

  useEffect(() => {
    document.title = 'Contact | Impact Cube'
  }, [])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!support) return
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container grid-2">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Contact
            </p>
            <h1>Start a conversation.</h1>
            <p className="lede">
              Tell us a little about your organisation and what you are working through. We
              typically respond within two working days.
            </p>
          </div>
          <SceneImage scene="motif" aspect="wide" className="scene--float" />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container grid-2" style={{ alignItems: 'flex-start' }}>
          {sent ? (
            <div className="callout">
              <h3 className="mb-0">Thank you — we have received your message.</h3>
              <p className="small mb-0" style={{ marginTop: 12 }}>
                This form is front-end only for now. Wire it to your CRM or form handler before
                launch. We will be in touch shortly.
              </p>
            </div>
          ) : (
            <form className="form-grid" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="org">Organisation</label>
                <input type="text" id="org" name="org" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="phone">Phone (optional)</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="full">
                <label htmlFor="model">What kind of support are you exploring?</label>
                <SupportSelect id="model" name="model" value={support} onChange={setSupport} />
              </div>
              <div className="full">
                <label htmlFor="message">Tell us about your organisation and the challenge</label>
                <textarea id="message" name="message" rows={5} required />
              </div>
              <div className="full">
                <button type="submit" className="btn btn-primary btn-lift">
                  Send Message
                </button>
                <p className="hint">
                  By submitting, you agree to be contacted about your enquiry.
                </p>
              </div>
            </form>
          )}
          <div>
            <div className="callout contact-channels" style={{ marginBottom: 20 }}>
              <h3 className="mb-0">Get in touch</h3>
              <div className="contact-channel">
                <p className="contact-channel-label">Visit us</p>
                <p className="small mb-0">
                  597, Airhe Road, Chandmari, Post- Lamhi
                  <br />
                  Varanasi, Uttar Pradesh - 221007
                  <br />
                  India
                </p>
              </div>
              <div className="contact-channel">
                <p className="contact-channel-label">Email us</p>
                <p className="small mb-0">
                  <a href="mailto:info@adrika.co.in">info@adrika.co.in</a>
                </p>
              </div>
              <div className="contact-channel">
                <p className="contact-channel-label">Call us</p>
                <p className="small mb-0">
                  <a href="tel:+919318441235">+91-9318441235</a>
                  <br />
                  <a href="tel:+919235777101">+91-9235777101</a>
                </p>
              </div>
            </div>
            <div className="callout-navy">
              <h3>What happens next</h3>
              <p className="small mb-0" style={{ color: '#D3E0E8' }}>
                We read every message, ask a few clarifying questions if needed, and suggest whether
                Project Support, Transformation Support or an Extended Team is the right starting
                point — before any commercial conversation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
