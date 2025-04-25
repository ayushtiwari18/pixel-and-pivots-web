
import React, { useState } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "../../data/blog";
import { Edit, Trash2, Plus, X, Eye, FileText } from "lucide-react";

const AdminBlog = () => {
  const [postsList, setPostsList] = useState(blogPosts);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<number | null>(null);
  
  const handleDeleteClick = (id: number) => {
    setPostToDelete(id);
    setIsDeleteModalOpen(true);
  };
  
  const confirmDelete = () => {
    if (postToDelete !== null) {
      setPostsList(postsList.filter(post => post.id !== postToDelete));
      setIsDeleteModalOpen(false);
      setPostToDelete(null);
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
        <h1 className="text-3xl font-heading font-bold">Manage Blog Posts</h1>
        <button className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
          <Plus className="h-4 w-4 mr-2" /> Add New Post
        </button>
      </div>
      
      <div className="card p-6 border shadow-md rounded-xl bg-background/50 dark:bg-tech-navy/30 backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Title</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Stats</th>
                <th className="text-right py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {postsList.map((post) => (
                <tr key={post.id} className="border-b hover:bg-secondary/20 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      {post.coverImage && (
                        <img 
                          src={post.coverImage} 
                          alt={post.title} 
                          className="w-10 h-10 rounded object-cover mr-3"
                        />
                      )}
                      <div>
                        <span className="font-medium">{post.title}</span>
                        <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 capitalize">
                    {post.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                  </td>
                  <td className="py-3 px-4">{new Date(post.date).toLocaleDateString()}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm">{Math.floor(Math.random() * 1000) + 100}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm">{post.readingTime} min</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 rounded-md hover:bg-secondary transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        className="p-2 rounded-md hover:bg-red-500/10 hover:text-red-500 transition-colors"
                        onClick={() => handleDeleteClick(post.id)}
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
              Are you sure you want to delete this blog post? This action cannot be undone.
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

export default AdminBlog;
