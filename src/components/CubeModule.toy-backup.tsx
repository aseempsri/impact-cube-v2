/**
 * BACKUP — toy / plastic cube (cute solid frame look).
 * Not used by the app. To restore: copy this file over CubeModule.tsx
 * and paste styles from src/styles/cube-toy-backup.css into styles.css.
 */
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { FACES, type CubeSlot, type Face } from '../data/faces'
import { ArrowIcon, FaceIcon } from './Icons'

const ROTATIONS: Record<CubeSlot, string> = {
  front: 'rotateX(-22deg) rotateY(-38deg)',
  right: 'rotateX(-22deg) rotateY(-128deg)',
  back: 'rotateX(-22deg) rotateY(-218deg)',
  left: 'rotateX(-22deg) rotateY(52deg)',
  top: 'rotateX(-112deg) rotateY(-38deg)',
  bottom: 'rotateX(68deg) rotateY(-38deg)',
}

const SLOT_CLASS: Record<CubeSlot, string> = {
  front: 'cube-face-front',
  right: 'cube-face-right',
  back: 'cube-face-back',
  left: 'cube-face-left',
  top: 'cube-face-top',
  bottom: 'cube-face-bottom',
}

type Props = {
  labelledBy?: string
  featured?: boolean
  onActiveFaceChange?: (face: Face) => void
}

export function CubeModule({ labelledBy, featured = false, onActiveFaceChange }: Props) {
  const [active, setActive] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [panelKey, setPanelKey] = useState(0)
  const stageRef = useRef<HTMLButtonElement>(null)
  const face: Face = FACES[active]

  useEffect(() => {
    onActiveFaceChange?.(face)
  }, [face, onActiveFaceChange])

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !autoplay) return

    const advanceFace = () => {
      setActive((i) => (i + 1) % FACES.length)
      setPanelKey((k) => k + 1)
    }

    let intervalId = 0
    const firstId = window.setTimeout(() => {
      advanceFace()
      intervalId = window.setInterval(advanceFace, 4000)
    }, 1000)

    return () => {
      window.clearTimeout(firstId)
      window.clearInterval(intervalId)
    }
  }, [autoplay])

  useEffect(() => {
    if (!featured) return
    const stage = stageRef.current
    if (!stage) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const onMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      stage.style.setProperty('--tilt-x', `${(-y * 5).toFixed(2)}deg`)
      stage.style.setProperty('--tilt-y', `${(x * 7).toFixed(2)}deg`)
    }
    const onLeave = () => {
      stage.style.setProperty('--tilt-x', '0deg')
      stage.style.setProperty('--tilt-y', '0deg')
    }
    stage.addEventListener('pointermove', onMove)
    stage.addEventListener('pointerleave', onLeave)
    return () => {
      stage.removeEventListener('pointermove', onMove)
      stage.removeEventListener('pointerleave', onLeave)
    }
  }, [featured])

  function advance() {
    setAutoplay(false)
    setActive((i) => (i + 1) % FACES.length)
    setPanelKey((k) => k + 1)
  }

  return (
    <div
      className={`cube-module${featured ? ' cube-module--featured' : ''}${autoplay ? ' is-autoplaying' : ''}`}
      aria-labelledby={labelledBy}
      style={
        {
          ['--face-glow' as string]: face.accent,
          ['--face-ink' as string]: face.ink,
        } as CSSProperties
      }
    >
      <div className="cube-shell">
        <button
          type="button"
          className="cube-stage"
          ref={stageRef}
          onClick={advance}
          aria-label={`Showing ${face.name}. Click to see the next face.`}
        >
          <div className="cube-glow" aria-hidden="true" />

          <div className="cube-float" aria-hidden="true">
            <div className="cube3d" style={{ transform: ROTATIONS[face.slot] }}>
              <div className="cube-core" aria-hidden="true">
                <span className="cube-core-face cube-core-front" />
                <span className="cube-core-face cube-core-back" />
                <span className="cube-core-face cube-core-right" />
                <span className="cube-core-face cube-core-left" />
                <span className="cube-core-face cube-core-top" />
                <span className="cube-core-face cube-core-bottom" />
              </div>
              {FACES.map((f) => (
                <div
                  key={f.id}
                  className={`cube-face ${SLOT_CLASS[f.slot]}${f.id === face.id ? ' is-front' : ''}`}
                >
                  <div
                    className="cube-face-plate"
                    style={{
                      background: `linear-gradient(155deg, ${f.accent} 0%, ${f.cubeBg} 78%)`,
                      boxShadow: `inset 0 0 0 1px ${f.accent}55`,
                    }}
                  >
                    <span className="cube-face-num">{f.num}</span>
                    <span className="cube-face-icon">
                      <FaceIcon id={f.id} />
                    </span>
                    <span className="cube-face-label">{f.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cube-shadow" aria-hidden="true" />
        </button>

        <div
          key={panelKey}
          className="cube-panel cube-panel--enter"
          style={
            {
              ['--ink' as string]: face.ink,
              borderColor: `${face.accent}33`,
              background: `linear-gradient(160deg, ${face.accent}14, #fff 55%)`,
            } as CSSProperties
          }
        >
          <div className="cube-panel-top">
            <span className="cube-panel-badge" style={{ background: face.accent }}>
              {face.num}
            </span>
            <div>
              <h3>{face.name}</h3>
              <p className="cp-line" style={{ color: face.ink }}>
                {face.line}
              </p>
            </div>
          </div>
          <p className="small mb-0">{face.question}</p>
          <Link
            to={face.path}
            className="cube-panel-link"
            style={{ color: face.ink, background: `${face.accent}18` }}
          >
            Explore {face.name} <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}
