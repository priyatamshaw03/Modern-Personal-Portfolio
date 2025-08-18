import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const About = () => {
  const fadeBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="relative text-3xl sm:text-5xl font-bold text-center mb-12 dark:text-white"
          variants={fadeBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          About <span className="text-primary">Me!</span>
          <div className="w-28 my-2 h-1 rounded-full bg-gradient-to-r from-primary to-[#DDD9FF] mx-auto"></div>
        </motion.h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left - Image */}
          <motion.div
            className="md:w-2/5 flex justify-center"
            variants={fadeBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={assets.user}
              alt="user"
              className="h-86 w-86 object-cover rounded-full shadow-[0_0_40px] shadow-primary border border-primary"
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            className="md:w-3/5 text-justify dark:text-white"
            variants={fadeBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }} // slight delay for stagger effect
          >
            <p className="text-lg mb-4">
              I am from Kolkata, West Bengal. Currently, I am pursuing Bachelor
              of Technology (B.Tech) program in Computer Science and Engineering
              (CSE) from Budge Budge Institute of Technology under Maulana Abul Kalam Azad University of Technology (MAKAUT).
            </p>
            <p className="text-lg mb-4">
              Apart from this, I have learned Programming languages like C,
              Python, Java and few database skills like MySQL, DBMS, MongoDB. Currently,
              I am enriching my skills in Data Structure And Algorithms (DSA)
              using Java, Full Stack Development (MERN) and in Data Analytics.
            </p>
            <p className="text-lg mb-6">
              I am always eager to learn new things and apply my knowledge in
              real-world challenges to expand my horizons. I believe in being
              realistic.
            </p>

            {/* Button */}
            <a
              href="/Priyatam-Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full border-2 border-primary shadow-md transition duration-300 hover:bg-transparent hover:text-primary"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
