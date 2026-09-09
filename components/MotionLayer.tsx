"use client";

import { useEffect } from "react";

export function MotionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let ticking = false;

    const update = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / max, 1);
      root.style.setProperty("--scroll-progress", String(progress));
      root.style.setProperty("--scroll-y", `${window.scrollY}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (reduced.matches || ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
