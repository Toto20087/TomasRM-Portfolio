import { Project, Skill } from "./types";
import { Code2Icon, PencilRulerIcon, VideoIcon } from "lucide-react";

export const projects: Project[] = [
  {
    id: 1,
    title: "Visas Agent Platform",
    description:
      "Automation platform for visa application management, designed for use by agents and end users",
    category: "development",
    image:
      "https://www.lanacion.com.ar/resizer/v2/desde-2004-las-visas-de-validez-indefinida-64VTU6XMJBBGHKHQGERIZRV4XU.jpg?auth=b7664b5286c0e0dab9791883ac2ee47c3153598cd6817aa16964eab4fdfd2a84&width=420&height=280&quality=70&smart=true",
    technologies: [
      "React",
      "Nest.js",
      "Mikro-ORM",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    link: "https://southagent.com.ar/",
  },
  {
    id: 2,
    title: "SuperHeroes Agency",
    description: "Complete brand website for a superhero agency",
    category: "design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    link: "https://www.figma.com/proto/f5M2V9bhniiq1BY0ceC1iK/Benjamin-Longhi---Tomas-Moyano?page-id=298%3A4533&node-id=298-4534&p=f&viewport=363%2C643%2C0.1&t=oU0cUNABJt3VQIJI-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=298%3A4534",
  },
  {
    id: 3,
    title: "Chipassimo Brand Guideline",
    description: "Complete brand guideline for a coffee brand",
    category: "design",
    image: "https://i.ytimg.com/vi/DyJTVkRP1vY/maxresdefault.jpg",
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    link: "https://www.figma.com/proto/ZaaWNAfNbKFfDEqfQrquYu/Chipassimo-Brand-Guideline?page-id=0%3A1&node-id=1-39&viewport=757%2C211%2C0.03&t=GAj9e1HKnPsduVH1-1&scaling=min-zoom&content-scaling=fixed",
  },
  {
    id: 4,
    title: "Corporate Videos",
    description: "Promotional videos for enterprise clients",
    category: "video",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=80",
    technologies: ["Adobe Premiere Pro", "Adobe After Effects", "Blender"],
    link: "https://drive.google.com/drive/folders/1iiP6IHrmR-g93LGyIkKcGwRRRVVTpjo7?usp=sharing",
  },
];

export const skills: Skill[] = [
  // Full Stack Developer
  {
    name: "Front-End (React, Next.js, Tailwind CSS)",
    level: 95,
    category: "development",
    icon: "react",
  },
  {
    name: "Back-End (Nest.js, Express, REST, Mikro-ORM)",
    level: 80,
    category: "development",
    icon: "nextjs",
  },
  {
    name: "Database (PostgreSQL, MySQL)",
    level: 75,
    category: "development",
    icon: "database",
  },
  {
    name: "AI (Python, TensorFlow, PyTorch)",
    level: 85,
    category: "development",
    icon: "ai",
  },
  {
    name: "Languages (TypeScript, JavaScript, Python)",
    level: 95,
    category: "development",
    icon: "typescript",
  },
  // Digital Media Designer
  {
    name: "Adobe Photoshop",
    level: 90,
    category: "design",
    icon: "photoshop",
  },
  {
    name: "Adobe Illustrator",
    level: 80,
    category: "design",
    icon: "illustrator",
  },
  {
    name: "Figma",
    level: 95,
    category: "design",
    icon: "figma",
  },
  // Video Editing
  {
    name: "Adobe Premiere Pro",
    level: 85,
    category: "video",
    icon: "premiere",
  },
  {
    name: "Adobe After Effects",
    level: 95,
    category: "video",
    icon: "aftereffects",
  },
];

export const categories = [
  {
    name: "Development",
    icon: Code2Icon,
    description: "Full-stack development with modern technologies",
  },
  {
    name: "Design",
    icon: PencilRulerIcon,
    description: "Creative design solutions for digital media",
  },
  {
    name: "Video",
    icon: VideoIcon,
    description: "Professional video editing and production",
  },
];
