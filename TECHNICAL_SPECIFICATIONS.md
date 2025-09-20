# Technical Specifications - Adam Almahdi Portfolio

## Component Specifications

### 1. Theme System

#### ThemeProvider Component
```typescript
interface ThemeContextType {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  resolvedTheme: 'light' | 'dark';
  mounted: boolean;
}

// Features:
- localStorage persistence
- System preference detection
- Smooth theme transitions
- SSR compatibility
```

#### ThemeToggle Component
```typescript
interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Features:
- Three-state toggle (light/dark/system)
- Animated icon transitions
- Keyboard accessible
- ARIA labels for screen readers
```

### 2. Layout Components

#### Header Component
```typescript
interface HeaderProps {
  className?: string;
  fixed?: boolean;
}

// Features:
- Sticky navigation with backdrop blur
- Mobile hamburger menu
- Smooth scroll to sections
- Theme toggle integration
- Logo with hover animation
```

#### Navigation Component
```typescript
interface NavigationItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

interface NavigationProps {
  items: NavigationItem[];
  mobile?: boolean;
  onItemClick?: (href: string) => void;
}

// Features:
- Smooth scroll behavior
- Active section highlighting
- Mobile-responsive design
- Keyboard navigation
```

#### Footer Component
```typescript
interface FooterProps {
  className?: string;
}

// Features:
- Social media links
- Copyright with dynamic year
- Back to top button
- Minimalist design
```

### 3. Content Sections

#### Hero Section
```typescript
interface HeroProps {
  profile: {
    name: string;
    title: string;
    description: string;
    image: string;
    socialLinks: SocialLink[];
  };
}

interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  color: string;
}

// Features:
- Animated profile photo with glow effect
- Typewriter effect for title (optional)
- Floating social media buttons
- Parallax background effects
- Responsive typography scaling
```

#### Experience Section
```typescript
interface ExperienceProps {
  experiences: Experience[];
}

interface Experience {
  id: string;
  company: string;
  logo: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  location?: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
}

// Features:
- Timeline-style layout
- Company logo integration
- Technology badges
- Scroll-triggered animations
- Glass morphism cards
- Hover effects with depth
```

#### Projects Section
```typescript
interface ProjectsProps {
  projects: Project[];
  featured?: boolean;
}

interface Project {
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

// Features:
- Masonry/grid layout
- Project filtering by technology
- Modal for detailed view
- 3D hover transforms
- Lazy loading images
- GitHub/demo link buttons
- Technology stack visualization
```

#### Contact Section
```typescript
interface ContactProps {
  formConfig: {
    web3formsKey: string;
    webhookUrl?: string;
  };
}

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  honeypot?: string; // Spam protection
}

// Features:
- Real-time form validation
- Success/error animations
- Honeypot spam protection
- Web3Forms integration
- Webhook support for n8n
- Loading states
- Accessibility compliance
```

### 4. UI Components

#### Button Component
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'outline';
  size: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

