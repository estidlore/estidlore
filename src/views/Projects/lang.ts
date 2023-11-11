import type { IProject } from "./types";

const projects: IProject[] = [
  {
    description:
      "open-source library for JS and TS  with common utilities " +
      "for needs such as arrays, math, objects and time",
    link: "https://www.npmjs.com/package/litus",
    name: "Litus",
    repository: "https://github.com/estidlore/litus",
    skills: ["Algorithms", "Javascript", "Jest", "Typescript"],
  },
  {
    description:
      "open-source library for React to manage state of forms, " +
      "language and others common needs",
    link: "https://www.npmjs.com/package/ruxi",
    name: "Ruxi",
    repository: "https://github.com/estidlore/ruxi",
    skills: ["React", "Typescript"],
  },
  {
    description: "React app that used to generate my CV in pdf format",
    name: "CV",
    repository: "https://github.com/estidlore/CV",
    skills: ["JsPDF", "React", "SASS", "Typescript"],
  },
  {
    description:
      "SASS Npm module with many powerful UI/UX utils with smooth " +
      "numeric values changes and concise selectors",
    name: "Bonbon",
    repository: "https://github.com/estidlore/bonbon",
    skills: ["React", "SASS", "Typescript", "UI/UX"],
  },
  {
    description:
      "Jam's 2nd place 3D game about escaping from a 3D generated maze",
    name: "Freedom Walls",
    repository: "https://github.com/estidlore/Freedom-Walls",
    skills: ["Algorithms", "C#", "Data Structures", "Optimization", "Unity"],
  },
  {
    description: "Small website to show some of my projects and work",
    link: "https://estidlore.web.app/",
    name: "Portfolio",
    repository: "https://github.com/estidlore/estidlore",
    skills: ["React", "Typescript", "TailwindCss", "Jest", "UI/UX"],
  },
];

const ENG = {
  repositories: "Discover more projects",
  title: "Projects",
};

const t = (): typeof ENG => ENG;

export { projects, t };
