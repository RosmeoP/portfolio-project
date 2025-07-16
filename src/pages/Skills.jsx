import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Node.js", level: "Advanced" },
  { name: "Express", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
  { name: "Python", level: "Advanced" },
  { name: "Swift", level: "Intermediate" },
  { name: "SwiftUI", level: "Intermediate" },
  { name: "Flask", level: "Intermediate" },
  { name: "SQL Server", level: "Intermediate" },
  { name: "MongoDB", level: "Advanced" },
  { name: "CSS/Tailwind", level: "Advanced" },
  { name: "UI/UX Design", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
];

export const Skills = () => {
  const skillCategories = {
    "Frontend": [
      { name: "React", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "CSS/Tailwind", level: "Advanced" },
    ],
    "Backend": [
      { name: "Node.js", level: "Advanced" },
      { name: "Express", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "Flask", level: "Intermediate" },
    ],
    "Mobile": [
      { name: "Swift", level: "Intermediate" },
      { name: "SwiftUI", level: "Intermediate" },
    ],
    "Database": [
      { name: "MongoDB", level: "Advanced" },
      { name: "SQL Server", level: "Intermediate" },
    ],
    "Tools": [
      { name: "Git", level: "Advanced" },
      { name: "UI/UX Design", level: "Intermediate" },
    ]
  };

  const getLevelIndicator = (level) => {
    switch (level) {
      case "Advanced": return "●●●";
      case "Intermediate": return "●●○";
      default: return "●○○";
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced": return "text-green-600";
      case "Intermediate": return "text-blue-600";
      default: return "text-purple-600";
    }
  };

  return (
    <section id="skills" className="py-24 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Technical Skills
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gray-300"></div>
          </div>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto mt-6">
            Technologies organized by expertise area
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="border-l-2 border-gray-200 pl-6 group-hover:border-gray-400 transition-colors duration-300">
                <h3 className="text-xl font-medium text-gray-900 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {category}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between py-2 px-3 rounded transition-all duration-200 hover:bg-gray-50"
                    >
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className={`text-sm font-mono ${getLevelColor(skill.level)}`}>
                        {getLevelIndicator(skill.level)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Currently Learning</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Docker", "AWS", "GraphQL", "Microservices"].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-full text-sm transition-all duration-300 hover:border-gray-400 hover:text-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};