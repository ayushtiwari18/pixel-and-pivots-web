
import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion";
import { Volleyball as BasketballIcon, Code, Brain, ArrowRight } from "lucide-react";
import { timelineEvents } from "../data/timeline";
import { Link } from "react-router-dom";
import { fadeUp, fadeIn, staggerContainer, fadeUpWithDelay, scaleIn } from "@/utils/animations";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "basketball":
        return <BasketballIcon className="h-6 w-6 text-court-orange" />;
      case "web-dev":
        return <Code className="h-6 w-6 text-tech-blue" />;
      case "machine-learning":
        return <Brain className="h-6 w-6 text-ml-purple" />;
      default:
        return null;
    }
  };

  const getCategoryClass = (category: string) => {
    switch (category) {
      case "basketball":
        return "border-court-orange bg-court-orange/10";
      case "web-dev":
        return "border-tech-blue bg-tech-blue/10";
      case "machine-learning":
        return "border-ml-purple bg-ml-purple/10";
      default:
        return "border-muted";
    }
  };

  return (
    <Layout>
      <div className="container-custom py-16 md:py-24">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">My Journey</h1>
          <p className="text-xl text-muted-foreground">
            From the basketball court to coding competitions and AI research labs - 
            a unique path that combines athleticism, technical expertise, and continuous learning.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-court-orange via-tech-blue to-ml-purple"></div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={fadeUpWithDelay(index * 0.2)}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } group`}
              >
                <div className="flex-1 md:px-8">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className={`card border ${getCategoryClass(event.category)} p-6 rounded-lg shadow-md 
                      transition-all duration-300 hover:shadow-lg bg-background/50 backdrop-blur-sm 
                      dark:bg-tech-navy/30`}
                  >
                    <div className="flex items-center mb-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {getCategoryIcon(event.category)}
                      </motion.div>
                      <span className="ml-2 font-medium text-sm">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </motion.div>
                </div>

                <div className="md:w-8 flex items-center justify-center my-4 md:my-0">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className={`w-8 h-8 rounded-full border-2 ${getCategoryClass(
                      event.category
                    )} z-10 flex items-center justify-center bg-background dark:bg-tech-navy`}
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-court-orange via-tech-blue to-ml-purple"></div>
                  </motion.div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Where I'm Headed</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Continuing to push boundaries in basketball, web development, and machine learning research.
            Looking to collaborate with innovative teams and individuals on projects that make a difference.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
};

export default About;
