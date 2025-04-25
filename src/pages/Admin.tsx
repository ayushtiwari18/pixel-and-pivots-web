
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout/Layout";
import AdminDashboard from "../components/Admin/AdminDashboard";
import AdminProjects from "../components/Admin/AdminProjects";
import AdminBlog from "../components/Admin/AdminBlog";
import AdminSidebar from "../components/Admin/AdminSidebar";

// Mock password for demo purposes - in a real app, this would be handled by proper authentication
const ADMIN_PASSWORD = "password123";

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already authenticated
    const isAuth = localStorage.getItem("admin-authenticated");
    if (isAuth === "true") {
      setAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    // Simulate API call delay
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        setAuthenticated(true);
        localStorage.setItem("admin-authenticated", "true");
        navigate("/admin/dashboard");
      } else {
        setError("Invalid password. Please try again.");
      }
      setIsSubmitting(false);
    }, 1000);
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem("admin-authenticated");
    navigate("/admin");
  };

  if (!authenticated) {
    return (
      <Layout>
        <div className="container-custom py-16 md:py-24 flex justify-center items-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card w-full max-w-md p-8 border shadow-lg rounded-xl"
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl font-heading font-bold mb-2">Admin Login</h1>
              <p className="text-muted-foreground">Enter the admin password to continue</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border bg-background dark:bg-tech-navy/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                {error && (
                  <p className="mt-2 text-sm text-red-500">{error}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !password}
                className={`w-full py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors ${
                  (isSubmitting || !password) ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    <span>Logging in...</span>
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <AdminSidebar onLogout={handleLogout} />
          </div>
          <div className="md:col-span-9">
            <Routes>
              <Route path="/" element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="projects" element={<AdminProjects />} />
              <Route path="blog" element={<AdminBlog />} />
            </Routes>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
