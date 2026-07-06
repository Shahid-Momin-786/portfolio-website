import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    period: "May 2026 - Present",
    role: "Lead Developer",
    organization: "Smart Transport Management System (SMTS)",
    description: "Architecting a comprehensive municipal transit platform. Leading the engineering of a proprietary GPS-free ETA calculation engine and a scalable Django REST backend to support multi-tier administrative controls."
  },
  {
    period: "Mar 2026 - Present",
    role: "Full Stack & Mobile Developer",
    organization: "CampusEarn & Smart Turf",
    description: "Developing robust, real-time applications including a hyperlocal job marketplace and a sports matchmaking platform. Integrating Flutter frontends with complex Django backend services, WebSockets, and geospatial queries."
  },
  {
    period: "Jan 2026 - Mar 2026",
    role: "Independent Developer",
    organization: "SpeakCampus & Real-Time Chat App",
    description: "Built specialized applications including a role-based English speaking evaluation platform (Django) and a high-performance, offline-capable real-time chat application (Flutter & Firebase)."
  },
  {
    period: "Sep 2025 - Jun 2027",
    role: "Master of Computer Applications (MCA)",
    organization: "PCCOE, Pune",
    description: "Focusing on advanced software engineering principles, system design, and scalable web architectures. Maintained an SGPA of 8.9."
  },
  {
    period: "Jun 2022 - Mar 2025",
    role: "BSc in Computer Science",
    organization: "Annasaheb Magar College, Pune",
    description: "Built a strong foundation in computer science fundamentals, data structures, algorithms, and relational database management systems. Graduated with a CGPA of 8.65."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-bg-surface border-t border-border-subtle">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl text-text-heading">
            Professional Timeline
          </h2>
          <div className="h-1 w-12 bg-accent-primary rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-border-subtle pl-8 md:pl-12 py-4 space-y-16">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 h-4 w-4 rounded-full bg-bg-surface border-2 border-accent-primary shadow-[0_0_0_4px_var(--color-bg-surface)] transition-colors hover:bg-accent-primary"></div>
              
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold text-text-heading">
                  {item.role}
                </h3>
                <h4 className="text-sm font-medium text-text-body mb-2">
                  {item.organization}
                </h4>
                <p className="text-base text-text-body leading-relaxed font-light max-w-3xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
