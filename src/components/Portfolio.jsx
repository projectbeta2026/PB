
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1607615896122-6c919f897e55',
      title: 'Enterprise Resource Planning System',
      description: 'Comprehensive ERP solution for a manufacturing company, streamlining operations and improving efficiency by 40%.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      category: 'Software Solutions'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1507146815454-9faa99d579aa',
      title: 'Cloud Infrastructure Migration',
      description: 'Successfully migrated legacy infrastructure to cloud-based solution, reducing operational costs by 35%.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      category: 'Cloud Services'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      title: 'Healthcare Management Platform',
      description: 'Developed a comprehensive patient management system with appointment scheduling and electronic health records.',
      technologies: ['Vue.js', 'Python', 'MySQL', 'REST API'],
      category: 'Software Solutions'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      title: 'Data Analytics Dashboard',
      description: 'Real-time business intelligence dashboard providing actionable insights and data visualization.',
      technologies: ['React', 'D3.js', 'MongoDB', 'Express'],
      category: 'Data Management'
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Successful projects that showcase our expertise and commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <ExternalLink className="text-white" size={24} />
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm font-semibold text-brandYellow">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-brandYellow/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
