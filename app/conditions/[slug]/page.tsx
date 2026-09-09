import type { Metadata } from "next";
import { notFound } from "next/navigation";
import  Header  from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, ChevronRight } from "@/components/Icons";
import { conditionPages, getConditionPage } from "@/conditionData";

export function generateStaticParams() { return conditionPages.map(page => ({ slug: page.slug })); }

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getConditionPage(slug);
  if (!page) return {};
  return { title: page.label, description: page.dek };
}

export default async function ConditionDetail({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const page = getConditionPage(slug);
  if (!page) notFound();
  return <main><Header />
    <section className="condition-hero"><div className="shell condition-hero-grid"><div><a className="detail-back" href="/conditions"><ChevronRight/> Conditions</a><span className="eyebrow">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.dek}</p><a className="button button-primary" href="#appointment">Request an appointment <ArrowUpRight/></a></div><aside className="condition-side-note"><span>Clinical principle</span><strong>Imaging is part of the story — not the whole story.</strong><p>Diagnosis and treatment depend on symptoms, examination, imaging and the patient&apos;s goals.</p></aside></div></section>
    <section className="section"><div className="shell detail-copy-grid"><div><span className="eyebrow">Overview</span><h2>What this diagnosis can mean.</h2></div><div className="prose-large">{page.overview.map(p => <p key={p}>{p}</p>)}</div></div></section>
    <section className="section section-warm"><div className="shell triage-grid"><article><span>01</span><h2>Symptoms that may occur</h2><ul>{page.symptoms.map(x => <li key={x}>{x}</li>)}</ul></article><article><span>02</span><h2>How it is evaluated</h2><ul>{page.evaluation.map(x => <li key={x}>{x}</li>)}</ul></article><article><span>03</span><h2>Treatment may include</h2><ul>{page.treatment.map(x => <li key={x}>{x}</li>)}</ul></article></div></section>
    <section className="section"><div className="shell related-care"><div><span className="eyebrow">Related expertise</span><h2>Explore relevant treatment areas.</h2></div><div className="related-care-links">{page.relatedExpertise.map(link => <a href={link.href} key={link.href}><strong>{link.label}</strong><ArrowUpRight/></a>)}</div></div></section>
    <section className="section detail-disclaimer-section"><div className="shell detail-disclaimer"><strong>Patient education, not medical advice</strong><p>This content is general education and cannot diagnose a condition or determine whether surgery is appropriate. New severe weakness, loss of bowel or bladder control, severe trauma or other urgent neurologic symptoms require emergency evaluation.</p></div></section>
    <section className="section contact-section" id="appointment"><div className="shell contact-card"><div><span className="eyebrow eyebrow-light">Appointments</span><h2>Discuss your case<br/>with UCI Health.</h2><p>Bring relevant imaging, reports and a list of prior treatments. This personal website does not collect medical records or protected health information.</p></div><div className="contact-actions"><a className="button button-white" href="tel:+17144563656">714-456-3656 <ArrowUpRight/></a><a className="text-link text-link-light" href="https://www.ucihealth.org/clinicians/michael-oh-1275508525" target="_blank" rel="noreferrer">UCI Health profile <ArrowUpRight/></a></div></div></section>
    <Footer /></main>;
}
