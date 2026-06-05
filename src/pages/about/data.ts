export interface Social {
  label: string;
  href: string;
}

export interface ExperienceEntry {
  title: string;
  type: string;
  dates: string;
}

export interface EducationEntry {
  title: string;
  status: string;
  institution: string;
  dates: string;
}

export interface ExtraCurricularEntry {
  title: string;
  dates: string;
}

export interface Language {
  name: string;
  level: string;
  cert: string | null;
}

export interface SkillEntry {
  label: string;
  value: number;
}

export const socials: Social[] = [
  { label: "Instagram", href: "https://instagram.com/marianaangelo" },
  { label: "LinkedIn", href: "https://linkedin.com/in/marianaangelo" },
  { label: "Behance", href: "https://behance.net/marianaangelo" },
];

export const experience: ExperienceEntry[] = [
  {
    title: "UZINA – JUNIOR DIGITAL DESIGNER",
    type: "FULL-TIME",
    dates: "April 2025–present",
  },
  {
    title: "ROCK IN RIO LISBOA 2024 [20TH EDITION] – GRAPHIC DESIGNER",
    type: "FULL-TIME",
    dates: "November 2023 – July 2024",
  },
  {
    title: "GUMBA AGENCY – BRAND DESIGNER",
    type: "FREELANCE",
    dates: "August 2022 – March 2023",
  },
  {
    title: "SOUNDCHECK | MUSIC PLATFORM – GRAPHIC DESIGNER & CONTENT CREATOR",
    type: "FREELANCE",
    dates: "May 2022 – January 2023",
  },
  {
    title: "FREELANCE WORK – GRAPHIC DESIGNER",
    type: "FREELANCE",
    dates: "March 2021 – March 2025",
  },
];

export const education: EducationEntry[] = [
  {
    title: "MASTER DEGREE IN GRAPHIC DESIGN & EDITORIAL PROJECTS",
    status: "GRADUATED",
    institution: "Faculty of Fine Arts of the University of Porto",
    dates: "September 2021 – November 2023",
  },
  {
    title: "MASTER DEGREE IN COMMUNICATION DESIGN",
    status: "1 SEMESTER",
    institution: "Faculty of Fine Arts of the University of Lisbon",
    dates: "September 2020 – March 2021",
  },
  {
    title: "BACHELOR DEGREE IN DESIGN & MULTIMEDIA",
    status: "GRADUATED",
    institution:
      "Faculty of Sciences and Technologies of the University of Coimbra",
    dates: "September 2017 – July 2020",
  },
];

export const extraCurricular: ExtraCurricularEntry[] = [
  {
    title: "COMPETITIVE SWIMMER | ASSOCIAÇÃO ACADÉMICA DE COIMBRA",
    dates: "2011 – April 2019",
  },
  {
    title: "WEB SUMMIT VOLUNTEERING",
    dates: "November 2019",
  },
];

export const languages: Language[] = [
  { name: "PORTUGUESE", level: "Native", cert: null },
  {
    name: "ENGLISH",
    level: "Advanced Level",
    cert: "FCE | First Certificate in English",
  },
  { name: "SPANISH", level: "Basic Level", cert: null },
];

export const softSkills: string[] = [
  "OBSERVANT",
  "CURIOUS",
  "DETAILED",
  "EASY-GOING",
  "CREATIVE",
];

export const hobbies: string[] = [
  "MUSIC",
  "ILLUSTRATION",
  "FASHION",
  "PHOTOGRAPHY",
  "CINEMA",
  "BOOKS",
];

export const hardSkills: SkillEntry[] = [
  { label: "GRAPHIC DESIGN", value: 8 },
  { label: "EDITORIAL DESIGN", value: 8 },
  { label: "ILLUSTRATION", value: 7 },
  { label: "BRANDING", value: 7 },
  { label: "COPYWRITING", value: 4 },
  { label: "HTML & CSS", value: 4 },
  { label: "MOTION DESIGN", value: 3 },
];

export const softwares: SkillEntry[] = [
  { label: "ADOBE PHOTOSHOP", value: 8 },
  { label: "ADOBE INDESIGN", value: 7 },
  { label: "ADOBE ILLUSTRATOR", value: 7 },
  { label: "ADOBE AFTER EFFECTS", value: 5 },
  { label: "ADOBE PREMIERE", value: 4 },
  { label: "ADOBE LIGHTROOM", value: 4 },
  { label: "FIGMA", value: 6 },
  { label: "POWERPOINT", value: 5 },
  { label: "KEYNOTE", value: 5 },
];
