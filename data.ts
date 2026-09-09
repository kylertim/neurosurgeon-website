export type ExpertisePage = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  overview: string[];
  highlights: { title: string; text: string }[];
  questions: { q: string; a: string }[];
};

export const expertisePages: ExpertisePage[] = [
  {
    slug: "endoscopic-spine-surgery",
    label: "Endoscopic Spine Surgery",
    eyebrow: "Minimally invasive spine care",
    title: "Endoscopic spine surgery",
    intro:
      "An ultra-minimally invasive approach that uses a small camera and specialized instruments to reach selected spinal problems through a narrow surgical corridor.",
    overview: [
      "Endoscopic spine surgery can allow a surgeon to directly visualize and treat selected sources of nerve compression through a very small working channel.",
      "It is not the right operation for every diagnosis. The decision depends on symptoms, imaging, anatomy, prior treatment and the overall goals of care.",
    ],
    highlights: [
      { title: "Focused access", text: "Small surgical corridors may reduce disruption of surrounding tissue in appropriately selected cases." },
      { title: "Careful selection", text: "The most important step is determining whether an endoscopic approach fits the patient's anatomy and diagnosis." },
      { title: "Academic spine program", text: "UCI Health describes its spine program as a leader in minimally invasive, endoscopic and robot-assisted spine surgery." },
    ],
    questions: [
      { q: "Who may be considered?", a: "Patients with certain degenerative or compressive spinal conditions may be candidates after a full clinical and imaging evaluation." },
      { q: "Does endoscopic surgery replace fusion?", a: "No. Some conditions can be treated through decompression alone, while instability, deformity or other structural problems may require a different operation." },
      { q: "What should I bring to a consultation?", a: "Bring recent imaging, prior reports, a medication list and a concise history of symptoms and previous treatments." },
    ],
  },
  {
    slug: "complex-spine-deformity",
    label: "Complex Spine & Deformity",
    eyebrow: "Complex and reconstructive spine care",
    title: "Complex spine & deformity",
    intro:
      "Evaluation and surgical treatment for spinal deformity, complex degenerative disease and challenging spinal conditions that may require multidisciplinary planning.",
    overview: [
      "Spinal deformity can include scoliosis, flatback syndrome and other alignment problems that affect posture, balance, pain and neurologic function.",
      "Treatment planning may involve reviewing the entire spine, prior operations, bone health, neurologic symptoms and the patient's functional goals before deciding whether surgery is appropriate.",
    ],
    highlights: [
      { title: "Whole-spine planning", text: "Complex deformity care often requires attention to alignment, neural compression, stability and prior surgical history." },
      { title: "Multidisciplinary care", text: "UCI's Comprehensive Spine Center brings together neurosurgery, orthopaedics, neuroradiology, physiatry and rehabilitation." },
      { title: "Technology when useful", text: "Advanced imaging, navigation and robotics may be incorporated when they improve precision and fit the surgical plan." },
    ],
    questions: [
      { q: "Does every spinal deformity need surgery?", a: "No. Decisions depend on symptoms, progression, neurologic findings, function and whether nonsurgical treatment remains appropriate." },
      { q: "Why is alignment important?", a: "Spinal alignment can influence standing balance, energy use and how forces are distributed across the spine." },
      { q: "What makes a case complex?", a: "Prior surgery, severe deformity, instability, neurologic compression, infection, tumor or medical comorbidities can all increase complexity." },
    ],
  },
  {
    slug: "spinal-tumors",
    label: "Spinal Tumors",
    eyebrow: "Spinal oncology",
    title: "Spinal tumors",
    intro:
      "Specialized evaluation of tumors involving the spinal column, spinal cord or surrounding nerves, with treatment tailored to tumor type, location and neurologic impact.",
    overview: [
      "A spinal tumor can affect the vertebrae, the tissues around the spinal cord, the spinal cord itself or the nerve roots. Symptoms and treatment vary widely depending on location and biology.",
      "Evaluation often requires MRI or other imaging and may involve collaboration with oncology, radiation oncology, pathology and additional specialists.",
    ],
    highlights: [
      { title: "Neurologic protection", text: "Treatment planning prioritizes preservation or recovery of neurologic function whenever possible." },
      { title: "Structural stability", text: "When tumor affects the bony spine, the plan may also need to address spinal stability and alignment." },
      { title: "Team-based treatment", text: "Surgery can be one part of a broader plan that may include radiation, systemic therapy or observation." },
    ],
    questions: [
      { q: "Are all spinal tumors cancerous?", a: "No. Spinal tumors can be benign or malignant, and treatment depends on the specific diagnosis and behavior." },
      { q: "When is surgery considered?", a: "Surgery may be considered for neurologic compression, instability, diagnosis, tumor control or pain, depending on the individual case." },
      { q: "Is a biopsy always needed?", a: "Not always. The need for biopsy depends on imaging, suspected diagnosis and whether pathology would change the treatment plan." },
    ],
  },
  {
    slug: "deep-brain-stimulation",
    label: "Deep Brain Stimulation",
    eyebrow: "Functional neurosurgery",
    title: "Deep brain stimulation",
    intro:
      "A neuromodulation therapy that uses implanted electrodes to influence targeted brain circuits in selected patients with movement disorders.",
    overview: [
      "Deep brain stimulation, or DBS, is most commonly considered for selected movement disorders after a detailed evaluation by a multidisciplinary team.",
      "The goal is not to cure the underlying disorder, but to improve specific symptoms and quality of life when the expected benefits justify the procedure and ongoing programming.",
    ],
    highlights: [
      { title: "Team evaluation", text: "Candidate selection typically includes neurologic assessment, medication history and discussion of goals and expectations." },
      { title: "Adjustable therapy", text: "After implantation, stimulation settings can be programmed and adjusted over time." },
      { title: "Functional expertise", text: "Dr. Oh completed fellowship training in stereotactic and functional neurosurgery and lists DBS among his clinical interests." },
    ],
    questions: [
      { q: "What conditions can DBS treat?", a: "DBS is used for selected movement disorders such as Parkinson's disease and other conditions depending on individual circumstances." },
      { q: "Does DBS eliminate medication?", a: "Not necessarily. Medication needs vary after treatment and are managed with the neurology team." },
      { q: "What happens after surgery?", a: "Follow-up includes device programming, symptom assessment and ongoing coordination with the movement-disorders team." },
    ],
  },
  {
    slug: "spinal-cord-stimulation",
    label: "Spinal Cord Stimulation",
    eyebrow: "Neuromodulation",
    title: "Spinal cord stimulation",
    intro:
      "An implantable neuromodulation therapy used in selected patients with chronic pain after careful evaluation of diagnosis, prior treatment and functional goals.",
    overview: [
      "Spinal cord stimulation sends electrical impulses to specific areas of the spinal cord to modify pain signaling. It is generally considered after a comprehensive pain and spine evaluation.",
      "Many systems use a trial period before permanent implantation so that the patient and care team can assess whether the therapy provides meaningful benefit.",
    ],
    highlights: [
      { title: "Trial before implant", text: "A temporary trial can help assess whether stimulation meaningfully improves pain and function before permanent implantation." },
      { title: "Collaborative selection", text: "Pain specialists and spine surgeons may work together to determine whether neuromodulation fits the patient's diagnosis and goals." },
      { title: "Long-term follow-up", text: "Successful therapy includes programming, device management and ongoing reassessment after implantation." },
    ],
    questions: [
      { q: "Who may be a candidate?", a: "Selected patients with chronic pain that has not responded sufficiently to appropriate nonsurgical or surgical care may be evaluated." },
      { q: "Is spinal cord stimulation permanent?", a: "A permanent device can be removed, but it is intended as a long-term therapy when the trial is successful." },
      { q: "Will it remove all pain?", a: "The goal is meaningful symptom and functional improvement, not necessarily complete elimination of pain." },
    ],
  },
];

export function getExpertisePage(slug: string) {
  return expertisePages.find((page) => page.slug === slug);
}
