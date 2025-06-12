import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
      <>
        {/* Top Navbar with Hamburger absolutely at the right */}
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                scrolled
                    ? 'bg-cyber-darker/80 backdrop-blur-md border-b border-accent-parrot/20'
                    : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <div className="relative h-16 w-full">
            <motion.button
                onClick={() => setIsOpen(true)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-accent-parrot p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </motion.nav>

        {/* Right Side Panel */}
        {isOpen && (
            <motion.div
                className="fixed top-0 right-0 h-full w-[20%] bg-cyber-darker z-50 shadow-lg backdrop-blur-md"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3 }}
            >
              <div className="flex justify-end p-4">
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-accent-parrot"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col px-6 space-y-6 mt-10">
                {navItems.map((item) => (
                    <motion.a
                        key={item.name}
                        href={item.href}
                        className="text-gray-300 hover:text-accent-parrot text-lg font-medium"
                        onClick={() => setIsOpen(false)}
                        whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.a>
                ))}
              </div>
            </motion.div>
        )}
      </>
  );
};

export default Navigation;
