
import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code, ClipboardList, Shield, Database, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Server,
      title: 'System Solutions',
      description: 'Comprehensive IT infrastructure design, implementation, and management to keep your business running smoothly.',
      features: ['Network Setup', 'Server Management', 'Hardware Integration']
    },
    {
      icon: Code,
      title: 'Software Solutions',
      description: 'Custom software development and application solutions tailored to your specific business requirements.',
      features: ['Web Development', 'Mobile Apps', 'Custom Software']
    },
    {
      icon: ClipboardList,
      title: 'IT Consulting',
      description: 'Strategic IT planning, technology assessment, system optimization, and digital transformation consulting to align your technology infrastructure with business goals.',
      features: ['Strategy Planning', 'Technology Audit', 'Digital Transformation']
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Advanced cybersecurity measures to protect your business data and digital assets from threats.',
      features: ['Threat Detection', 'Data Protection', 'Security Audits']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Efficient data storage, backup, and recovery solutions to ensure business continuity.',
      features: ['Data Backup', 'Disaster Recovery', 'Data Analytics']
    },
    {
      icon: Cpu,
      title: 'Technical Support',
      description: 'Expert technical assistance and maintenance services to ensure your systems operate at peak performance.',
      features: ['24/7 Monitoring', 'Issue Resolution', 'Software Updates']
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to drive your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-brandYellow transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-brandYellow/10 rounded-lg mb-4 group-hover:bg-brandYellow/20 transition-colors">
                  <Icon className="text-brandYellow" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-brandYellow transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-brandYellow rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
