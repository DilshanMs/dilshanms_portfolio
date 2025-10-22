import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Node.js', level: 75 },
    { name: 'Git', level: 80 }
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Time Management',
    'Adaptability',
    'Critical Thinking'
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'University Sri Jayewardenepura',
      year: '2023 - 2027',
      description: 'Focus on Web Technologies and Software Engineering'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn more about my journey, skills, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Story & Education */}
          
          <div className="space-y-12">

            {/* My Story */}
            <motion.section
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  I'm a passionate web developer with a strong foundation in modern 
                  web technologies. My journey began during my Higher studies, 
                  where I discovered my love for creating interactive and user-friendly 
                  applications.
                </p>
                <p>
                  I believe in writing clean, maintainable code and constantly learning 
                  new technologies. When I'm not coding, you can find me exploring new 
                  frameworks, contributing to open-source projects, or enjoying outdoor 
                  activities.
                </p>
                <p>
                  My goal is to create digital experiences that are not only functional 
                  but also delightful to use, while continuously growing as a developer 
                  and team member.
                </p>
              </div>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {edu.school}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {edu.year}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;