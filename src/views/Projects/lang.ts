import type { IProject } from "./types";

const projects: IProject[] = [
  {
    description:
      "SASS/SCSS Npm module with many powerful UI/UX utils with smooth " +
      "numeric values changes and concise selectors",
    link: "https://github.com/estidlore/bonbon",
    name: "Bonbon",
    skills: ["React", "SASS/SCSS", "Typescript", "UI/UX"]
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
      "Optimization",
      "Threads",
      "UI/UX",
      "XML"
    ]
  },
  {
    description:
      "Jam's 2nd place 3D game about escaping from a 3D generated maze",
    link: "https://github.com/estidlore/Freedom-Walls",
    name: "Freedom Walls",
    skills: ["Algorithms", "Optimization", "Unity"]
  }
];

const ENG = {
  more: "Do you want to see more projects?",
  repositories: "Visit my repositories",
  title: "Projects"
};

const t = (): typeof ENG => ENG;

export { projects, t };
