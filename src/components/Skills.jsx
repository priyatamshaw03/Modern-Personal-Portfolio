import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: [
        { name: "C", img: assets.C },
        { name: "Java", img: assets.Java },
        { name: "Python", img: assets.Python },
        { name: "JavaScript", img: assets.JavaScript },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "VS Code", img: assets.VSCode },
        { name: "Jupyter", img: assets.Jupyter },
        { name: "Git", img: assets.Git },
        { name: "GitHub", img: assets.GitHub },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "HTML", img: assets.HTML5 },
        { name: "CSS", img: assets.CSS3 },
        { name: "JavaScript", img: assets.JavaScript },
        { name: "React JS", img: assets.React },
        { name: "Tailwind CSS", img: assets.Tailwind },
        { name: "Bootstrap", img: assets.Bootstrap },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node JS", img: assets.NodeJS },
        { name: "Express JS", img: assets.ExpressJS },
        { name: "MongoDB", img: assets.MongoDB },
        { name: "MySQL", img: assets.MySQL },
        { name: "PostgreSQL", img: assets.PostgreSQL },
      ],
    },
  ];

  // Bottom-to-top fade variant with stagger
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="py-16 px-6">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 dark:text-white text-gray-800">
        My <span className="text-primary">Skills!</span>
        <div className="w-28 my-2 h-1 rounded-full bg-gradient-to-r from-primary to-[#DDD9FF] mx-auto"></div>
      </h2>

      <motion.div
        className="flex justify-center"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center max-w-6xl w-full px-4">
          {skillsData.map((category, index) => (
            <HoverCard key={index} category={category} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const HoverCard = ({ category }) => {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  // Fade variant for each card
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
      className="relative w-full h-full rounded-xl p-1 bg-white dark:bg-gray-900 dark:text-white shadow-lg cursor-pointer overflow-hidden"
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
      <div className="relative z-10 bg-white dark:bg-gray-900 p-4 h-full w-full rounded-[10px] flex flex-col items-center text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">
          {category.category}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {category.skills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 hover:text-white transition"
            >
              <img src={skill.img} alt={skill.name} className="w-6 h-6" />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
