import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.name.toLowerCase());
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-bg-surface/80 backdrop-blur-md border-b border-border-subtle py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        <a href="#home" className="group text-xl font-bold tracking-tight text-text-heading">
          Shahid<span className="text-accent-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-text-heading ${isActive ? 'text-text-heading' : 'text-text-body'}`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-accent-primary"
                  />
                )}
                {!isActive && (
                  <div className="absolute -bottom-1.5 left-0 right-0 h-0.5 scale-x-0 bg-border-subtle transition-transform duration-300 hover:scale-x-100" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="relative z-50 text-text-heading md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: mobileMenuOpen ? 0 : '100%' }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-bg-surface border-l border-border-subtle flex flex-col justify-center p-8 md:hidden shadow-2xl"
        >
          <div className="flex flex-col gap-8 text-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium text-text-body hover:text-accent-primary transition-colors border-b border-border-subtle/50 pb-4"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Navigation;
