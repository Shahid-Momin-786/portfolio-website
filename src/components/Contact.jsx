import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setStatus('sending');

    try {
      const templateParams = {
        // Original variables from requirements
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim() || 'No Subject',
        message: formData.message.trim(),
        time: new Date().toLocaleString('en-GB', { 
          day: '2-digit', month: 'long', year: 'numeric', 
          hour: '2-digit', minute: '2-digit', hour12: true 
        }),
        
        // Alternative standard aliases just in case the EmailJS template uses these instead
        name: formData.name.trim(),
        user_name: formData.name.trim(),
        email: formData.email.trim(),
        user_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        date: new Date().toLocaleString('en-GB', { 
          day: '2-digit', month: 'long', year: 'numeric', 
          hour: '2-digit', minute: '2-digit', hour12: true 
        })
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg-surface border-t border-border-subtle">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl text-text-heading">
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-accent-primary rounded-full"></div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-text-heading mb-3">Let's work together.</h3>
              <p className="text-base text-text-body leading-relaxed max-w-md">
                I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative magic, I'd love to hear about it.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              {[
                { icon: <Mail size={20} className="text-text-body" />, title: 'Email', value: 'shahidmomin854@gmail.com', link: 'mailto:shahidmomin854@gmail.com' },
                { icon: <Phone size={20} className="text-text-body" />, title: 'Phone', value: '+91 9168987471', link: 'tel:+919168987471' },
                { icon: <MapPin size={20} className="text-text-body" />, title: 'Location', value: 'Pune, India', link: null },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border-subtle bg-bg-card transition-colors group-hover:border-accent-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-text-body mb-1">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-sm font-medium text-text-heading hover:text-accent-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-text-heading">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-border-subtle bg-bg-card p-6 sm:p-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex gap-4 items-start"
                  >
                    <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="text-sm font-semibold text-green-500 mb-1">Thank you!</h4>
                      <p className="text-sm text-text-body">Your message has been sent successfully. I'll get back to you as soon as possible.</p>
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex gap-4 items-start"
                  >
                    <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="text-sm font-semibold text-red-500 mb-1">Something went wrong.</h4>
                      <p className="text-sm text-text-body">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-body" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-lg border border-border-subtle bg-bg-surface px-4 py-2.5 text-sm text-text-heading outline-none transition-colors focus:border-accent-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-body" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-lg border border-border-subtle bg-bg-surface px-4 py-2.5 text-sm text-text-heading outline-none transition-colors focus:border-accent-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-body" htmlFor="subject">Subject <span className="text-text-body/50 text-xs font-normal">(Optional)</span></label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="rounded-lg border border-border-subtle bg-bg-surface px-4 py-2.5 text-sm text-text-heading outline-none transition-colors focus:border-accent-primary"
                    placeholder="Internship Opportunity"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-body" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="resize-none rounded-lg border border-border-subtle bg-bg-surface px-4 py-2.5 text-sm text-text-heading outline-none transition-colors focus:border-accent-primary"
                    placeholder="Hi Shahid, I came across your portfolio..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-text-heading px-6 py-3 text-sm font-semibold text-bg-base transition-all hover:bg-white disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-bg-base border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
