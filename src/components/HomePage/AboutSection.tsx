import React from 'react';
import { Link } from 'react-router-dom';
import { Volleyball as BasketballIcon, Code, Brain, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { timelineEvents } from '../../data/timeline';

const AboutSection = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  return (
    <section className="section bg-background/50 backdrop-blur-sm dark:bg-tech-navy/50">
      <div className="container-custom py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">My Journey</h2>
            <p className="text-muted-foreground text-lg">
              From the basketball court to the world of code and AI research, my path has been defined by continuous learning and connecting seemingly disparate domains.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-court-orange via-tech-blue to-ml-purple"></div>

            <motion.div 
              variants={containerVariants}
              className="space-y-12"
            >
              {timelineEvents.slice(0, 6).map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
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

            <motion.div
              variants={itemVariants} 
              className="text-center mt-16"
            >
              <Link 
                to="/about" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 
                  text-primary transition-colors duration-300"
              >
                View Full Timeline <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
