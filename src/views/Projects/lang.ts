import type { IProject } from "./types";

const projects: IProject[] = [
  {
    description: "React SPA that generates my CV in pdf format",
    link: "https://github.com/estidlore/CV",
    name: "CV",
    skills: ["JsPDF", "React", "SASS", "Typescript"]
  },
  {
    description:
      "SASS Npm module with many powerful UI/UX utils with smooth " +
      "numeric values changes and concise selectors",
    link: "https://github.com/estidlore/bonbon",
    name: "Bonbon",
    skills: ["React", "SASS", "Typescript", "UI/UX"]
  },
  {
    description:
      "2D game about dodging obstacles with several game modes and many " +
      "personalization options",
    link: "https://github.com/estidlore/Dodgie",
    name: "Dodgie",
    skills: [
      "Android",
      "C#",
      "Godot",
      "Illustration",
      "Java",
      "Multi-Threads",
      "UI/UX",
      "XML"
    ]
  },
  {
    description:
      "Jam's 2nd place 3D game about escaping from a 3D generated maze",
    link: "https://github.com/estidlore/Freedom-Walls",
    name: "Freedom Walls",
    skills: ["Algorithms", "C#", "Data Structures", "Optimization", "Unity"]
  }
];

const ENG = {
  more: "Do you want to discover my other projects?",
  repositories: "Visit my repositories",
  title: "Projects"
};

const t = (): typeof ENG => ENG;

export { projects, t };
