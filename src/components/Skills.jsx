import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = ({ role }) => {
  const isWeb = role === 'web';

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "Dart", "Java", "SQL"]
    },
    {
      title: "Frontend & Mobile",
      skills: ["React.js", "Flutter", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Django", "Django REST Framework (DRF)", "REST APIs", "JWT", "RBAC"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "SQLite", "Firebase", "MySQL"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Linux"]
    },
    {
      title: "Libraries & SDKs",
      skills: ["Provider", "Riverpod", "Firebase Cloud Messaging (FCM)"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-bg-base border-t border-border-subtle">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl text-text-heading">
            Technical Arsenal
          </h2>
          <div className="h-1 w-12 bg-accent-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-heading mb-4 border-b border-border-subtle pb-2">
                {category.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {category.skills.map((skill) => {
                  // Determine if this skill is highly relevant to the current role
                  const isHighlighted = isWeb 
                    ? ["Python", "JavaScript", "Java", "SQL", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Django", "Django REST Framework (DRF)", "REST APIs", "JWT", "RBAC", "PostgreSQL", "SQLite", "MySQL", "Git", "GitHub", "Postman", "VS Code", "Linux"].includes(skill)
                    : ["Dart", "Java", "SQL", "Flutter", "REST APIs", "JWT", "Firebase", "SQLite", "Git", "GitHub", "Postman", "VS Code", "Provider", "Riverpod", "Firebase Cloud Messaging (FCM)"].includes(skill);

                  return (
                    <li 
                      key={skill} 
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${isHighlighted ? 'bg-accent-primary' : 'bg-border-subtle'}`}></span>
                      <span className={`transition-colors duration-500 ${isHighlighted ? 'text-text-heading font-medium' : 'text-text-body'}`}>
                        {skill}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
