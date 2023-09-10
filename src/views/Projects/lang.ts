import type { IProject } from "./types";

const projects: IProject[] = [
  {
    description:
      "npm open-source library with common utilities for JS and TS " +
      "for needs such as arrays, math objects and time",
    link: "https://github.com/estidlore/litus",
    name: "Litus",
    skills: ["Algorithms", "Javascript", "Jest", "Typescript"]
  },
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
