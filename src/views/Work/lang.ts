import type { IWork } from "./types";

const work: IWork[] = [
  {
    company: "Sabana Hub",
    description:
      "- Manage end-to-end development cycle from concept to deployment" +
      "\n- Collaborate with designers to create simple and intuitive UI/UX" +
      "\n- Implement tests, CI/CD workflows, and behavior-driven issues" +
      "\n- Support less experienced team members contributing to their growth",
    from: {
      month: "Dec",
      year: 2022
    },
    id: "SabanaHub",
    role: "Fullstack React Native Developer",
    skills: [
      "Express",
      "Firebase",
      "Git",
      "GitHub Actions",
      "Jest",
      "NoSQL",
      "Notifee",
      "React",
      "React Native",
      "Testing-library",
      "Typescript"
    ],
    to: {
      month: "Aug",
      year: 2023
    }
  },
  {
    company: "Fluid Attacks",
    description:
      "- Cooperate with designers to adopt atomic design" +
      "\n- Optimize and enhance core reusable components" +
      "\n- Implement new design and features of core platform",
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
      "i18next",
      "Jest",
      "Linux",
      "Python",
      "React",
      "Storybook",
      "Styled-components",
      "Tachyons",
      "Testing-library",
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
      "- Migrate html website to React.js and bootstrap" +
      "\n- Enhance web with simple, responsive and intuitive UI/UX" +
      "\n- Provide custom analytics and graphics with pdf & email reports",
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
      "- Integrate game with native AR view" +
      "\n- Plan and develop game models & controllers and main view" +
      "\n- Supervise and enhance the UI design and app UX" +
      "\n- Lead development and support team members",

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
