"use client"

import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState } from "react"
import { navigationItems, profile } from "@/lib/portfolio-data"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav-shell section-container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            MA
          </span>
          <span className="brand-copy">
            <strong>{profile.name}</strong>
            <span>AI · Software · Education</span>
          </span>
        </a>

        <div className="desktop-nav">
          {navigationItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-contact" href="#contact">
          <span>Let&apos;s talk</span>
          <ArrowUpRight aria-hidden="true" size={15} />
        </a>

        <button
          aria-controls={menuOpen ? "mobile-navigation" : undefined}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="mobile-nav-panel" id="mobile-navigation">
          <nav aria-label="Mobile navigation" className="mobile-nav-links">
            {navigationItems.map((item) => (
              <a
                className="mobile-nav-link"
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
