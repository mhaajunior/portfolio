import { StackContent } from "@/components/StackContent";
import { Contact, Layers, Lock, Star, User } from "lucide-react";

export const navItems = [
  { name: "About", link: "#about", icon: <User /> },
  { name: "Stack", link: "#stack", icon: <Layers /> },
  { name: "Projects", link: "#projects", icon: <Star /> },
  { name: "Contact", link: "#contact", icon: <Contact /> },
  { name: "Secret", link: "/secret", icon: <Lock /> },
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
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/temp/cake.svg",
      "/ts.svg",
      "/three.svg",
      "/c.svg",
    ],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
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
        name: "Frameworks & Libraries:",
        lists: [
          { name: "React", icon: "/tech/React.png" },
          { name: "Vue.js", icon: "/tech/Vue.js.png" },
          { name: "Next.js", icon: "/tech/Next.js.png" },
          { name: "Nuxt JS", icon: "/tech/Nuxt_JS.png" },
          { name: "Angular", icon: "/tech/Angular.png" },
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
        name: "ORM",
        lists: [
          { name: "Prisma", icon: "/tech/Prisma.png" },
          { name: "Drizzle ORM", icon: "/tech/Drizzle.png" },
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
        name: "Services",
        lists: [
          { name: "NGINX", icon: "/tech/NGINX.png" },
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
          //temp
          // { name: "GitLab", icon: "/tech/Gitlab.png" },
          { name: "Cake", icon: "/tech/GitLab.png" },
          { name: "Sourcetree", icon: "/tech/Sourcetree.png" },
        ],
      },
      {
        name: "Project Management",
        lists: [
          { name: "Postman", icon: "/tech/Postman.png" },
          { name: "Swagger", icon: "/tech/Swagger.png" },
        ],
      },
      {
        name: "Monitoring & Logging",
        lists: [
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

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
