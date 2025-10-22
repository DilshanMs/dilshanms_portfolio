import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

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
            image: '/api/placeholder/600/400',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
            category: 'fullstack',
            githubUrl: 'https://github.com/yourusername/ecommerce-app',
            liveUrl: 'https://yourapp.netlify.app',
            featured: true
          },
          {
            id: 2,
            title: 'Task Management App',
            description: 'A productivity application featuring drag-and-drop functionality, real-time updates, and collaborative features for team project management.',
            image: '/api/placeholder/600/400',
            technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
            category: 'frontend',
            githubUrl: 'https://github.com/yourusername/task-manager',
            liveUrl: 'https://yourtaskapp.netlify.app',
            featured: true
          },
          {
            id: 3,
            title: 'Weather Dashboard',
            description: 'Real-time weather application with location-based forecasts, interactive charts, and severe weather alerts using external APIs.',
            image: '/api/placeholder/600/400',
            technologies: ['JavaScript', 'Chart.js', 'Weather API', 'CSS3'],
            category: 'frontend',
            githubUrl: 'https://github.com/yourusername/weather-dashboard',
            liveUrl: 'https://yourweatherapp.netlify.app',
            featured: false
          },
          {
            id: 4,
            title: 'REST API Service',
            description: 'A scalable RESTful API with authentication, rate limiting, and comprehensive documentation for third-party integration.',
            image: '/api/placeholder/600/400',
            technologies: ['Node.js', 'Express', 'JWT', 'MongoDB', 'Swagger'],
            category: 'backend',
            githubUrl: 'https://github.com/yourusername/api-service',
            liveUrl: null,
            featured: false
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
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center">
          Here are some of the projects I've worked on. Each one represents 
          a unique challenge and learning opportunity.
        </p>
      </div>

        {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
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
            </div>

    </div>
    
  );
};

export default Projects;