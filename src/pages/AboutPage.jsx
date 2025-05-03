import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiUsers } from "react-icons/fi";

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
  };

  const hoverVariants = {
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
        whileHover="hover"
        variants={hoverVariants}
      >
        <motion.h2
          className="text-2xl font-semibold text-sky-400 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Project Overview
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-lg font-medium text-sky-400 mb-4">
              Our Mission
            </h3>
            <p className="text-sky-300/80">
              We aim to make text extraction and audio conversion accessible to
              everyone, providing a seamless experience for users to convert
              their documents and images into readable and audible content.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-lg font-medium text-sky-400 mb-4">
              Key Features
            </h3>
            <ul className="space-y-2 text-sky-300/80">
              {[
                "High-accuracy OCR technology",
                "Multiple voice options",
                "User-friendly interface",
                "Responsive design",
              ].map((feature, index) => (
                <motion.li
                  key={feature}
                  className="flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                >
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    className="mr-2"
                  >
                    <FiCheck className="h-5 w-5 text-sky-400" />
                  </motion.div>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </MotionItem>

      {/* Team Section */}
      <MotionItem
        className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-sky-400/20"
        variants={itemVariants}
        whileHover="hover"
        variants={hoverVariants}
      >
        <motion.h2
          className="text-2xl font-semibold text-sky-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-sky-400/20 to-purple-400/20 flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <FiUsers className="w-12 h-12 text-sky-400" />
            </motion.div>
            <h3 className="text-lg font-medium text-sky-400">Abdallah</h3>
            <p className="text-sky-300/80">Project Lead & Developer</p>
          </motion.div>
        </div>
      </MotionItem>

      {/* Technologies Section */}
      <MotionItem
        className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-sky-400/20"
        variants={itemVariants}
        whileHover="hover"
        variants={hoverVariants}
      >
        <motion.h2
          className="text-2xl font-semibold text-sky-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          Technologies Used
        </motion.h2>
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
