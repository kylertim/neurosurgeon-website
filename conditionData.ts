export type ConditionPage = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  dek: string;
  overview: string[];
  symptoms: string[];
  evaluation: string[];
  treatment: string[];
  relatedExpertise: { label: string; href: string }[];
};

export const conditionPages: ConditionPage[] = [
  {
    
    slug: "spinal-stenosis",
    label: "Spinal Stenosis",
    eyebrow: "Degenerative spine conditions",
    title: "Spinal stenosis",
    dek: "Narrowing around the spinal cord or nerves can cause pain, numbness, weakness or difficulty walking. Treatment depends on the location, severity and impact on daily function.",
    overview: [
      "Spinal stenosis most often develops as age-related changes reduce the space available for nerves in the cervical or lumbar spine.",
      "Imaging findings alone do not determine treatment. Symptoms, neurologic examination, function, prior therapy and the pattern of compression all matter when deciding what to do next."
    ],
    symptoms: ["Arm or leg pain", "Numbness or tingling", "Weakness", "Walking intolerance", "Balance difficulty when the cervical spinal cord is affected"],
    evaluation: ["Focused neurologic examination", "Review of MRI and other imaging", "Assessment of prior nonsurgical treatment", "Evaluation for instability or deformity when relevant"],
    treatment: ["Observation and activity modification", "Physical therapy and medication when appropriate", "Targeted injections in selected cases", "Decompression, endoscopic surgery or fusion when symptoms and anatomy warrant surgery"],
    relatedExpertise: [
      { label: "Endoscopic Spine Surgery", href: "/expertise/endoscopic-spine-surgery" },
      { label: "Complex Spine & Deformity", href: "/expertise/complex-spine-deformity" }
    ]
  },
  {
    slug: "spinal-deformity",
    label: "Spinal Deformity",
    eyebrow: "Scoliosis and alignment disorders",
    title: "Spinal deformity",
    dek: "Scoliosis, flatback syndrome and other alignment problems can affect posture, balance, pain and neurologic function. Evaluation looks at the whole spine and the whole patient.",
    overview: [
      "Adult spinal deformity includes abnormal curvature or alignment that may develop over time or follow prior spine surgery.",
      "The decision to operate is individualized. Symptoms, progression, overall alignment, nerve compression, bone quality, prior surgery and medical health all influence the plan."
    ],
    symptoms: ["Progressive stooping or imbalance", "Back or leg pain", "Difficulty standing upright", "Fatigue with prolonged standing", "Neurologic symptoms from associated nerve compression"],
    evaluation: ["Standing full-spine imaging", "MRI or CT when needed", "Assessment of bone health", "Review of prior operations and implants", "Discussion of functional goals and surgical risk"],
    treatment: ["Rehabilitation and symptom management", "Treatment of osteoporosis or other modifiable risks", "Focused decompression in selected cases", "Reconstructive surgery when deformity is severe and symptoms justify the risk"],
    relatedExpertise: [{ label: "Complex Spine & Deformity", href: "/expertise/complex-spine-deformity" }]
  },
  {
    slug: "spinal-tumors",
    label: "Spinal Tumors",
    eyebrow: "Spinal oncology",
    title: "Spinal tumors",
    dek: "Tumors can involve the vertebrae, spinal cord, coverings of the cord or nerve roots. The treatment plan depends on diagnosis, location, stability and neurologic impact.",
    overview: [
      "Spinal tumors range from benign lesions to cancers that spread to the spine. Some are observed, while others require surgery, radiation, systemic therapy or a combination of treatments.",
      "When surgery is considered, goals may include obtaining a diagnosis, relieving pressure on neural structures, maintaining stability or controlling the tumor."
    ],
    symptoms: ["Persistent focal back pain", "Pain that may worsen at night", "Weakness or numbness", "Changes in walking or balance", "Bowel or bladder changes in advanced compression"],
    evaluation: ["MRI and other imaging", "Review of cancer history when relevant", "Coordination with oncology and radiation oncology", "Biopsy planning when tissue diagnosis is needed"],
    treatment: ["Observation for selected lesions", "Radiation or systemic treatment", "Biopsy", "Surgical decompression and/or stabilization when indicated"],
    relatedExpertise: [{ label: "Spinal Tumors", href: "/expertise/spinal-tumors" }]
  },
  {
    slug: "degenerative-spine-disease",
    label: "Degenerative Spine Disease",
    eyebrow: "Common spine conditions",
    title: "Degenerative spine disease",
    dek: "Disc degeneration, arthritis and related changes are common. The clinical question is whether those changes explain a patient's symptoms and whether surgery offers a meaningful advantage.",
    overview: [
      "Degenerative changes can affect discs, joints, ligaments and the spaces available for nerves. Many people have imaging findings without severe symptoms.",
      "Good surgical decision-making starts by matching symptoms and neurologic findings to a specific structural problem rather than treating an MRI in isolation."
    ],
    symptoms: ["Neck or back pain", "Radiating arm or leg pain", "Numbness or tingling", "Weakness", "Loss of function despite appropriate nonsurgical care"],
    evaluation: ["History and neurologic examination", "MRI and X-rays as appropriate", "Assessment for instability or deformity", "Review of prior therapies and response"],
    treatment: ["Exercise-based rehabilitation", "Medication or injections when appropriate", "Decompression", "Endoscopic procedures", "Fusion or other reconstruction when instability or deformity is present"],
    relatedExpertise: [
      { label: "Endoscopic Spine Surgery", href: "/expertise/endoscopic-spine-surgery" },
      { label: "Complex Spine & Deformity", href: "/expertise/complex-spine-deformity" }
    ]
  },
  {
    slug: "movement-disorders",
    label: "Movement Disorders",
    eyebrow: "Functional neurosurgery",
    title: "Movement disorders",
    dek: "For selected patients with conditions such as Parkinson's disease, neuromodulation may help control specific symptoms when medication alone no longer provides adequate benefit.",
    overview: [
      "Deep brain stimulation is one treatment option within a broader movement-disorders program. It is considered only after careful neurologic evaluation and discussion of realistic goals.",
      "DBS does not cure a neurodegenerative disorder. The aim is to improve selected symptoms and quality of life in patients who are good candidates."
    ],
    symptoms: ["Tremor", "Rigidity", "Slowness of movement", "Medication fluctuations", "Involuntary movements related to treatment"],
    evaluation: ["Movement-disorders neurology assessment", "Medication response review", "Cognitive and functional evaluation when appropriate", "Discussion of target symptoms and expectations"],
    treatment: ["Medication optimization", "Rehabilitation and supportive therapies", "Deep brain stimulation for selected candidates", "Long-term device programming and follow-up"],
    relatedExpertise: [{ label: "Deep Brain Stimulation", href: "/expertise/deep-brain-stimulation" }]
  },
  {
    slug: "chronic-neuropathic-pain",
    label: "Chronic Neuropathic Pain",
    eyebrow: "Neuromodulation",
    title: "Chronic neuropathic pain",
    dek: "Persistent nerve-related pain can have many causes. In carefully selected patients, spinal cord stimulation may be considered after a comprehensive pain and spine evaluation.",
    overview: [
      "Neuropathic pain may persist even after appropriate treatment of an underlying structural problem. The first step is making sure there is not a correctable cause that requires a different approach.",
      "Spinal cord stimulation is generally considered only after appropriate nonsurgical and, when relevant, surgical options have been reviewed."
    ],
    symptoms: ["Burning or electric pain", "Persistent radiating pain", "Pain after prior spine surgery", "Numbness with painful sensations", "Functional limits from chronic pain"],
    evaluation: ["Clarify the pain generator", "Review prior procedures and surgery", "Pain-management assessment", "Psychological screening when required for neuromodulation", "Trial stimulation before permanent implant"],
    treatment: ["Medication and rehabilitation", "Pain interventions", "Treatment of a correctable structural problem", "Spinal cord stimulation for selected patients after a successful trial"],
    relatedExpertise: [{ label: "Spinal Cord Stimulation", href: "/expertise/spinal-cord-stimulation" }]
  },
  {
  slug: "herniated-disc",
  label: "Herniated Disc",
  eyebrow: "Spine Condition",
  title: "Herniated disc",
  dek:
    "A herniated disc can irritate or compress nearby nerves, sometimes causing pain, numbness, tingling, or weakness in the arms or legs.",

  overview: [
    "The discs between the vertebrae act as cushions within the spine. A herniated disc occurs when material inside a disc extends through its outer layer.",
    "Symptoms depend on where the disc herniation occurs and whether a nearby nerve root or the spinal cord is affected."
  ],

  symptoms: [
    "Radiating arm or leg pain",
    "Numbness or tingling",
    "Muscle weakness",
    "Neck or back pain",
    "Pain that worsens with certain movements"
  ],

  evaluation: [
    "Neurological examination",
    "Review of symptom pattern and severity",
    "MRI or other appropriate imaging",
    "Assessment of strength, sensation and reflexes",
    "Review of prior nonsurgical treatment"
  ],

  treatment: [
    "Activity modification and rehabilitation",
    "Medication when appropriate",
    "Physical therapy",
    "Targeted injections in selected patients",
    "Surgical decompression when symptoms or neurological deficits warrant it"
  ],

  relatedExpertise: [
    {
      label: "Endoscopic Spine Surgery",
      href: "/expertise/endoscopic-spine-surgery"
    },
    {
      label: "Complex Spine & Deformity",
      href: "/expertise/complex-spine-deformity"
    }
  ]
},
];

export function getConditionPage(slug: string) {
  return conditionPages.find((page) => page.slug === slug);
}
