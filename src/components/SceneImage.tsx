type Scene = {
  src: string
  alt: string
}

const SCENES = {
  hero: {
    src: `${import.meta.env.BASE_URL}images/hero-sticky-wall.png`,
    alt: 'Colourful sticky notes on a sunlit workshop wall — planning energy behind Impact Cube',
  },
  health: {
    src: `${import.meta.env.BASE_URL}images/health-check.png`,
    alt: 'Colourful six-face organisational health check diagram',
  },
  method: {
    src: `${import.meta.env.BASE_URL}images/method-workshop.png`,
    alt: 'Workshop facilitators mapping workflows with colourful sticky notes',
  },
  strategy: {
    src: `${import.meta.env.BASE_URL}images/hero-workshop.png`,
    alt: 'Team planning strategy together around a table with notebooks and colourful cards',
  },
  reporting: {
    src: `${import.meta.env.BASE_URL}images/case-reporting.png`,
    alt: 'Education nonprofit team reviewing reports and dashboards together',
  },
  community: {
    src: `${import.meta.env.BASE_URL}images/case-community.png`,
    alt: 'Community programme partners planning outdoors with notebooks and colourful cards',
  },
  funding: {
    src: `${import.meta.env.BASE_URL}images/case-funding.png`,
    alt: 'Colleagues reviewing a funding proposal together over coffee',
  },
  about: {
    src: `${import.meta.env.BASE_URL}images/about-team.png`,
    alt: 'Impact Cube team collaborating in a bright office',
  },
  pattern: {
    src: `${import.meta.env.BASE_URL}images/about-pattern.png`,
    alt: 'Playful geometric cube pattern illustration',
  },
  motif: {
    src: `${import.meta.env.BASE_URL}images/cube-motif.png`,
    alt: 'Colourful isometric cubes floating on a soft mint background',
  },
} as const satisfies Record<string, Scene>

export type SceneKey = keyof typeof SCENES

type Props = {
  scene: SceneKey
  className?: string
  aspect?: 'wide' | 'square' | 'portrait'
}

export function SceneImage({ scene, className = '', aspect = 'wide' }: Props) {
  const { src, alt } = SCENES[scene]
  return (
    <figure className={`scene scene--${aspect} ${className}`.trim()}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  )
}

export function sceneForCase(id: number): SceneKey {
  const map: Record<number, SceneKey> = {
    1: 'reporting',
    2: 'funding',
    3: 'community',
    4: 'health',
    5: 'method',
    6: 'motif',
  }
  return map[id] ?? 'motif'
}
