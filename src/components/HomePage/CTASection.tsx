
import React from 'react';
import { Link } from 'react-router-dom';
import { Basketball, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 basketball-pattern relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="bg-white/90 dark:bg-tech-navy/90 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Let's Build. Let's Ball.</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Whether you're looking for a web developer, a machine learning consultant, or a basketball teammate, I'm ready to collaborate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="btn btn-primary flex items-center justify-center"
                >
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/projects" 
                  className="btn btn-secondary flex items-center justify-center"
                >
                  View My Work
                </Link>
              </div>
            </div>
            
            <div className="relative h-64 flex items-center justify-center">
              <div className="absolute w-48 h-48 rounded-full bg-court-orange/20 animate-pulse"></div>
              <div className="relative">
                <Basketball className="h-24 w-24 text-court-orange animate-bounce" />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black/10 dark:bg-white/10 rounded-full filter blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-court-orange/40 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-court-orange/30 rounded-full filter blur-2xl translate-y-1/2 -translate-x-1/4"></div>
    </section>
  );
};

export default CTASection;
