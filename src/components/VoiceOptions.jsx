import React, { useState ,useEffect} from "react";
import {
  FiVolume2,
  FiPlayCircle,
  FiPauseCircle,
  FiSquare,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";

const VoiceOptions = ({
  voices = [],
  onVoiceSelect,
  onPlay,
  onPause,
  onStop,
  isPlaying,
}) => {
  const [selectedVoice, setSelectedVoice] = useState(voices[0]?.value || "");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);

  const handleVoiceChange = (e) => {
    setSelectedVoice(e.target.value);
    onVoiceSelect(e.target.value); 
  };

  useEffect(() => {
      onVoiceSelect(voices[0]?.value || "Aisha");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mb-4"
    >
      <div className="flex items-center gap-2 mb-2">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiVolume2 className="w-5 h-5 text-sky-400" />
        </motion.div>
        <h2 className="text-lg font-semibold text-sky-400">Voice Settings</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 rounded-lg border border-sky-400/20 p-8 space-y-8"
      >
        {/* Voice Selection */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <FiUsers className="w-5 h-5 text-sky-400" />
            </motion.div>
            <label className="text-base font-medium text-sky-400">
              Select Voice Type
            </label>
          </div>
          <motion.select
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileFocus={{ scale: 1.01 }}
            value={selectedVoice}
            onChange={handleVoiceChange}
            className="w-full p-3 text-base border border-sky-400/20 
                     rounded-lg bg-white/5 text-sky-300/80
                     focus:border-sky-400/40 focus:outline-none transition-colors"
          >
            {voices.map((voice) => (
              <option
                key={voice.value}
                value={voice.value}
                className="bg-[#1a1b4b] text-sky-300"
              >
                {voice.label}
              </option>
            ))}
          </motion.select>
        </motion.div>

        {/* Speed Control */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FiSettings className="w-5 h-5 text-sky-400" />
              </motion.div>
              <label className="text-base font-medium text-sky-400">
                Reading Speed
              </label>
            </div>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3 }}
              className="text-base text-sky-300/80 bg-sky-400/10 px-3 py-1.5 rounded"
            >
              {rate}x
            </motion.span>
          </div>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full h-2 bg-sky-400/10 rounded-lg appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                     [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-sky-400 
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
                     hover:[&::-webkit-slider-thumb]:bg-sky-300 transition-all duration-300"
          />
        </motion.div>

        {/* Pitch Control */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FiSettings className="w-5 h-5 text-sky-400" />
              </motion.div>
              <label className="text-base font-medium text-sky-400">
                Voice Pitch
              </label>
            </div>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3 }}
              className="text-base text-sky-300/80 bg-sky-400/10 px-3 py-1.5 rounded"
            >
              {pitch}x
            </motion.span>
          </div>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
            className="w-full h-2 bg-sky-400/10 rounded-lg appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                     [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-sky-400 
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
                     hover:[&::-webkit-slider-thumb]:bg-sky-300 transition-all duration-300"
          />
        </motion.div>

        {/* Playback Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center items-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPlay}
            disabled={isPlaying}
            className="flex items-center justify-center gap-2 px-6 py-2.5 
                     bg-sky-400 text-white rounded-lg 
                     hover:bg-sky-300 disabled:opacity-50 
                     disabled:cursor-not-allowed transition-colors text-base"
          >
            <FiPlayCircle className="w-5 h-5" />
            Play
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPause}
            disabled={!isPlaying}
            className="flex items-center justify-center gap-2 px-6 py-2.5 
                     bg-white/5 text-sky-300 rounded-lg hover:bg-white/10 
                     disabled:opacity-50 disabled:cursor-not-allowed 
                     transition-colors text-base"
          >
            <FiPauseCircle className="w-5 h-5" />
            Pause
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStop}
            className="flex items-center justify-center gap-2 px-6 py-2.5 
                     bg-white/5 text-sky-300 rounded-lg hover:bg-white/10 
                     transition-colors text-base"
          >
            <FiSquare className="w-5 h-5" />
            Stop
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default VoiceOptions;