// Features:
- Multiple variants with gothic styling
- Loading states with spinners
- Icon support
- Hover animations
- Focus indicators
- Disabled states
```

#### Card Component
```typescript
interface CardProps {
  variant: 'default' | 'glass' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

// Features:
- Glass morphism effects
- Hover animations
- Multiple visual variants
- Responsive padding
- Accessibility support
```

#### Input Component
```typescript
interface InputProps {
  type: 'text' | 'email' | 'textarea' | 'tel';
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

// Features:
- Floating labels
- Error state styling
- Dark theme compatibility
- Validation indicators
- Accessibility labels
```

### 5. Visual Effects Components

#### ParticleBackground Component
```typescript
interface ParticleBackgroundProps {
  density?: number;
  speed?: number;
  color?: string;
  opacity?: number;
  interactive?: boolean;
}

// Features:
- Canvas-based particle system
- Mouse interaction effects
- Performance optimized
- Responsive to theme changes
- Configurable parameters
```

#### GlassCard Component
```typescript
interface GlassCardProps {
  blur?: number;
  opacity?: number;
  border?: boolean;
  shadow?: boolean;
  className?: string;
  children: React.ReactNode;
}

// Features:
- CSS backdrop-filter effects
- Customizable blur intensity
- Border and shadow options
- Theme-aware styling
```

#### ScrollAnimations Component
```typescript
interface ScrollAnimationProps {
  children: React.ReactNode;
  animation: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
}

// Features:
- Intersection Observer based
- Multiple animation types
- Configurable timing
- Performance optimized
- Reduced motion support
```

## Data Structures

### Profile Data
```json
{
  "name": "Adam Almahdi",
  "title": "IT & Performance Marketing Specialist",
  "description": "I blend my background in IT and performance marketing with a deep passion for AI and web development. Whether it's building sales agents, automating workflows, or shaping my personal brand, I'm always creating systems that are equal parts functional and aesthetic. ⚡",
  "image": "/images/profile.jpg",
  "location": "Remote",
  "email": "hello@adamalmahdi.com",
  "resume": "/resume.pdf",
  "socialLinks": [
    {
      "platform": "LinkedIn",
      "url": "https://linkedin.com/in/adamalmahdi",
      "icon": "Linkedin",
      "color": "#0077B5"
    },
    {
      "platform": "GitHub",
      "url": "https://github.com/adamalmahdi",
      "icon": "Github",
      "color": "#333"
    },
    {
      "platform": "Twitter",
      "url": "https://twitter.com/adamalmahdi",
      "icon": "Twitter",
      "color": "#1DA1F2"
    },
    {
      "platform": "Instagram",
      "url": "https://instagram.com/adamalmahdi",
      "icon": "Instagram",
      "color": "#E4405F"
    }
  ]
}
```

### Experience Data
```json
[
  {
    "id": "exp-1",
    "company": "TechCorp Solutions",
    "logo": "/images/companies/techcorp.png",
    "position": "Senior Performance Marketing Manager",
    "period": "May 2023 - Present",
    "location": "Remote",
    "type": "full-time",
    "description": "Leading performance marketing initiatives and AI-driven automation systems. Developed sales agents and workflow automation tools that increased conversion rates by 40%.",
    "technologies": ["Python", "AI/ML", "Google Ads", "Facebook Ads", "Analytics", "Automation"],
    "achievements": [
      "Increased conversion rates by 40% through AI-driven optimization",
      "Built automated sales agent system processing 1000+ leads daily",
      "Reduced manual workflow time by 60% through custom automation"
    ]
  },
  {
    "id": "exp-2",
    "company": "Digital Marketing Agency",
    "logo": "/images/companies/dma.png",
    "position": "IT Specialist & Marketing Analyst",
    "period": "Jan 2022 - Apr 2023",
    "location": "Hybrid",
    "type": "full-time",
    "description": "Bridged IT infrastructure with marketing operations, implementing data-driven solutions and performance tracking systems.",
    "technologies": ["JavaScript", "SQL", "Google Analytics", "CRM Systems", "API Integration"],
    "achievements": [
      "Implemented comprehensive analytics tracking system",
      "Integrated multiple marketing platforms via APIs",
      "Improved data accuracy by 85% through automated reporting"
    ]
  }
]
```

### Projects Data
```json
[
  {
    "id": "project-1",
    "title": "AI Sales Agent Platform",
    "description": "Intelligent sales automation system with natural language processing and lead qualification.",
    "longDescription": "A comprehensive AI-powered sales agent platform that automates lead qualification, follow-ups, and conversion tracking. Built with modern web technologies and integrated with multiple CRM systems.",
    "image": "/images/projects/ai-sales-agent.jpg",
    "technologies": ["Next.js", "Python", "OpenAI API", "PostgreSQL", "Tailwind CSS"],
    "githubUrl": "https://github.com/adamalmahdi/ai-sales-agent",
    "demoUrl": "https://ai-sales-demo.adamalmahdi.com",
    "featured": true,
    "status": "completed",
    "category": "AI/Automation"
  },
  {
    "id": "project-2",
    "title": "Workflow Automation Suite",
    "description": "Custom automation tools for marketing workflows and data processing.",
    "longDescription": "A suite of automation tools designed to streamline marketing workflows, data processing, and reporting. Features drag-and-drop workflow builder and real-time monitoring.",
    "image": "/images/projects/automation-suite.jpg",
    "technologies": ["React", "Node.js", "MongoDB", "Redis", "Docker"],
    "githubUrl": "https://github.com/adamalmahdi/workflow-automation",
    "featured": true,
    "status": "completed",
    "category": "Automation"
  },
  {
    "id": "project-3",
    "title": "Performance Analytics Dashboard",
    "description": "Real-time marketing performance tracking and visualization platform.",
    "longDescription": "A comprehensive analytics dashboard that aggregates data from multiple marketing platforms and provides real-time insights with customizable visualizations.",
    "image": "/images/projects/analytics-dashboard.jpg",
    "technologies": ["Vue.js", "D3.js", "Express.js", "MySQL", "Chart.js"],
    "githubUrl": "https://github.com/adamalmahdi/analytics-dashboard",
    "demoUrl": "https://analytics-demo.adamalmahdi.com",
    "featured": false,
    "status": "completed",
    "category": "Analytics"
  }
]
```

## Animation Specifications

### Framer Motion Variants
```typescript
// Fade in animation
export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Slide up animation
export const slideUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Stagger children animation
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Card hover animation
export const cardHoverVariants = {
  rest: { scale: 1, rotateY: 0 },
  hover: { 
    scale: 1.05, 
    rotateY: 5,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};
```

### CSS Animations
```css
/* Glass morphism effect */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Glow effect for profile image */
.profile-glow {
  position: relative;
}

.profile-glow::before {
  content: '';
  position: absolute;
  inset: -4px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  border-radius: 50%;
  opacity: 0.7;
  filter: blur(20px);
  z-index: -1;
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Typewriter effect */
.typewriter {
  overflow: hidden;
  border-right: 2px solid #ff6b6b;
  white-space: nowrap;
  animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: #ff6b6b; }
}
```

## Performance Optimization

### Image Optimization
```typescript
// Next.js Image component configuration
const imageConfig = {
  domains: ['images.unsplash.com', 'via.placeholder.com'],
  formats: ['image/webp', 'image/avif'],
  sizes: {
    mobile: '(max-width: 768px) 100vw',
    tablet: '(max-width: 1024px) 50vw',
    desktop: '33vw'
  }
};

// Lazy loading with Intersection Observer
const useLazyLoading = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};
```

### Bundle Optimization
```javascript
// next.config.js optimizations
const nextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000
  }
};
```

This technical specification provides the detailed blueprint for implementing all components and features of Adam's portfolio website with precise requirements and implementation details.