
import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { Edit, Trash2, Plus, X } from "lucide-react";

const AdminProjects = () => {
  const [projectsList, setProjectsList] = useState(projects);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<number | null>(null);
  
  const handleDeleteClick = (id: number) => {
    setProjectToDelete(id);
    setIsDeleteModalOpen(true);
  };
  
  const confirmDelete = () => {
    if (projectToDelete !== null) {
      setProjectsList(projectsList.filter(project => project.id !== projectToDelete));
      setIsDeleteModalOpen(false);
      setProjectToDelete(null);
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-heading font-bold">Manage Projects</h1>
        <button className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
          <Plus className="h-4 w-4 mr-2" /> Add New Project
        </button>
      </div>
      
      <div className="card p-6 border shadow-md rounded-xl bg-background/50 dark:bg-tech-navy/30 backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Project</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-right py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projectsList.map((project) => (
                <tr key={project.id} className="border-b hover:bg-secondary/20 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      {project.image && (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-10 h-10 rounded object-cover mr-3"
                        />
                      )}
                      <span className="font-medium">{project.title}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 capitalize">{project.category}</td>
                  <td className="py-3 px-4">{project.date || "N/A"}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-500">
                      Published
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 rounded-md hover:bg-secondary transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        className="p-2 rounded-md hover:bg-red-500/10 hover:text-red-500 transition-colors"
                        onClick={() => handleDeleteClick(project.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="card p-6 border shadow-xl rounded-xl bg-background dark:bg-tech-navy max-w-md w-full mx-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-heading font-semibold">Confirm Delete</h2>
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="p-1 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mb-6">
              Are you sure you want to delete this project? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default AdminProjects;
