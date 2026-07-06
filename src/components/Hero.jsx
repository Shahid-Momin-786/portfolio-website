import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = ({ role, setRole }) => {
  const isWeb = role === 'web';

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-3/5 flex flex-col items-start text-left">
            
            {/* Role Switcher */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-center rounded-full bg-bg-surface border border-border-subtle p-1 shadow-sm"
            >
              <button
                onClick={() => setRole('web')}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${isWeb ? 'text-bg-base' : 'text-text-body hover:text-text-heading'}`}
              >
                {isWeb && (
                  <motion.div
                    layoutId="role-pill"
                    className="absolute inset-0 bg-text-heading rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${isWeb ? 'bg-bg-base' : 'border border-text-body'}`}></span>
                  Full Stack Developer
                </span>
              </button>
              
              <button
                onClick={() => setRole('flutter')}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${!isWeb ? 'text-bg-base' : 'text-text-body hover:text-text-heading'}`}
              >
                {!isWeb && (
                  <motion.div
                    layoutId="role-pill"
                    className="absolute inset-0 bg-text-heading rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${!isWeb ? 'bg-bg-base' : 'border border-text-body'}`}></span>
                  Flutter Developer
                </span>
              </button>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl"
            >
              Hi, I'm Shahid Momin.
            </motion.h1>
            
            <div className="h-24 sm:h-20 lg:h-28 mb-10 w-full max-w-2xl relative">
              <AnimatePresence mode="wait">
                <motion.p
                  key={role}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 text-lg md:text-xl text-text-body leading-relaxed font-light"
                >
                  {isWeb 
                    ? "Full Stack Developer building scalable web applications. Specializing in Python, Django REST Framework, and React to engineer robust backend architectures and seamless user interfaces."
                    : "Mobile Application Developer building cross-platform experiences. Specializing in Flutter, Dart, and Firebase to craft responsive, performant, and deeply interactive mobile applications."
                  }
                </motion.p>
              </AnimatePresence>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="rounded-lg bg-text-heading text-bg-base px-6 py-3 font-medium transition-all hover:bg-white hover:-translate-y-0.5 shadow-sm"
              >
                Featured Projects
              </a>
              <a
                href={isWeb ? "https://drive.google.com/file/d/1HqPea1Ty2BB8xS_sP2ehEX_kxuJF0BfQ/view?usp=sharing" : "https://drive.google.com/file/d/1jk9hA85mpA-iOwZk6Hhs2u6k6c3fimFo/view?usp=sharing"}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border-subtle bg-bg-surface px-6 py-3 font-medium text-text-heading transition-all hover:bg-bg-card hover:border-text-body hover:-translate-y-0.5 shadow-sm min-w-[240px] text-center"
              >
                {isWeb ? "Download Web Resume" : "Download Flutter Resume"}
              </a>
            </motion.div>
          </div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-accent-primary/5 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border-subtle bg-bg-card shadow-sm group">
                <img
                  src="/profile.png"
                  alt="Shahid Momin"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
