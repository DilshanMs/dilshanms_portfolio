import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import ecommerceImage from '../assets/images/projects/e-commerce.jpg';
import taskManagerImage from '../assets/images/projects/taskma.png';
import weatherImage from '../assets/images/projects/weather.jpg';
import apiServiceImage from '../assets/images/projects/api.jpg';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  // Map images to projects
  const projectImages = {
    1: ecommerceImage,
    2: taskManagerImage,
    3: weatherImage,
    4: apiServiceImage
  };

// Simulate API call to fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const projectsData = [
          {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with user authentication...',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
            category: 'fullstack',
            githubUrl: 'https://github.com/yourusername/ecommerce-app',
            liveUrl: 'https://yourapp.netlify.app',
            featured: true,
            image: projectImages[1]
          },
          {
            id: 2,
            title: 'Task Management App',
            description: 'A productivity application featuring drag-and-drop functionality, real-time updates, and collaborative features for team project management.',
            technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
            category: 'frontend',
            githubUrl: 'https://github.com/yourusername/task-manager',
            liveUrl: 'https://yourtaskapp.netlify.app',
            featured: true,
            image: projectImages[2]
          },
          {
            id: 3,
            title: 'Weather Dashboard',
            description: 'Real-time weather application with location-based forecasts, interactive charts, and severe weather alerts using external APIs.',
            technologies: ['JavaScript', 'Chart.js', 'Weather API', 'CSS3'],
            category: 'frontend',
            githubUrl: 'https://github.com/yourusername/weather-dashboard',
            liveUrl: 'https://yourweatherapp.netlify.app',
            featured: false,
            image: projectImages[3]
          },
          {
            id: 4,
            title: 'REST API Service',
            description: 'A scalable RESTful API with authentication, rate limiting, and comprehensive documentation for third-party integration.',
            technologies: ['Node.js', 'Express', 'JWT', 'MongoDB', 'Swagger'],
            category: 'backend',
            githubUrl: 'https://github.com/yourusername/api-service',
            liveUrl: null,
            featured: false,
            image: projectImages[4]
          }
        ];
        
        setProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);


  
  const categories = ['all', 'frontend', 'backend', 'fullstack'];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);


  if (loading) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center">
            Here are some of the projects I've worked on. Each one represents 
            a unique challenge and learning opportunity.
            </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-700/35 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-200 dark:border-gray-600"
            >

              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-500"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 dark:bg-gray-600 hover:bg-gray-900 text-white text-center py-2 px-4 rounded-lg transition duration-300 font-medium"
                  >
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 dark:bg-green-700 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition duration-300 font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;