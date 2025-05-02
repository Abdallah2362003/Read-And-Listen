import React from "react";
import { FiFileText } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ExtractedText = ({ text, isLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-4"
    >
      <div className="flex items-center gap-2 mb-2">
        <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
          <FiFileText className="w-5 h-5 text-sky-400" />
        </motion.div>
        <h2 className="text-lg font-semibold text-sky-400">Extracted Text</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 rounded-lg border border-sky-400/20 p-8"
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center py-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="rounded-full h-6 w-6 border-b-2 border-sky-400"
              />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="ml-3 text-base text-sky-300/80"
              >
                Extracting text...
              </motion.span>
            </motion.div>
          ) : text ? (
            <motion.p
              key="text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-base text-sky-300/80 leading-relaxed whitespace-pre-wrap"
            >
              {text}
            </motion.p>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-6"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiFileText className="w-12 h-12 text-sky-400/70 mx-auto mb-3" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base text-sky-300/80"
              >
                Extracted text will appear here after uploading a file
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ExtractedText;
