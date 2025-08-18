import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import { Typewriter } from "react-simple-typewriter";

// Bottom-to-top fade variant
const fadeBottom = (delay = 0) => ({
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 sm:px-12 lg:px-24 xl:px-40 py-20 md:py-32">
      
      {/* Left Content */}
      <motion.div
        className="flex-1 text-left"
        variants={fadeBottom(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="inline-flex items-center gap-2 border border-primary p-2 px-4 rounded-full mb-4">
          <p className="text-xs dark:text-white">Welcome to my portfolio!</p>
        </div>

        <h2 className="text-2xl md:text-4xl font-medium dark:text-white">Hello! My name is</h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[78px] font-semibold max-w-3xl text-primary pb-2">
          Priyatam Shaw
        </h1>

        <h2 className="mt-2">
          <span className="text-2xl sm:text-3xl dark:text-white">And I'm a</span>
          <span className="text-2xl sm:text-3xl text-primary font-semibold">
            {" "}
            <Typewriter
              words={[
                "Software Developer",
                "Full Stack Developer",
                "AI/ML Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <p className="text-sm sm:text-lg text-gray-700 dark:text-white max-w-md mt-4">
          Passionate developer with a knack for creating stunning web applications. My goal is to transform ideas into scalable products that create real impact.
        </p>

        <div className="flex items-center gap-4 mt-6 text-primary">
          <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
            <img src={assets.instagram_icon} alt="" className="w-6 h-6"/>
          </a>
          <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
            <img src={assets.linkedin} alt="" className="w-6 h-6"/>
          </a>
          <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
            <img src={assets.github1} alt="" className="w-6 h-6"/>
          </a>
        </div>

        <div className="flex gap-4 my-6">
          <a href="#contact" className='text-sm flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full cursor-pointer hover:scale-103 transition-all'>
            Contact Me
            <img src={assets.arrow_icon} alt="" width={14} className='transition-transform duration-200 ease-in-out group-hover:translate-x-1 mt-0.5'/>
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 relative flex justify-center"
        variants={fadeBottom(0.3)} // small delay for stagger effect
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 blur-3xl opacity-40 "></div>
        <img
          src={assets.heroimg}
          alt="Hero"
          className="w-full max-w-lg relative"
        />
      </motion.div>

    </div>
  );
};

export default Hero;
