import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import type { Face } from '../data/faces'
import { ArrowIcon, FaceIcon } from './Icons'

export function FaceCard({ face }: { face: Face }) {
  return (
    <Link
      to={face.path}
      className="face-tile"
      style={
        {
          ['--accent' as string]: face.accent,
          ['--ink' as string]: face.ink,
          ['--cube' as string]: face.cubeBg,
        } as CSSProperties
      }
    >
      <span className="face-tile-glow" aria-hidden="true" />
      <span className="face-tile-icon" aria-hidden="true">
        <FaceIcon id={face.id} />
      </span>
      <p className="face-tile-num">{face.num}</p>
      <h3>{face.name}</h3>
      <p className="face-tile-line">{face.line}</p>
      <p className="face-tile-outcome">{face.outcome}</p>
      <span className="face-tile-cta">
        Explore this face <ArrowIcon />
      </span>
    </Link>
  )
}
