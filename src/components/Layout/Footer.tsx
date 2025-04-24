import React from 'react';
import { Link } from 'react-router-dom';
import { Basketball as BasketballIcon, Github, Linkedin, Twitter, Mail, Code, Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 dark:bg-tech-navy/60">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <BasketballIcon className="h-8 w-8 text-court-orange" />
                <Code className="h-4 w-4 absolute -top-1 -right-1 text-tech-blue" />
                <Brain className="h-4 w-4 absolute -bottom-1 -right-1 text-ml-purple" />
              </div>
              <span className="font-heading font-bold text-xl">Three Personas</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Combining the worlds of basketball, web development, and machine learning research.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</Link></li>
                <li><Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Domains</h3>
              <ul className="space-y-2">
                <li><Link to="/basketball" className="text-muted-foreground hover:text-court-orange transition-colors">Basketball</Link></li>
                <li><Link to="/development" className="text-muted-foreground hover:text-tech-blue transition-colors">Web Development</Link></li>
                <li><Link to="/ml-research" className="text-muted-foreground hover:text-ml-purple transition-colors">ML Research</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">Subscribe to receive updates on my latest projects and blog posts.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md border border-border focus:outline-none focus:ring-2 focus:ring-primary w-full"
                required
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/80 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Three Personas. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
