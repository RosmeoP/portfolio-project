import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

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
            <h5 className="font-semibold text-base mb-1">
              {notification.title}
            </h5>
            <p className="text-sm opacity-90">
              {notification.message}
            </p>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default NotificationAlert;