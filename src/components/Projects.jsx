import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const Projects = () => {
  const projects = [
    {
      img: assets.greenbasket,
      title: "GreenBasket",
      desc: "A responsive grocery delivery website features real-time cart updates, user authentication, and a seamless checkout process with address and order management.",
      github: "https://github.com/priyatamshaw03/GreenBasket",
      link: "https://greenbasket-grocery.vercel.app",
    },
    {
      img: assets.stayfinity,
      title: "Stayfinity",
      desc: "A modern responsive hotel booking website features - browse hotels, user authentication, admin dashboard and check hotel availability and so on.",
      github: "https://github.com/priyatamshaw03",
      link: "https://stayfinity.vercel.app",
    },
    {
      img: assets.salary,
      title: "Employee Salary Predictor",
      desc: "A machine learning project that predicts employee salaries based on various factors such as experience, education, and Job role.",
      github: "https://github.com/priyatamshaw03/Employee-Salary-Predictor",
      link: "https://priyatamshaw03-employee-salary-predictor-app.streamlit.app",
    },
    {
      img: assets.portfolio,
      title: "Personal Portfolio",
      desc: "A Personal portfolio website is a curated, online space that showcases our skills, projects, and achievements in a professional way.",
      github: "https://github.com/priyatamshaw03/Personal-Portfolio",
      link: "https://priyatamshaw.vercel.app",
    },
    {
      img: assets.todo,
      title: "To-do Lists App",
      desc: "A To-do list is a list of items that need to be completed. It allows users to easily add, edit, and delete tasks with a clean and responsive interface.",
      github: "https://github.com/priyatamshaw03/To-do-lists",
      link: "https://to-do-lists-app-priyatam-shaws-projects.vercel.app",
    },
    {
      img: assets.admission,
      title: "Admission Form",
      desc: "Admission Form is created using Python and MySQL. The Data received from the users are stored in the MySQL database.",
      github: "https://github.com/priyatamshaw03/Addmission-Form",
      link: "#",
    },
  ];

  // Container variant for stagger
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Bottom-to-top fade for each card
  const fadeBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-3xl sm:text-5xl dark:text-white font-bold text-center mb-12 text-gray-800">
        My <span className="text-indigo-600">Projects!</span>
        <div className="w-28 my-2 h-1 rounded-full bg-gradient-to-r from-primary to-[#DDD9FF] mx-auto"></div>
      </h2>

      <motion.div
        className="flex justify-center"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center w-full max-w-6xl px-4">
          {projects.map((project, index) => (
            <HoverCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const HoverCard = ({ project }) => {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  const fadeBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-80 h-96 rounded-xl p-1 bg-white backdrop-blur-md text-gray-800 dark:bg-gray-900 overflow-hidden shadow-lg cursor-pointer"
      variants={fadeBottom}
    >
      {/* Gradient hover effect */}
      {visible && (
        <div
          className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 size-60 absolute z-0 transition-opacity duration-300"
          style={{ top: position.y - 120, left: position.x - 120 }}
        />
      )}

      {/* Card content */}
      <div className="relative bg-white dark:bg-gray-900 p-3 h-full w-full rounded-[10px] flex flex-col items-center text-center">
        <img
          src={project.img}
          alt={project.title}
          className="w-full rounded-lg shadow-md mb-2 object-cover"
        />
        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
          {project.title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-3 px-2 line-clamp-3">
          {project.desc}
        </p>
        <div className="flex space-x-3 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border px-4 py-1.5 rounded-full text-gray-700 dark:text-gray-200 transition"
          >
            GitHub 
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white px-4 py-1.5 rounded-full transition"
          >
            See Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
