import type { IWork } from "./types";

const work: IWork[] = [
  {
    company: "Fluid Attacks",
    description:
      "UX team's developer for ARM platform. Main responsible of the " +
      "platform's storybook development and new designs implementation. " +
      "Furthermore, proposed and contributed to design some features.",
    from: {
      month: "Apr",
      year: 2022
    },
    id: "Fluid",
    role: "Security Developer",
    skills: [
      "ESLint",
      "Formik",
      "Git",
      "HTML",
      "React-i18next",
      "Linux",
      "Python",
      "React",
      "Storybook",
      "Styled-components",
      "Tachyons",
      "React-Testing-library",
      "Typescript",
      "UI/UX"
    ],
    to: {
      month: "Sep",
      year: 2022
    }
  },
  {
    company: "Universidad de La Sabana",
    description:
      "Designer and developer of web apps for Dirección Central De " +
      "Estudiantes department, and maintain and improve the exitent ones.",
    from: {
      month: "Jan",
      year: 2021
    },
    id: "UniSabana",
    role: "Web developer",
    skills: [
      "Bootstrap",
      "React-ChartJs-2",
      "EmailJS",
      "Firebase",
      "Git",
      "Javascript",
      "JSON",
      "JsPDF",
      "React",
      "Sass",
      "UI/UX"
    ],
    to: {
      month: "Jan",
      year: 2022
    }
  },
  {
    company: "Pietrario",
    description:
      "Lead the UI/UX design and development of Flutter + AR game. " +
      "Author of key features such as the game and shop views design and " +
      "behavior with its corresponding models and controllers logic; " +
      "also the support of multiple languages and dark mode.",
    from: {
      month: "Jul",
      year: 2020
    },
    id: "Pietrario",
    role: "Software developer",
    skills: ["Agile", "AR", "Dart", "Flutter", "Git", "Java", "MVC", "UI/UX"],
    to: {
      month: "Nov",
      year: 2020
    }
  }
];

const ENG = {
  title: "Work",
  work
};

const t = (): typeof ENG => ENG;

export { t };
