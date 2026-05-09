export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  status?: "ACTIVE" | "ARCHIVED";
};

export type Project = {
  id: string;
  title: string;
  link?: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  themeColor: string;
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialLink: string;
};

export type PortfolioData = {
  personal: {
    name: string;
    role: string;
    email: string;
    phone: string;
    website: string;
    github: string;
    linkedin: string;
    facebook: string;
    instagram: string;
    x: string;
    summary: string;
  };
  experience: Experience[];
  projects: Project[];
  skills: { category: string; items: string[] }[];
  education: {
    university: string;
    degree: string;
    location: string;
    period: string;
  };
  certifications: Certification[];
};

export const portfolioData: PortfolioData = {
  personal: {
    name: "Fiqri Syah Redha",
    role: "Senior Frontend Engineer",
    email: "fiqrisyahredha@gmail.com",
    phone: "+6285932219260",
    website: "https://fiqri.dev",
    github: "https://github.com/fiqrisr",
    linkedin: "https://linkedin.com/in/fiqrisyahredha",
    facebook: "https://facebook.com/fiqrisyahredha",
    instagram: "https://instagram.com/fiqrisyahredha",
    x: "https://x.com/fiqrisyahredha",
    summary:
      "Senior Frontend Engineer with 4+ years of experience architecting high-performance web platforms. Specialized in React/Next.js ecosystems. Passionate about scalable architecture, monorepo tooling, and mentoring engineering teams.",
  },
  experience: [
    {
      id: "exp-lintasarta",
      company: "Lintasarta",
      role: "Software Engineer",
      location: "Jakarta",
      period: "2024 – PRESENT",
      status: "ACTIVE",
      description:
        "Led the frontend architecture for the B2B AI Marketplace, managing release cycles for both Buyer and Seller platforms. Drove massive performance optimizations—83% Docker image reduction (3GB→500MB), 30% CSS bundle cut, and Rank #1 SEO—while enforcing strict code quality via SonarQube and reducing API server load by 40% through TanStack Query caching strategies. Mentored new hires and integrated Midtrans/Xendit payment gateways for high-volume traffic.",
    },
    {
      id: "exp-pln",
      company: "PLN Icon Plus",
      role: "Frontend Engineer",
      location: "Jakarta",
      period: "2024",
      status: "ARCHIVED",
      description:
        "Built the VCubicles administrative dashboard for internal data management using Vue.js. Engineered high-performance rendering for large datasets with reusable components handling complex multi-step forms and data tables with client-side sorting and filtering.",
    },
    {
      id: "exp-planetsurf",
      company: "PlanetSurf",
      role: "Frontend Engineer",
      location: "Jakarta",
      period: "2023 – 2024",
      status: "ARCHIVED",
      description:
        "Modernized internal web applications by migrating legacy modules to React and Next.js. Designed robust API schemas with backend teams and implemented 100% responsive compatibility across all device classes.",
    },
    {
      id: "exp-dealls",
      company: "Dealls",
      role: "Software Engineer – Web",
      location: "Jakarta",
      period: "2023",
      status: "ARCHIVED",
      description:
        "Built scalable frontend components for a job portal serving 100,000+ users. Led feature development across a 5-engineer team, maintaining high code quality through rigorous code reviews and product-driven technical implementations.",
    },
    {
      id: "exp-unfold",
      company: "Unfold Solution",
      role: "Web Developer",
      location: "Melbourne (Remote)",
      period: "2022 – 2023",
      status: "ARCHIVED",
      description:
        "Developed the Muslim Xplore web application with React.js and Next.js for an international remote team. Accelerated UI delivery by introducing Styled Components and Tailwind CSS in a cross-functional Agile environment.",
    },
    {
      id: "exp-mdi",
      company: "Medika Digitalisasi Indonesia",
      role: "Frontend Developer",
      location: "Pontianak",
      period: "2021 – 2022",
      status: "ARCHIVED",
      description:
        "Architected and shipped the Medicord MVP frontend in under 6 months using Next.js. Introduced a monorepo architecture with Nx Workspace, standardizing build tooling and dramatically accelerating feature development across shared components.",
    },
    {
      id: "exp-kst",
      company: "Kita Super Tim",
      role: "Web Developer",
      location: "Pontianak",
      period: "2020 – 2021",
      status: "ARCHIVED",
      description:
        "Built LMS frontend applications with React.js and Redux. Refactored legacy codebases to modern ES6+ patterns, reducing technical debt and implementing strict API integration for complex state management.",
    },
  ],
  projects: [
    {
      id: "prasasti-center",
      title: "Prasasti Center",
      link: "https://prasasticenter.com",
      shortDescription:
        "A multilingual public-facing web platform with a custom CMS and 90+ Lighthouse scores.",
      fullDescription:
        "Architected and developed a public-facing, multilingual web platform using Next.js, seamlessly integrating it with a custom in-house CMS for dynamic content delivery. Engineered high-performance web pages utilizing Next.js rendering strategies (SSR/SSG) and core web vitals optimization, achieving a 90+ Lighthouse score across Performance, Accessibility, and SEO metrics. Collaborated closely with the backend team to design and consume custom API schemas, ensuring robust data integration and a seamless user experience.",
      techStack: ["Next.js", "TypeScript", "Custom CMS"],
      themeColor: "#FF90E8",
    },
    {
      id: "nekotoko-pos",
      title: "NekoToko POS Microservices",
      link: "https://github.com/fiqrisr/nekotoko",
      shortDescription:
        "A scalable Point of Sale system built on microservices with RabbitMQ and Nx Monorepo.",
      fullDescription:
        "Architected a scalable Point of Sale (POS) system using a Microservices pattern within an Nx Monorepo. Orchestrated asynchronous communication between NestJS services using RabbitMQ message brokers. Managed complex data relationships and persistence using PostgreSQL and Prisma ORM.",
      techStack: ["React", "Nest.js", "PostgreSQL", "RabbitMQ", "Nx Monorepo"],
      themeColor: "#FFC900",
    },
    {
      id: "lampu-ai",
      title: "Lampu AI Marketplace",
      shortDescription:
        "A B2B AI Marketplace managing architecture and release cycles for Buyer and Seller platforms.",
      fullDescription:
        "Led frontend architecture for the AI Marketplace at Lintasarta, managing release cycles for both Buyer and Seller platforms. Pioneered SonarQube integration in CI/CD, optimized Docker builds by 83% (3GB to 500MB), reduced CSS bundle size by 30%, and achieved Rank #1 SEO for key business keywords. Architected state management with TanStack Query, reducing API server load by 40%, and integrated Midtrans and Xendit payment gateways for high-volume secure transactions.",
      techStack: ["React", "Next.js", "TypeScript", "TanStack Query", "Docker", "SonarQube"],
      themeColor: "#23A094",
    },
    {
      id: "dealls-portal",
      title: "Dealls Job Portal",
      shortDescription:
        "A high-traffic job portal used by 100,000+ users with scalable frontend architecture.",
      fullDescription:
        "Collaborated on building a job portal platform used by over 100,000 users, creating scalable frontend components that enhanced usability. Participated in product releases and code reviews with 5 frontend engineers, maintaining high code quality standards. Led the development of multiple key features, translating product requirements into technical implementations.",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      themeColor: "#FF6B6B",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript (ES6+)", "Node.js", "SQL", "GraphQL"],
    },
    {
      category: "Frontend Frameworks",
      items: ["React.js", "Next.js", "Angular", "Vue.js", "Nuxt.js", "Storybook", "Astro"],
    },
    {
      category: "State & Data",
      items: ["Zustand", "Jotai", "TanStack Query", "Redux", "NgRx"],
    },
    {
      category: "Backend Frameworks",
      items: ["Nest.js", "Express.js", "Elysia.js"],
    },
    {
      category: "Styling",
      items: [
        "Tailwind CSS",
        "Styled Components",
        "Material UI",
        "Ant Design",
        "CSS3",
        "Bootstrap",
      ],
    },
    {
      category: "Tools & DevOps",
      items: [
        "Docker",
        "Git",
        "Nx Monorepo",
        "moonrepo",
        "proto",
        "SonarQube",
        "CI/CD",
        "Windsurf",
        "Webpack",
        "Vite",
        "Lighthouse",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
    },
    {
      category: "Testing",
      items: ["Jest", "Vitest", "Cypress"],
    },
    {
      category: "Concepts",
      items: [
        "Core Web Vitals",
        "SEO",
        "Microservices",
        "Monorepo Architecture",
        "Server-Side Rendering (SSR)",
        "PWA",
        "RESTful API",
      ],
    },
  ],
  education: {
    university: "Universitas Tanjungpura",
    degree: "Bachelor of Computer Science",
    location: "Pontianak",
    period: "2018 – 2022",
  },
  certifications: [
    {
      id: "cert-1",
      title: "Become a Front-End Web Developer Expert",
      issuer: "Dicoding",
      date: "Dec 2020",
      credentialLink: "https://dicoding.com/certificates/81P21VQEJZOY",
    },
    {
      id: "cert-2",
      title: "Build Progressive Web Apps",
      issuer: "Dicoding",
      date: "Jul 2020",
      credentialLink: "https://dicoding.com/certificates/N72ZD1NVLXYW",
    },
    {
      id: "cert-3",
      title: "Learn Front-End Web Development Fundamentals",
      issuer: "Dicoding",
      date: "Jun 2020",
      credentialLink: "https://dicoding.com/certificates/2RVZKV3E4XD5",
    },
    {
      id: "cert-4",
      title: "Learn SOLID Programming Principles",
      issuer: "Dicoding",
      date: "Jun 2020",
      credentialLink: "https://dicoding.com/certificates/GMEPJ4D9JZ3V",
    },
  ],
};

export const terminalStack: string[] = [
  "$ bun --version      → 1.x",
  "$ node --version     → 22.x",
  "$ neovim             → btw",
  "$ docker compose up  → 🚀",
  "$ biome check .      → ✓ clean",
  "$ tsc --noEmit       → 0 errors",
];
