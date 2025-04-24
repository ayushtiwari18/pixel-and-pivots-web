
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    projectsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const featuredProjects = projects.filter(project => project.featured);

  const getCategoryClass = (category: string) => {
    switch (category) {
      case 'web':
        return 'border-tech-blue bg-tech-blue/10 text-tech-blue';
      case 'ml':
        return 'border-ml-purple bg-ml-purple/10 text-ml-purple';
      case 'hybrid':
        return 'border-court-orange bg-court-orange/10 text-court-orange';
      default:
        return 'border-muted bg-muted/10';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'web':
        return 'Web Development';
      case 'ml':
        return 'Machine Learning';
      case 'hybrid':
        return 'Hybrid';
      default:
        return category;
    }
  };

  return (
    <section className="section bg-background dark:bg-tech-navy/50" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0" ref={(el) => (projectsRef.current[0] = el)}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Projects that blend my passion for basketball, web development, and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="card border hover:shadow-lg transition-all duration-300 overflow-hidden group opacity-0"
              ref={(el) => (projectsRef.current[index + 1] = el)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-heading font-semibold">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${getCategoryClass(project.category)}`}>
                    {getCategoryName(project.category)}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded dark:bg-white/10">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs bg-secondary px-2 py-1 rounded dark:bg-white/10">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <Link to={`/projects/${project.id}`} className="text-sm font-medium text-primary hover:underline flex items-center">
                    View Details <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-secondary transition-colors"
                        aria-label="View source code on GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-secondary transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 opacity-0" ref={(el) => (projectsRef.current[4] = el)}>
          <Link to="/projects" className="btn btn-secondary inline-flex items-center">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
