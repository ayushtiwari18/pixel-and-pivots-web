
import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import HeroSection from '../components/HomePage/HeroSection';
import AboutSection from '../components/HomePage/AboutSection';
import SkillsSection from '../components/HomePage/SkillsSection';
import ProjectsSection from '../components/HomePage/ProjectsSection';
import BlogSection from '../components/HomePage/BlogSection';
import CTASection from '../components/HomePage/CTASection';

const Index = () => {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
