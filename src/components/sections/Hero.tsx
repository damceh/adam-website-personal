'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  User
} from 'lucide-react';
import { Profile } from '@/types';

const socialIcons = {
  Linkedin,
  Github,
  Twitter,
  Instagram,
};

interface HeroProps {
  profile: Profile;
  className?: string;
}

export function Hero({ profile }: HeroProps) {
  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = useMemo(() => [
    "IT Network Engineer × AI Automation Enthusiast",
    "Network Infrastructure Architect", 
    "DevOps & Automation Specialist",
    "AI-Powered Solutions Developer"
  ], []);

  // Typewriter effect
  useEffect(() => {
    const typeWriter = () => {
      const currentText = titles[titleIndex];
      
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setCurrentTitle(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentTitle(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    };

    const timeout = setTimeout(typeWriter, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, titles]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Background grain texture overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-noise"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="min-h-screen flex items-center justify-center px-6 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-600 flex items-center justify-center overflow-hidden">
                  <User className="w-20 h-20 text-slate-300" />
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Hello! My name is<br />
              <span className="text-slate-200">
                {profile.name}
              </span>
            </motion.h1>

            <motion.div
              className="mb-12 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                {profile.description}
              </p>
            </motion.div>

            <motion.div
              className="h-16 mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-slate-300 font-light">
                {currentTitle}
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              {profile.socialLinks.map((social, index) => {
                const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-110"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    aria-label={`Visit ${social.platform} profile`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* Decorative Divider */}
        <motion.div 
          className="flex justify-center py-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
}