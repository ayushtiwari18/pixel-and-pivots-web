
import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart, 
  FileText, 
  FolderKanban, 
  Users, 
  Activity, 
  Calendar, 
  DollarSign
} from "lucide-react";

const AdminDashboard = () => {
  // Mock data for the dashboard
  const stats = [
    { label: "Total Projects", value: 24, icon: <FolderKanban className="h-5 w-5" />, color: "bg-tech-blue" },
    { label: "Blog Posts", value: 18, icon: <FileText className="h-5 w-5" />, color: "bg-ml-purple" },
    { label: "Total Views", value: "12.4k", icon: <Users className="h-5 w-5" />, color: "bg-court-orange" },
    { label: "Avg. Engagement", value: "32%", icon: <Activity className="h-5 w-5" />, color: "bg-green-500" },
  ];
  
  const recentProjects = [
    { id: 1, title: "Basketball ML Analysis", date: "2023-06-15", status: "Published" },
    { id: 2, title: "Court Vision App", date: "2023-05-22", status: "In Progress" },
    { id: 3, title: "Player Stats Dashboard", date: "2023-04-10", status: "Published" },
  ];
  
  const recentPosts = [
    { id: 1, title: "Combining ML and Sports Analytics", date: "2023-06-20", views: 1240 },
    { id: 2, title: "The Future of Web Development", date: "2023-06-05", views: 986 },
    { id: 3, title: "Basketball Techniques & Training", date: "2023-05-15", views: 1520 },
  ];
  
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-heading font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your content.</p>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="card p-6 border shadow-sm rounded-xl bg-background/50 dark:bg-tech-navy/30 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-full ${stat.color}/20 text-${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div variants={itemVariants}>
          <div className="card p-6 border shadow-md rounded-xl bg-background/50 dark:bg-tech-navy/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-semibold">Recent Projects</h2>
              <button className="text-sm text-primary hover:underline">View All</button>
            </div>
            
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.id} className="flex items-center justify-between p-3 rounded-md hover:bg-secondary/50 transition-colors">
                  <div>
                    <h3 className="font-medium">{project.title}</h3>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === "Published" 
                      ? "bg-green-500/20 text-green-500" 
                      : "bg-yellow-500/20 text-yellow-500"
                  }`}>
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <div className="card p-6 border shadow-md rounded-xl bg-background/50 dark:bg-tech-navy/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-semibold">Recent Blog Posts</h2>
              <button className="text-sm text-primary hover:underline">View All</button>
            </div>
            
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-3 rounded-md hover:bg-secondary/50 transition-colors">
                  <div>
                    <h3 className="font-medium">{post.title}</h3>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-xs">
                    <BarChart className="h-3 w-3 mr-1" />
                    <span>{post.views} views</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
