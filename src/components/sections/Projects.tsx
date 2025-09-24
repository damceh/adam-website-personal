'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/types';

interface ProjectsProps {
  projects: Project[];
  className?: string;
}

export function ProjectsSection({ projects, className }: ProjectsProps) {
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300 group h-full flex flex-col card-hover">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="aspect-video bg-slate-700 rounded-t-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-slate-400">Project Preview</div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                      {project.featured && (
                        <Badge variant="secondary" className="bg-blue-900/30 text-blue-300 border-blue-700">
                          Featured
                        </Badge>
                      )}
                      {project.status === 'in-progress' && (
                        <Badge variant="secondary" className="bg-yellow-900/30 text-yellow-300 border-yellow-700">
                          In Progress
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed flex-grow">{project.description}</p>
                    
                    {/* Category */}
                    <div className="mb-4">
                      <Badge variant="outline" className="border-slate-600 text-slate-400 text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem]">
                      {project.technologies?.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="border-slate-600 text-slate-300 hover:border-slate-500 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      {project.demoUrl && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-slate-600 text-slate-300 hover:bg-slate-700"
                          asChild
                        >
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-slate-600 text-slate-300 hover:bg-slate-700"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}