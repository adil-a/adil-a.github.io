export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2025 - Present",
    title: "AI Software Engineer, GenAI Frameworks",
    company: "NVIDIA",
    description:
      "Deep Learning Algorithms Team | Developing GenAI frameworks and solving large-scale, end-to-end AI training and inference-deployment challenges.",
    companyUrl: "https://www.nvidia.com/en-us/",
  },
  {
    date: "2023 - 2025",
    title: "Associate Applied ML Specialist",
    company: "Vector Institute",
    description:
      "LLM Infrastructure Team | Worked on ML systems, research, and AI safety.",
    companyUrl: "https://vectorinstitute.ai",
  },
  // {
  //   date: "2022",
  //   title: "Applied ML Intern",
  //   company: "Vector Institute",
  //   description:
  //     "Worked on GPU benchmarking for cluster upgrades as well as synthetic data generation.",
  //   companyUrl: "https://vectorinstitute.ai",
  // },
  // {
  //   date: "2020 - 2021",
  //   title: "Data Science Intern",
  //   company: "G42",
  //   description:
  //     "Worked on GPU benchmarking for cluster upgrades as well as synthetic data generation.",
  //   companyUrl: "https://vectorinstitute.ai",
  // },
];
