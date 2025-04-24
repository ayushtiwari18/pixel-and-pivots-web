import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Basketball } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Basketball className="h-24 w-24 text-court-orange animate-bounce" />
              <div className="absolute w-24 h-1 bg-black/10 dark:bg-white/10 rounded-full bottom-0 filter blur-sm"></div>
            </div>
          </div>
          <h1 className="text-6xl font-heading font-bold mb-4">404</h1>
          <h2 className="text-xl mb-6">Oops! This page is out of bounds</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back in the game.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
