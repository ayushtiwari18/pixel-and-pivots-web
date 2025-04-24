
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const animateHero = () => {
      if (titleRef.current) {
        titleRef.current.classList.add('animate-fade-in-up');
      }
      
      if (subtitleRef.current) {
        setTimeout(() => {
          subtitleRef.current!.classList.add('animate-fade-in-up');
        }, 300);
      }
    };

    animateHero();

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
          <div>
            <div className="mb-6">
              <div className="flex space-x-2 mb-6">
                <span className="px-3 py-1 bg-court-orange/10 text-court-orange text-sm rounded-full">Athlete</span>
                <span className="px-3 py-1 bg-tech-blue/10 text-tech-blue text-sm rounded-full">Developer</span>
                <span className="px-3 py-1 bg-ml-purple/10 text-ml-purple text-sm rounded-full">Researcher</span>
              </div>
              <h1 ref={titleRef} className="text-4xl md:text-6xl font-heading font-bold mb-6 opacity-0">
                <span className="text-court-orange">Court</span> to <span className="text-tech-blue">Code</span> to <span className="text-ml-purple">Cognition</span>
              </h1>
              <p ref={subtitleRef} className="text-xl text-muted-foreground mb-8 opacity-0">
                Blending the discipline of basketball, the creativity of web development, 
                and the innovation of machine learning research into a unique blend of skills and experiences.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/projects" 
                className="btn btn-primary flex items-center justify-center"
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/about" 
                className="btn btn-secondary flex items-center justify-center"
              >
                Learn About Me
              </Link>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="aspect-square bg-gradient-to-br from-court-orange/20 via-tech-blue/20 to-ml-purple/20 rounded-full p-8 animate-pulse">
              <div className="h-full w-full rounded-full bg-gradient-to-br from-court-orange/30 via-tech-blue/30 to-ml-purple/30 flex items-center justify-center">
                <div className="w-[80%] h-[80%] rounded-full basketball-pattern relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white mix-blend-difference">3 × 1</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 p-4 glass-effect rounded-lg animate-float shadow-lg">
              <div className="w-20 h-16 bg-tech-blue/20 rounded flex items-center justify-center">
                <div className="text-center">
                  <div className="font-mono text-xs">{'{code}'}</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 p-4 glass-effect rounded-lg animate-float shadow-lg" style={{ animationDelay: '1s' }}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
