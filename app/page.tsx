import  Header  from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { MotionLayer } from "@/components/MotionLayer";
import { ParallaxPhoto } from "@/components/ParallaxPhoto";
import { Activity, ArrowUpRight, Award, Brain, ChevronRight, MapPin, Spine } from "@/components/Icons";

const expertise = [
  { icon: Spine, title: "Endoscopic Spine Surgery", slug: "endoscopic-spine-surgery", text: "Ultra-minimally invasive spine techniques for carefully selected conditions." },
  { icon: Activity, title: "Complex Spine & Deformity", slug: "complex-spine-deformity", text: "Evaluation and surgical management of spinal deformity and challenging spinal conditions." },
  { icon: Brain, title: "Spinal Tumors", slug: "spinal-tumors", text: "Specialized evaluation of tumors involving the spinal column, spinal cord or surrounding nerves." },
  { icon: Brain, title: "Deep Brain Stimulation", slug: "deep-brain-stimulation", text: "Functional neurosurgery and neuromodulation for selected movement disorders." },
  { icon: Activity, title: "Spinal Cord Stimulation", slug: "spinal-cord-stimulation", text: "Neuromodulation therapy for selected patients with chronic pain." },
];

const conditions = [
  { label: "Spinal stenosis", slug: "spinal-stenosis" },
  { label: "Spine deformity", slug: "spinal-deformity" },
  { label: "Spinal tumors", slug: "spinal-tumors" },
  { label: "Degenerative spine disease", slug: "degenerative-spine-disease" },
  { label: "Movement disorders", slug: "movement-disorders" },
  { label: "Chronic neuropathic pain", slug: "chronic-neuropathic-pain" },
];

const media = [
  { date: "2026", title: "Benefits and challenges of outpatient spine surgery", href: "https://www.ucihealth.org/about-us/news/2026/02/outpatient-spine-surgery" },
  { date: "2024", title: "Collaboration between spine and pain specialists can foster innovation", href: "https://www.ucihealth.org/about-us/news/2024/07/pain-medicine-future" },
];

