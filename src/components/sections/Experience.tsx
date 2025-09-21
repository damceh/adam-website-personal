'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Experience } from '@/types';

interface ExperienceProps {
  experiences: Experience[];
  className?: string;
}

export function ExperienceSection({ experiences, className }: ExperienceProps) {
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-slate-700 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {exp.logo ? (
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-slate-500 rounded"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-slate-100">{exp.company}</h3>
                        {exp.type === 'full-time' && new Date().getFullYear() === new Date(exp.period.split(' - ')[1] || '').getFullYear() && (
                          <Badge variant="secondary" className="bg-green-900/30 text-green-300 border-green-700">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-slate-300 font-medium mb-1">{exp.position}</p>
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                        {exp.location && (
                          <>
                            <span className="mx-2">•</span>
                            <span>{exp.location}</span>
                          </>
                        )}
                      </div>
                      <p className="text-slate-300 leading-relaxed mb-4">{exp.description}</p>
                      
                      {/* Technologies */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="border-slate-600 text-slate-300 hover:border-slate-500 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {/* Responsibilities */}
                      {exp.responsibility && exp.responsibility.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-slate-200 mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-1">
                            {exp.responsibility.map((task, idx) => (
                              <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                                <span className="text-slate-500 mt-1.5 flex-shrink-0">•</span>
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Achievements (for future use) */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-slate-200 mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                                <span className="text-green-500 mt-1.5 flex-shrink-0">★</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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