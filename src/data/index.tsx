import { StackContent } from "@/components/StackContent";
import { Contact, Layers, Star, User } from "lucide-react";

export const navItems = [
  { name: "About", link: "#about", icon: <User /> },
  { name: "Stack", link: "#stack", icon: <Layers /> },
  { name: "Projects", link: "#projects", icon: <Star /> },
  { name: "Contact", link: "#contact", icon: <Contact /> },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Design and develop responsive, dynamic, and accessible interfaces that deliver seamless and engaging user experiences",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Build scalable APIs and manage databases for performance and security.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full opacity-50",
    titleClassName: "justify-start",
    img: "/b2.svg",
    spareImg: "",
  },
  {
    id: 3,
    title:
      "Streamlining workflows with portable, isolated containers for consistent deployments.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full opacity-50",
    titleClassName: "justify-start",
    img: "/b3.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-80 w-full h-full opacity-40",
    titleClassName: "justify-center",
    img: "/b4.svg",
    spareImg: "",
  },
  {
    id: 5,
    title: "Currently employed at the Office of the Attorney General",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName:
      "absolute right-0 bottom-0 md:w-96 w-60 opacity-60 rounded-lg",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want some extra information?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Budget Tracker",
    des: "A Budget Tracker application helps users manage their personal finances by tracking income and expenses.",
    img: "/project/budget_tracker.png",
    iconLists: [
      "/tech/TypeScript.png",
      "/tech/Next.js.png",
      "/tech/Tailwind_CSS.png",
      "/tech/Shadcn.png",
      "/tech/Prisma.png",
    ],
    link: "https://budget-tracker-ebon-ten.vercel.app",
    github: [
      { label: "", link: "https://github.com/mhaajunior/budget-tracker" },
    ],
  },
  {
    id: 2,
    title: "CarePulse - Patient Management System",
    des: "CarePulse is a software solution designed to streamline and optimize healthcare providers, administrative, clinical, and operational tasks.",
    img: "/project/carepulse.png",
    iconLists: [
      "/tech/TypeScript.png",
      "/tech/Next.js.png",
      "/tech/Shadcn.png",
      "/tech/Appwrite.png",
      "/tech/Sentry.png",
    ],
    link: "https://carepulse-rouge.vercel.app",
    github: [
      {
        label: "",
        link: " https://github.com/mhaajunior/carepulse",
      },
    ],
  },
  {
    id: 3,
    title: "Zentry Clone - Award Winning Website",
    des: "Zentry Gaming is where innovation meets entertainment, offering gamers a platform that redefines the boundaries of interactive play.",
    img: "/project/awwwards.png",
    iconLists: [
      "/tech/TypeScript.png",
      "/tech/React.png",
      "/tech/Tailwind_CSS.png",
      "/tech/Gsap.png",
      "/tech/Vercel.png",
    ],
    link: "https://awwwards-eta.vercel.app",
    github: [
      {
        label: "",
        link: "https://github.com/mhaajunior/awwwards",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://github.com/adrianhajdin/iphone",
  //   github: [
  //     {
  //       label: "Front-end",
  //       link: "https://github.com/mhaajunior/budget-tracker",
  //     },
  //   ],
  // },
];

export const stack = [
  {
    title: "Front-End Development",
    sections: [
      {
        name: "Languages",
        lists: [
          { name: "JavaScript", icon: "/tech/JavaScript.png" },
          { name: "TypeScript", icon: "/tech/TypeScript.png" },
        ],
      },
      {
        name: "Frameworks & Libraries",
        lists: [
          { name: "React", icon: "/tech/React.png" },
          { name: "Vue.js", icon: "/tech/Vue.js.png" },
          { name: "Next.js", icon: "/tech/Next.js.png" },
          { name: "Nuxt JS", icon: "/tech/Nuxt_JS.png" },
        ],
      },
      {
        name: "Styling",
        lists: [
          { name: "Tailwind CSS", icon: "/tech/Tailwind_CSS.png" },
          { name: "Shadcn/ui", icon: "/tech/Shadcn.png" },
          { name: "Aceternity UI", icon: "/tech/Aceternity.png" },
          { name: "Ant design", icon: "/tech/Ant_Design.png" },
        ],
      },
    ],
  },
  {
    title: "Back-End Development",
    sections: [
      {
        name: "Languages",
        lists: [
          { name: "Node.js", icon: "/tech/Node.js.png" },
          { name: "Python", icon: "/tech/Python.png" },
          { name: "PHP", icon: "/tech/PHP.png" },
        ],
      },
      {
        name: "Frameworks",
        lists: [
          { name: "Express", icon: "/tech/Express.png" },
          { name: "Fastify", icon: "/tech/Fastify.png" },
          { name: "Nest.js", icon: "/tech/Nest.js.png" },
        ],
      },
      {
        name: "ORM & Services",
        lists: [
          { name: "Prisma", icon: "/tech/Prisma.png" },
          { name: "Knex.js", icon: "/tech/Knex.js.png" },
          { name: "Appwrite", icon: "/tech/Appwrite.png" },
        ],
      },
      {
        name: "Databases",
        lists: [
          { name: "MySQL", icon: "/tech/MySQL.png" },
          { name: "PostgreSQL", icon: "/tech/PostgresSQL.png" },
          { name: "MongoDB", icon: "/tech/MongoDB.png" },
        ],
      },
    ],
  },
  {
    title: "DevOps & Deployment",
    sections: [
      {
        name: "Containerization",
        lists: [
          { name: "Docker", icon: "/tech/Docker.png" },
          { name: "Docker Compose", icon: "/tech/Docker_Compose.png" },
        ],
      },
      {
        name: "CI/CD",
        lists: [{ name: "GitLab CI/CD", icon: "/tech/Gitlab_CI.png" }],
      },
      {
        name: "OS & Web Server",
        lists: [
          { name: "Linux", icon: "/tech/Linux.png" },
          { name: "NGINX", icon: "/tech/NGINX.png" },
        ],
      },
      {
        name: "Cloud Services",
        lists: [
          { name: "AWS", icon: "/tech/AWS.png" },
          { name: "Vercel", icon: "/tech/Vercel.png" },
          { name: "Heroku", icon: "/tech/Heroku.png" },
        ],
      },
    ],
  },
  {
    title: "Tools & Workflow",
    sections: [
      {
        name: "Version Control",
        lists: [
          { name: "Git", icon: "/tech/Git.png" },
          { name: "GitHub", icon: "/tech/GitHub.png" },
          { name: "GitLab", icon: "/tech/GitLab.png" },
          { name: "Sourcetree", icon: "/tech/Sourcetree.png" },
        ],
      },
      {
        name: "Project Management",
        lists: [
          { name: "Jira", icon: "/tech/Jira.png" },
          { name: "Postman", icon: "/tech/Postman.png" },
          { name: "Swagger", icon: "/tech/Swagger.png" },
        ],
      },
      {
        name: "Monitoring & Logging",
        lists: [
          { name: "Sentry", icon: "/tech/Sentry.png" },
          { name: "Portainer", icon: "/tech/Portainer.png" },
          { name: "Winston", icon: "/tech/Winston.png" },
        ],
      },
    ],
  },
];

export const stackCards = [
  {
    category: "Serenity",
    title: "Front-End Development",
    src: "/s1.jpg",
    content: <StackContent stack={stack[0]} />,
  },
  {
    category: "Robust",
    title: "Back-End Development",
    src: "/s2.jpg",
    content: <StackContent stack={stack[1]} />,
  },
  {
    category: "Streamlined",
    title: "DevOps & Deployment",
    src: "/s3.jpg",
    content: <StackContent stack={stack[2]} />,
  },

  {
    category: "Collaborative",
    title: "Tools & Workflow",
    src: "/s4.jpg",
    content: <StackContent stack={stack[3]} />,
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Front-end Developer",
    desc: "Collaborated with cross-functional teams, including designers and back-end developers, to implement features.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer ",
    desc: "Designed and developed web applications using front-end frameworks (React.js, Angular, Vue.js) and back-end technologies (Node.js, Express.js).",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "PHP Developer",
    desc: "Implemented MVC architecture, ensuring code organization and maintainability.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Engineer",
    desc: "Participated in all stages of the software development life cycle, including requirement analysis, design, coding, testing, and deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mhaajunior",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://github.com/mhaajunior",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://github.com/mhaajunior",
  },
];
