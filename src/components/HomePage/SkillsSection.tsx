import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Volleyball as BasketballIcon, Code, Brain, ArrowRight } from 'lucide-react';
import { skills } from '../../data/skills';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    categoriesRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const webSkills = skills.filter(skill => skill.category === 'web').slice(0, 6);
  const mlSkills = skills.filter(skill => skill.category === 'ml').slice(0, 6);
  const basketballSkills = skills.filter(skill => skill.category === 'basketball').slice(0, 6);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'basketball':
        return <BasketballIcon className="h-6 w-6 text-court-orange" />;
      case 'web':
        return <Code className="h-6 w-6 text-tech-blue" />;
      case 'ml':
        return <Brain className="h-6 w-6 text-ml-purple" />;
      default:
        return null;
    }
  };

  return (
    <section className="section bg-secondary/50 dark:bg-tech-navy/30" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0" ref={(el) => categoriesRef.current[0] = el}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">My Skillset</h2>
          <p className="text-muted-foreground text-lg">
            A unique combination of skills from three different domains that complement and enhance each other.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Development Skills */}
          <div 
            className="card p-8 border-tech-blue/30 opacity-0" 
            ref={(el) => categoriesRef.current[1] = el}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-tech-blue/10 flex items-center justify-center mr-4">
                {getCategoryIcon('web')}
              </div>
              <h3 className="text-2xl font-heading font-semibold">Web Development</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              {webSkills.map(skill => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-tech-blue rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-tech-blue/5 rounded-lg p-4 text-sm">
              <p className="mb-2 font-medium">How basketball enhances my coding:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Team coordination translates to collaborative development</li>
                <li>Quick decision-making under pressure</li>
                <li>Adaptability to changing requirements</li>
              </ul>
            </div>
          </div>
          
          {/* Machine Learning Skills */}
          <div 
            className="card p-8 border-ml-purple/30 opacity-0" 
            ref={(el) => categoriesRef.current[2] = el}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-ml-purple/10 flex items-center justify-center mr-4">
                {getCategoryIcon('ml')}
              </div>
              <h3 className="text-2xl font-heading font-semibold">Machine Learning</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              {mlSkills.map(skill => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-ml-purple rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-ml-purple/5 rounded-lg p-4 text-sm">
              <p className="mb-2 font-medium">Research areas of interest:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Sports performance prediction models</li>
                <li>Computer vision for movement analysis</li>
                <li>Time series forecasting for athletic improvement</li>
              </ul>
            </div>
          </div>
          
          {/* Basketball Skills */}
          <div 
            className="card p-8 border-court-orange/30 opacity-0" 
            ref={(el) => categoriesRef.current[3] = el}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-court-orange/10 flex items-center justify-center mr-4">
                {getCategoryIcon('basketball')}
              </div>
              <h3 className="text-2xl font-heading font-semibold">Basketball</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              {basketballSkills.map(skill => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-court-orange rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-court-orange/5 rounded-lg p-4 text-sm">
              <p className="mb-2 font-medium">Transferable skills to tech:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Disciplined practice and continuous improvement</li>
                <li>Spatial awareness and pattern recognition</li>
                <li>Performing under pressure and tight deadlines</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 opacity-0" ref={(el) => categoriesRef.current[4] = el}>
          <Link to="/skills" className="btn btn-secondary inline-flex items-center">
            Explore All Skills <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
