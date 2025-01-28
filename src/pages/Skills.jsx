import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: "Intermediate" },
  { name: "TypeScript", level: "Intermidiate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "UI/UX Design", level: "Intermediate" },
  { name: "CSS/Tailwind", level: "Advanced" },
  { name: "Git", level: "Advanced" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-your-background-color">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
         
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-your-primary-color">
            Expertise
          </h2>
          <p className="text-lg text-your-secondary-color max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-your-card-color border border-your-border-color/50 hover:border-your-primary-color/50 transition-colors duration-200"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-your-primary-color">
                  {skill.name}
                </h3>
                <span className="text-sm text-your-primary-color">
                  {skill.level}
                </span>
              </div>
              <div className="w-full bg-your-background-color rounded-full h-2">
                <div
                  className="bg-your-primary-color h-2 rounded-full transition-all duration-500"
                  style={{
                    width:
                      skill.level === "Advanced"
                        ? "90%"
                        : skill.level === "Intermediate"
                        ? "75%"
                        : "60%",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};