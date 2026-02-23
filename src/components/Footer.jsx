
import React from 'react';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'System Solutions',
    'Software Solutions',
    'IT Consulting',
    'Cloud Services',
    'Security Solutions'
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold text-gray-900 block mb-4">
              projectbeta <span className="text-brandYellow">IT Solutions</span>
            </span>
            <p className="text-gray-600 mb-4">
              Delivering innovative IT solutions to help businesses thrive in the digital age.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-lg font-semibold text-gray-900 block mb-4">Our Services</span>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-600 hover:text-brandYellow transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-lg font-semibold text-gray-900 block mb-4">Contact Us</span>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-brandYellow mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">Masinloc, Zambales</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-brandYellow flex-shrink-0" size={20} />
                <a href="tel:09387237176" className="text-gray-600 hover:text-brandYellow transition-colors">
                  09387237176
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-brandYellow flex-shrink-0" size={20} />
                <a href="mailto:email@projectbeta.net" className="text-gray-600 hover:text-brandYellow transition-colors">
                  email@projectbeta.net
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Facebook className="text-brandYellow flex-shrink-0" size={20} />
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  href="https://www.facebook.com/projectbeta/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-brandYellow transition-colors"
                >
                  @projectbeta
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            &copy; {currentYear} projectbeta IT Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
