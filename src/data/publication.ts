interface ConferenceDetail {
  name: string;
  year?: number | string;
  type?: string; // 'workshop', 'main', etc.
}

export interface Publication {
  title: string;
  authors: string;
  authorName: string; // Your name to be bolded (optional)
  conference: string | string[] | ConferenceDetail | ConferenceDetail[];
  year?: number | string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  imageUrl?: string;
  award?: string;
  tldr?: string;
}

export const publicationData: Publication[] = [
  {
    title: "Teaching LLMs How to Learn with Contextual Fine-Tuning",
    authors: "Younwoo Choi*, Muhammad Adil Asif*, Ziwen Han, John Willes, Rahul G. Krishnan",
    authorName: "Muhammad Adil Asif*",
    conference: [
      { name: "ICLR", year: 2025, type: "" },
      { name: "NeurIPS", year: 2024, type: "FITML Workshop" }
    ],
    paperUrl: "https://openreview.net/pdf?id=FS2nukC2jv",
    codeUrl: "https://github.com/rgklab/Contextual-Fine-Tuning/",
    imageUrl: "/images/cft.png",
    tldr: "Contextual Fine-Tuning blends prompting with training to improve how LLMs learn domain-specific knowledge."
  },
  
  {
    title: "FlexModel: A Framework for Interpretability of Distributed Large Language Models",
    authors: "Matthew Choi, Muhammad Adil Asif, John Willes, David B. Emerson",
    authorName: "Muhammad Adil Asif",
    conference: "NeurIPS SoLaR Workshop",
    year: 2023,
    paperUrl: "https://arxiv.org/pdf/2312.03140",
    codeUrl: "https://github.com/VectorInstitute/flex_model",
    imageUrl: "/images/flex_model.png",
    tldr: "FlexModel provides interpretability tooling for distributed LLMs.",
    award: "💡 Spotlight Award"
  },
  
  {
    title: "Geometry Matching for Multi-Embodiment Grasping",
    authors: "Maria Attarian, Muhammad Adil Asif, Jingzhou Liu, Ruthrash Hari, Animesh Garg, Igor Gilitschenski, Jonathan Tompson",
    authorName: "Muhammad Adil Asif",
    conference: "CoRL",
    year: 2023,
    paperUrl: "https://proceedings.mlr.press/v229/attarian23a/attarian23a.pdf",
    codeUrl: "https://github.com/google-deepmind/geomatch",
    imageUrl: "/images/geomatch.png",
    tldr: "GeoMatch learns contact point likelihood maps and conditional autoregressive predictions of grasps.",
  },
];
