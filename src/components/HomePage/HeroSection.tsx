
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BasketballCanvas from '../3D/BasketballCanvas';
import heroData from '../../data/hero.json';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add 3D effect with mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = clientX / innerWidth - 0.5;
      const moveY = clientY / innerHeight - 0.5;
      
      if (heroRef.current) {
        heroRef.current.style.transform = `perspective(1000px) rotateY(${moveX * 5}deg) rotateX(${moveY * -5}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-background to-secondary dark:from-tech-navy dark:to-tech-navy/40 overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Basketball decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full border-4 border-court-orange/20 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full border-2 border-court-orange/30 animate-float"></div>
        
        {/* ML decorative elements */}
        <div className="absolute top-40 right-20 grid grid-cols-3 gap-2 opacity-20">
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
        </div>
        
        {/* Code decorative elements */}
        <div className="absolute bottom-32 left-32 opacity-10 font-mono text-xs">
          <div>{'<div className="athlete">'}</div>
          <div>{'  <code>developer</code>'}</div>
          <div>{'  <data>researcher</data>'}</div>
          <div>{'</div>'}</div>
        </div>
        
        <div ref={heroRef} className="grid md:grid-cols-2 gap-12 items-center transition-transform duration-300 ease-out">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-6">
                <motion.span 
                  variants={itemVariants}
                  className="px-3 py-1 bg-court-orange/10 text-court-orange text-sm rounded-full"
                >
                  Athlete
                </motion.span>
                <motion.span 
                  variants={itemVariants}
                  className="px-3 py-1 bg-tech-blue/10 text-tech-blue text-sm rounded-full"
                >
                  Developer
                </motion.span>
                <motion.span 
                  variants={itemVariants}
                  className="px-3 py-1 bg-ml-purple/10 text-ml-purple text-sm rounded-full"
                >
                  Researcher
                </motion.span>
              </div>
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-heading font-bold mb-6"
              >
                {heroData.title}
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-muted-foreground mb-8"
              >
                {heroData.subtitle}
              </motion.p>
            </div>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to={heroData.ctaLink}
                className="btn btn-primary flex items-center justify-center"
              >
                {heroData.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/about" 
                className="btn btn-secondary flex items-center justify-center"
              >
                Learn About Me
              </Link>
            </motion.div>
          </motion.div>
          
          <div className="relative hidden md:block h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="h-full w-full"
            >
              <BasketballCanvas />
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-4 -right-4 p-4 glass-effect rounded-lg animate-float shadow-lg"
            >
              <div className="w-20 h-16 bg-tech-blue/20 rounded flex items-center justify-center">
                <div className="text-center">
                  <div className="font-mono text-xs">{'{code}'}</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 p-4 glass-effect rounded-lg animate-float shadow-lg" 
              style={{ animationDelay: '1s' }}
            >
              <div className="w-20 h-16 bg-ml-purple/20 rounded flex items-center justify-center">
                <div className="text-center">
                  <div className="grid grid-cols-3 gap-1">
                    <div className="w-2 h-2 bg-ml-purple rounded-full"></div>
                    <div className="w-2 h-2 bg-ml-purple rounded-full"></div>
                    <div className="w-2 h-2 bg-ml-purple rounded-full"></div>
                    <div className="w-2 h-2 bg-ml-purple rounded-full"></div>
                    <div className="w-2 h-2 bg-ml-purple rounded-full"></div>
                    <div className="w-2 h-2 bg-ml-purple rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
