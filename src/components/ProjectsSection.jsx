import { useState } from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import Button from './Button';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'all') return showAll ? true : project.featured;
    return project.tech.some(tech => tech.toLowerCase().includes(filter.toLowerCase()));
  });

  const filters = ['all', 'react', 'node.js', 'python', 'vue.js'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="projects" className="section bg-slate-900/50">
      <div className="container">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8 text-gradient-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p 
          className="text-center text-slate-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of my recent projects that showcase my skills in full-stack development, 
          UI/UX design, and problem-solving abilities.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filters.map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === filterOption
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white'
              }`}
            >
              {filterOption === 'all' ? 'All' : filterOption}
            </button>
          ))}
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${filter}-${showAll}`}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={`${project.title}-${index}`}
                className="group card card-hover overflow-hidden"
                variants={itemVariants}
                layout
              >
                {/* Project Image/Gradient */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-pattern opacity-30"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <motion.a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} className="text-white" />
                      </motion.a>
                      <motion.a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} className="text-white" />
                      </motion.a>
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary-500/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs border border-primary-500/30 hover:bg-primary-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center text-slate-300 hover:text-primary-400 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} className="mr-2" /> Code
                    </motion.a>
                    <motion.a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-300 hover:text-accent-400 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} className="mr-2" /> Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More Button */}
        {filter === 'all' && !showAll && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
              icon={Eye}
            >
              Show All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;