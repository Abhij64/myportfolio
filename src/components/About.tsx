import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Rocket } from 'lucide-react';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Side: Text and Features */}
            <motion.div variants={itemVariants}>
              <motion.h2
                  className="text-4xl md:text-5xl font-space font-bold text-white mb-8"
                  variants={itemVariants}
              >
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-parrot to-accent-electric">
                Me
              </span>
              </motion.h2>

              <motion.p
                  className="text-lg text-gray-300 font-inter leading-relaxed mb-6"
                  variants={itemVariants}
              >
                I'm a passionate Full Stack Developer with 5+ years of experience creating
                digital solutions that bridge the gap between design and functionality.
                My journey began with a curiosity for how things work and evolved into
                a love for crafting elegant, efficient code.
              </motion.p>

              <motion.p
                  className="text-lg text-gray-300 font-inter leading-relaxed mb-8"
                  variants={itemVariants}
              >
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in continuous learning and
                staying ahead of the curve in this ever-evolving field.
              </motion.p>

              <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6" variants={itemVariants}>
                <div className="text-center p-6 bg-cyber-gray/50 backdrop-blur-sm rounded-xl border border-accent-parrot/20">
                  <Code className="w-8 h-8 text-accent-parrot mx-auto mb-3" />
                  <h3 className="text-white font-space font-semibold mb-2">Development</h3>
                  <p className="text-gray-400 text-sm">Clean, efficient code</p>
                </div>

                <div className="text-center p-6 bg-cyber-gray/50 backdrop-blur-sm rounded-xl border border-accent-electric/20">
                  <Palette className="w-8 h-8 text-accent-electric mx-auto mb-3" />
                  <h3 className="text-white font-space font-semibold mb-2">Design</h3>
                  <p className="text-gray-400 text-sm">User-centered approach</p>
                </div>

                <div className="text-center p-6 bg-cyber-gray/50 backdrop-blur-sm rounded-xl border border-accent-peach/20">
                  <Rocket className="w-8 h-8 text-accent-peach mx-auto mb-3" />
                  <h3 className="text-white font-space font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-400 text-sm">Cutting-edge solutions</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side: Image and Floating Icons */}
            <motion.div className="relative flex items-center justify-center" variants={itemVariants}>
              {/* Image and background blur */}
              <div className="relative group w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-parrot to-accent-electric rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <motion.img
                    src="./img.jpeg"
                    alt="Alex Thompson"
                    className="relative w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                />

                {/* Floating Social Icons */}
                <motion.div className="pointer-events-auto">
                  {/* Top Left */}
                  <motion.div
                      className="absolute"
                      style={{ top: '8%', left: '-40px' }}
                      animate={{ y: [0, -8, 0], x: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                  >
                    <Linkedin className="w-12 h-12 text-accent-electric bg-cyber-gray/80 rounded-full p-2 shadow-lg" />
                  </motion.div>
                  {/* Top Right */}
                  <motion.div
                      className="absolute"
                      style={{ top: '8%', right: '-40px' }}
                      animate={{ y: [0, 8, 0], x: [0, 4, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                  >
                    <Instagram className="w-12 h-12 text-accent-parrot bg-cyber-gray/80 rounded-full p-2 shadow-lg" />
                  </motion.div>
                  {/* Bottom Left */}
                  <motion.div
                      className="absolute"
                      style={{ bottom: '8%', left: '-48px' }}
                      animate={{ y: [0, 6, 0], x: [0, -3, 0] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  >
                    <Twitter className="w-12 h-12 text-accent-peach bg-cyber-gray/80 rounded-full p-2 shadow-lg" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Animated background blobs */}
              <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-accent-parrot/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
              />
              <motion.div
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-electric/20 rounded-full blur-xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default About;
