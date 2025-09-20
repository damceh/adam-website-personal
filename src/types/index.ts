export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
}

export interface Profile {
  name: string;
  title: string;
  description: string;
  image: string;
  location: string;
  email: string;
  resume?: string;
  socialLinks: SocialLink[];
}

export interface Experience {
  id: string;
  company: string;
  logo: string;
  position: string;
  period: string;
  location?: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  description: string;
  technologies: string[];
  responsibility: string[];
  achievements?: string[]; // Optional for future use
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  honeypot?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  resolvedTheme: 'light' | 'dark';
  mounted: boolean;
}

export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      ease?: string;
      delay?: number;
      staggerChildren?: number;
      delayChildren?: number;
    };
  };
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}