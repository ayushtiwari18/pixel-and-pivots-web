
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blog";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";

type BlogCategory = "development" | "machine-learning" | "basketball" | "career";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesCategory = activeCategory === "all" || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "development":
        return "bg-tech-blue text-white";
      case "machine-learning":
        return "bg-ml-purple text-white";
      case "basketball":
        return "bg-court-orange text-white";
      case "career":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">My Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights and experiences on the intersection of basketball, full-stack development, and machine learning.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 rounded-xl border bg-background/50 dark:bg-tech-navy/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {(["all", "development", "machine-learning", "basketball", "career"] as const).map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {category === "all" ? "All Posts" : category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${searchQuery}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredPosts.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="card border backdrop-blur-sm bg-background/50 dark:bg-tech-navy/30 overflow-hidden shadow-md hover:shadow-lg transition-all rounded-xl flex flex-col h-full"
                  >
                    <Link to={`/blog/${post.id}`} className="block h-48 overflow-hidden">
                      {post.coverImage && (
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      )}
                    </Link>
                    <div className="p-6 flex-grow">
                      <div className="flex justify-between items-center mb-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(post.category)}`}>
                          {post.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                        </span>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Link to={`/blog/${post.id}`} className="block group">
                        <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                      </Link>
                      <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    </div>
                    <div className="p-6 pt-0 flex justify-between items-center">
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No posts found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Blog;
