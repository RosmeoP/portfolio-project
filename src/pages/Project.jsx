import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4" style={{ backgroundColor: "#f8f8f8" }}>
      <NavBar />
      <h1
  className="text-lg text-gray-300 font-bold pl-5 text-center mb-8 fixed left-4 top-1/2 transform -translate-y-1/2 z-50"
  style={{ writingMode: 'vertical-rl', textOrientation: 'sideways-lr', transform: 'rotate(180deg)' }}>
  Contact
</h1>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium tracking-wider text-black/70 bg-white rounded-full shadow-sm">
            FEATURED WORK
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-5xl font-bold tracking-tight text-black sm:text-6xl md:text-7xl"
        >
          Crafting Digital
          <br />
          Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-8 text-lg text-black/70"
        >
          A collection of carefully designed projects that push the boundaries
          of digital innovation and user experience.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;