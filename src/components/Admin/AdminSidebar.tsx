
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  Award,
  User,
  Code,
  LogOut
} from "lucide-react";

interface AdminSidebarProps {
  onLogout: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ onLogout }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === `/admin${path}`;
  };

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { path: "/projects", label: "Projects", icon: <FolderKanban className="h-5 w-5" /> },
    { path: "/blog", label: "Blog Posts", icon: <FileText className="h-5 w-5" /> },
    { path: "/certifications", label: "Certifications", icon: <Award className="h-5 w-5" /> },
    { path: "/profile", label: "Profile", icon: <User className="h-5 w-5" /> },
    { path: "/skills", label: "Skills", icon: <Code className="h-5 w-5" /> },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="card p-6 border shadow-md rounded-xl bg-background/50 dark:bg-tech-navy/30 backdrop-blur-sm sticky top-24"
    >
      <div className="text-center mb-6">
        <h2 className="text-xl font-heading font-semibold">Admin Panel</h2>
      </div>
      
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={`/admin${item.path}`}
            className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
              isActive(item.path)
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
        
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-2 rounded-md w-full text-left hover:bg-red-500/10 hover:text-red-500 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </nav>
    </motion.div>
  );
};

export default AdminSidebar;
