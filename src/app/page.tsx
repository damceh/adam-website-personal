import { Hero } from '@/components/sections/Hero';
import { ExperienceSection } from '@/components/sections/Experience';
import { ProjectsSection } from '@/components/sections/Projects';
import { ContactSection } from '@/components/sections/Contact';
import profileData from '@/data/profile.json';
import experienceData from '@/data/experience.json';
import projectsData from '@/data/projects.json';
import { Profile, Experience, Project } from '@/types';
import { MapPin } from 'lucide-react';

export default function Home() {
  const profile = profileData as Profile;
  const experiences = experienceData as Experience[];
  const projects = projectsData as Project[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Background grain texture overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-noise"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <Hero profile={profile} />
        
        {/* Experience Section */}
        <ExperienceSection experiences={experiences} />
        
        {/* Projects Section */}
        <ProjectsSection projects={projects} />
        
        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-slate-800">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center items-center gap-2 text-slate-400 mb-4">
              <MapPin className="w-4 h-4" />
              <span>{profile.location}</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2024 {profile.name}. Built with passion for technology and automation.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
