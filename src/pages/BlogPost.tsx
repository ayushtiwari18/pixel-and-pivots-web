
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout/Layout";
import { blogPosts } from "../data/blog";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading from API
    const timer = setTimeout(() => {
      const foundPost = blogPosts.find(p => p.id.toString() === id);
      if (foundPost) {
        setPost(foundPost);
      }
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container-custom py-16 md:py-24 min-h-[60vh]">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-1/4 animate-pulse"></div>
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

  if (!post) {
    return (
      <Layout>
        <div className="container-custom py-16 md:py-24 min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/blog"
            className="btn btn-primary inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "web-dev":
        return "bg-tech-blue text-white";
      case "machine-learning":
        return "bg-ml-purple text-white";
      case "basketball":
        return "bg-court-orange text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  // Find related posts from the same category
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <Layout>
      <article className="container-custom py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
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
          >
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readingTime || 5} min read</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author || "Jake Davis"}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(post.category)}`}>
                  {post.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </span>
                {post.tags && post.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 text-sm font-medium rounded-full bg-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {(post.coverImage || post.image) && (
              <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={post.coverImage || post.image}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            <div className="prose dark:prose-invert prose-lg max-w-none mb-16">
              {post.content && post.content.split('\n\n').map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}

              {/* Placeholder for actual content */}
              {!post.content && (
                <>
                  <p>
                    In the world of sports and technology, there's a fascinating intersection where athletics meets algorithms. As someone who's spent years both on the basketball court and behind a computer screen, I've discovered numerous parallels between these seemingly disparate worlds.
                  </p>
                  
                  <h2>The Common Ground</h2>
                  
                  <p>
                    Both basketball and coding require a blend of creativity and discipline. On the court, you follow set plays but must improvise when defenders disrupt your plan. Similarly, in programming, you follow best practices and patterns but often need to find creative solutions to unexpected problems.
                  </p>
                  
                  <p>
                    When I first started learning machine learning algorithms, I realized the mental model was remarkably similar to how I thought about defensive rotations in basketball. Both involve anticipating patterns, making split-second decisions based on incoming data, and adjusting strategies on the fly.
                  </p>
                  
                  <h2>Team Dynamics</h2>
                  
                  <p>
                    Great software, like great basketball, is built by teams that understand their roles and execute them with precision. A basketball team needs playmakers, shooters, defenders, and rebounders. Similarly, successful tech projects need frontend developers, backend specialists, UI/UX designers, and data scientists.
                  </p>
                  
                  <h2>The Practice Mindset</h2>
                  
                  <p>
                    Perhaps the most significant parallel is the dedication to continuous improvement. Basketball players spend countless hours perfecting their shooting form, just as developers refactor code and learn new techniques to enhance their craft.
                  </p>
                  
                  <p>
                    In both fields, there's no substitute for deliberate practice. You can't become a better shooter without taking thousands of shots, and you can't become a better programmer without writing thousands of lines of code.
                  </p>
                  
                  <h2>Conclusion</h2>
                  
                  <p>
                    By embracing the athlete-developer hybrid identity, I've found that skills from each domain enhance the other. The discipline and teamwork from basketball improve my coding projects, while the problem-solving mindset from programming makes me a smarter player on the court.
                  </p>
                  
                  <p>
                    Whether you're shooting hoops or debugging code, the path to mastery involves embracing the process, learning from failures, and celebrating incremental improvements.
                  </p>
                </>
              )}
            </div>

            <footer>
              <div className="flex items-center gap-2 mb-12">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {post.tags && post.tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 text-sm font-medium rounded-full bg-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-2xl font-heading font-semibold mb-6">Related Posts</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.id}`}
                        className="card border shadow-sm hover:shadow-md transition-all rounded-lg overflow-hidden"
                      >
                        <div className="h-40 overflow-hidden">
                          {(relatedPost.coverImage || relatedPost.image) && (
                            <img
                              src={relatedPost.coverImage || relatedPost.image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="p-4">
                          <h4 className="font-heading font-semibold line-clamp-2">{relatedPost.title}</h4>
                          <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
                            <span className={`px-2 py-0.5 rounded-full ${getCategoryColor(relatedPost.category)}`}>
                              {relatedPost.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                            </span>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{relatedPost.readingTime || 5} min</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </footer>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
