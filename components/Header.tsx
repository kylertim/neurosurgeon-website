"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const conditions = [
  { label: "Spinal Stenosis", href: "/conditions/spinal-stenosis" },
  { label: "Herniated Disc", href: "/conditions/herniated-disc" },
  { label: "Spinal Deformity", href: "/conditions/spinal-deformity" },
  { label: "Spinal Tumors", href: "/conditions/spinal-tumors" },
];

const expertise = [
  {
    label: "Endoscopic Spine Surgery",
    href: "/expertise/endoscopic-spine-surgery",
  },
  {
    label: "Complex Spine & Deformity",
    href: "/expertise/complex-spine-deformity",
  },
  {
    label: "Deep Brain Stimulation",
    href: "/expertise/deep-brain-stimulation",
  },
  {
    label: "Spinal Cord Stimulation",
    href: "/expertise/spinal-cord-stimulation",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-shell">
        <Link href="/" className="brand">
          <div className="brand-mark">
            <span>M</span>
            <span className="brand-slash">/</span>
            <span>O</span>
          </div>

          <div className="brand-copy">
            <strong>
              Michael Y. Oh, <span>MD</span>
            </strong>
            <small>Spine & Functional Neurosurgery</small>
          </div>
        </Link>

        <nav className="desktop-nav">
          <Link href="/about" className="nav-link">
            About
          </Link>

          <div className="nav-dropdown">
            <button className="nav-link dropdown-trigger">
              Conditions
              <span className="chevron" aria-hidden="true" />
            </button>

            <div className="dropdown-panel">
              <div className="dropdown-inner">
                <div className="dropdown-heading">
                  <span>Conditions</span>
                  <p>Common spine and neurological conditions.</p>
                </div>

                <div className="dropdown-links">
                  {conditions.map((item) => (
                    <Link key={item.href} href={item.href}>
                      {item.label}
                      <span>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="nav-dropdown">
            <button className="nav-link dropdown-trigger">
              Expertise
              <span className="chevron" aria-hidden="true" />
            </button>

            <div className="dropdown-panel wide">
              <div className="dropdown-inner">
                <div className="dropdown-heading">
                  <span>Expertise</span>
                  <p>
                    Advanced surgical and neuromodulation approaches.
                  </p>
                </div>

                <div className="dropdown-links">
                  {expertise.map((item) => (
                    <Link key={item.href} href={item.href}>
                      {item.label}
                      <span>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/research" className="nav-link">
            Research & Media
          </Link>

          <Link href="/locations" className="nav-link">
            Locations
          </Link>
        </nav>

        <div className="nav-actions">
          <Link href="/locations" className="appointment-button">
            Request appointment
          </Link>

          <button
            className={`menu-button ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">
          <Link href="/about" onClick={() => setMobileOpen(false)}>
            About
          </Link>

          <div className="mobile-group">
            <span>Conditions</span>
            {conditions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mobile-group">
            <span>Expertise</span>
            {expertise.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/research" onClick={() => setMobileOpen(false)}>
            Research & Media
          </Link>

          <Link href="/locations" onClick={() => setMobileOpen(false)}>
            Locations
          </Link>
        </div>
      </div>
    </header>
  );
}