import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Hi, I'm{' '}
                <span className="text-blue-600 dark:text-blue-400">Samitha</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              >
                Full Stack Developer & Problem Solver
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-2xl"
              >
                I create amazing web applications using modern technologies. 
                Passionate about clean code, user experience, and turning complex 
                problems into simple, beautiful solutions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center"
                >
                  View My Work
                </Link>
                <Link
                  to="/notfound"
                  className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-3 px-8 rounded-lg transition duration-300 text-center"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Image/Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white text-lg font-semibold text-center px-4">
                  Your Professional Photo
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies I Use
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Modern tools for modern solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'JavaScript', 'Tailwind CSS', 'Node.js'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 1, duration: 0.5 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition duration-300"
              >
                <div className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;