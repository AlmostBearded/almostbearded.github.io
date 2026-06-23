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
    "Senior Software Engineer with a passion for software design, code quality, and developer experience. Experienced across the full stack (from React frontends to backend services and API design) with a strong focus on architecting maintainable, testable systems. Track record of technical leadership, coaching engineers, and establishing development conventions, testing guidelines, and AI-augmented workflows that improve team effectiveness. Also brings product ownership experience, bridging business priorities with technical delivery.",
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
        "Testing Strategies",
        "Testing Trophy",
        "Unit Testing",
        "Integration Testing",
        "UI Integration Testing",
        "E2E Testing",
        "Testing Guidelines",
        "Linting",
        "Coding Conventions",
        "Code Review",
        "CI/CD",
        "SDK Generation",
        "AI Agent Configuration & Skills",
        "GitHub",
        "Jira",
        "Snyk",
        "SonarQube",
      ],
    },
    {
      category: "Other",
      skills: ["Technical Coaching & Mentoring", "Public Speaking", "Agile/Scrum", "Product Ownership", "Cross-functional Collaboration"],
    },
  ],
  experience: [
    {
      role: "Senior Software Engineer & Product Owner",
      institution: "Dynatrace, Klagenfurt",
      period: "May 2021 – Present",
      summary:
        "Senior Software Engineer on the Dynatrace Platform, driving technical design, tooling, and engineering culture across multiple teams. Also served as Product Owner for ~2 years.",
      highlights: [
        {
          title: "Feature Management",
          summary: "Contributed to the development of an OpenFeature-based product, covering the management application and service.",
        },
        {
          title: "Platform Search",
          summary: "Main contributor for the app shell integration of the search UI and the platform cluster integration of the backend. Drove the integration of various heterogeneous data sources and ensured long-term maintainability and stability through the development of a cross-data-source integration framework and rigorous quality standards and testing requirements.",
        },
        {
          title: "App Shell",
          summary: "Developed core platform UI components including the Dock and intent/routing mechanisms.",
        },
        {
          title: "SDK Generator",
          summary: "Built the foundation and prototype of an OpenAPI-based SDK generator used to generate client SDKs for multiple programming languages.",
        },
        {
          title: "Technical Leadership",
          summary: "Broke down requirements into workable tasks, planned and executed delivery, and oversaw cross-team contributions.",
        },
        {
          title: "Technical Coaching & Mentoring",
          summary: "Coached multiple engineers inside and outside the team on React, software design, testing strategies, and code quality. Ran internal tech talks on SOLID principles in React, agile team processes, postmortems of significant refactorings, and testing strategy workshops.",
        },
        {
          title: "Process & Quality",
          summary: "Served as Agile Advocate, refining development processes, establishing Kanban workflows, coding conventions, testing guidelines, and AI agent configurations to boost team productivity.",
        },
        {
          title: "Product Ownership",
          summary: "Served as Product Owner for the Platform Search team (2022–2024), handling stakeholder communication, backlog refinement, prioritization, and forecasting delivery milestones.",
        },
      ],
    },
    {
      role: "Software Engineer",
      institution: "CodeFlügel, Graz",
      period: "February 2019 – February 2020",
      summary:
        "Drove the implementation of specialized frontend applications and 3D visualizations using a broad range of technologies, and dealt with customers to derive technical requirements that deliver solutions fitting their individual needs.",
      highlights: [],
    },
    {
      role: "Game Programmer",
      institution: "Rarebyte, Graz",
      period: "June 2016 – February 2019",
      summary:
        "Worked as a lead engineer with designers and artists on various internal and external game projects.",
      highlights: [],
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
