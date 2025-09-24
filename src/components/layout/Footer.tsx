'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { cn, scrollToElement } from '@/lib/utils';
import { fadeInVariants } from '@/lib/animations';

// Import social icons dynamically
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram,
  Mail,
  ExternalLink
} from 'lucide-react';

const socialLinks = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/adamalmahdi',
    icon: Linkedin,
    color: '#0077B5',
    hoverColor: 'hover:text-[#0077B5]'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/adamalmahdi',
    icon: Github,
    color: '#333333',
    hoverColor: 'hover:text-text-primary'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/adamalmahdi',
    icon: Twitter,
    color: '#1DA1F2',
    hoverColor: 'hover:text-[#1DA1F2]'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/adamalmahdi',
    icon: Instagram,
    color: '#E4405F',
    hoverColor: 'hover:text-[#E4405F]'
  },
];

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    scrollToElement(sectionId, 80);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInVariants}
      className={cn(
        'relative bg-bg-secondary border-t border-border',
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              variants={fadeInVariants}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Adam Almahdi
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-md">
                IT & Network Engineer passionate about AI, automation, 
                and creating systems that blend functionality with aesthetic design.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInVariants}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'p-2 rounded-lg bg-bg-tertiary text-text-secondary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-secondary',
                      social.hoverColor
                    )}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Visit ${social.platform} profile`}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div variants={fadeInVariants}>
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Quick Links
              </h4>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-secondary rounded px-1 py-1"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div variants={fadeInVariants}>
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Get In Touch
              </h4>
              <div className="space-y-3">
                <motion.a
                  href="mailto:hello@adamalmahdi.com"
                  className="flex items-center space-x-2 text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-secondary rounded px-1 py-1"
                  whileHover={{ x: 4 }}
                >
                  <Mail size={16} />
                  <span>hello@adamalmahdi.com</span>
                </motion.a>
                
                <motion.button
                  onClick={() => handleNavClick('#contact')}
                  className="flex items-center space-x-2 text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-secondary rounded px-1 py-1"
                  whileHover={{ x: 4 }}
                >
                  <ExternalLink size={16} />
                  <span>Contact Form</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          variants={fadeInVariants}
          className="border-t border-border my-8"
        />

        {/* Bottom Section */}
        <motion.div
          variants={fadeInVariants}
          className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
        >
          <div className="flex items-center space-x-2 text-sm text-text-muted">
            <span>© {currentYear} Adam Almahdi. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-text-muted">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart size={16} className="text-accent-primary fill-current" />
              </motion.div>
              <span>and ⚡ by Adam Almahdi</span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={handleBackToTop}
              className="p-2 rounded-lg bg-bg-tertiary text-text-secondary hover:text-text-primary hover:bg-accent-primary/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-secondary"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}