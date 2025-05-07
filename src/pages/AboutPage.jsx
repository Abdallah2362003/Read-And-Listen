import { motion } from "framer-motion";
import { FiUsers, FiLinkedin, FiTarget, FiCode, FiGlobe } from "react-icons/fi";

import MostafaYasser from "../assets/Mostafa Yasser.jpg";
import MohamedAbdelazem from "../assets/Mohamed Abdelazem.jpeg";
import MohamedAshraf from "../assets/Mohamed Ashraf.jpg";
import AbdalrhmanMaged from "../assets/Abdalrhman Maged.jpeg";

const MotionContainer = motion.div;
const MotionItem = motion.div;

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <MotionContainer
      className="container mx-auto px-6 md:px-8 py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <MotionItem className="text-center mb-16" variants={itemVariants}>
        <motion.h1
          className="text-4xl font-bold text-sky-400 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Our Project
        </motion.h1>
        <motion.p
          className="text-xl text-sky-300/80 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          A powerful OCR and Text-to-Speech application that helps you convert
          images to text and listen to the content.
        </motion.p>
      </MotionItem>

      {/* Project Overview */}
      <MotionItem
        className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-sky-400/20"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FiGlobe className="w-8 h-8 text-sky-400 mr-3" />
          <motion.h2
            className="text-2xl font-semibold text-sky-400 text-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Project Overview
          </motion.h2>
        </motion.div>
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-sky-300/80 space-y-4"
          >
            <p className="leading-relaxed">
              Welcome to the OCR Digital Transformation and Speech Platform, a
              ground breaking initiative from Nile University aimed at
              redefining Arabic language accessibility. Our platform combines
              cutting-edge Optical Character Recognition (OCR) with expressive
              Text-to-Speech (TTS) technology to unlock printed Arabic content
              for everyone, including individuals with visual impairments and
              language learners.
            </p>

            <p className="leading-relaxed">
              Arabic's complex script and rich phonetics have long posed
              challenges for digital processing. We tackle this head-on using
              advanced models like LLaMA 3.2 and Qari 1.0 for accurate text
              extraction, and ElevenLabs' neural TTS for natural, human-like
              speech. Whether it's for education, storytelling, or assistive
              applications, our system ensures a seamless and intuitive
              experience. Transforming static Arabic text into dynamic, spoken
              words.
            </p>

            <div className="bg-sky-400/10 p-6 rounded-lg border border-sky-400/20">
              <div className="flex items-center mb-3">
                <FiTarget className="w-6 h-6 text-sky-400 mr-2" />
                <h3 className="text-lg font-medium text-sky-400">
                  Our Mission
                </h3>
              </div>
              <p className="leading-relaxed">
                Make Arabic content more accessible, inclusive, and interactive,
                one image, one voice at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </MotionItem>

      {/* Team Section */}
      <MotionItem
        className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-sky-400/20"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <FiUsers className="w-8 h-8 text-sky-400 mr-3" />
          <motion.h2
            className="text-2xl font-semibold text-sky-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Our Team
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Mostafa Yasser",
              role: "Big Data Science",
              education: "BSc. Information Technology and Computer Science",
              university: "Nile University",
              image: MostafaYasser,
              linkedin:
                "https://www.linkedin.com/in/moustafa-yasser-2161a3298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              name: "Mohamed Abdelazim",
              role: "Big Data Science",
              education: "BSc. Information Technology and Computer Science",
              university: "Nile University",
              image: MohamedAbdelazem,
              linkedin:
                "https://www.linkedin.com/in/mohamed-abdelazim-440205277/",
            },
            {
              name: "Mohamed Ashraf",
              role: "Big Data Science",
              education: "BSc. Information Technology and Computer Science",
              university: "Nile University",
              image: MohamedAshraf,
              linkedin:
                "https://www.linkedin.com/in/mohamed-ashraf-the-knower/",
            },
            {
              name: "Abdalrhman Maged",
              role: "Big Data Science",
              education: "BSc. Information Technology and Computer Science",
              university: "Nile University",
              image: AbdalrhmanMaged,
              linkedin:
                "https://www.linkedin.com/in/abdelrahman-maged-0911ba277",
            },
          ].map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative bg-gradient-to-br from-sky-400/10 to-purple-400/10 rounded-xl p-4 border border-sky-400/20 hover:border-sky-400/40 transition-all duration-300 h-[550px] flex flex-col items-center justify-between min-w-[280px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center w-full h-full">
                <motion.div
                  className="relative w-full h-[350px] mb-3 rounded-lg overflow-hidden border-2 border-sky-400/20 group-hover:border-sky-400/40 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <div className="flex flex-col items-center flex-grow justify-between w-full px-2">
                  <div className="text-center w-full">
                    <h3 className="text-xl font-semibold text-sky-400 mb-2 group-hover:text-sky-300 transition-colors whitespace-nowrap">
                      {member.name}
                    </h3>

                    <div className="space-y-2">
                      <p className="text-sky-300/90 font-medium text-base">
                        {member.role}
                      </p>
                      <div className="text-sky-300/70 text-sm">
                        <p className="mb-1">{member.education}</p>
                        <p>{member.university}</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-sky-400/20 to-purple-400/20 hover:from-sky-400/30 hover:to-purple-400/30 text-sky-400 hover:text-sky-300 transition-all duration-300 text-sm w-auto justify-center border border-sky-400/20 hover:border-sky-400/40 shadow-lg hover:shadow-sky-400/10 group"
                  >
                    <FiLinkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </MotionItem>

      {/* Technologies Section */}
      <MotionItem
        className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-sky-400/20"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <FiCode className="w-8 h-8 text-sky-400 mr-3" />
          <motion.h2
            className="text-2xl font-semibold text-sky-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            Technologies Used
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "⚛️", name: "React" },
            { icon: "🎨", name: "Tailwind CSS" },
            { icon: "🔍", name: "OCR API" },
            { icon: "🔊", name: "Text-to-Speech" },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              className="text-center p-4 bg-gradient-to-br from-sky-400/10 to-purple-400/10 rounded-lg border border-sky-400/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-3xl mb-2"
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {tech.icon}
              </motion.div>
              <h3 className="font-medium text-sky-400">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </MotionItem>
    </MotionContainer>
  );
};

export default AboutPage;
