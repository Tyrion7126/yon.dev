export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  link?: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  themeColor: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialLink: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    email: string;
    phone: string;
    website: string;
    github: string;
    linkedin: string;
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
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Fiqri Syah Redha",
    role: "Lead Frontend Engineer",
    email: "fiqrisyahredha@gmail.com",
    phone: "+6285932219260",
    website: "https://fsr.my.id",
    github: "https://github.com/fiqrisr",
    linkedin: "https://linkedin.com/in/fiqrisyahredha",
    summary:
      "Lead Frontend Engineer with 4+ years of experience architecting high-performance web platforms. Specialized in React/Next.js ecosystems, Docker optimization (83% image reduction), and achieving 90+ Lighthouse scores. Passionate about scalable architecture, monorepo tooling, and mentoring engineering teams.",
  },
  experience: [
    {
      id: "exp-lintasarta",
      company: "Lintasarta",
      role: "Frontend Engineer",
      location: "Jakarta",
      period: "Jul 2024 – Present",
      achievements: [
        "Lead Frontend Engineer for the AI Marketplace, managing the architecture and release cycles for both Buyer and Seller platforms.",
        "Pioneered the implementation of SonarQube in the CI/CD pipeline, enforcing strict code quality standards and reducing technical debt across the entire codebase.",
        "Executed comprehensive SEO strategies, successfully optimizing page structure and metadata to achieve Rank #1 on search engines for key business keywords.",
        "Optimized Docker build processes by reducing image size by 83% (3GB to 500MB) and reduced CSS bundle size by 30%, significantly improving deployment efficiency and load times.",
        "Architected the client-side state management using TanStack Query (React Query), implementing optimistic updates and caching strategies that reduced API server load by 40%.",
        "Served as the Primary Code Reviewer and mentor for new hires, ensuring adherence to best practices and streamlining the onboarding process.",
        "Integrated Midtrans and Xendit payment gateways, facilitating secure transactions for high-volume traffic.",
      ],
    },
    {
      id: "exp-pln",
      company: "PLN Icon Plus (Contract)",
      role: "Frontend Engineer",
      location: "Jakarta",
      period: "Feb 2024 – Jun 2024",
      achievements: [
        "Developed the New VCubicles platform, a complex administrative dashboard used for internal data management.",
        "Architected the frontend using Vue.js and Bootstrap, prioritizing high-performance rendering for large datasets.",
        "Engineered reusable components to handle complex multi-step forms and large-scale data tables with client-side sorting and filtering.",
      ],
    },
    {
      id: "exp-planetsurf",
      company: "PlanetSurf",
      role: "Frontend Engineer",
      location: "Jakarta",
      period: "Nov 2023 – Feb 2024",
      achievements: [
        "Modernized internal web apps by migrating legacy modules to React and Next.js, optimizing user experience and maintainability.",
        "Collaborated with backend teams to design robust API schemas for seamless frontend integration.",
        "Implemented responsive design principles, ensuring 100% compatibility across mobile and desktop devices.",
      ],
    },
    {
      id: "exp-dealls",
      company: "Dealls",
      role: "Software Engineer - Web Platform",
      location: "Jakarta",
      period: "Feb 2023 – Sep 2023",
      achievements: [
        "Collaborated on building a job portal platform used by over 100,000 users, creating scalable frontend components that enhanced usability.",
        "Participated in product releases and code reviews with 5 frontend engineers, maintaining high code quality standards.",
        "Led the development of multiple key features, translating product requirements into technical implementations.",
      ],
    },
    {
      id: "exp-unfold",
      company: "Unfold Solution",
      role: "Frontend Developer",
      location: "Melbourne (Remote)",
      period: "Oct 2022 – Jan 2023",
      achievements: [
        "Developed the Muslim Xplore web application with React.js and Next.js, achieving optimal user experience.",
        "Expedited UI development by introducing Styled Components and integrating Tailwind CSS.",
        "Collaborated with cross-functional international teams to deliver features in an Agile environment.",
      ],
    },
    {
      id: "exp-medika",
      company: "PT. Medika Digitalisasi Indonesia",
      role: "Frontend Developer",
      location: "Pontianak",
      period: "Dec 2021 – Jul 2022",
      achievements: [
        "Architected and delivered the MVP frontend for Medicord using Next.js in under 6 months.",
        "Introduced a monorepo architecture, significantly enhancing development efficiency for shared components.",
        "Integrated Nx Workspace, accelerating the addition of new features and standardizing build tools.",
      ],
    },
    {
      id: "exp-kst",
      company: "PT. Kita Super Tim",
      role: "Frontend Developer",
      location: "Pontianak",
      period: "Dec 2020 – Jun 2021",
      achievements: [
        "Developed frontend applications for learning management systems using React.js and Redux.",
        "Refactored legacy codebases to modern ES6+ syntax, improving code readability and reducing technical debt.",
        "Implemented strict API integration patterns to handle complex data states efficiently.",
      ],
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
