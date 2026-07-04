export interface Highlight {
  title: string
  summary: string
  url?: string
}

export interface Experience {
  role: string
  institution: string
  period: string
  summary: string
  highlights: Highlight[]
}

export interface Education {
  institution: string
  program: string
  degree: string
  period: string
  highlights: Highlight[]
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface CvData {
  name: string
  title: string
  email: string
  location: string
  languages: string
  linkedin: string
  github: string
  profile: string
  skills: SkillCategory[]
  experience: Experience[]
  education: Education[]
}

export const cvData: CvData = {
  name: "Peter Oberrauner",
  title: "Senior Software Engineer",
  email: "oberrauner.peter@gmail.com",
  location: "Klagenfurt, Austria",
  languages: "German, English",
  linkedin: "https://www.linkedin.com/in/peter-oberrauner-b62896129",
  github: "https://github.com/AlmostBearded",
  profile:
    "Senior Software Engineer with a track record of architecting and delivering platform-scale products serving thousands of internal users and customers. Drives technical direction across teams, establishes engineering standards, and elevates team effectiveness through coaching and AI-augmented workflows. Also brings 2 years of product ownership experience aligning technical delivery with business priorities.",
  skills: [
    {
      category: "Frontend",
      skills: ["React", "TanStack", "Visualization", "Design Systems", "Browser APIs", "Real User Monitoring", "Accessibility", "i18n", "Responsive Design", "TypeScript", "JavaScript"],
    },
    {
      category: "Backend & APIs",
      skills: ["Node.js", "Java Spring", "REST", "OpenAPI", "Versioning", "API-First Design", "Java"],
    },
    {
      category: "Architecture",
      skills: ["Hexagonal Architecture", "Modular Design", "Component Architecture", "Dependency Inversion"],
    },
    {
      category: "Quality, Testing & Tooling",
      skills: [
        "Clean Code",
        "Testing Strategy (Unit, Integration, E2E, UI Integration)",
        "Testing Trophy Methodology",
        "Testing Guidelines & Standards",
        "Linting & Coding Conventions",
        "Code Review",
        "CI/CD",
        "SDK Generation",
        "AI Agent Configuration & Skills",
      ],
    },
    {
      category: "Other",
      skills: ["Technical Coaching & Mentoring", "Public Speaking", "Agile/Kanban", "Product Ownership", "Cross-functional Collaboration"],
    },
  ],
  experience: [
    {
      role: "Senior Software Engineer & Product Owner",
      institution: "Dynatrace, Klagenfurt",
      period: "May 2021 – Present",
      summary:
        "Senior Software Engineer on the Dynatrace Platform, driving technical design, architecture, and engineering culture across multiple teams. Also served as Product Owner for ~2 years.",
      highlights: [
        {
          title: "Feature Management",
          summary: "Contributed to an OpenFeature-based feature management product serving 2,000+ internal users across R&D teams, managing feature flags for frontend applications and backend services.",
        },
        {
          title: "Platform Search",
          summary: "Main contributor for search UI and backend. Led integration of 9+ heterogeneous data sources into a unified search experience and developed a cross-data-source integration framework that reduced new source onboarding from weeks to days. Highly used feature with thousands of daily active users.",
        },
        {
          title: "App Shell",
          summary: "Contributed to core platform UI components such as the Dock and intent/routing mechanisms used across the Dynatrace Platform.",
        },
        {
          title: "SDK Generator",
          summary: "Architected and prototyped an OpenAPI-based SDK generator producing TypeScript and Java API clients, auto-generating client libraries for numerous internal APIs.",
        },
        {
          title: "Technical Leadership",
          summary: "Led a cross-functional team of 4–6 engineers, breaking down requirements, planning delivery, and overseeing cross-team contributions to deliver platform-scale products.",
        },
        {
          title: "Technical Coaching & Mentoring",
          summary: "Coached engineers inside and outside the team on React, software design, testing strategies, and code quality. Delivered well-received internal tech talks and workshops on SOLID principles in React, testing strategy, and large-scale refactoring.",
        },
        {
          title: "Process & Quality",
          summary: "Served as Agile Advocate, establishing coding conventions, testing guidelines, and AI agent configurations to boost team productivity and engineering consistency.",
        },
        {
          title: "Product Ownership",
          summary: "Served as Product Owner for the Platform Search team (2022–2024), leading a team of 4–6 engineers and aligning with PMs, product architects, and stakeholders to prioritize and deliver against business goals.",
        },
      ],
    },
    {
      role: "Software Engineer",
      institution: "CodeFlügel, Graz",
      period: "February 2019 – February 2020",
      summary:
        "Worked across a variety of client projects as the primary developer, building frontend applications and 3D visualizations end-to-end.",
      highlights: [
        {
          title: "Real Estate & Property Management Portals",
          summary: "Built a bulletin-board application for apartment complex lobbies using HTML, JS, CSS, and Pug, and a contract management system for a real estate developer using React.",
        },
        {
          title: "Smart Meter Interactive Manual",
          summary: "Developed a React-based interactive manual for smart electricity meters for a major Austrian utility provider.",
        },
        {
          title: "Museum Interactive 3D Visualizations",
          summary: "Created interactive 3D exhibits for a children's museum using the Unity game engine.",
        },
      ],
    },
    {
      role: "Game Programmer",
      institution: "Rarebyte, Graz",
      period: "June 2016 – February 2019",
      summary:
        "Lead engineer on internal and client game projects, working in small cross-functional teams with designers, artists, and external contractors.",
      highlights: [
        {
          title: "Seeds of Sol",
          summary: "Main software engineer on an action-adventure with roguelike elements. Developed procedural world generation, player/animation controller, enemy behavior, and most core gameplay systems over ~2 years. Streamed development on Twitch to build community around the project.",
          url: "https://www.youtube.com/watch?v=NRUAHY6Ju0k",
        },
        {
          title: "Paysafecard PIN Racer",
          summary: "Built a Wii Balance Board-based multiplayer racing game that was played by large crowds at Gamescom as part of Paysafecard's booth.",
          url: "https://www.youtube.com/watch?v=BFd97kR96Co",
        },
        {
          title: "PIN Racer Development Talk",
          summary: "Delivered a talk at the Game Dev Days Graz conference covering the technical development and unique input challenges of PIN Racer.",
          url: "https://www.youtube.com/watch?v=pTUyY-mtgI0",
        },
        {
          title: "Paysafecard Tank Game",
          summary: "Built a Pacman-inspired multiplayer tank fighting game with powerups, played by large crowds at Gamescom as part of Paysafecard's booth.",
        },
        {
          title: "Game Dev Tycoon Port",
          summary: "Helped port the popular simulation game to mobile and Nintendo Switch.",
        },
      ],
    },
    {
      role: "Board Member",
      institution: "Game Development Graz",
      period: "2016 – 2020",
      summary: "Co-organization of events, meetups, game jams, and the Game Dev Days Graz conference.",
      highlights: [],
    },
    {
      role: "Computer Graphics Tutor",
      institution: "University of Technology, Graz",
      period: "2015 – 2016",
      summary: "Implemented a recursive ray tracer in 2016 and a skeletal animation framework in 2015.",
      highlights: [],
    },
    {
      role: "Faculty Research Assistant",
      institution: "University of Technology, Graz",
      period: "November 2014 – April 2015",
      summary: "Worked on an algorithm that allows the semi-automatic texture mapping of casual images onto 3D models.",
      highlights: [],
    },
    {
      role: "Augmented Reality Engineer",
      institution: "ByteFex, Graz",
      period: "February 2013 – September 2014",
      summary: "Developed an augmented reality app for architectural visualizations.",
      highlights: [],
    },
  ],
  education: [
    {
      institution: "University of Technology, Graz",
      program: "Software Engineering and Management",
      degree: "Master of Science",
      period: "2018 – 2022",
      highlights: [
        {
          title: "Master's Thesis: RespVis",
          summary:
            "A low-level component-based framework for creating responsive SVG charts using SVG-based components with a layout engine based on the CSS Grid standard.",
          url: "https://github.com/AlmostBearded/respvis",
        },
      ],
    },
    {
      institution: "University of Technology, Graz",
      program: "Software Development and Business Management",
      degree: "Bachelor of Science",
      period: "2012 – 2019",
      highlights: [],
    },
    {
      institution: "HTL (Secondary College), Villach",
      program: "Informatics and Management",
      degree: "",
      period: "2006 – 2011",
      highlights: [],
    },
  ],
}
