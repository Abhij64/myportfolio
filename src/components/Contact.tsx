import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
    reset();
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

  const socialLinks = [
    { icon: Github, href: '#', color: 'accent-parrot', label: 'GitHub' },
    { icon: Linkedin, href: '#', color: 'accent-electric', label: 'LinkedIn' },
    { icon: Twitter, href: '#', color: 'accent-lavender', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-4">
              Get In{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-parrot to-accent-electric">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-space font-bold text-white mb-8">
                Let's Connect
              </h3>
              
              <div className="space-y-6 mb-8">
                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-cyber-gray/50 backdrop-blur-sm rounded-xl border border-accent-parrot/20"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(57, 255, 20, 0.4)' }}
                >
                  <div className="p-3 bg-accent-parrot/20 rounded-lg">
                    <Mail className="w-6 h-6 text-accent-parrot" />
                  </div>
                  <div>
                    <h4 className="text-white font-space font-semibold">Email</h4>
                    <p className="text-gray-300">abhiramjaigopal@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-cyber-gray/50 backdrop-blur-sm rounded-xl border border-accent-electric/20"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(0, 127, 255, 0.4)' }}
                >
                  <div className="p-3 bg-accent-electric/20 rounded-lg">
                    <Phone className="w-6 h-6 text-accent-electric" />
                  </div>
                  <div>
                    <h4 className="text-white font-space font-semibold">Phone</h4>
                    <p className="text-gray-300">+91 8919564350</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-cyber-gray/50 backdrop-blur-sm rounded-xl border border-accent-lavender/20"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(230, 230, 250, 0.4)' }}
                >
                  <div className="p-3 bg-accent-lavender/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent-lavender" />
                  </div>
                  <div>
                    <h4 className="text-white font-space font-semibold">Location</h4>
                    <p className="text-gray-300">Hyderabad, India</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`p-4 bg-cyber-gray/50 backdrop-blur-sm rounded-xl border border-${social.color}/20 text-${social.color} hover:border-${social.color}/40 hover:shadow-lg hover:shadow-${social.color}/20 transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <motion.input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-cyber-gray/50 backdrop-blur-sm border border-accent-parrot/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-parrot focus:outline-none focus:ring-2 focus:ring-accent-parrot/20 transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <motion.input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-cyber-gray/50 backdrop-blur-sm border border-accent-electric/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-electric focus:outline-none focus:ring-2 focus:ring-accent-electric/20 transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <motion.input
                    {...register('subject', { required: 'Subject is required' })}
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-cyber-gray/50 backdrop-blur-sm border border-accent-lavender/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-lavender focus:outline-none focus:ring-2 focus:ring-accent-lavender/20 transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <motion.textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-cyber-gray/50 backdrop-blur-sm border border-accent-peach/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-peach focus:outline-none focus:ring-2 focus:ring-accent-peach/20 transition-all duration-300 resize-none"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent-parrot to-accent-electric text-cyber-darker font-space font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-accent-parrot/30 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;