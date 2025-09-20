import { Variants } from 'framer-motion';

// Fade in animation variants
export const fadeInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

// Slide up animation variants
export const slideUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
};

// Slide in from left
export const slideInLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7, 
      ease: "easeOut" 
    }
  }
};

// Slide in from right
export const slideInRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.7, 
      ease: "easeOut" 
    }
  }
};

// Scale animation variants
export const scaleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

// Stagger container animation
export const staggerContainerVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Stagger item animation
export const staggerItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

// Card hover animation
export const cardHoverVariants: Variants = {
  rest: { 
    scale: 1, 
    rotateY: 0,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  },
  hover: { 
    scale: 1.05, 
    rotateY: 5,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  }
};

// Button hover animation
export const buttonHoverVariants: Variants = {
  rest: { 
    scale: 1,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    }
  },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    }
  },
  tap: { 
    scale: 0.95,
    transition: { 
      duration: 0.1, 
      ease: "easeOut" 
    }
  }
};

// Floating animation
export const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Rotate animation
export const rotateVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Pulse animation
export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Typewriter animation
export const typewriterVariants: Variants = {
  hidden: {
    width: 0
  },
  visible: {
    width: "100%",
    transition: {
      duration: 3,
      ease: "easeInOut"
    }
  }
};

// Page transition variants
export const pageTransitionVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: 0.3, 
      ease: "easeIn" 
    }
  }
};

// Modal animation variants
export const modalVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 50
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    y: 50,
    transition: { 
      duration: 0.2, 
      ease: "easeIn" 
    }
  }
};

// Backdrop animation variants
export const backdropVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.2 
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.2 
    }
  }
};

// Navigation animation variants
export const navVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

// Social links animation variants
export const socialLinksVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    }
  },
  hover: { 
    scale: 1.2,
    rotate: 5,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    }
  }
};

// Progress bar animation variants
export const progressBarVariants: Variants = {
  hidden: { 
    width: 0 
  },
  visible: { 
    width: "100%",
    transition: { 
      duration: 1.5, 
      ease: "easeOut" 
    }
  }
};

// Custom easing functions
export const customEasing = {
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
};

// Animation presets
export const animationPresets = {
  fast: { duration: 0.2 },
  normal: { duration: 0.3 },
  slow: { duration: 0.5 },
  verySlow: { duration: 0.8 },
};

// Reduced motion variants
export const reducedMotionVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.01 
    }
  }
};