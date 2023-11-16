import type { IProject } from "./types";

const projects: IProject[] = [
  {
    description:
      "Web with my own maze generation algorithm, shown step by step and " +
      "shaped according to screen size",
    link: "https://estidlore.github.io/maze-web",
    name: "Maze generator",
    repository: "https://github.com/estidlore/maze-web",
    skills: [
      "Algorithms",
      "Canvas",
      "Optimization",
      "Problem-solving",
      "Typescript",
    ],
  },
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
