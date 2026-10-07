export const person = {
  name: "Adedayo Olatunde",
  headline: "I design and ship production backend systems.",
  roles:
    "Lead Backend Engineer at Civil Drive. Head of Technical Operations at Alvative.",
  availability: "Open to senior backend and technical lead roles.",
  email: "olatundeadedayo1@gmail.com",
  linkedin: "https://www.linkedin.com/in/adedayo-olatunde/",
  github: "https://github.com/daryoh",
  resumePath: "/adedayo-olatunde-cv.pdf",
  description:
    "Adedayo Olatunde is a lead backend engineer. He ships production systems for CivilDrive and TruckingDrive, and scaled Pennyfy past 200,000 monthly requests.",
};

export const experience = [
  {
    role: "Lead Backend Engineer",
    org: "Civil Drive",
    place: "Canada",
    dates: "2024–present",
    points: [
      "Led backend delivery for CivilDrive, construction project management, and TruckingDrive, fleet and logistics management. Both products are live in the Canadian market.",
      "Services run on Node.js, Express, and TypeScript, and ship in containers.",
      "CI/CD and automated tests cut release cycles by 20%.",
      "Production monitoring and log review kept uptime at 99.9%.",
    ],
  },
  {
    role: "Head of Technical Operations",
    org: "Alvative Resources",
    place: "Nigeria",
    dates: "2025–present",
    points: [
      "Manage a distributed team of outsourced technical support agents and the path from support into engineering sprints.",
      "Set KPIs and SLAs at a bar of at least 85%, and review them weekly.",
      "Resource and shift changes held service uptime at 99.9% and cut operational overhead by 15%.",
    ],
  },
  {
    role: "Integrations Support Specialist",
    org: "Paystack",
    place: "Nigeria",
    dates: "2022–2025",
    points: [
      "Diagnosed production integration issues from server logs, performance metrics, and API traces.",
      "Handled high-severity P0 and P1 incidents, with 99.9% resolution reliability.",
      "Wrote internal troubleshooting guides from the root causes of recurring integration issues.",
    ],
  },
];

export const education = [
  {
    credential: "MBA, General Management",
    school: "University of Lagos",
    year: "",
  },
  {
    credential: "BTech, Chemical and Petrochemical Engineering",
    school: "Rivers State University",
    year: "",
  },
];

export const training = [
  {
    credential: "Software Engineering Fellowship",
    school: "TIIDELAB",
    year: "",
  },
  {
    credential: "Project Management Professionals Training",
    school: "JK MICHAELS",
    year: "",
  },
];

export type Tone = "clay" | "sea" | "rose";

export const projects: {
  id: string;
  title: string;
  summary: string;
  role: string;
  dates: string;
  url?: string;
  urlLabel?: string;
  tone: Tone;
  stack: string[];
  paragraphs: string[];
}[] = [
  {
    id: "civildrive",
    title: "CivilDrive",
    summary: "Construction project management, live in the Canadian market.",
    role: "Lead Backend Engineer, Civil Drive",
    dates: "2024–present",
    url: "https://app.civildrive.ca/",
    urlLabel: "app.civildrive.ca",
    tone: "clay",
    stack: ["TypeScript", "Node.js", "Express", "Docker"],
    paragraphs: [
      "CivilDrive is construction project management software. It is one of two products I shipped as lead backend engineer at Civil Drive, both live in the Canadian market. The other is TruckingDrive.",
      "The backend is Node.js, Express, and TypeScript, deployed in containers. I owned the path from development to production for these services, including the Git workflow the team uses to integrate work.",
      "Release cadence and uptime for this role are on the Civil Drive experience entry: CI/CD and automated tests cut release cycles by 20%, and production monitoring kept uptime at 99.9%. Those figures cover both products, not CivilDrive alone.",
    ],
  },
  {
    id: "truckingdrive",
    title: "TruckingDrive",
    summary: "Fleet, drivers, trips, and logistics management, live in the Canadian market.",
    role: "Lead Backend Engineer, Civil Drive",
    dates: "2024–present",
    url: "https://app.truckingdrive.com/",
    urlLabel: "app.truckingdrive.com",
    tone: "sea",
    stack: ["TypeScript", "Node.js", "Express", "Docker"],
    paragraphs: [
      "TruckingDrive manages fleets, drivers, trips, and logistics. It is the second live product I shipped as lead backend engineer at Civil Drive, alongside CivilDrive.",
      "It runs on the same backend stack: Node.js, Express, and TypeScript, in containers. I led delivery for both products, from development through production.",
      "The shared release and uptime results sit on the Civil Drive experience entry. They are not a separate score for TruckingDrive alone.",
    ],
  },
  {
    id: "pennyfy",
    title: "Pennyfy",
    summary: "An AI-driven platform handling more than 200,000 requests a month.",
    role: "Software Engineer",
    dates: "2024–2025",
    tone: "rose",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "GCP"],
    paragraphs: [
      "Pennyfy is an AI-driven platform. I was a software engineer on it through 2024 and 2025.",
      "I architected and scaled backend services that handled more than 200,000 requests a month and held 99.98% uptime. The services ran on AWS and GCP. Tightening compute use cut infrastructure overhead by 30%.",
      "Redis caching and PostgreSQL query tuning brought latency down under load. Authentication used JWT and OAuth2.",
    ],
  },
];

export const signals = [
  { value: "200K+", label: "Monthly requests", source: "Pennyfy" },
  { value: "99.98%", label: "Uptime", source: "Pennyfy" },
  { value: "99.9%", label: "Production uptime", source: "Civil Drive" },
  { value: "20%", label: "Shorter release cycles", source: "Civil Drive" },
];

export const notes: {
  id: string;
  title: string;
  description: string;
  date: string;
  paragraphs: string[];
}[] = [];

export const toolGroups = [
  {
    label: "CivilDrive and TruckingDrive",
    tools: ["TypeScript", "Node.js", "Express", "Docker", "CI/CD"],
  },
  {
    label: "Pennyfy",
    tools: [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "GCP",
      "JWT",
      "OAuth2",
    ],
  },
  {
    label: "Also on the resume",
    tools: ["Go", "Gin", "NestJS", "Prisma", "RabbitMQ", "MongoDB"],
  },
];
