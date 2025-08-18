import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const Contact = () => {
  const fadeBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-16">
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        variants={fadeBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Contact <span className="text-primary">Me!</span>
        <div className="w-28 my-2 h-1 rounded-full bg-gradient-to-r from-primary to-[#DDD9FF] mx-auto"></div>
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6"
        variants={fadeBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Column */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={fadeBottom}
        >
          <h3 className="text-2xl font-semibold mb-4 dark:text-white">
            Let&apos;s Get in Touch
          </h3>
          <img
            src={assets.contact}
            alt="Contact"
            className="mx-auto md:mx-0 h-96 object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Column */}
        <motion.div className="flex-1 w-full" variants={fadeBottom}>
          <h3 className="text-2xl font-semibold mt-8 dark:text-white">
            Message me!
          </h3>
          <form className="flex flex-col items-center text-sm text-slate-800 mt-10 ">
            <div className="max-w-96 w-full px-4 border-1 border-slate-300 rounded-xl p-8 text-gray-500">
              <label htmlFor="name" className="font-medium">Full Name</label>
              <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300  rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="#475569"/>
                </svg>
                <input type="text" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your full name" required />
              </div>

              <label htmlFor="email-address" className="font-medium mt-4">Email Address</label>
              <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300  rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#475569"/>
                </svg>
                <input type="email" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your email address" required />
              </div>

              <label htmlFor="message" className="font-medium mt-4">Message</label>
              <textarea rows="4" className="w-full mt-2 p-2 bg-transparent border border-slate-300  rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all" placeholder="Enter your message..." required></textarea>

              <button type="submit" className="flex items-center justify-center gap-1 mt-5 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white py-2.5 w-full rounded-full transition">
                Submit Form
                <img src={assets.arrow_icon} alt="" className="mt-1"/>
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
