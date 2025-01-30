import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import NavBar from '../components/NavBar';
import { Alert, AlertTitle, AlertDescription } from "./Alert.jsx";
import { X } from 'lucide-react';

const ContactForm = () => {
  const inputStyles = "w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-black transition-all duration-300 placeholder:text-gray-400";
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (type, title, message) => {
    setNotification({ type, title, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const name = formData.get('from_name');
    const email = formData.get('from_email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Form validation
    if (!name || !email || !subject || !message) {
      showNotification(
        'error',
        'Validation Error',
        'Please fill out all fields before submitting.'
      );
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      showNotification(
        'error',
        'Validation Error',
        'Please enter a valid email address.'
      );
      return;
    }

    setIsLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Rosmeo Villalobos',
      subject: subject || 'No Subject',
      message: message
    };

    emailjs.send(
      'service_yz3cmma', // Replace with your service ID
      'template_b3318bq', // Replace with your template ID
      templateParams,
      'v3p0AhFEB40TQL_i9' // Replace with your user ID
    )
    .then((result) => {
      showNotification(
        'success',
        'Success!',
        'Your message has been sent successfully.'
      );
      formRef.current.reset();
    }, (error) => {
      showNotification(
        'error',
        'Error',
        'Failed to send message. Please try again later.'
      );
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="bg-[#f8f8f8]">
      <NavBar />
      
      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            className="fixed top-4 right-4 z-50 max-w-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }} // Added exit animation
          >
            <Alert className={`relative ${
              notification.type === 'error' ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
            }`}>
              <button
                onClick={() => setNotification(null)}
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              >
                <X size={16} />
              </button>
              <AlertTitle className={
                notification.type === 'error' ? 'text-red-800' : 'text-green-800'
              }>
                {notification.title}
              </AlertTitle>
              <AlertDescription className={
                notification.type === 'error' ? 'text-red-600' : 'text-green-600'
              }>
                {notification.message}
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="max-w-4xl mx-auto px-6 py-24 mt-20 relative">
        <h1
          className="hidden lg:block text-lg text-gray-300 font-bold pl-5 text-center mb-8 fixed left-4 top-1/2 transform -translate-y-1/2 z-50"
          style={{ writingMode: 'vertical-rl', textOrientation: 'sideways-lr', transform: 'rotate(180deg)' }}
        >
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
          Whether you're here to share ideas, kickstart a creative project, or simply say hello—I'd love to hear from you! Let's collaborate to bring your vision to life or spark a conversation. Drop me a message below, and I'll respond promptly to discuss how we can work together or chat about the latest trends in design and innovation. Your next big idea is just a click away!
        </motion.p>

        <motion.form
          ref={formRef}
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={sendEmail}
        >
          {/* Name Field */}
          <motion.div
            className="relative overflow-hidden"
            whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
          >
            <motion.input
              type="text"
              name="from_name"
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

          {/* Email Field */}
          <motion.div
            className="relative overflow-hidden"
            whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
          >
            <motion.input
              type="email"
              name="from_email"
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

          {/* Subject Field */}
          <motion.div
            className="relative overflow-hidden"
            whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
          >
            <motion.input
              type="text"
              name="subject"
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

          {/* Message Field */}
          <motion.div
            className="relative overflow-hidden"
            whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
          >
            <motion.textarea
              name="message"
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

          {/* Submit Button */}
          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="relative bg-gray-500 text-gray-300 px-6 py-3 flex items-center group hover:bg-gradient-to-r hover:from-white/10 hover:to-gray-100/10 cursor-pointer rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-500"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={isLoading}
            >
              <span className="font-semibold text-md">
                {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
              </span>
              {!isLoading && (
                <motion.span
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.span>
              )}
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"
              />
            </motion.button>
          </div>
        </motion.form>
      </section>
    </div>
  );
};

export default ContactForm;