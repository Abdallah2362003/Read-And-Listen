import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome } from "react-icons/fi";
import EhkiLogo from "../assets/EHKI YA SHAHRAZAD.png";

const SplashScreen = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative w-full max-w-2xl mx-4 bg-gradient-to-br from-sky-900 via-purple-900 to-sky-700 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col items-center justify-center gap-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-sky-400 to-purple-500 flex items-center justify-center shadow-2xl"
            >
              <img
                src={EhkiLogo}
                alt="EHKI YA SHAHRAZAD"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                EHKI YA SHAHRAZAD{" "}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-sky-100/90 text-center max-w-xl">
              Your smart OCR & Text-to-Speech assistant. Upload, extract, and
              listen to your documents with ease!
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              onClick={onClose}
              className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold text-lg shadow-lg hover:from-sky-500 hover:to-purple-600 transition-all duration-200"
            >
              Start
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
