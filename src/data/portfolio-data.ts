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
    name: "Yon",
    role: "Backend Developer",
    email: "wigunayoga6@gmail.com",
    phone: "+62895359794842",
    website: "https://yoonions.vercel.app",
    github: "https://github.com/Tyrion7126",
    facebook: "https://www.facebook.com/yogii.wgna.13",
    instagram: "https://www.instagram.com/12yonn_",
    discord: "https://discord.com/users/521681056576045067",
    summary:
      "A Backend-focused Developer with a deep interest in automation and system logic. My primary playground is Python, where I build customized Discord bots designed for efficient community management and enhanced user interaction.",
  },
  experience: [
    {
      id: "exp-bot-developer",
      company: "Freelancing",
      role: "Bot Developer",
      location: "Jakarta",
      period: "2023 – PRESENT",
      status: "ACTIVE",
      description:
        "Crafting full-stack Discord bots designed to automate community growth through automated server management and engagement-focused economy systems. Includes developing Flask microservices that bridge the Discord gateway with external web applications for seamless data integration.",
    },
    {
      id: "exp-web-developer",
      company: "Freelancing",
      role: "Web Developer",
      location: "Jakarta",
      period: "2023 – 2025",
      status: "ARCHIVED",
      description:
        "Built small applications with React.js and Next.js. Implementing API integration for complex bot management.",
    },
  ],
  projects: [
    {
      id: "horizone",
      title: "Horizone",
      link: "https://discord.gg/DhUcc9XszT",
      shortDescription:
        "Curse of Aros community bot featuring real-time EXP tracking, temporary voice, and music streaming via Lavalink.",
      fullDescription:
        "Curse of Aros community bot featuring real-time EXP tracking, temporary voice, and music streaming via Lavalink.",
      techStack: ["Lavalink", "Flask", "Python", "SQLite"],
      themeColor: "#23A094",
    },
    {
      id: "nawanggiandra",
      title: "Nawanggiandra",
      link: "https://discord.gg/ph7zhm6QjT",
      shortDescription:
        "A robust economy bot featuring chat leveling, lotteries, anonymous confessions, and tools like giveaways. Scaled to 1,000+ users.",
      fullDescription:
        "A robust economy bot featuring chat leveling, lotteries, anonymous confessions, and tools like giveaways. Scaled to 1,000+ users.",
      techStack: ["Pillow", "Python", "SQLite", "Py-cord"],
      themeColor: "#23A094",
    },
    {
      id: "ethical-labs",
      title: "Ethical Labs",
      link: "https://discord.gg/aXucTWVBky",
      shortDescription:
        "An automated modding community bot, featuring role-based subscriptions, sticky roles (persistent upon rejoins), unique welcome cards on the fly.",
      fullDescription:
        "An automated modding community bot, featuring role-based subscriptions, sticky roles (persistent upon rejoins), unique welcome cards on the fly.",
      techStack: ["Pillow", "Python", "SQLite", "Py-cord"],
      themeColor: "#23A094",
    },
    {
      id: "the-finals-indonesia",
      title: "The Finals Indonesia",
      link: "https://discord.gg/the-finals-indonesia-1182566874505035837",
      shortDescription:
        "Integrated webhooks donation via Trakteer API, complemented by temporary voice rooms and interaction-based role automation.",
      fullDescription:
        "Integrated webhooks donation via Trakteer API, complemented by temporary voice rooms and interaction-based role automation.",
      techStack: ["Trakteer API", "Python", "SQLite", "Py-cord"],
      themeColor: "#23A094",
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript (ES6+)", "Node.js", "SQL", "Python"],
    },
    {
      category: "Frontend Frameworks",
      items: ["React.js", "Next.js", "Vue.js"],
    },
    {
      category: "Backend Frameworks",
      items: ["Flask", "Express.js"],
    },
    {
      category: "Styling",
      items: [
        "Tailwind CSS",
        "Styled Components",
        "Material UI"
      ],
    },
    {
      category: "Databases",
      items: ["SQLite", "Prisma ORM"],
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
