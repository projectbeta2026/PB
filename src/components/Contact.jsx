import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.serviceType || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive'
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address',
        variant: 'destructive'
      });
      setIsSubmitting(false);
      return;
    }

    // Save to localStorage
    try {
      const existingInquiries = JSON.parse(localStorage.getItem('contactInquiries') || '[]');
      const newInquiry = {
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString()
      };
      existingInquiries.push(newInquiry);
      localStorage.setItem('contactInquiries', JSON.stringify(existingInquiries));
      toast({
        title: 'Success!',
        description: "Your inquiry has been submitted successfully. We'll get back to you soon!"
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        serviceType: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit inquiry. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const serviceTypes = ['System Solutions', 'Software Solutions', 'Cloud Services', 'Security Solutions', 'Data Management', 'IT Consulting'];
  return <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Contact us today for a free consultation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-brandYellow/10 rounded-lg flex-shrink-0">
                    <MapPin className="text-brandYellow" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">Masinloc, Zambales</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-brandYellow/10 rounded-lg flex-shrink-0">
                    <Phone className="text-brandYellow" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:09387237176" className="text-gray-600 hover:text-brandYellow transition-colors">
                      09387237176
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-brandYellow/10 rounded-lg flex-shrink-0">
                    <Mail className="text-brandYellow" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:email@projectbeta.net" className="text-gray-600 hover:text-brandYellow transition-colors">
                      email@projectbeta.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-brandYellow/10 rounded-lg flex-shrink-0">
                    <Facebook className="text-brandYellow" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Facebook</h4>
                    <motion.a whileHover={{
                    scale: 1.02
                  }} href="https://www.facebook.com/projectbeta/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brandYellow transition-colors inline-block">
                      fb.com/projectbeta
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-brandYellow/10 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name *
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandYellow focus:border-transparent transition-all text-gray-900 placeholder-gray-400" placeholder="John Doe" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandYellow focus:border-transparent transition-all text-gray-900 placeholder-gray-400" placeholder="john@example.com" required />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-900 mb-2">
                    Service Type *
                  </label>
                  <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandYellow focus:border-transparent transition-all text-gray-900" required>
                    <option value="">Select a service</option>
                    {serviceTypes.map((service, index) => <option key={index} value={service}>
                        {service}
                      </option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandYellow focus:border-transparent transition-all resize-none text-gray-900 placeholder-gray-400" placeholder="Tell us about your project..." required />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-brandYellow text-gray-900 hover:bg-yellow-400 font-semibold py-6 text-lg transition-all duration-300">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2" size={20} />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Contact;