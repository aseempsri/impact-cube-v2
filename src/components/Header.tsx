import { useEffect, useState, type MouseEvent } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { BrandMark, MenuIcon } from './Icons'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/the-cube', label: 'The Cube' },
  { to: '/how-we-work', label: 'How We Work' },
  { to: '/our-work', label: 'Our Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 6L18 18M18 6L6 18" stroke="#15324A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onFacePage = pathname.startsWith('/face/')

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const onBrandClick = (e: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false)
    if (pathname !== '/') return
    e.preventDefault()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-row">
          <Link to="/" className="brand" onClick={onBrandClick}>
            <BrandMark /> IMPACT CUBE
          </Link>
          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            type="button"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
          <ul className="nav-links nav-links--desktop">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive || (item.to === '/the-cube' && onFacePage) ? 'active' : undefined
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-cta">
              <Link to="/contact" className="btn btn-primary">
                Strengthen Your Organisation
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* Drawer sits outside header so backdrop-filter cannot clip it */}
      <div
        className={`nav-scrim${open ? ' open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <nav
        className={`nav-drawer${open ? ' open' : ''}`}
        aria-label="Mobile"
        aria-hidden={!open}
      >
        <ul className="nav-drawer-links">
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive || (item.to === '/the-cube' && onFacePage) ? 'active' : undefined
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-primary nav-drawer-cta" onClick={() => setOpen(false)}>
          Strengthen Your Organisation
        </Link>
      </nav>
    </>
  )
}
