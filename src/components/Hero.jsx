import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import { Typewriter } from "react-simple-typewriter";

// Container for staggered animation
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

// Individual item animation
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Right-to-left fade variant for image
const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, delay, ease: "easeOut" } 
  },
});

//image pop-up variant
const popUp = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 sm:px-12 lg:px-24 xl:px-40 py-20 md:py-32">
      
      {/* Left Content with staggered animation */}
      <motion.div
        className="flex-1 text-left"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          variants={item} 
          className="inline-flex items-center gap-2 border border-primary p-2 px-4 rounded-full mb-4"
        >
          <p className="text-xs dark:text-white">Welcome to my portfolio!</p>
        </motion.div>

        <motion.h2 
          variants={item} 
          className="text-2xl md:text-4xl font-medium dark:text-white"
        >
          Hello! My name is
        </motion.h2>

        <motion.h1 
          variants={item} 
          className="text-4xl sm:text-5xl md:text-6xl xl:text-[78px] font-semibold max-w-3xl text-primary pb-2"
        >
          Priyatam Shaw
        </motion.h1>

        <motion.h2 variants={item} className="mt-2">
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
        </motion.h2>

        <motion.p 
          variants={item} 
          className="text-sm sm:text-lg text-gray-700 dark:text-white max-w-md mt-4"
        >
          Passionate developer with a knack for creating stunning web
          applications. Aim is to transform ideas into scalable products that
          create real impact.
        </motion.p>

        <motion.div 
          variants={item} 
          className="flex items-center gap-4 mt-6 text-primary"
        >
          <a
            href="https://www.linkedin.com/in/priyatam-shaw-a83457253"
            target="_blank"
            className="hover:-translate-y-1 transition-all duration-300"
          >
            <img src={assets.linkedin} alt="" className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/priyatam_shaw"
            target="_blank"
            className="hover:-translate-y-1 transition-all duration-300"
          >
            <img src={assets.twitter_icon} alt="" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/priyatamshaw03"
            className="hover:-translate-y-1 transition-all duration-300"
          >
            <img src={assets.github1} alt="" className="w-6 h-6" />
          </a>
        </motion.div>

        <motion.div variants={item} className="flex gap-4 my-6">
          <a
            href="#contact"
            className="text-sm flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full cursor-pointer hover:scale-103 transition-all"
          >
            Contact Me
            <img
              src={assets.arrow_icon}
              alt=""
              width={14}
              className="transition-transform duration-200 ease-in-out group-hover:translate-x-1 mt-0.5"
            />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image with fadeRight */}
      <motion.div
  className="flex-1 relative flex justify-center"
  variants={popUp(0.5)} // small delay after text
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-blue-400 via-primary to-purple-500 blur-3xl opacity-40"></div>
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
