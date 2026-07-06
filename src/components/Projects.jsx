import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, Server, Layout, Database, Smartphone, Zap } from 'lucide-react';

const webProjects = [
  {
    title: "Smart Transport Management System (SMTS)",
    overview: "A comprehensive full-stack transport platform designed to handle ticket booking, pass management, and route administration for municipal transit systems.",
    problem: "Traditional transit applications heavily rely on expensive third-party location APIs for ETA tracking, which introduces network latency and operational overhead.",
    architecture: "Built with a multi-tier architecture supporting Passenger, Depot Admin, and Super Admin roles. Includes a custom GPS-free ETA calculation engine.",
    tech: ["React.js", "Django REST Framework", "SQLite", "Tailwind CSS", "JWT", "jsPDF"],
    features: [
      "QR-code-based ticketing system",
      "JWT-secured pass issuance & verification workflows",
      "Multi-depot administrative controls"
    ],
    challenges: "Engineered a proprietary GPS-free ETA calculation engine that uses predefined route stop timings and real-time delay propagation instead of live geolocation.",
    github: "https://github.com/Shahid-Momin-786",
    live: "https://github.com/Shahid-Momin-786",
  },
  {
    title: "CampusEarn (Backend API)",
    overview: "The robust backend infrastructure for a hyperlocal student job marketplace, handling geospatial queries and application lifecycles.",
    problem: "Students and local employers needed a streamlined platform to connect for part-time gigs with precise, location-based filtering.",
    architecture: "A highly normalized REST API supporting Student and Employer personas across 15+ secure endpoints, utilizing role-based data isolation.",
    tech: ["Django REST Framework", "Python", "SQLite", "JWT Authentication"],
    features: [
      "Employer dashboard APIs",
      "Application lifecycle management",
      "Indexed queries for efficient retrieval"
    ],
    challenges: "Optimizing database queries to support efficient geospatial and location-based job filtering without relying on heavyweight GIS extensions.",
    github: "https://github.com/Shahid-Momin-786",
    live: "https://github.com/Shahid-Momin-786",
  },
  {
    title: "SpeakCampus",
    overview: "A role-based web platform that provides a structured environment for students to practice English speaking with formal tutor evaluation.",
    problem: "Existing language platforms lacked a dedicated, permission-scoped workflow for colleges to evaluate student speaking contests at scale.",
    architecture: "Designed with normalized relational schemas supporting three distinct portals: College, Tutor, and Student, driven by a modular Django architecture.",
    tech: ["Django", "Python", "HTML/CSS", "JavaScript", "SQLite"],
    features: [
      "Multimedia submission pipeline",
      "Comprehensive tutor evaluation system",
      "Dynamic leaderboards"
    ],
    challenges: "Implementing a highly secure, permission-scoped access control system to ensure contests and grading were strictly isolated by role.",
    github: "https://github.com/Shahid-Momin-786",
    live: "https://github.com/Shahid-Momin-786",
  }
];

