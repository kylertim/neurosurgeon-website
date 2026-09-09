import type { Metadata } from "next";
import  Header  from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "@/components/Icons";
import { conditionPages } from "@/conditionData";

export const metadata: Metadata = {
  title: "Conditions",
  description: "Patient education about spine and functional neurosurgery conditions evaluated by Michael Y. Oh, MD at UCI Health in Orange County.",
};

export default function ConditionsPage() {
  return <main><Header />
    <section className="inner-hero conditions-index-hero"><div className="shell"><span className="eyebrow">Patient education</span><h1>Understand the condition.<br/><em>Then</em> consider the options.</h1><p>Clear, diagnosis-first information about common problems seen in spine and functional neurosurgery.</p></div></section>
    <section className="section"><div className="shell condition-index-grid">
      {conditionPages.map((item, index) => <a className="condition-index-card" href={`/conditions/${item.slug}`} key={item.slug}><span>{String(index + 1).padStart(2,"0")}</span><div><small>{item.eyebrow}</small><h2>{item.label}</h2><p>{item.dek}</p></div><ArrowUpRight/></a>)}
    </div></section>
    <Footer /></main>;
}
