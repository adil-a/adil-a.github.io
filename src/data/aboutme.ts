export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Adil Asif",
  title: "Deep Learning Engineer",
  institution: "Nvidia",
  // Note that links work in the description
  description:
    "<b><a href='https://www.givingwhatwecan.org/'>Giving What We Can</a></b><br><br>I'm a deep learning engineer at NVIDIA, working on <a href='https://github.com/NVIDIA/NeMo'>NeMo</a> and <a href='https://github.com/NVIDIA/Megatron-LM'>Megatron-Core</a>, two open-source, large-scale generative AI frameworks. My current research interests focus on reasoning safety and alignment science, with an emphasis on novel methods that scale well. I also collaborate closely with <a href='https://www.cs.toronto.edu/~rgrosse/'>Roger Grosse</a>'s group at the University of Toronto.<br><br>Until recently, I worked as an Applied ML Specialist at the Vector Institute. Before that, I earned my Honours BSc in Computer Science from the University of Toronto.<br><br>If any of this resonates with you and you'd like to chat, please drop me an email.",
  email: "adilasif_at_cs.toronto.edu",
  imageUrl:
    "/images/me.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=-3BA9OEAAAAJ&hl=en",
  githubUsername: "adil-a",
  linkedinUsername: "m-adil-asif",
  twitterUsername: "a_gi_dil",
  // blogUrl: "https://",
  cvUrl: "/resume.pdf",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  secretDescription: "I like cats.",
};