export default function Home() {
  return (
    <main id="top">
      <MotionLayer />
      <Header />

      <section className="hero hero-v3">
        <div className="hero-photo-panel" aria-hidden="true">
          <img className="hero-portrait-motion" src="https://cdn-images.kyruus.com/providermatch/ucihealth/photos/orig/oh-michael-1275508525.png" alt="" />
          <div className="hero-photo-shade"/>
        </div>
        <div className="shell hero-v3-grid">
          <Reveal className="hero-copy-v3">
            <div className="kicker"><span className="kicker-dot"/> Board-Certified Neurosurgeon</div>
            <h1>Precision for the spine.<br/><em>Perspective</em> for the patient.</h1>
            <p className="hero-lede">Michael Y. Oh, MD is a UCI Health neurosurgeon specializing in spine disorders and stereotactic and functional neurosurgery.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Request an appointment <ArrowUpRight/></a>
              <a className="text-link" href="/about">Meet Dr. Oh <ChevronRight/></a>
            </div>
          </Reveal>
          <div className="hero-floating-card">
            <span>Leadership</span>
            <strong>Director, Comprehensive Spine Center</strong>
            <small>UCI Health</small>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="shell trust-row"><span>ABNS BOARD CERTIFIED</span><span className="trust-rule"/><span>SPINE NEUROSURGERY</span><span className="trust-rule"/><span>FUNCTIONAL NEUROSURGERY</span><span className="trust-rule"/><span>ACADEMIC MEDICINE</span></div>
      </section>

      <section className="section" id="expertise">
        <div className="shell">
          <Reveal className="section-heading split-heading">
            <div><span className="eyebrow">Areas of expertise</span><h2>Specialized care for<br/>complex problems.</h2></div>
            <p>Dr. Oh&apos;s clinical interests span endoscopic spine surgery, spine tumors and deformity, spinal cord stimulation and deep brain stimulation.</p>
          </Reveal>
          <div className="expertise-grid">
            {expertise.map(({ icon: Icon, title, text, slug }, i) => (
              <Reveal key={title} className="reveal-card" delay={i * 65}>
                <article className="expertise-card">
                  <span className="card-number">0{i + 1}</span><Icon className="expertise-icon"/><h3>{title}</h3><p>{text}</p>
                  <a href={`/expertise/${slug}`}>Learn more <ArrowUpRight/></a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-warm" id="about">
        <div className="shell editorial-about-grid">
          <Reveal className="editorial-portrait">
            <img src="https://cdn-images.kyruus.com/providermatch/ucihealth/photos/orig/oh-michael-1275508525.png" alt="Michael Y. Oh, MD" />
            <p>Development image from Dr. Oh&apos;s UCI Health profile. Replace with an approved local portrait before launch.</p>
          </Reveal>
          <Reveal className="about-copy">
            <span className="eyebrow">Meet Michael Y. Oh, MD</span>
            <h2>Academic leadership.<br/>Focused expertise.</h2>
            <p className="lead">Dr. Oh combines spine surgery, functional neurosurgery, education and research in a practice centered on careful evaluation and appropriate use of advanced technology.</p>
            <div className="leadership-stats">
              <div><strong>Professor</strong><span>Neurological Surgery<br/>UC Irvine School of Medicine</span></div>
              <div><strong>Vice Chair</strong><span>Education<br/>Neurological Surgery</span></div>
              <div><strong>Director</strong><span>Comprehensive<br/>Spine Center</span></div>
            </div>
            <a className="button button-outline" href="/about">Biography & training <ArrowUpRight/></a>
          </Reveal>
        </div>
      </section>


      <section className="section visual-story-section" aria-label="Care, technology and communication">
        <div className="shell visual-story-heading">
          <Reveal>
            <span className="eyebrow">The environment of care</span>
            <h2>Technology matters. So does the conversation around it.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>These development images add clinical context without pretending to show Dr. Oh or a specific UCI procedure. Replace them with approved UCI or commissioned photography before launch.</p>
          </Reveal>
        </div>
        <div className="visual-story-rail">
          <Reveal className="visual-story-item visual-story-item-wide">
            <ParallaxPhoto
              src="https://images.unsplash.com/photo-1776104501583-3c83f2adfc3d?auto=format&fit=crop&fm=jpg&q=82&w=2200"
              alt="Modern operating room with advanced surgical technology"
              credit="Development image: Navy Medicine / Unsplash"
            />
            <div className="visual-story-copy"><span>01</span><strong>Advanced technology</strong><p>Use imagery to support the story of precision and innovation—not to overpromise outcomes.</p></div>
          </Reveal>
          <Reveal className="visual-story-item" delay={90}>
            <ParallaxPhoto
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&fm=jpg&q=82&w=1800"
              alt="Doctor speaking with a patient during a consultation"
              credit="Development image: National Cancer Institute / Unsplash"
            />
            <div className="visual-story-copy"><span>02</span><strong>Clear communication</strong><p>Good decisions start with understanding the diagnosis, alternatives and expected recovery.</p></div>
          </Reveal>
          <Reveal className="visual-story-item" delay={150}>
            <ParallaxPhoto
              src="https://images.unsplash.com/photo-1758691461957-474a7686e388?auto=format&fit=crop&fm=jpg&q=82&w=1800"
              alt="Physician and patient meeting in a modern clinical office"
              credit="Development image: Vitaly Gariev / Unsplash"
            />
            <div className="visual-story-copy"><span>03</span><strong>Patient-centered planning</strong><p>The site should feel calm, informative and human before a patient ever reaches the clinic.</p></div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="conditions">
        <div className="shell conditions-layout">
          <Reveal className="conditions-intro"><span className="eyebrow">Conditions & care</span><h2>Clear information before important decisions.</h2><p>Explore common clinical areas and the treatment approaches Dr. Oh may consider after a complete evaluation.</p></Reveal>
          <div className="conditions-list">
            {conditions.map((condition, index) => <a href={`/conditions/${condition.slug}`} key={condition.slug}><span>{String(index + 1).padStart(2, "0")}</span><strong>{condition.label}</strong><ArrowUpRight/></a>)}
          </div>
        </div>
      </section>

      <section className="section outcomes-section">
        <div className="shell outcomes-grid">
          <Reveal><span className="eyebrow eyebrow-light">Innovation & judgment</span><h2>Advanced technology.<br/>Patient-centered decisions.</h2></Reveal>
          <Reveal className="outcomes-copy"><p>Dr. Oh&apos;s research interests include robotics for neurosurgical procedures, while his clinical practice includes advanced spine techniques and neuromodulation.</p><a className="text-link text-link-light" href="/research">Research & innovation <ChevronRight/></a></Reveal>
        </div>
      </section>

      <section className="section media-section" id="research">
        <div className="shell media-grid">
          <Reveal><span className="eyebrow">Research & media</span><h2>Education, innovation and a wider conversation about care.</h2><p className="media-intro">Recent work and commentary from Dr. Oh&apos;s academic and clinical practice.</p><a className="button button-outline" href="/research">Explore research <ArrowUpRight/></a></Reveal>
          <div className="media-list">
            {media.map(item => <a key={item.title} href={item.href} target="_blank" rel="noreferrer"><span>{item.date}</span><strong>{item.title}</strong><ArrowUpRight/></a>)}
          </div>
        </div>
      </section>

      <section className="section patient-trust-section">
        <div className="shell patient-trust-grid">
          <Reveal><span className="eyebrow">Patient feedback</span><h2>Trust the source,<br/>not a copied quote.</h2><p>Patient ratings and comments are kept on the UCI Health profile so visitors can see them in their original, current context.</p></Reveal>
          <Reveal className="patient-trust-card"><span>Verified source</span><strong>UCI Health patient ratings & reviews</strong><p>We intentionally do not republish individual testimonials on this personal site.</p><a href="https://www.ucihealth.org/clinicians/michael-oh-1275508525" target="_blank" rel="noreferrer">Read ratings on UCI Health <ArrowUpRight/></a></Reveal>
        </div>
      </section>

      <section className="section locations-preview">
        <div className="shell location-preview-grid">
          <Reveal><span className="eyebrow">UCI Health locations</span><h2>Care across Orange County.</h2><p>Dr. Oh&apos;s UCI Health profile currently lists locations in Orange, Irvine, Yorba Linda and Placentia.</p></Reveal>
          <Reveal className="location-feature"><MapPin/><div><span>Featured location</span><strong>UCI Health Neurosurgery Services</strong><p>101 The City Drive South<br/>Building 30<br/>Orange, CA 92868</p><a href="/locations">View all locations <ArrowUpRight/></a></div></Reveal>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="shell contact-card">
          <div><span className="eyebrow eyebrow-light">Appointments & referrals</span><h2>Take the next<br/>step.</h2><p>New and current patients can contact UCI Health for appointments with Dr. Oh. For emergencies, call 911 or go to the nearest emergency department.</p></div>
          <div className="contact-actions"><a className="button button-white" href="tel:+17144563656">714-456-3656 <ArrowUpRight/></a><a className="location location-link" href="https://www.ucihealth.org/clinicians/michael-oh-1275508525" target="_blank" rel="noreferrer"><MapPin/><span>Schedule through<br/>UCI Health</span></a></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
