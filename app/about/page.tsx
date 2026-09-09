import  Header  from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Award } from "@/components/Icons";

const timeline = [
  ["Medical education", "Keck School of Medicine at USC and New York Medical College"],
  ["Surgical internship", "Allegheny General Hospital, Pittsburgh"],
  ["Research fellowship", "Stereotactic & functional neurosurgery, University of Toronto / Toronto Western Hospital"],
  ["Neurosurgery residency", "Allegheny General Hospital, including service as chief resident"],
  ["Current academic leadership", "Professor and Vice Chair of Education, Neurological Surgery, UC Irvine School of Medicine"],
];

export default function AboutPage() {
  return <main><Header/>
    <section className="inner-hero"><div className="shell inner-hero-grid"><Reveal><span className="eyebrow">About Dr. Oh</span><h1>Training, leadership<br/>and a career in<br/><em>neurosurgery.</em></h1><p>Michael Y. Oh, MD is a board-certified neurosurgeon whose practice spans spine disorders and stereotactic and functional neurosurgery.</p></Reveal><div className="inner-hero-photo"><img src="https://cdn-images.kyruus.com/providermatch/ucihealth/photos/orig/oh-michael-1275508525.png" alt="Michael Y. Oh, MD"/></div></div></section>
    <section className="section"><div className="shell bio-intro-grid"><Reveal><span className="eyebrow">Professional profile</span><h2>Focused on complex spine care and functional neurosurgery.</h2></Reveal><Reveal className="prose-large"><p>Dr. Oh&apos;s clinical interests include endoscopic spine surgery, spinal cord stimulation, deep brain stimulation, spine tumors and spine deformity.</p><p>At UCI Health, he serves in academic and clinical leadership roles that include Director of the Comprehensive Spine Center and Vice Chair of Education in Neurological Surgery.</p></Reveal></div></section>
    <section className="section section-warm"><div className="shell"><Reveal className="section-heading"><span className="eyebrow">Education & training</span><h2>A career shaped by surgery, research and teaching.</h2></Reveal><div className="timeline">{timeline.map(([label,text],i)=><Reveal key={label} className="timeline-row"><span>{String(i+1).padStart(2,"0")}</span><strong>{label}</strong><p>{text}</p></Reveal>)}</div></div></section>
    <section className="section"><div className="shell credentials-band"><Award/><div><span className="eyebrow">Board certification</span><h2>American Board of Neurological Surgery</h2><p>Dr. Oh is listed by UCI Health as board-certified in neurological surgery and as a Fellow of the American Association of Neurological Surgeons.</p></div></div></section>
    <section className="section contact-section"><div className="shell contact-card"><div><span className="eyebrow eyebrow-light">Official profile</span><h2>Verify current<br/>credentials.</h2><p>For the most current appointment availability, affiliations and professional information, visit Dr. Oh&apos;s official UCI Health profile.</p></div><div className="contact-actions"><a className="button button-white" href="https://www.ucihealth.org/clinicians/michael-oh-1275508525" target="_blank" rel="noreferrer">UCI Health profile <ArrowUpRight/></a></div></div></section>
    <Footer/></main>
}
