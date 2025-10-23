import React from 'react';

const Contact = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'samithadilshan99@gmial.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/samitha-dilshan',
      link: 'https://linkedin.com/in/samitha-dilshan-386592331'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/DilshanMs',
      link: 'https://github.com/DilshanMs'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Get In Touch
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Send me a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Info
            </h2>
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
                >
                  <span className="text-2xl mr-3">{method.icon}</span>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Send Message
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Contact form coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;