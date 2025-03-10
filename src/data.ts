import { Project, Skill } from "./types";
import { Code2Icon, PencilRulerIcon, VideoIcon } from "lucide-react";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management",
    category: "development",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=80",
    technologies: [
      "React",
      "Next.js",
      "Nest.js",
      "Mikro-ORM",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Express",
      "REST",
    ],
    link: "https://github.com",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description: "Complete brand identity system for a tech startup",
    category: "design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: 3,
    title: "Corporate Video Series",
    description: "Series of promotional videos for enterprise clients",
    category: "video",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=80",
    technologies: ["Adobe Premiere Pro", "Adobe After Effects"],
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
    name: "Back-End (Nest.js, Express, REST)",
    level: 85,
    category: "development",
    icon: "nextjs",
  },
  {
    name: "Mikro-ORM",
    level: 75,
    category: "development",
    icon: "nestjs",
  },
  {
    name: "Database (PostgreSQL, MySQL)",
    level: 80,
    category: "development",
    icon: "database",
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
