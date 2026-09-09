"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

  const scrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
    Robust mobile scroll locking, including iOS Safari.
    The page is fixed in place while the menu is open.
  */
  useEffect(() => {
    if (!mobileOpen) return;

    scrollPosition.current = window.scrollY;

    const body = document.body;
    const html = document.documentElement;

    body.style.position = "fixed";
    body.style.top = `-${scrollPosition.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    html.style.overflow = "hidden";

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";

      html.style.overflow = "";

      window.scrollTo(0, scrollPosition.current);
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-shell">
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

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/about" className="nav-link">
            About
          </Link>

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

      <div
        id="mobile-navigation"
        className={`mobile-menu ${mobileOpen ? "open" : ""}`}
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