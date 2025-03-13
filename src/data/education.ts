export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  gpa?: string | number;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2019-2023",
    institution: "University of Toronto",
    degree: "Honours BSc in Computer Science",
    advisor: "Roger Grosse, Igor Gilitschenski, and Animesh Garg",
    gpa: "3.89 / 4.00"
  },
];
