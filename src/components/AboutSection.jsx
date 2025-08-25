/*import { motion } from 'framer-motion';
import { SKILLS, STATS } from '../constants';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section bg-slate-800/30">
      <div className="container">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gradient-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm Geoffrey Musau, a passionate full-stack developer with expertise in building 
              responsive, scalable web applications using modern technologies like React, Node.js, 
              and cutting-edge CSS frameworks.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              With a strong foundation in both frontend and backend development, I specialize in 
              creating seamless user experiences while maintaining robust, efficient server-side 
              architecture. My approach focuses on writing clean, maintainable code that scales.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently seeking opportunities to join innovative teams where I can contribute to 
              meaningful projects, continue learning cutting-edge technologies, and help build 
              products that make a difference.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {STATS.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="card card-hover text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-slate-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SKILLS.map((category, index) => (
            <motion.div 
              key={category.name} 
              className="card card-hover group"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-500/20 rounded-xl mr-4 group-hover:bg-primary-500/30 transition-colors">
                  <category.icon className="text-primary-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-100">{category.name}</h3>
              </div>
              <div className="space-y-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  >
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-slate-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;*/
import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

const SKILLS = [
  {
    name: "Frontend Development",
    icon: Code,
    items: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    items: ["Figma", "Responsive Design", "Prototyping", "Wireframing"],
  },
  {
    name: "Performance",
    icon: Zap,
    items: ["SEO", "Accessibility", "Optimized Assets", "Lazy Loading"],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-bg text-text">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          className="text-lg text-center max-w-2xl mx-auto mb-16 text-slate-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          I’m Geoffrey Musau, a passionate full-stack developer with a love
          for creating beautiful, performant, and user-friendly digital
          experiences.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SKILLS.map((category) => (
            <motion.div
              key={category.name}
              className="card card-hover group p-6 flex flex-col justify-between h-full"
              variants={itemVariants}
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary-500/20 rounded-xl mr-4 group-hover:bg-primary-500/30 transition-colors">
                    <category.icon className="text-primary-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: skillIndex * 0.05,
                      }}
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-slate-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Spacer to push footer content down if needed */}
              <div className="mt-6"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
