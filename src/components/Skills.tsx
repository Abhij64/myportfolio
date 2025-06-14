import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        },
        { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: '🌐', color: '#E34F26' },
        { name: 'CSS', icon: '🎨', color: '#1572B6' },
        { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
        { name: 'React JS', icon: '⚛️', color: '#61DAFB' },
        { name: 'Next.js', icon: '🔺', color: '#000000' },
        { name: 'TypeScript', icon: '📘', color: '#3178C6' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: '🟢', color: '#339933' },
        { name: 'Python', icon: '🐍', color: '#3776AB' },
        { name: 'MongoDB', icon: '🍃', color: '#47A248' },
        { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
        { name: 'Firebase', icon: '🔥', color: '#FFCA28' },
        { name: 'Express', icon: '🚀', color: '#000000' },
      ]
    },
    {
      title: 'Development',
      skills: [
        { name: 'Git', icon: '📝', color: '#F05032' },
        { name: 'GitHub', icon: '🐙', color: '#181717' },
        { name: 'Docker', icon: '🐳', color: '#2496ED' },
        { name: 'AWS', icon: '☁️', color: '#FF9900' },
        { name: 'Figma', icon: '🎯', color: '#F24E1E' },
        { name: 'VS Code', icon: '💻', color: '#007ACC' },
      ]
    },
  ];

  // New Hobbies & Interests Section
  const hobbiesCategory = {
    title: 'Hobbies & Interests',
    skills: [
      { name: 'Figma', icon: '🎯', color: '#F24E1E' },
      { name: 'Blender', icon: '🍊', color: '#F5792A' },
      { name: 'Unreal Engine 5', icon: '🕹️', color: '#0E1128' },
      { name: 'Canva', icon: '🖌️', color: '#00C4CC' },
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
      <section className="py-20 px-4 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
          >
            {/* Header */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                What I do
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                I am from Pakistan and currently living in Karachi. I am doing Bachelor's in Software engineering and I will graduate in the year 2021. I am UI Ux designer and currently working as a freelancer.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                      key={category.title}
                      className="text-center"
                      variants={itemVariants}
                  >
                    <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-yellow-400 pl-4 text-left">
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      {category.skills.map((skill, skillIndex) => (
                          <motion.div
                              key={skill.name}
                              className="group bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-green-400 transition-all duration-500 cursor-pointer"
                              initial={{ opacity: 0, y: 20 }}
                              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                              transition={{
                                delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                duration: 0.6
                              }}
                              whileHover={{
                                scale: 1.05,
                                y: -5,
                                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
                                transition: { duration: 0.3 }
                              }}
                          >
                            <div className="flex flex-col items-center space-y-3">
                              <motion.div
                                  className="text-4xl transition-all duration-500 group-hover:text-green-400"
                                  whileHover={{
                                    rotate: [0, -10, 10, 0],
                                    scale: 1.2,
                                    transition: { duration: 0.5 }
                                  }}
                              >
                                {skill.icon}
                              </motion.div>
                              <span className="text-white font-medium text-sm group-hover:text-green-400 transition-colors duration-500">
                          {skill.name}
                        </span>
                            </div>
                            {/* Hover glow effect */}
                            <motion.div
                                className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                initial={{ opacity: 0 }}
                            />
                          </motion.div>
                      ))}
                    </div>
                  </motion.div>
              ))}
            </div>

            {/* Hobbies & Interests Section */}
            <motion.div className="mt-20" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-green-400 pl-4 text-left">
                {hobbiesCategory.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {hobbiesCategory.skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="group bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-green-400 transition-all duration-500 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          duration: 0.6
                        }}
                        whileHover={{
                          scale: 1.08,
                          y: -8,
                          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.25)",
                          transition: { duration: 0.3 }
                        }}
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <motion.div
                            className="text-4xl transition-all duration-500 group-hover:text-blue-400"
                            whileHover={{
                              rotate: [0, -10, 10, 0],
                              scale: 1.2,
                              transition: { duration: 0.5 }
                            }}
                        >
                          {skill.icon}
                        </motion.div>
                        <span className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors duration-500">
                      {skill.name}
                    </span>
                      </div>
                      {/* Hover glow effect */}
                      <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          initial={{ opacity: 0 }}
                      />
                    </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Animation */}

          </motion.div>
        </div>
      </section>
  );
};

export default Skills;
