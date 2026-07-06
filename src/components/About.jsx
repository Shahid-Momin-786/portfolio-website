import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Code2, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-bg-surface border-t border-border-subtle overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl text-text-heading">
            About Me
          </h2>
          <div className="h-1 w-12 bg-accent-primary rounded-full"></div>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Narrative Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-semibold text-text-heading">
              My Professional Story
            </h3>
            <div className="text-base text-text-body leading-relaxed space-y-4 font-light">
              <p>
                I am a software engineer deeply passionate about bridging the gap between robust server-side logic and seamless user experiences. Currently pursuing my Master of Computer Applications (MCA) at PCCOE Pune, I have cultivated a dual expertise in both backend web engineering and cross-platform mobile development.
              </p>
              <p>
                I enjoy building systems from the ground up. Whether it's architecting a scalable REST API using Python and Django, or creating a fluid, animated mobile interface in Flutter, I focus on delivering clean, maintainable, and high-performance solutions.
              </p>
              <p>
                I solve real-world problems through code. By understanding the core requirements of a project, I design architectures that prioritize security (JWT, RBAC), scalability, and user-centric design. My goal is to engineer software that not only works flawlessly but also provides an intuitive experience for the end-user.
              </p>
            </div>
          </motion.div>

          {/* Achievements & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border-subtle bg-bg-card p-6 shadow-sm hover:border-accent-primary transition-colors">
                <BookOpen className="text-text-body mb-4" size={24} />
                <h4 className="text-lg font-semibold text-text-heading mb-1">Academics</h4>
                <p className="text-sm text-text-body">MCA at PCCOE (SGPA: 8.9)<br/>BSc CS (CGPA: 8.65)</p>
              </div>
              
              <div className="rounded-xl border border-border-subtle bg-bg-card p-6 shadow-sm hover:border-accent-primary transition-colors">
                <Code2 className="text-text-body mb-4" size={24} />
                <h4 className="text-lg font-semibold text-text-heading mb-1">Problem Solving</h4>
                <p className="text-sm text-text-body">170+ DSA problems solved on LeetCode across core concepts.</p>
              </div>
              
              <div className="rounded-xl border border-border-subtle bg-bg-card p-6 shadow-sm hover:border-accent-primary transition-colors">
                <Award className="text-text-body mb-4" size={24} />
                <h4 className="text-lg font-semibold text-text-heading mb-1">Certifications</h4>
                <p className="text-sm text-text-body">Certified in Python, Java, SQL, and Flutter via comprehensive programs.</p>
              </div>

              <div className="rounded-xl border border-border-subtle bg-bg-card p-6 shadow-sm hover:border-accent-primary transition-colors">
                <Terminal className="text-text-body mb-4" size={24} />
                <h4 className="text-lg font-semibold text-text-heading mb-1">Mentorship</h4>
                <p className="text-sm text-text-body">Selected for Bluepineapple Campus Connect professional program.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
