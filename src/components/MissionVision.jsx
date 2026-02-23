
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Briefcase } from 'lucide-react';

const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-brandYellow mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 p-8 lg:p-10 transition-all duration-300 flex flex-col items-center text-center h-full group"
          >
            <div className="w-20 h-20 bg-brandYellow/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brandYellow/20 transition-colors duration-300">
              <Target className="text-brandYellow w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brandYellow transition-colors duration-300">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become a leading and trusted IT solutions provider in Region III, empowering schools, businesses, and institutions through innovative, reliable, and scalable technology systems.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 p-8 lg:p-10 transition-all duration-300 flex flex-col items-center text-center h-full group"
          >
            <div className="w-20 h-20 bg-brandYellow/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brandYellow/20 transition-colors duration-300">
              <Briefcase className="text-brandYellow w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brandYellow transition-colors duration-300">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Project BETA IT Solutions delivers secure, efficient, and innovative IT solutions tailored to schools, businesses, and institutions. We are committed to enhancing productivity and operational efficiency through reliable technology services, professional support, and sustainable, cost-effective systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
