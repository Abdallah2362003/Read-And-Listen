import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import {
  FiMoon,
  FiSun,
  FiHelpCircle,
  FiHome,
  FiInfo,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { HelpModal } from "../components/HelpModal";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const MotionContainer = motion.div;
const MotionCol = motion.div;
const MotionItem = motion.div;

const MainLayout = ({ children }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      {/* Glassy Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="sticky mb-10 top-0 z-50 w-full bg-white/20 dark:bg-[#1a1b4b]/60 backdrop-blur-md shadow-lg shadow-sky-900/10 border-b border-sky-400/10"
      >
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-2 md:mb-0">
            <motion.div
              className="w-11 h-11 rounded-full bg-gradient-to-br from-sky-400 to-purple-500 flex items-center justify-center shadow-md"
              whileHover={{ rotate: 360, scale: 1.08 }}
              transition={{ duration: 0.7 }}
            >
              <FiHome className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent tracking-tight drop-shadow">
              Read & Listen
            </span>
          </Link>

          {/* Burger Menu Icon for mobile */}
          <button
            className="md:hidden absolute right-4 top-4 z-50 p-2 rounded-lg hover:bg-sky-400/10 transition"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6 text-sky-400" />
            ) : (
              <FiMenu className="w-6 h-6 text-sky-400" />
            )}
          </button>

          {/* Navigation Centered (desktop) */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-6">
            <Link to="/about">
              <MotionItem
                whileHover={{ scale: 1.12, color: "#38bdf8" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sky-400 hover:text-sky-300 font-semibold transition-all duration-200 hover:bg-sky-400/10"
              >
                <FiInfo className="w-4 h-4" /> About
              </MotionItem>
            </Link>
            <MotionItem
              whileHover={{ scale: 1.12, color: "#38bdf8" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsHelpOpen(true)}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sky-400 hover:text-sky-300 font-semibold transition-all duration-200 hover:bg-sky-400/10 cursor-pointer"
            >
              <FiHelpCircle className="w-4 h-4" /> How to Use
            </MotionItem>
          </nav>

          {/* Dark mode toggle */}
          <MotionCol className="flex items-center">
            <MotionItem
              whileHover={{ scale: 1.15, rotate: 20 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="bg-gradient-to-br from-sky-400 to-purple-400 p-2 rounded-full shadow-md cursor-pointer transition-all duration-200 border-2 border-white/20 hover:border-sky-400"
            >
              <motion.div
                animate={{ rotate: darkMode ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {darkMode ? (
                  <FiSun className="w-5 h-5 text-white" />
                ) : (
                  <FiMoon className="w-5 h-5 text-white" />
                )}
              </motion.div>
            </MotionItem>
          </MotionCol>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 bg-black/60 z-40 flex flex-col"
                onClick={() => setMobileMenuOpen(false)}
              >
                <motion.nav
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white dark:bg-[#1a1b4b] rounded-b-2xl shadow-xl mx-4 mt-20 p-6 flex flex-col items-center gap-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                    <MotionItem
                      whileHover={{ scale: 1.08, color: "#38bdf8" }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 text-sky-500 dark:text-sky-300 text-lg font-semibold"
                    >
                      <FiInfo className="w-5 h-5" /> About
                    </MotionItem>
                  </Link>
                  <MotionItem
                    whileHover={{ scale: 1.08, color: "#38bdf8" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setIsHelpOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 text-sky-500 dark:text-sky-300 text-lg font-semibold cursor-pointer"
                  >
                    <FiHelpCircle className="w-5 h-5" /> How to Use
                  </MotionItem>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Main Content */}
      <MotionContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="container mx-auto px-4"
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
