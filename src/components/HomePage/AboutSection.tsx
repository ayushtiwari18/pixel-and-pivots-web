import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Volleyball as BasketballIcon, Code, Brain, ArrowRight } from 'lucide-react';
import { timelineEvents } from '../../data/timeline';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    timelineItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'basketball':
        return <BasketballIcon className="h-6 w-6 text-court-orange" />;
      case 'web-dev':
        return <Code className="h-6 w-6 text-tech-blue" />;
      case 'machine-learning':
        return <Brain className="h-6 w-6 text-ml-purple" />;
      default:
        return null;
    }
  };

  const getCategoryClass = (category: string) => {
    switch (category) {
      case 'basketball':
        return 'border-court-orange bg-court-orange/10';
      case 'web-dev':
        return 'border-tech-blue bg-tech-blue/10';
      case 'machine-learning':
        return 'border-ml-purple bg-ml-purple/10';
      default:
        return 'border-muted';
    }
  };

  return (
    <section className="section bg-background dark:bg-tech-navy/50" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0" ref={(el) => (timelineItemsRef.current[0] = el)}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">My Journey</h2>
          <p className="text-muted-foreground text-lg">
            From the basketball court to the world of code and AI research, my path has been defined by continuous learning and connecting seemingly disparate domains.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-muted"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.slice(0, 6).map((event, index) => (
              <div
                key={event.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } opacity-0`}
                style={{ transitionDelay: `${index * 100}ms` }}
                ref={(el) => (timelineItemsRef.current[index + 1] = el)}
              >
                <div className="flex-1 md:px-8">
                  <div className={`card border ${getCategoryClass(event.category)} p-6 rounded-lg shadow-md`}>
                    <div className="flex items-center mb-2">
                      {getCategoryIcon(event.category)}
                      <span className="ml-2 font-medium text-sm">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>

                <div className="md:w-8 flex items-center justify-center my-4 md:my-0">
                  <div className={`w-8 h-8 rounded-full border-2 ${getCategoryClass(
                    event.category
                  )} z-10 flex items-center justify-center`}>
                    <div className="w-3 h-3 rounded-full bg-background dark:bg-tech-navy"></div>
                  </div>
                </div>

                {/* Empty div for layout on alternate sides */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 opacity-0" ref={(el) => (timelineItemsRef.current[7] = el)}>
            <Link to="/about" className="btn btn-secondary inline-flex items-center">
              View Full Timeline <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
