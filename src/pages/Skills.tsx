
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout/Layout";
import { skills } from "../data/skills";
import { Check } from "lucide-react";

type SkillCategory = "web" | "ml" | "basketball" | "all";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categoryColors: Record<string, string> = {
    web: "from-tech-blue to-tech-blue/70",
    ml: "from-ml-purple to-ml-purple/70",
    basketball: "from-court-orange to-court-orange/70",
    all: "from-primary to-primary/70"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <Layout>
      <div className="container-custom py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">My Skills</h1>
          <p className="text-xl text-muted-foreground">
            A diverse set of skills spanning web development, machine learning, and basketball
            that I've mastered through years of projects and continuous learning.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {(["all", "web", "ml", "basketball"] as const).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? `bg-gradient-to-r ${categoryColors[category]} text-white shadow-md`
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {category === "all" ? "All Skills" : category === "ml" ? "Machine Learning" : category === "web" ? "Web Development" : category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`card p-6 rounded-lg border backdrop-blur-sm shadow-sm hover:shadow-md transition-all
                ${skill.category === "web" ? "border-tech-blue/30 bg-tech-blue/5" : ""}
                ${skill.category === "ml" ? "border-ml-purple/30 bg-ml-purple/5" : ""}
                ${skill.category === "basketball" ? "border-court-orange/30 bg-court-orange/5" : ""}
              `}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-md 
                  ${skill.category === "web" ? "bg-tech-blue/20 text-tech-blue" : ""}
                  ${skill.category === "ml" ? "bg-ml-purple/20 text-ml-purple" : ""}
                  ${skill.category === "basketball" ? "bg-court-orange/20 text-court-orange" : ""}
                `}>
                  {skill.icon ? (
                    <span className="text-2xl">{skill.icon}</span>
                  ) : (
                    <Check className="h-5 w-5" />
                  )}
                </div>
                <h3 className="text-lg font-heading font-semibold">{skill.name}</h3>
              </div>
              {skill.details && (
                <div className="space-y-1">
                  {skill.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`h-1.5 w-1.5 rounded-full
                        ${skill.category === "web" ? "bg-tech-blue" : ""}
                        ${skill.category === "ml" ? "bg-ml-purple" : ""}
                        ${skill.category === "basketball" ? "bg-court-orange" : ""}
                      `}></div>
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              )}
              {skill.level && (
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full
                        ${skill.category === "web" ? "bg-tech-blue" : ""}
                        ${skill.category === "ml" ? "bg-ml-purple" : ""}
                        ${skill.category === "basketball" ? "bg-court-orange" : ""}
                      `}
                    ></motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Skills;
