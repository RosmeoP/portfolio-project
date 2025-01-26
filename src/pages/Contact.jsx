import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import ContactFooter from '../components/ContactFooter';

const ContactForm = () => {
  const inputStyles = "w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-black transition-all duration-300 placeholder:text-gray-400";

  return (
    <div className="bg-[#f8f8f8]">
      <NavBar />
      <section className="max-w-4xl mx-auto px-6 py-24 mt-20 relative">
        <h1
  className="text-lg text-gray-300 font-bold pl-5 text-center mb-8 fixed left-4 top-1/2 transform -translate-y-1/2 z-50"
  style={{ writingMode: 'vertical-rl', textOrientation: 'sideways-lr', transform: 'rotate(180deg)' }}>
  Contact
</h1>

        <motion.h1
          className="text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Reach Out
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 mb-16 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you’re here to share ideas, kickstart a creative project, or simply say hello—I’d love to hear from you! Let’s collaborate to bring your vision to life or spark a conversation. Drop me a message below, and I’ll respond promptly to discuss how we can work together or chat about the latest trends in design and innovation. Your next big idea is just a click away!
        </motion.p>

        <motion.form
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="relative overflow-hidden"
            whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
          >
            <motion.input
              type="text"
              placeholder="Your Name"
              className={inputStyles}
              whileFocus={{ backgroundColor: 'rgba(0,0,0,0.03)' }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 w-0 bg-black"
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="relative overflow-hidden"
            whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
          >
            <motion.input
              type="email"
              placeholder="Your email"
              className={inputStyles}
              whileFocus={{ backgroundColor: 'rgba(0,0,0,0.03)' }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 w-0 bg-black"
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="relative overflow-hidden"
            whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
          >
            <motion.input
              type="text"
              placeholder="Subject"
              className={inputStyles}
              whileFocus={{ backgroundColor: 'rgba(0,0,0,0.03)' }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 w-0 bg-black"
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="relative overflow-hidden"
            whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
          >
            <motion.textarea
              placeholder="Message"
              rows="4"
              className={`${inputStyles} resize-none`}
              whileFocus={{ backgroundColor: 'rgba(0,0,0,0.03)' }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 w-0 bg-black"
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.a
  href="mailto:rosmeo43@gmail.com"
  className="relative bg-gray-500 text-gray-300 px-6 py-3 flex items-center group hover:bg-gradient-to-r hover:from-white/10 hover:to-gray-100/10 cursor-pointer rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-500"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
>
  <span className="font-semibold text-md">SEND MESSAGE</span>

  <motion.span
    className="ml-2"
    initial={{ x: 0 }}
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    →
  </motion.span>

  <motion.div
    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"
  />
</motion.a>
        </motion.form>
      </section>
    </div>
  );
};

export default ContactForm;