const flutterProjects = [
  {
    title: "Smart Turf",
    overview: "A real-time cricket matchmaking platform that connects local players, manages team challenges, and tracks player statistics.",
    problem: "Local sports enthusiasts lack a unified platform to discover opponents and organize casual matches in real-time.",
    architecture: "Architected using clean feature-based folder structures in Flutter, with Riverpod for state management and Django Channels (WebSockets) for real-time events.",
    tech: ["Flutter", "Dart", "Riverpod", "WebSockets", "Django DRF", "PostgreSQL"],
    features: [
      "Real-time player matchmaking",
      "Team challenge management",
      "FCM push notifications & live chat"
    ],
    challenges: "Ensuring 60fps performance during complex chat and matchmaking interactions using custom AnimationControllers, while maintaining session persistence via SharedPreferences.",
    github: "https://github.com/Shahid-Momin-786",
    live: "https://github.com/Shahid-Momin-786",
  },
  {
    title: "CampusEarn (Mobile App)",
    overview: "A cross-platform Flutter application serving as a hyperlocal job marketplace connecting students with local part-time opportunities.",
    problem: "Students required a responsive, adaptive interface that works flawlessly across mobile and tablet devices to track job applications.",
    architecture: "Built with Provider state management and a centralized API service layer for robust error handling and JWT token management.",
    tech: ["Flutter", "Dart", "Provider", "JWT", "REST APIs"],
    features: [
      "Multi-stage application tracking",
      "Responsive adaptive UI (phone & tablet)",
      "Skeleton loading states"
    ],
    challenges: "Writing comprehensive widget tests for the authentication flow and implementing a SharedPreferences caching layer to drastically reduce redundant API calls.",
    github: "https://github.com/Shahid-Momin-786",
    live: "https://github.com/Shahid-Momin-786",
  },
  {
    title: "Real-Time Chat App",
    overview: "A lightning-fast messaging application emphasizing offline capabilities and instantaneous message delivery.",
    problem: "Standard chat apps often fail gracefully in low-network conditions, leading to lost messages and poor UX.",
    architecture: "Leverages Firebase Cloud Firestore for remote sync and Hive (NoSQL) for local caching, utilizing StreamBuilders for optimistic UI updates.",
    tech: ["Flutter", "Firebase", "Firestore", "FCM", "Hive"],
    features: [
      "Offline message caching",
      "Read receipts & typing indicators",
      "Foreground/background push notifications"
    ],
    challenges: "Synchronizing the local Hive cache seamlessly with the remote Firestore database during frequent network toggles without duplicating messages.",
    github: "https://github.com/Shahid-Momin-786",
    live: "https://github.com/Shahid-Momin-786",
  }
];

const CaseStudy = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-24 last:mb-0 rounded-2xl border border-border-subtle bg-bg-surface overflow-hidden shadow-sm"
    >
      <div className="p-8 lg:p-12 border-b border-border-subtle bg-bg-card">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
          <h3 className="text-3xl font-bold tracking-tight text-text-heading">
            {project.title}
          </h3>
          <div className="flex items-center gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-text-heading hover:text-accent-primary transition-colors bg-bg-surface border border-border-subtle px-4 py-2 rounded-lg">
              <Code2 size={16} /> Source
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-bg-base bg-text-heading hover:bg-white transition-colors px-4 py-2 rounded-lg">
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
        <p className="text-lg text-text-body font-light leading-relaxed max-w-4xl">
          {project.overview}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-8">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 text-xs font-semibold bg-bg-surface border border-border-subtle text-text-heading rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-bg-card border border-border-subtle">
                <Zap size={18} className="text-text-heading" />
              </div>
              <h4 className="text-xl font-semibold text-text-heading">The Problem</h4>
            </div>
            <p className="text-text-body leading-relaxed">{project.problem}</p>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-bg-card border border-border-subtle">
                <Server size={18} className="text-text-heading" />
              </div>
              <h4 className="text-xl font-semibold text-text-heading">Architecture</h4>
            </div>
            <p className="text-text-body leading-relaxed">{project.architecture}</p>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-bg-card border border-border-subtle">
                <Layout size={18} className="text-text-heading" />
              </div>
              <h4 className="text-xl font-semibold text-text-heading">Major Features</h4>
            </div>
            <ul className="space-y-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-text-body mt-2 shrink-0"></span>
                  <span className="text-text-body">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-bg-card border border-border-subtle">
                <Database size={18} className="text-text-heading" />
              </div>
              <h4 className="text-xl font-semibold text-text-heading">Engineering Challenge</h4>
            </div>
            <p className="text-text-body leading-relaxed">{project.challenges}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ role }) => {
  const activeProjects = role === 'web' ? webProjects : flutterProjects;

  return (
    <section id="projects" className="py-24 bg-bg-base border-t border-border-subtle">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl text-text-heading">
            Featured Case Studies
          </h2>
          <div className="h-1 w-12 bg-accent-primary rounded-full"></div>
        </motion.div>

        <div className="flex flex-col relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {activeProjects.map((project, idx) => (
                <CaseStudy key={project.title} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
