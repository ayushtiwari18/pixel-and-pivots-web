
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout/Layout";
import { projects } from "../data/projects";
import { ArrowLeft, Github, ExternalLink, Calendar, User } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading from API
    const timer = setTimeout(() => {
      const foundProject = projects.find(p => p.id.toString() === id);
      if (foundProject) {
        setProject(foundProject);
      }
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container-custom py-16 md:py-24 min-h-[60vh] flex items-center justify-center">
          <div className="space-y-4 w-full max-w-4xl">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4 animate-pulse"></div>
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="container-custom py-16 md:py-24 min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/projects"
            className="btn btn-primary inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-tech-blue text-white";
      case "backend":
        return "bg-court-orange text-white";
      case "fullstack":
        return "bg-purple-500 text-white";
      case "ml":
        return "bg-ml-purple text-white";
      case "mobile":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <Layout>
      <div className="container-custom py-16 md:py-24">
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center mb-8 hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">{project.title}</h1>
            <span className={`px-3 py-1 font-medium rounded-full ${getCategoryColor(project.category)}`}>
              {project.category}
            </span>
          </div>

          {project.image && (
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-heading font-semibold mb-4">Overview</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground">{project.description}</p>
                {project.longDescription && (
                  <div className="mt-4 space-y-4">
                    {project.longDescription.split('\n\n').map((paragraph: string, idx: number) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>

              {project.features && (
                <div className="mt-8">
                  <h2 className="text-2xl font-heading font-semibold mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && (
                <div className="mt-8">
                  <h2 className="text-2xl font-heading font-semibold mb-4">Challenges & Solutions</h2>
                  <div className="space-y-6">
                    {project.challenges.map((item: any, idx: number) => (
                      <div key={idx} className="border-l-4 border-primary pl-4">
                        <h3 className="font-bold mb-1">{item.challenge}</h3>
                        <p className="text-muted-foreground">{item.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-1">
              <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-heading font-semibold mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  {project.date && (
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{project.date}</span>
                    </div>
                  )}
                  
                  {project.client && (
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{project.client}</span>
                    </div>
                  )}
                  
                  <div className="pt-4">
                    <h4 className="text-sm font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech: string, index: number) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 text-xs bg-background dark:bg-tech-navy/70 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 flex flex-col gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-md bg-background dark:bg-tech-navy hover:bg-secondary/80 transition-colors"
                      >
                        <Github className="h-4 w-4 mr-2" /> View Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-heading font-semibold mb-6">More Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects
                .filter(p => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    to={`/projects/${relatedProject.id}`}
                    className="card overflow-hidden border shadow-sm hover:shadow-md transition-all rounded-lg"
                  >
                    <div className="h-40 overflow-hidden">
                      {relatedProject.image && (
                        <img
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold">{relatedProject.title}</h3>
                      <span className={`mt-2 inline-block px-2 py-0.5 text-xs rounded ${getCategoryColor(relatedProject.category)}`}>
                        {relatedProject.category}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
