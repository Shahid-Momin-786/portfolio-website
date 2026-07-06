import React from 'react';
import { ExternalLink, Link2, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border-subtle bg-bg-base py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold tracking-tight text-text-heading inline-block mb-1">
              Shahid.
            </a>
            <p className="text-sm text-text-body">Crafting digital experiences.</p>
          </div>

          <div className="flex gap-6">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shahid-momin-13b148368/', icon: Link2 },
              { label: 'GitHub', href: 'https://github.com/Shahid-Momin-786', icon: ExternalLink },
              { label: 'Portfolio', href: '#', icon: Globe }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="text-text-body hover:text-text-heading transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs font-medium text-border-subtle pt-8 border-t border-border-subtle/50">
          <p>&copy; {new Date().getFullYear()} Shahid Momin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
