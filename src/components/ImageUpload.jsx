import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload, FiFile, FiImage, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ImageUpload = ({ onFileUpload, onFileRemove, isLoading }) => {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFileName(file.name);
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          setPreview(null);
        }
        onFileUpload(file);
      }
    },
    [onFileUpload]
  );

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setPreview(null);
    setFileName(null);
    onFileRemove();
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "text/plain": [".txt"],
    },
    maxFiles: 1,
    disabled: isLoading,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4"
    >
      <div className="flex items-center gap-2 mb-2">
        <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
          <FiUpload className="w-5 h-5 text-sky-400" />
        </motion.div>
        <h2 className="text-lg font-semibold text-sky-400">Upload File</h2>
      </div>
      <motion.div
        {...getRootProps()}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={`border-2 border-dashed rounded-lg p-8 transition-all duration-300 ${
          isDragActive
            ? "border-sky-400 bg-sky-400/10"
            : "border-sky-400/30 hover:border-sky-400/60"
        } ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <input {...getInputProps()} />

        <AnimatePresence mode="wait">
          {preview ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="space-y-4"
            >
              <motion.img
                src={preview}
                alt="Preview"
                className="max-h-48 mx-auto rounded-lg shadow-lg object-contain"
                layoutId="preview"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-sky-300/80 text-center"
              >
                {fileName}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRemoveFile}
                className="flex items-center justify-center gap-1 text-sm text-red-400 hover:text-red-300 transition-colors mx-auto"
              >
                <FiX className="w-4 h-4" />
                Remove File
              </motion.button>
            </motion.div>
          ) : fileName ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="space-y-3"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: "linear" }}
                className="flex items-center justify-center"
              >
                <FiFile className="w-10 h-10 text-sky-400/70" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-sky-300/80 text-center"
              >
                {fileName}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRemoveFile}
                className="flex items-center justify-center gap-1 text-sm text-red-400 hover:text-red-300 transition-colors mx-auto"
              >
                <FiX className="w-4 h-4" />
                Remove File
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiUpload className="w-10 h-10 text-sky-400/70 mx-auto mb-2" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-sky-300/80"
              >
                {isDragActive
                  ? "Drop the file here"
                  : "Drag and drop your file here, or click to select a file"}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xs text-sky-400/60 mt-1"
              >
                Supported formats: Images (JPEG, PNG, GIF), PDF, DOC, DOCX, TXT
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ImageUpload;
