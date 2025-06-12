import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects as projectData } from '../data/data'; // ✅ Importing from data.ts

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const filters = [
    'All',
    'AI Educational Platform',
    'Social Impact Platform',
    'Smart Transportation Platform',
    'Productivity Application'
  ];

  const filteredProjects =
      activeFilter === 'All'
          ? projectData
          : projectData.filter((project) => project.type.includes(activeFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
      <section id="projects" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-4">
                Featured{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-parrot to-accent-electric">
                Projects
              </span>
              </h2>
              <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto">
                A showcase of my recent work, featuring cutting-edge technologies
                and innovative solutions
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
              {filters.map((filter) => (
                  <motion.button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-6 py-3 rounded-full font-space font-medium transition-all duration-300 ${
                          activeFilter === filter
                              ? 'bg-accent-parrot text-cyber-darker shadow-lg shadow-accent-parrot/30'
                              : 'bg-cyber-gray/50 text-gray-300 hover:bg-cyber-gray hover:text-white border border-accent-parrot/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                  >
                    <Filter className="w-4 h-4 inline mr-2" />
                    {filter}
                  </motion.button>
              ))}
            </motion.div>

            {/* Project Cards */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
              {filteredProjects.map((project) => (
                  <motion.div
                      key={project.id}
                      onClick={() => navigate(`/projects/${project.id}`)}
                      className="group relative bg-cyber-gray/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-accent-parrot/20 hover:border-accent-parrot/40 transition-all duration-300 cursor-pointer"
                      variants={itemVariants}
                      layout
                      whileHover={{ y: -10 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.a
                            href={project.githubLink}
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-cyber-darker/80 backdrop-blur-sm rounded-full text-accent-parrot hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} />
                        </motion.a>
                        <motion.a
                            href={project.demoLink}
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-cyber-darker/80 backdrop-blur-sm rounded-full text-accent-electric hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-space font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 font-inter mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium bg-accent-parrot/20 text-accent-parrot rounded-full"
                            >
                        {tech}
                      </span>
                        ))}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-parrot/5 to-accent-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default Projects;
