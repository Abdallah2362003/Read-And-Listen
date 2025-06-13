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
    audioUrl,
    audioRef,
    handlePlayAudio,
    handlePauseAudio,
    handleStopAudio,
    handleVoiceChange,
    resetAudio,
    selectedVoice,
    setIsPlaying,
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

  const handlePlay = async () => {
    if (!audioUrl) {
      await handlePlayAudio(extractedText);
    } else if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
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
    <motion.div
      className="container mx-auto px-6 md:px-8 py-4"
      initial="hidden"
      animate="visible"
    >
      <motion.div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10">
        <motion.div className="space-y-8">
          <motion.div className="w-full">
            <ImageUpload
              onFileUpload={handleFileUpload}
              onFileRemove={handleFileRemove}
              isLoading={isLoading}
            />
          </motion.div>
          <motion.div className="w-full">
            <ExtractedText text={extractedText} isLoading={isLoading} />
          </motion.div>
        </motion.div>
        <motion.div className="w-full">
          <VoiceOptions
            voices={customVoices}
            onVoiceSelect={handleVoiceChange}
            onPlay={handlePlay}
            onPause={handlePauseAudio}
            onStop={handleStopAudio}
            isPlaying={isPlaying}
            selectedVoice={selectedVoice}
            audioUrl={audioUrl}
            audioRef={audioRef}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;