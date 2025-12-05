import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import NavBar from '../components/NavBar';
import { X } from 'lucide-react';

// Initialize EmailJS with your public key
const EMAILJS_PUBLIC_KEY = 'v3p0AhFEB40TQL_i9';
const EMAILJS_SERVICE_ID = 'service_yz3cmma';
const EMAILJS_TEMPLATE_ID = 'template_b3318bq';

// Custom Alert Component (self-contained)
const NotificationAlert = ({ notification, onClose }) => (
  <AnimatePresence>
    {notification && (
      <motion.div
        className="fixed top-4 right-4 z-50 max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <div 
          className={`
            rounded-lg border-2 p-4 shadow-lg relative
            ${notification.type === 'default' 
              ? 'bg-emerald-100 border-emerald-500 text-emerald-800' 
              : 'bg-red-100 border-red-500 text-red-800'
            }
          `}
        >
          <button
            onClick={onClose}
            className={`
              absolute right-2 top-2 rounded-full p-1
              transition-colors duration-200
              ${notification.type === 'default' 
                ? 'text-emerald-600 hover:text-emerald-800 hover:bg-emerald-200' 
                : 'text-red-600 hover:text-red-800 hover:bg-red-200'
              }
            `}
            aria-label="Close notification"
          >
            <X size={16} />
          </button>

          <div className="pr-6">
            <div className="font-semibold text-base mb-1">
              {notification.title}
            </div>
            <div className="text-sm opacity-90">
              {notification.message}
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Contact = () => {
  const inputStyles = "w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-black transition-all duration-300 placeholder:text-gray-400";
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

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
        'destructive',
        'Validation Error',
        'Please fill out all fields before submitting.'
      );
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      showNotification(
        'destructive',
        'Validation Error',
        'Please enter a valid email address.'
      );
      return;
    }

    setIsLoading(true);

    // Use sendForm instead of send - works better with free tier
    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log('EmailJS Success:', result.text);
      showNotification(
        'default',
        'Success!',
        'Your message has been sent successfully.'
      );
      formRef.current.reset();
    }, (error) => {
      console.error('EmailJS Error:', error);
      showNotification(
        'destructive',
        'Error',
        `Failed to send message: ${error.text || error.message || 'Unknown error'}`
      );
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="bg-[#f8f8f8]">
      <NavBar />
      
      {/* Custom Notification Alert */}
      <NotificationAlert 
        notification={notification}
        onClose={() => setNotification(null)}
      />

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
          {/* Hidden field for to_name */}
          <input type="hidden" name="to_name" value="Rosmeo Villalobos" />
          
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

export default Contact;