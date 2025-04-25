
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BasketballCanvas from '../3D/BasketballCanvas';
import heroData from '../../data/hero.json';
import { fadeUp, fadeIn, staggerContainer, fadeUpWithDelay, scaleIn } from '@/utils/animations';

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

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-background to-secondary dark:from-tech-navy dark:to-tech-navy/40 overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Basketball decorative elements */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="absolute top-20 left-10 w-40 h-40 rounded-full border-4 border-court-orange/20 animate-spin-slow"
        />
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="absolute bottom-20 right-10 w-24 h-24 rounded-full border-2 border-court-orange/30 animate-float"
        />
        
        {/* ML decorative elements */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="absolute top-40 right-20 grid grid-cols-3 gap-2 opacity-20"
        >
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
          <div className="w-3 h-3 bg-ml-purple rounded-full"></div>
        </motion.div>
        
        {/* Code decorative elements */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="absolute bottom-32 left-32 opacity-10 font-mono text-xs"
        >
          <div>{'<div className="athlete">'}</div>
          <div>{'  <code>developer</code>'}</div>
          <div>{'  <data>researcher</data>'}</div>
          <div>{'</div>'}</div>
        </motion.div>
        
        <div ref={heroRef} className="grid md:grid-cols-2 gap-12 items-center transition-transform duration-300 ease-out">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              <motion.div 
                variants={fadeUp} 
                className="flex flex-wrap gap-2"
              >
                <span className="px-3 py-1 bg-court-orange/10 text-court-orange text-sm rounded-full">
                  Athlete
                </span>
                <span className="px-3 py-1 bg-tech-blue/10 text-tech-blue text-sm rounded-full">
                  Developer
                </span>
                <span className="px-3 py-1 bg-ml-purple/10 text-ml-purple text-sm rounded-full">
                  Researcher
                </span>
              </motion.div>

              <motion.h1 
                variants={fadeUp}
                className="text-4xl md:text-6xl font-heading font-bold"
              >
                {heroData.title}
              </motion.h1>

              <motion.p 
                variants={fadeUp}
                className="text-xl text-muted-foreground"
              >
                {heroData.subtitle}
              </motion.p>

              <motion.div 
                variants={fadeUp}
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
            </div>
          </motion.div>
          
          <div className="relative hidden md:block h-[500px]">
            {/* Replace the 3D basketball canvas with a styled div */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="h-full w-full bg-gradient-to-br from-court-orange/20 to-court-orange/5 rounded-full flex items-center justify-center"
            >
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-court-orange/30 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-court-orange/40"></div>
                <div className="absolute inset-0 w-full h-full">
                  {/* Basketball lines */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-black/20 transform -translate-y-1/2"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-black/20 transform -translate-x-1/2"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              variants={fadeUpWithDelay(1.2)}
              initial="hidden"
              animate="visible"
              className="absolute -top-4 -right-4 p-4 glass-effect rounded-lg animate-float shadow-lg"
            >
              <div className="w-20 h-16 bg-tech-blue/20 rounded flex items-center justify-center">
                <div className="text-center">
                  <div className="font-mono text-xs">{'{code}'}</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeUpWithDelay(1.5)}
              initial="hidden"
              animate="visible"
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
