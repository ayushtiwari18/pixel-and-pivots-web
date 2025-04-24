
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';
import { Basketball, Moon, Sun, Menu, X, Code, Brain } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Basketball className="h-8 w-8 text-court-orange animate-spin-slow" />
              <Code className="h-4 w-4 absolute -top-1 -right-1 text-tech-blue" />
              <Brain className="h-4 w-4 absolute -bottom-1 -right-1 text-ml-purple" />
            </div>
            <span className="font-heading font-bold text-xl">Three Personas</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="nav-link font-medium hover:text-primary transition-colors">About</Link>
            <Link to="/skills" className="nav-link font-medium hover:text-primary transition-colors">Skills</Link>
            <Link to="/projects" className="nav-link font-medium hover:text-primary transition-colors">Projects</Link>
            <Link to="/blog" className="nav-link font-medium hover:text-primary transition-colors">Blog</Link>
            <Link to="/contact" className="nav-link font-medium hover:text-primary transition-colors">Contact</Link>
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted mr-2 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 glass-effect animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              <Link to="/" className="py-2 font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="py-2 font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/skills" className="py-2 font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>Skills</Link>
              <Link to="/projects" className="py-2 font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link to="/blog" className="py-2 font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link to="/contact" className="py-2 font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
