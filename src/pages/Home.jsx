import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ExtractedText from "../components/ExtractedText";
import ImageUpload from "../components/ImageUpload";
import VoiceOptions from "../components/VoiceOptions";
import { useTTS } from "../hooks/useTTS";
import { extractTextFromImage } from "../services/ocrService";

const Home = () => {
  const [extractedText, setExtractedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    isPlaying,
    handlePlayAudio,
    handlePauseAudio,
    handleStopAudio,
    handleVoiceChange,
    resetAudio,
  } = useTTS();

  useEffect(() => {
    resetAudio();
  }, [extractedText]);

  const handleFileUpload = async (file) => {
    setIsLoading(true);
    try {
      const text = await extractTextFromImage(file);
      setExtractedText(text);
    } catch (error) {
      console.error("Error extracting text:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileRemove = () => {
    setExtractedText("");
  };

  const MotionContainer = motion.div;
  const MotionGrid = motion.div;
  const MotionCol = motion.div;
  const MotionItem = motion.div;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  };

  const customVoices = [
    "Aisha",
    "Rashid",
    "Zain",
    "Ali",
    "Khadija",
    "Najwa",
    "Zaydoun",
    "Adam",
    "Yassin",
    "Shahrazad",
  ].map((name) => ({ value: name, label: name }));

  return (
    <MotionContainer
      className="container mx-auto px-6 md:px-8 py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MotionGrid
        className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10"
        variants={containerVariants}
      >
        <MotionCol className="space-y-8" variants={containerVariants}>
          <MotionItem className="w-full" variants={itemVariants}>
            <ImageUpload
              onFileUpload={handleFileUpload}
              onFileRemove={handleFileRemove}
              isLoading={isLoading}
            />
          </MotionItem>
          <MotionItem className="w-full" variants={itemVariants}>
            <ExtractedText text={extractedText} isLoading={isLoading} />
          </MotionItem>
        </MotionCol>
        <MotionItem
          className="w-full"
          variants={itemVariants}
          transition={{ delay: 0.2 }}
        >
          <VoiceOptions
            voices={customVoices}
            onVoiceSelect={handleVoiceChange}
            onPlay={() => handlePlayAudio(extractedText)}
            onPause={handlePauseAudio}
            onStop={handleStopAudio}
            isPlaying={isPlaying}
          />
        </MotionItem>
      </MotionGrid>
    </MotionContainer>
  );
};

export default Home;
