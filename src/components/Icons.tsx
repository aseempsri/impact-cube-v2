import type { ReactNode } from 'react'
import type { FaceId } from '../data/faces'

type IconProps = { className?: string }

export function BrandMark({ className }: IconProps) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}images/logo-cube.png`}
      alt=""
      aria-hidden="true"
      className={className ? `brand-mark ${className}` : 'brand-mark'}
      width={36}
      height={36}
      decoding="async"
    />
  )
}

export function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 6H21M3 12H21M3 18H21" stroke="#15324A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 14, height: 14 }}>
      <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2 L13.8 8.2 L20 10 L13.8 11.8 L12 18 L10.2 11.8 L4 10 L10.2 8.2 Z" fill="currentColor" />
    </svg>
  )
}

export function DiagnoseIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="22" cy="22" r="12" stroke="currentColor" strokeWidth="2.2" />
      <path d="M30.5 30.5 L38 38" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="22" cy="22" r="4" fill="currentColor" opacity=".25" />
    </svg>
  )
}

export function DesignIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 34 L14 14 L34 10 L38 30 L18 38 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="4" fill="currentColor" opacity=".3" />
      <path d="M14 14 L24 24 L34 10" stroke="currentColor" strokeWidth="1.6" opacity=".7" />
    </svg>
  )
}

export function DeliverIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 26 L20 34 L38 14" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="34" r="3" fill="currentColor" opacity=".35" />
    </svg>
  )
}

export function ProjectIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="12" width="28" height="24" rx="4" stroke="currentColor" strokeWidth="2.2" />
      <path d="M16 20 H32 M16 26 H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="14" r="5" fill="#F0B429" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function TransformIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 18 H34 A6 6 0 0 1 34 30 H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M34 30 H14 A6 6 0 0 1 14 18 H28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity=".45" />
      <path d="M30 14 L34 18 L30 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 34 L14 30 L18 26" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity=".45" />
    </svg>
  )
}

export function TeamIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="32" cy="18" r="6" stroke="currentColor" strokeWidth="2.2" />
      <path d="M8 36 C8 30 12 27 18 27 C21 27 23.5 28 25 29.5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M40 36 C40 30 36 27 30 27 C27 27 24.5 28 23 29.5" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  )
}

export function HeartOrgIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 32 C12 26 8 21 8 16 C8 12 11 9 15 9 C17.5 9 19.2 10.2 20 12 C20.8 10.2 22.5 9 25 9 C29 9 32 12 32 16 C32 21 28 26 20 32 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 18 H26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity=".5" />
    </svg>
  )
}

export function ProblemTeamIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="18" cy="16" r="6" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="32" cy="18" r="5" stroke="currentColor" strokeWidth="2.2" opacity=".7" />
      <path d="M8 36 C8 29 12 26 18 26 C22 26 25 27.5 26.5 29.5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M28 36 C28 31 30 28 34 28 C38 28 40 31 40 36" stroke="currentColor" strokeWidth="2.2" opacity=".7" />
      <circle cx="38" cy="12" r="3" fill="currentColor" opacity=".35" />
    </svg>
  )
}

export function ProblemProcessIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="10" width="14" height="12" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <rect x="26" y="26" width="14" height="12" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <path d="M22 16 H28 C31 16 33 18 33 21 V26" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M30 22 L33 26 L36 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ProblemDataIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 34 V22 M20 34 V16 M28 34 V24 M36 34 V12" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M12 20 L20 14 L28 20 L36 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="36" cy="10" r="3" fill="currentColor" />
    </svg>
  )
}

export function ProblemFundingIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.2" />
      <path d="M24 14 V34 M19 18.5 C19 16.5 21 15 24 15 C27 15 29 16.5 29 18.5 C29 21 26.5 22 24 22.5 C21.5 23 19 24 19 27 C19 29.5 21 31.5 24 31.5 C27 31.5 29 30 29 28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export function ProblemDocsIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 8 H28 L36 16 V40 H14 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M28 8 V16 H36" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M20 24 H30 M20 30 H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function ProblemTechIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="14" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="2.2" />
      <path d="M18 40 H30 M24 34 V40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="4" fill="currentColor" opacity=".3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

const PROBLEM_ICONS = {
  team: ProblemTeamIcon,
  process: ProblemProcessIcon,
  data: ProblemDataIcon,
  funding: ProblemFundingIcon,
  docs: ProblemDocsIcon,
  tech: ProblemTechIcon,
} as const

export function ProblemIcon({ id }: { id: keyof typeof PROBLEM_ICONS }) {
  const Icon = PROBLEM_ICONS[id]
  return <Icon />
}

export function CameraIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="5" y="12" width="30" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 12 L16.5 8 H23.5 L26 12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="20" cy="22" r="6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function PersonIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="15" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 33 C7 25 12.5 21 20 21 C27.5 21 33 25 33 33" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20 L28 11 L23 20 L20 29 L17 20 Z" fill="currentColor" opacity=".2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" />
    </svg>
  )
}

function SystemsIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="6" width="10" height="10" rx="2.5" fill="currentColor" opacity=".15" stroke="currentColor" strokeWidth="1.6" />
      <rect x="24" y="6" width="10" height="10" rx="2.5" fill="currentColor" opacity=".15" stroke="currentColor" strokeWidth="1.6" />
      <rect x="15" y="24" width="10" height="10" rx="2.5" fill="currentColor" opacity=".15" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 11 H24 M11 16 V21 C11 23 13 24 15 24 M29 16 V21 C29 23 27 24 25 24" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function TechnologyIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="12" y="12" width="16" height="16" rx="3" fill="currentColor" opacity=".12" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="20" r="3.5" fill="currentColor" opacity=".25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 6 V12 M20 28 V34 M6 20 H12 M28 20 H34 M10 10 L14.5 14.5 M29.5 29.5 L25.5 25.5 M10 30 L14.5 25.5 M29.5 10.5 L25.5 14.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function InsightsIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 32 V22 M16 32 V15 M24 32 V19 M32 32 V9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M8 20 L16 13 L24 17 L32 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="32" cy="7" r="2.5" fill="currentColor" />
    </svg>
  )
}

function SustainabilityIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M28 13 A12 12 0 1 1 12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 6 L28 13 L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="22" r="4" fill="currentColor" opacity=".2" />
    </svg>
  )
}

function CommunicationIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="7" width="17" height="22" rx="2.5" fill="currentColor" opacity=".12" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 13 H21 M12 18 H21 M12 23 H17" stroke="currentColor" strokeWidth="1.4" />
      <path d="M26 17 C30 17 33 20 33 24 C33 26 32 27.5 30.5 28.5 L32 32 L28 29.6 C27 29.9 26 30 25 29.9" fill="currentColor" opacity=".15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

const FACE_ICONS: Record<FaceId, () => ReactNode> = {
  strategy: StrategyIcon,
  systems: SystemsIcon,
  technology: TechnologyIcon,
  insights: InsightsIcon,
  sustainability: SustainabilityIcon,
  communication: CommunicationIcon,
}

export function FaceIcon({ id }: { id: FaceId }) {
  const Icon = FACE_ICONS[id]
  return <Icon />
}
