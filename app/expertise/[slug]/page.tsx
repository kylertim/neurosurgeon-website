import type { Metadata } from "next";
import { notFound } from "next/navigation";
import  Header  from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, ChevronRight } from "@/components/Icons";
import { expertisePages, getExpertisePage } from "@/data";

export function generateStaticParams() {
  return expertisePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getExpertisePage(slug);
  if (!page) return {};
  return {
    title: page.label,
    description: page.intro,
  };
}

export default async function ExpertiseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getExpertisePage(slug);
  if (!page) notFound();

  return (
    <main>
      <Header />
      <section className="detail-hero">
        <div className="shell detail-hero-grid">
          <div>
            <a className="detail-back" href="/#expertise"><ChevronRight /> Expertise</a>
            <span className="eyebrow">{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
            <a className="button button-primary" href="#appointment">Request an appointment <ArrowUpRight /></a>
          </div>
          <div className="detail-portrait-panel">
            <img src="https://cdn-images.kyruus.com/providermatch/ucihealth/photos/orig/oh-michael-1275508525.png" alt="Michael Y. Oh, MD" />
            <div className="detail-portrait-caption"><strong>Michael Y. Oh, MD</strong><span>Board-Certified Neurosurgeon</span></div>
          </div>
        </div>
      </section>

      <section className="section detail-overview">
        <div className="shell detail-copy-grid">
          <div><span className="eyebrow">Overview</span><h2>Understanding the treatment decision.</h2></div>
          <div className="prose-large">
            {page.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="shell">
          <div className="detail-section-heading"><span className="eyebrow">What matters</span><h2>Care built around the diagnosis, not the technology.</h2></div>
          <div className="highlight-grid">
            {page.highlights.map((item, index) => (
              <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell faq-grid">
          <div><span className="eyebrow">Common questions</span><h2>Questions to bring to your consultation.</h2></div>
          <div className="faq-list">
            {page.questions.map((item) => <article key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section detail-disclaimer-section">
        <div className="shell detail-disclaimer">
          <strong>Patient education, not medical advice</strong>
          <p>This page provides general educational information. Diagnosis and treatment recommendations require review of your history, examination and imaging by a qualified clinician. Seek emergency care for new severe weakness, loss of bowel or bladder control, severe trauma or other urgent symptoms.</p>
        </div>
      </section>

      <section className="section contact-section" id="appointment">
        <div className="shell contact-card">
          <div><span className="eyebrow eyebrow-light">Appointments</span><h2>Talk with the<br/>UCI Health team.</h2><p>For a new or current patient appointment with Dr. Oh, contact UCI Health. The personal site does not collect medical records or protected health information.</p></div>
          <div className="contact-actions">
            <a className="button button-white" href="tel:+17144563656">714-456-3656 <ArrowUpRight /></a>
            <a className="text-link text-link-light" href="https://www.ucihealth.org/clinicians/michael-oh-1275508525" target="_blank" rel="noreferrer">UCI Health profile <ArrowUpRight /></a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
