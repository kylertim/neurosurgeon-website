"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  credit?: string;
};

export function ParallaxPhoto({ src, alt, className = "", credit }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const midpoint = rect.top + rect.height / 2;
      const viewportMid = window.innerHeight / 2;
      const offset = Math.max(-1, Math.min(1, (midpoint - viewportMid) / window.innerHeight));
      el.style.setProperty("--photo-shift", `${offset * -22}px`);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <figure ref={ref} className={`parallax-photo ${className}`}>
      <img src={src} alt={alt} />
      {credit ? <figcaption>{credit}</figcaption> : null}
    </figure>
  );
}
