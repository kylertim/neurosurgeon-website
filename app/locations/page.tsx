import  Header  from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, MapPin } from "@/components/Icons";

const locations = [
  ["UCI Health Neurosurgery Services", "101 The City Drive South, Building 30", "Orange, CA 92868"],
  ["UCI Health — Irvine", "19200 Jamboree Road, Suite 4100", "Irvine, CA 92612"],
  ["UCI Health — Yorba Linda Multispecialty", "18637 Yorba Linda Boulevard", "Yorba Linda, CA 92886"],
  ["UCI Health — Irvine", "19210 Jamboree Road", "Irvine, CA 92612"],
  ["UCI Health — Placentia Linda", "1301 North Rose Drive", "Placentia, CA 92870"],
];

export default function LocationsPage(){return <main><Header/>
  <section className="inner-hero locations-hero"><div className="shell"><Reveal><span className="eyebrow">Locations</span><h1>UCI Health care<br/>across <em>Orange County.</em></h1><p>Locations shown here reflect Dr. Oh&apos;s current UCI Health profile. Confirm the appropriate site when scheduling.</p></Reveal></div></section>
  <section className="section"><div className="shell location-cards">{locations.map(([name,address,city],i)=><Reveal key={name+address} className="location-card"><MapPin/><span>0{i+1}</span><h2>{name}</h2><p>{address}<br/>{city}</p><a href="https://www.ucihealth.org/clinicians/michael-oh-1275508525" target="_blank" rel="noreferrer">View UCI Health profile <ArrowUpRight/></a></Reveal>)}</div></section>
  <section className="section contact-section"><div className="shell contact-card"><div><span className="eyebrow eyebrow-light">Appointments</span><h2>Find the right<br/>location.</h2><p>Call UCI Health to confirm which location is appropriate for your appointment with Dr. Oh.</p></div><div className="contact-actions"><a className="button button-white" href="tel:+17144563656">714-456-3656 <ArrowUpRight/></a></div></div></section>
  <Footer/></main>}
