import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Basketball as BasketballIcon, Code, Brain, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blog';

const BlogSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blogItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    blogItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'basketball':
        return <BasketballIcon className="h-5 w-5 text-court-orange" />;
      case 'web-dev':
        return <Code className="h-5 w-5 text-tech-blue" />;
      case 'machine-learning':
        return <Brain className="h-5 w-5 text-ml-purple" />;
      default:
        return null;
    }
  };

  const getCategoryClass = (category: string) => {
    switch (category) {
      case 'basketball':
        return 'text-court-orange';
      case 'web-dev':
        return 'text-tech-blue';
      case 'machine-learning':
        return 'text-ml-purple';
      default:
        return '';
    }
  };

  return (
    <section className="section bg-secondary/50 dark:bg-tech-navy/30" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0" ref={(el) => (blogItemsRef.current[0] = el)}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">From My Blog</h2>
          <p className="text-muted-foreground text-lg">
            Thoughts, insights, and experiences from the intersection of sports, technology, and research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <div
              key={post.id}
              className="card border hover:shadow-lg transition-all duration-300 overflow-hidden group opacity-0"
              ref={(el) => (blogItemsRef.current[index + 1] = el)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {getCategoryIcon(post.category)}
                    <span className={`ml-1 text-sm font-medium ${getCategoryClass(post.category)}`}>
                      {post.category === 'web-dev' 
                        ? 'Web Development' 
                        : post.category === 'machine-learning' 
                          ? 'Machine Learning' 
                          : 'Basketball'}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-sm font-medium text-primary hover:underline flex items-center"
                >
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 opacity-0" ref={(el) => (blogItemsRef.current[4] = el)}>
          <Link to="/blog" className="btn btn-secondary inline-flex items-center">
            Read All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
