import { Project, Skill } from './types';
import { Code2Icon, PencilRulerIcon, VideoIcon } from 'lucide-react';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management",
    category: "development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=80",
    technologies: ["React", "Node.js", "PostgreSQL"],
    link: "https://github.com"
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description: "Complete brand identity system for a tech startup",
    category: "design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
    technologies: ["Figma", "Illustrator", "Photoshop"]
  },
  {
    id: 3,
    title: "Corporate Video Series",
    description: "Series of promotional videos for enterprise clients",
    category: "video",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=80",
    technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve"]
  }
];

export const skills: Skill[] = [
  {
    name: "React",
    level: 95,
    category: "development",
    icon: "react"
  },
  {
    name: "Node.js",
    level: 90,
    category: "development",
    icon: "nodejs"
  },
  {
    name: "UI/UX Design",
    level: 85,
    category: "design",
    icon: "design"
  },
  {
    name: "Video Editing",
    level: 88,
    category: "video",
    icon: "video"
  }
];

export const categories = [
  {
    name: "Development",
    icon: Code2Icon,
    description: "Full-stack development with modern technologies"
  },
  {
    name: "Design",
    icon: PencilRulerIcon,
    description: "Creative design solutions for digital media"
  },
  {
    name: "Video",
    icon: VideoIcon,
    description: "Professional video editing and production"
  }
];