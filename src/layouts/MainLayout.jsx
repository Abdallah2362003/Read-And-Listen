import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { FiMoon, FiSun, FiHelpCircle } from "react-icons/fi";
import { HelpModal } from "../components/HelpModal";
import { motion, AnimatePresence } from "framer-motion";

const MotionContainer = motion.div;
const MotionGrid = motion.div;
const MotionCol = motion.div;
const MotionItem = motion.div;

const MainLayout = ({ children }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <MotionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${
        darkMode
          ? "bg-gradient-to-br from-[#1a1b4b] via-[#162454] to-[#1b1464]"
          : "bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50"
      }`}
    >
      <MotionContainer
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="py-4 px-6"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <MotionCol
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <MotionItem
                className="text-2xl font-bold text-sky-400"
                whileHover={{ scale: 1.02 }}
              >
                Read & Listen
              </MotionItem>
              <MotionItem
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-sky-300/80 mt-1"
              >
                Upload a file, and we'll read it for you! 📚
              </MotionItem>
            </MotionCol>
            <MotionCol
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <MotionItem
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsHelpOpen(true)}
                className="text-sky-400 hover:text-sky-300 cursor-pointer transition-colors flex items-center gap-1 text-sm"
              >
                <MotionItem
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiHelpCircle className="w-4 h-4" />
                </MotionItem>
                How to Use
              </MotionItem>
              <MotionItem
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="text-sky-400 hover:text-sky-300 cursor-pointer transition-colors p-2 rounded-lg  hover:bg-white/5"
              >
                <MotionItem
                  animate={{ rotate: darkMode ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {darkMode ? (
                    <FiSun className="w-5 h-5" />
                  ) : (
                    <FiMoon className="w-5 h-5" />
                  )}
                </MotionItem>
              </MotionItem>
            </MotionCol>
          </div>
        </div>
      </MotionContainer>

      <MotionContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="container mx-auto px-6"
      >
        {children}
      </MotionContainer>

      <AnimatePresence>
        {isHelpOpen && (
          <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
        )}
      </AnimatePresence>
    </MotionContainer>
  );
};

export default MainLayout;
