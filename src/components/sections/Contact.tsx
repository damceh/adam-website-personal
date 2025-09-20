'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { validateContactForm, isFormValid, sanitizeFormData } from '@/lib/validations';
import { ContactFormData } from '@/types';

interface ContactProps {
  className?: string;
}

export function ContactSection({ className }: ContactProps) {
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validate form
    const validation = validateContactForm(contactForm);
    if (!isFormValid(validation)) {
      const newErrors: Record<string, string> = {};
      if (!validation.name.isValid) newErrors.name = validation.name.errors[0];
      if (!validation.email.isValid) newErrors.email = validation.email.errors[0];
      if (validation.subject && !validation.subject.isValid) newErrors.subject = validation.subject.errors[0];
      if (!validation.message.isValid) newErrors.message = validation.message.errors[0];
      
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Check honeypot
    if (contactForm.honeypot && contactForm.honeypot.trim().length > 0) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const sanitizedData = sanitizeFormData(contactForm);
      
      console.log('Submitting form via API route...');
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData)
      });

      const result = await response.json();
      console.log('API response:', result);

      if (result.success) {
        setSubmitStatus('success');
        setContactForm({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-2xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-800/30 border-slate-700">
            <CardContent className="p-8">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-300 text-center"
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-300 text-center"
                >
                  Failed to send message. Please try again or email me directly.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="honeypot"
                  value={contactForm.honeypot}
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-slate-100 focus:border-slate-500"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-slate-100 focus:border-slate-500"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-slate-100 focus:border-slate-500"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 text-slate-100 focus:border-slate-500 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-slate-700 hover:bg-slate-600 text-slate-100 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}