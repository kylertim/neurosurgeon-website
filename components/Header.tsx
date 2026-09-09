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

  // Header styling after scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock background scrolling while the mobile menu is open.
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (mobileOpen) {
      html.classList.add("nav-open");
      body.classList.add("nav-open");
    } else {
      html.classList.remove("nav-open");
      body.classList.remove("nav-open");
    }

    return () => {
      html.classList.remove("nav-open");
      body.classList.remove("nav-open");
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-shell">
        {/* Brand */}
        <Link href="/" className="brand" onClick={closeMobileMenu}>
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

        {/* Desktop navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/about" className="nav-link">
            About
          </Link>

          {/* Conditions */}
          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-link dropdown-trigger"
              aria-haspopup="true"
            >
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
                      <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-link dropdown-trigger"
              aria-haspopup="true"
            >
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
                      <span aria-hidden="true">→</span>
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

        {/* Right-side controls */}
        <div className="nav-actions">
          <Link href="/locations" className="appointment-button">
            Request appointment
          </Link>

          <button
            type="button"
            className={`menu-button ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile / tablet navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-menu ${mobileOpen ? "open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="mobile-menu-inner"
          aria-label="Mobile navigation"
        >
          <Link href="/about" onClick={closeMobileMenu}>
            About
          </Link>

          <div className="mobile-group">
            <span>Conditions</span>

            {conditions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/research" onClick={closeMobileMenu}>
            Research & Media
          </Link>

          <Link href="/locations" onClick={closeMobileMenu}>
            Locations
          </Link>
        </nav>
      </div>
    </header>
  );
}