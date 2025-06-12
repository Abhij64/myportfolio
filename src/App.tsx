import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import ProjectDetail from './components/ProjectDetail';

// Removed ThemeToggle and its usage as per your earlier request to remove dark/light toggle

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-cyber-darker transition-colors duration-500">
            <CustomCursor />
            <ParticleBackground />

            <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

            {!isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Navigation />
                    {/* ThemeToggle removed */}

                    <main>
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <Hero />
                                    <About />
                                    <Projects />
                                    <Skills />
                                    <Contact />
                                </>
                            } />
                            <Route path="/projects/:id" element={<ProjectDetail />} />
                        </Routes>
                    </main>
                </motion.div>
            )}
        </div>
    );
}

export default App;
