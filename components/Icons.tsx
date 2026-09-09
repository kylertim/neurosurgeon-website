import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export function ArrowUpRight(props: IconProps) {
  return <svg {...base(props)}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>;
}
export function ChevronRight(props: IconProps) {
  return <svg {...base(props)}><path d="m9 18 6-6-6-6"/></svg>;
}
export function Brain(props: IconProps) {
  return <svg {...base(props)}><path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v1a3 3 0 0 0-1 5.83V16a4 4 0 0 0 4 4h1V5.5a1 1 0 0 0-.5-1Z"/><path d="M14.5 4.5A3.5 3.5 0 0 1 18 8v1a3 3 0 0 1 1 5.83V16a4 4 0 0 1-4 4h-1V5.5a1 1 0 0 1 .5-1Z"/><path d="M6 9h4M14 9h4M5 15h5M14 15h5"/></svg>;
}
export function Spine(props: IconProps) {
  return <svg {...base(props)}><path d="M12 3v18"/><path d="M9 5c2 1 4 1 6 0M9 9c2 1 4 1 6 0M9 13c2 1 4 1 6 0M9 17c2 1 4 1 6 0"/><circle cx="12" cy="3" r="1"/><circle cx="12" cy="21" r="1"/></svg>;
}
export function Activity(props: IconProps) {
  return <svg {...base(props)}><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>;
}
export function Award(props: IconProps) {
  return <svg {...base(props)}><circle cx="12" cy="8" r="5"/><path d="m8.5 12 1 9 2.5-2 2.5 2 1-9"/></svg>;
}
export function MapPin(props: IconProps) {
  return <svg {...base(props)}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
}
