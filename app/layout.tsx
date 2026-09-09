import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Michael Y. Oh, MD | Neurosurgeon in Orange County", template: "%s | Michael Y. Oh, MD" },
  description: "Michael Y. Oh, MD is a board-certified UCI Health neurosurgeon specializing in spine disorders and stereotactic and functional neurosurgery in Orange County, California.",
  keywords: ["Michael Oh MD", "neurosurgeon Orange County", "endoscopic spine surgery Orange County", "spine surgeon Irvine", "spine surgeon Orange", "deep brain stimulation Orange County", "UCI neurosurgery"],
  openGraph: {
    title: "Michael Y. Oh, MD | Spine & Functional Neurosurgery",
    description: "Board-certified UCI Health neurosurgeon specializing in spine disorders and stereotactic and functional neurosurgery.",
    type: "website"
  },
  robots: { index: true, follow: true }
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Michael Y. Oh, MD",
  telephone: "+1-714-456-3656",
  medicalSpecialty: ["Neurosurgery", "Spine Surgery", "Functional Neurosurgery"],
  areaServed: "Orange County, California",
  address: { "@type": "PostalAddress", streetAddress: "101 The City Drive South, Building 30", addressLocality: "Orange", addressRegion: "CA", postalCode: "92868", addressCountry: "US" },
  sameAs: ["https://www.ucihealth.org/clinicians/michael-oh-1275508525", "https://profiles.icts.uci.edu/michael.oh"],
  knowsAbout: ["Endoscopic spine surgery", "Spinal deformity", "Spinal tumors", "Spinal cord stimulation", "Deep brain stimulation"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(physicianSchema)}} />{children}</body></html>;
}
