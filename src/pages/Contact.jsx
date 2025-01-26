import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <motion.section
      className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f8f8f8]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-black mb-6"
          whileHover={{ color: '#000000' }}
          whileTap={{ color: '#ffffff' }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          whileHover={{ color: '#000000' }}
          whileTap={{ color: '#ffffff' }}
        >
          We'd love to hear from you! Reach out to us for any inquiries or collaborations.
        </motion.p>
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              whileHover={{ backgroundColor: '#ffffff' }}
              whileFocus={{ backgroundColor: '#ffffff' }}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              whileHover={{ backgroundColor: '#ffffff' }}
              whileFocus={{ backgroundColor: '#ffffff' }}
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              whileHover={{ backgroundColor: '#ffffff' }}
              whileFocus={{ backgroundColor: '#ffffff' }}
            />
          </div>
          <motion.button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900 transition-colors"
            whileHover={{ scale: 1.05, backgroundColor: '#000000' }}
            whileTap={{ scale: 0.95, backgroundColor: '#ffffff', color: '#000000' }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactSection;