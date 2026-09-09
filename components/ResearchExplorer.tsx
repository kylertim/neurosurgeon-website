"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "@/components/Icons";
import styles from "./ResearchExplorer.module.css";

type Publication = {
  year: string;
  title: string;
  journal: string;
  category: string;
  pubmedUrl: string;
  pmid: string;
};

const publications: Publication[] = [
  {
    year: "2026",
    category: "Endoscopy",
    title:
      "Percutaneous Endoscopic Debridement and Drainage as a First-Line Diagnosis and Management Intervention for Spondylodiscitis: A Novel Treatment Algorithm",
    journal: "Operative Neurosurgery",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/40341496/",
    pmid: "40341496",
  },
  {
    year: "2026",
    category: "Education",
    title:
      "What is the learning curve for endoscopic spine surgery? A comprehensive systematic review",
    journal: "The Spine Journal",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/39880043/",
    pmid: "39880043",
  },
  {
    year: "2025",
    category: "Technology",
    title:
      "Clinical Efficiency and Radiation Safety of Fluoroscopy-Based 2D Intraoperative Computer Navigation in Biportal Spinal Endoscopy",
    journal: "International Journal of Spine Surgery",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/40825588/",
    pmid: "40825588",
  },
  {
    year: "2025",
    category: "Endoscopy",
    title:
      "Enhancing endoscopic spine surgery with intraoperative augmented reality: A case report",
    journal: "International Journal of Surgery Case Reports",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/40279997/",
    pmid: "40279997",
  },
  {
    year: "2025",
    category: "Education",
    title:
      "Establishing a Standardized Fellowship Curriculum for Advanced Minimally Invasive Spine Interventions: A Multidisciplinary Approach to Training and Competency",
    journal: "Neurospine",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/40624995/",
    pmid: "40624995",
  },
  {
    year: "2025",
    category: "Spine",
    title:
      "Clinical outcomes of posterior cervical fusion in the setting of increasing age and medical complexity: an American national database analysis from 2012 to 2022",
    journal: "Asian Spine Journal",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/40551472/",
    pmid: "40551472",
  },
  {
    year: "2025",
    category: "AI",
    title:
      "Assessing AI Simplification of Medical Texts: Readability and Content Fidelity",
    journal: "International Journal of Medical Informatics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/39667051/",
    pmid: "39667051",
  },
  {
    year: "2024",
    category: "Spine",
    title:
      "Utility of the Modified 5-Items Frailty Index to Predict Complications and Mortality After Elective Cervical, Thoracic and Lumbar Posterior Spine Fusion Surgery: Multicentric Analysis From ACS-NSQIP Database",
    journal: "Global Spine Journal",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/36050879/",
    pmid: "36050879",
  },
];

const filters = ["All", "Endoscopy", "Technology", "Spine", "Education", "AI"];

export function ResearchExplorer() {
  const [filter, setFilter] = useState("All");

  const shown = useMemo(
    () =>
      filter === "All"
        ? publications
        : publications.filter((publication) => publication.category === filter),
    [filter]
  );

  return (
    <>
      <div className={styles.filter} aria-label="Filter selected publications">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={filter === item ? styles.activeFilter : undefined}
            aria-pressed={filter === item}
          >
            {item}
          </button>
        ))}
      </div>

      <div className={styles.publicationIndex}>
        {shown.map((publication) => (
          <a
            className={styles.publicationCard}
            href={publication.pubmedUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={publication.pmid}
            aria-label={`${publication.title} — view on PubMed`}
          >
            <span className={styles.year}>{publication.year}</span>

            <div className={styles.publicationBody}>
              <div className={styles.metaRow}>
                <small>{publication.category}</small>
                <small>PMID {publication.pmid}</small>
              </div>

              <strong>{publication.title}</strong>

              <div className={styles.footerRow}>
                <em>{publication.journal}</em>
                <span className={styles.pubmedLink}>
                  View on PubMed <ArrowUpRight />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <a
        className="button button-outline"
        href="https://profiles.icts.uci.edu/michael.oh"
        target="_blank"
        rel="noopener noreferrer"
      >
        View complete UCI publication profile <ArrowUpRight />
      </a>
    </>
  );
}
