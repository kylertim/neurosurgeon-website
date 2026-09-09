import type { Metadata } from "next";
import  Header  from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/Icons";
import { ResearchExplorer } from "@/components/ResearchExplorer";

export const metadata: Metadata = {
  title: "Research & Media",
  description: "Selected research, publications, media and educational work from Michael Y. Oh, MD, UCI Health neurosurgeon in Orange County.",
};

export default function ResearchPage(){return <main><Header/>
  <section className="inner-hero research-hero"><div className="shell"><Reveal><span className="eyebrow">Research & media</span><h1>Advancing care<br/>through <em>inquiry.</em></h1><p>Selected work in endoscopic spine surgery, navigation and technology, surgical outcomes, education and patient communication.</p></Reveal></div></section>

  <section className="section"><div className="shell research-feature-grid"><Reveal><span className="eyebrow">Research focus</span><h2>Technology is useful when it improves the decision or the operation.</h2></Reveal><Reveal className="prose-large"><p>UCI Health identifies advances in neurosurgical robotics as a research interest of Dr. Oh. His recent academic work also includes endoscopic spine surgery, navigation, augmented reality, outcomes research and surgical education.</p><p>Dr. Oh also holds a patent related to minimally invasive removal of intracranial blood clots.</p></Reveal></div></section>

  <section className="section section-warm"><div className="shell"><Reveal className="section-heading"><span className="eyebrow">Selected publications</span><h2>Browse recent academic work.</h2><p className="research-note">This is a curated sample. Publication data should be reviewed periodically against Dr. Oh&apos;s UCI profile and PubMed.</p></Reveal><ResearchExplorer/></div></section>

  <section className="section media-showcase"><div className="shell media-showcase-grid"><Reveal className="media-video-card"><div className="video-poster"><span className="video-play">▶</span><div><small>UCI Health</small><strong>Meet Michael Y. Oh, MD</strong></div></div><a href="https://streamio.com/api/v1/videos/63667a506f8d8d3724000001/public_show?player_id=59eed3d56f8d8d20b5000001" target="_blank" rel="noreferrer">Watch introduction video <ArrowUpRight/></a></Reveal><Reveal><span className="eyebrow">In the media</span><h2>Perspectives on modern spine care.</h2><div className="media-list compact-media-list"><a href="https://www.ucihealth.org/about-us/news/2026/02/outpatient-spine-surgery" target="_blank" rel="noreferrer"><span>2026</span><strong>Benefits and challenges of outpatient spine surgery</strong><ArrowUpRight/></a><a href="https://www.ucihealth.org/about-us/news/2024/07/pain-medicine-future" target="_blank" rel="noreferrer"><span>2024</span><strong>Collaboration between spine and pain specialists can foster innovation</strong><ArrowUpRight/></a></div></Reveal></div></section>

  <section className="section review-source-section"><div className="shell review-source-card"><div><span className="eyebrow">Patient feedback</span><h2>Reviews stay with the verified source.</h2><p>Rather than copying individual testimonials onto this site, patient ratings and comments should remain on UCI Health where the source, date and moderation context are visible.</p></div><a className="button button-dark" href="https://www.ucihealth.org/clinicians/michael-oh-1275508525" target="_blank" rel="noreferrer">View UCI Health ratings <ArrowUpRight/></a></div></section>
  <Footer/></main>}
