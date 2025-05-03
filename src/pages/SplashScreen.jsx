import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome } from "react-icons/fi";

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 via-purple-900 to-sky-700">
      {/* Animated Harmonious Waves Background */}
      <div className="fixed bottom-0 left-0 h-72 w-[100vw] pointer-events-none select-none z-0">
        {/* Back wave */}
        <motion.svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-[100vw] h-60"
          initial={{ x: 0 }}
          animate={{ x: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          preserveAspectRatio="none"
        >
          <path
            fill="url(#wave3)"
            fillOpacity="0.35"
            d="M0,288L60,272C120,256,240,224,360,197.3C480,171,600,149,720,154.7C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
          <defs>
            <linearGradient
              id="wave3"
              x1="0"
              y1="0"
              x2="1440"
              y2="320"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#38bdf8" stopOpacity="0.3" />
              <stop offset="1" stopColor="#a855f7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </motion.svg>
        {/* Middle wave */}
        <motion.svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-[100vw] h-64"
          initial={{ x: 0 }}
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          preserveAspectRatio="none"
        >
          <path
            fill="url(#wave1)"
            fillOpacity="0.55"
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
          <defs>
            <linearGradient
              id="wave1"
              x1="0"
              y1="0"
              x2="1440"
              y2="320"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="1" stopColor="#a855f7" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </motion.svg>
        {/* Front wave */}
        <motion.svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-[100vw] h-56"
          initial={{ x: 0 }}
          animate={{ x: [-100, 0, -100] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          preserveAspectRatio="none"
        >
          <path
            fill="url(#wave2)"
            fillOpacity="0.7"
            d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,192C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
          <defs>
            <linearGradient
              id="wave2"
              x1="0"
              y1="0"
              x2="1440"
              y2="320"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#a855f7" stopOpacity="0.7" />
              <stop offset="1" stopColor="#38bdf8" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      {/* Centered Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center gap-8"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-400 to-purple-500 flex items-center justify-center shadow-2xl mb-2"
        >
          <FiHome className="w-12 h-12 text-white" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
            Read & Listen
          </span>
        </h1>
        <p className="text-lg md:text-xl text-sky-100/90 text-center max-w-xl">
          Your smart OCR & Text-to-Speech assistant. Upload, extract, and listen
          to your documents with ease!
        </p>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/home")}
          className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold text-lg shadow-lg hover:from-sky-500 hover:to-purple-600 transition-all duration-200"
        >
          Start
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
