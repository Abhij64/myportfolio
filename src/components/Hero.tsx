import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-gray">
          <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />
          <div className="absolute inset-0 bg-gradient-radial from-accent-parrot/10 via-transparent to-transparent" />
        </div>

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-darker/50 to-cyber-darker/80" />

        <motion.div
            className="relative z-10 text-center px-4 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          <motion.div
              className="mb-8"
              variants={itemVariants}
          >
            <motion.span
                className="inline-block text-accent-parrot text-lg font-space font-medium mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
              Hello, I'm
            </motion.span>

            <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-space font-bold text-white mb-6"
                variants={itemVariants}
            >
              Abhiram{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-parrot via-accent-electric to-accent-lavender">
              Jai Gopal
            </span>
            </motion.h1>

            <motion.p
                className="text-xl md:text-2xl text-gray-300 font-inter max-w-3xl mx-auto mb-12"
                variants={itemVariants}
            >
              Full Stack Developer crafting digital experiences with{' '}
              <span className="text-accent-peach font-semibold">modern technologies</span> and{' '}
              <span className="text-accent-lavender font-semibold">creative solutions</span>
            </motion.p>
          </motion.div>

          <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              variants={itemVariants}
          >
            <a href="#projects">
              <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-accent-parrot to-accent-electric rounded-full text-cyber-darker font-space font-semibold text-lg overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-electric to-accent-parrot opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </a>

            <a href="#contact">
              <motion.button
                  className="group relative px-8 py-4 border-2 border-accent-parrot rounded-full text-accent-parrot font-space font-semibold text-lg overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
              >
    <span className="relative z-10 group-hover:text-cyber-darker transition-colors duration-300">
      Get In Touch
    </span>
                <div className="absolute inset-0 bg-accent-parrot transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            </a>

          </motion.div>

          <motion.div
              className="flex justify-center space-x-6 mb-16"
              variants={itemVariants}
          >
            <motion.a
                href="https://github.com/Abhij64"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-cyber-gray/50 backdrop-blur-sm border border-accent-parrot/20 text-accent-parrot hover:border-accent-parrot hover:shadow-lg hover:shadow-accent-parrot/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/abhiram-jai-gopal-6107b2287/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-cyber-gray/50 backdrop-blur-sm border border-accent-electric/20 text-accent-electric hover:border-accent-electric hover:shadow-lg hover:shadow-accent-electric/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>

          <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-accent-parrot" />
          </motion.div>
        </motion.div>
      </section>
  );
};

export default Hero;