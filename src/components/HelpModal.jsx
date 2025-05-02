import React from "react";
import {
  FiX,
  FiHelpCircle,
  FiUpload,
  FiVolume2,
  FiPlayCircle,
  FiSettings,
} from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export const HelpModal = ({ isOpen, onClose }) => {
  const instructions = [
    {
      icon: <FiUpload className="w-6 h-6 text-sky-500 dark:text-sky-400" />,
      title: "Upload File",
      description:
        "Upload any image or document containing text. Supported formats include: JPEG, PNG, PDF, DOC, DOCX, and TXT files.",
    },
    {
      icon: <FiHelpCircle className="w-6 h-6 text-sky-500 dark:text-sky-400" />,
      title: "Text Extraction",
      description:
        "The system will automatically extract text from your uploaded file. Wait a moment while the processing completes.",
    },
    {
      icon: <FiVolume2 className="w-6 h-6 text-sky-500 dark:text-sky-400" />,
      title: "Voice Selection",
      description:
        "Choose from different voice types (Male, Female, or Child) to read your text. Select the one that suits your preference.",
    },
    {
      icon: <FiSettings className="w-6 h-6 text-sky-500 dark:text-sky-400" />,
      title: "Adjust Settings",
      description:
        "Customize the reading speed and voice pitch to your liking. Use the sliders to find the perfect combination.",
    },
    {
      icon: <FiPlayCircle className="w-6 h-6 text-sky-500 dark:text-sky-400" />,
      title: "Playback Controls",
      description:
        "Use the play, pause, and stop buttons to control the text reading. You can pause at any time and resume from where you left off.",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/50 dark:bg-[#1a1b4b]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                duration: 0.5,
              },
            }}
            exit={{
              scale: 0.9,
              y: 20,
              transition: {
                type: "spring",
                duration: 0.3,
              },
            }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gradient-to-br dark:from-[#1a1b4b] dark:via-[#162454] dark:to-[#1b1464] rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden border border-sky-200 dark:border-sky-400/20"
          >
            <motion.div
              className="bg-sky-50 dark:bg-white/5 p-4 flex justify-between items-center border-b border-sky-200 dark:border-sky-400/20"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
            >
              <motion.h2
                className="text-xl font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiHelpCircle className="w-6 h-6" />
                </motion.div>
                How to Use
              </motion.h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-sky-500/80 dark:text-sky-400/80 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <FiX className="w-6 h-6" />
              </motion.button>
            </motion.div>

            <motion.div
              className="p-6 overflow-y-auto max-h-[calc(80vh-4rem)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div className="space-y-8">
                {instructions.map((instruction, index) => (
                  <motion.div
                    key={instruction.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex gap-4 items-start group"
                  >
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-50 dark:bg-white/5 border border-sky-200 dark:border-sky-400/20
                               flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {instruction.icon}
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3
                        className="text-lg font-semibold text-sky-600 dark:text-sky-400 mb-2 
                                 group-hover:text-sky-500 dark:group-hover:text-sky-300 transition-colors"
                      >
                        {index + 1}. {instruction.title}
                      </motion.h3>
                      <motion.p className="text-slate-600 dark:text-sky-300/80 leading-relaxed">
                        {instruction.description}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className="mt-8 bg-sky-50 dark:bg-white/5 border border-sky-200 dark:border-sky-400/20 rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.h3
                    className="text-lg font-semibold text-sky-600 dark:text-sky-400 mb-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    Pro Tips 💡
                  </motion.h3>
                  <ul className="space-y-2 text-slate-600 dark:text-sky-300/80">
                    {[
                      "For best results, ensure your images are clear and well-lit",
                      "You can adjust voice settings while the text is being read",
                      "Use keyboard shortcuts: Space for Play/Pause, Esc for Stop",
                    ].map((tip, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2"
                      >
                        <motion.span
                          className="w-1.5 h-1.5 bg-sky-500 dark:bg-sky-400 rounded-full"
                          whileHover={{ scale: 1.5 }}
                        />
                        {tip}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="border-t border-sky-200 dark:border-sky-400/20 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="w-full py-2 px-4 bg-sky-500 hover:bg-sky-600 dark:bg-sky-400 dark:hover:bg-sky-300
                         text-white rounded-lg transition-all duration-300 font-medium"
              >
                Got it!
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
