/* eslint-disable no-unused-vars */
import {
  IconMail,
  IconLinkedin,
  IconInstagram,
  IconGithub,
} from "./src/components/Icons/index";

import git from "./public/skills/git.svg";
import { FaXTwitter } from "react-icons/fa6";
import mysql from "./public/skills/mysql.svg";
import postgresql from "./public/skills/postgresql.svg";
import python from "./public/skills/python.svg";
import aws from "./public/skills/aws.svg";
import gcp from "./public/skills/gcp.svg";
import docker from "./public/skills/docker.svg";
import airflow from "./public/skills/airflow.svg";
import pandas from "./public/skills/pandas.svg";
import powerbi from "./public/skills/powerbi.svg";
import looker from "./public/skills/looker.svg";

export const METADATA = {
  author: "Supakun Thata",
  title: "Portfolio | Supakun Thata",
  description:
    "Supakun Thata is a passionate Frontend Developer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  keywords: [
    "Supakun Thata",
    "Frontend Developer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "About",
    ref: "about",
  },
  {
    name: "Experience",
    ref: "experience",
  },
  {
    name: "Education",
    ref: "education",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I'm Software Developer",
  "I like to learn things",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: supakunt.thata@gmail.com",
    img: <IconMail />,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/supakun-thata-437a62328/",
    img: <IconLinkedin />,
  },
  {
    name: "github",
    url: "https://github.com/SupakunZ",
    img: <IconGithub />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/gunnkkun_/",
    img: <IconInstagram />,
  },
  {
    name: "twitter",
    url: "https://x.com/GuNz246448",
    img: <FaXTwitter style={{ width: "24px", height: "24px" }} />,
  },
];

export const SKILLS = [
  {
    tools: "Git",
    img: git,
  },
  {
    tools: "Python",
    img: python,
  },
  {
    tools: "Mysql",
    img: mysql,
  },
  {
    tools: "PostgreSQL",
    img: postgresql,
  },
  {
    tools: "Aws",
    img: aws,
  },
  {
    tools: "Gcp",
    img: gcp,
  },
  {
    tools: "Docker",
    img: docker,
  },
  {
    tools: "Airflow",
    img: airflow,
  },
  {
    tools: "Pandas",
    img: pandas,
  },
  {
    tools: "PowerBI",
    img: powerbi,
  },
  {
    tools: "Looker",
    img: looker,
  },
];

export const experiences = [
  {
    id: 1,
    title: "Mechanical Engineer",
    company: "Site Engineer Air Conditioning | First Technology",
    duration: "(Oct 2023 - Mar 2024)",
  },
  {
    id: 2,
    title: "Gnss RTK Navigation",
    company: "Internship Python Developer | GISTDA",
    duration: "(Apr 2022 - Dec 2022)",
  },
];

export const education = [
  {
    id: 3,
    title: "Road to Data Engineer",
    company: "DataTH School",
    duration: "(Jan 2025 - Mar 2025)",
  },
  {
    id: 4,
    title: "Full Stack Development Bootcamp",
    company: "Westride Institute of Technology",
    duration: "(Apr 2024 - Aug 2024)",
  },
  {
    id: 5,
    title: "Mechanical Engineering",
    company: "Naresuan University",
    duration: "(May 2019 - Apr 2023)",
  },
];

export const PROJECTS = [
  {
    name: "Book Sales Pipeline",
    image: "/projects/bookrevenue.png",
    blurImage: "/projects/bookrevenue.webp",
    description: "End-To-End Data Pipeline on GCP 📚",
    gradient: ["#5800ca", "#b37afd"],
    url: "https://www.notion.so/End-to-End-Data-Pipeline-for-Book-Sales-on-GCP-1cb20b6dac9d802aa613cc64292066df?pvs=4",
    tech: ["airflow", "gcp", "pandas", "looker"],
    tag: ["fullstack"],
  },
  {
    name: "Employee Data Pipeline",
    image: "/projects/empdatafusion.png",
    blurImage: "/projects/empdatafusion.png",
    description: "End-To-End Data Pipeline on GCP 👽",
    gradient: ["#45B649", "#DCE35B"],
    url: "https://github.com/supakunz/ETL-Pipeline-Datafusion-GCP",
    tech: ["airflow", "gcp", "pandas", "looker"],
    tag: ["fullstack"],
  },
  {
    name: "Uber Data Pipeline",
    image: "/projects/uberpipline.png",
    blurImage: "/projects/uberpipline.png",
    description: "End-To-End Data Pipeline on GCP 🚗",
    gradient: ["#f857a6", "#ff5858"],
    url: "https://github.com/supakunz/Uber-Pipeline-GCP",
    tech: ["airflow", "gcp", "pandas", "powerbi"],
    tag: ["fullstack"],
  },
  {
    name: "Reddit Data Pipeline",
    image: "/projects/reddit-aws.png",
    blurImage: "/projects/reddit-aws.png",
    description: "End-To-End Data Pipeline on AWS 🤖",
    gradient: ["#536976", "#BBD2C5"],
    url: "https://github.com/supakunz/ETL-Reddit-Pipeline-AWS",
    tech: ["airflow", "aws", "pandas", "docker"],
    tag: ["frontend"],
  },

  //   gradient: ["#3A4D6F", "#708daa"],
  //   gradient: ["#FFA62E", "#EA4D2C"],
  //   gradient: ["#F14658", "#DC2537"],
  //   gradient: ["#f857a6", "#ff5858"],
  //   gradient: ["#9140ac", "#ce44bc"],
  //   gradient: ["#667db6", "#0082c8"],
  //   gradient: ["#00416A", "#E4E5E6"],
];

export const personalData = {
  name: "Supakun Thata",
  profile: "/profile.png",
  designation: "Software Developer",
  email: "supakunt.thata@gmail.com",
  phone: "0622787171",
  address: "Chiang Rai, Thailand - 57160 ",
  github: "https://github.com/SupakunZ",
  instagram: "https://www.instagram.com/gunnkkun_/",
  linkedIn: "https://www.linkedin.com/in/supakun-thata-437a62328/",
  twitter: "https://x.com/GuNz246448",
  devUsername: "NEOSPEX",
  resume:
    "https://drive.google.com/file/d/1Yu2dQ3535C5IgO7xC_O9_E5NErbo9PMY/view?usp=drive_link",
};
