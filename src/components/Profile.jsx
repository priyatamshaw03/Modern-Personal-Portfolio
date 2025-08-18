import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
    // Education data
  const education = [
    {
      year: "2022 - 2026",
      title: "Budge Budge Institute of Technology",
      desc: "Currently pursuing B.Tech in Computer Science & Engineering (CSE) under Maulana Abul Kalam Azad University of Technology (MAKAUT), expected to complete in 2026.",
    },
    {
      year: "2016 - 2022",
      title: "BBIT Public School",
      desc: "Completed Secondary (10th) and Senior Secondary (12th) Studies from BBIT Public School under Central Board of Secondary Education (CBSE).",
    },
  ];

  // Experience data
  const experiences = [
    {
      year: "2024 - Present",
      title: "Cloud Lead, GDGC BBIT",
      desc: "Leading cloud initiatives and events at GDGC BBIT, helping students explore Google Cloud technologies.",
    },
    {
      year: "2023 - 2025",
      title: "Coders' Club Member, BBIT",
      desc: "Actively contributing to coding activities, competitions, and peer learning sessions at BBIT.",
    },
    {
      year: "2022 - 2023",
      title: "Student Partner, Internshala",
      desc: "Promoted internships, courses, and career growth opportunities among peers at BBIT.",
    },
  ];

  const fadeVariant = () => ({
  hidden: { opacity: 0, y: 100 },   // starts below
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },  // moves to original position
});


  const Timeline = ({ data, title }) => (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
        {title}
      </h3>

      <div className="relative">
        {/* Center line for desktop, left line for mobile */}
        <div className="absolute top-0 bottom-0 w-1 bg-primary left-0 md:left-1/2 md:-translate-x-1/2"></div>

        {data.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeVariant(isLeft ? "left" : "right")}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-4"
            >
              {isLeft ? (
                <>
                  <div className="md:pr-12 ml-6 md:ml-0">
                    <div className="bg-white dark:bg-gray-900 border-2 border-primary shadow-lg rounded-xl p-6">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h4 className="text-lg font-semibold text-primary mt-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </>
              ) : (
                <>
                  <div className="hidden md:block" />
                  <div className="md:pl-12 ml-6 md:ml-0">
                    <div className="bg-white dark:bg-gray-900 border-2 border-primary shadow-lg rounded-xl p-6">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h4 className="text-lg font-semibold text-primary mt-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </>
              )}

              {/* Circle */}
              <span className="pointer-events-none absolute -left-2 md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-primary bg-white dark:bg-gray-900 ring-4 ring-white dark:ring-gray-900 z-10"></span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="profile" className="py-16 px-6">
      <h2 className="text-3xl sm:text-5xl dark:text-white font-bold text-center mb-12 text-gray-800">
        My <span className="text-primary">Profile!</span>
        <div className="w-28 my-2 h-1 rounded-full bg-gradient-to-r from-primary to-[#DDD9FF] mx-auto"></div>
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <Timeline data={education} title="Education" />
        <Timeline data={experiences} title="Experiences" />
      </div>
    </section>
  );
};

export default Profile;
