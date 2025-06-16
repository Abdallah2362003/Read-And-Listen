import React, { useState, useEffect, useRef } from "react";
import {
  FiVolume2,
  FiUsers,
  FiPlay,
  FiPause,
  FiSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import WaveSurfer from "wavesurfer.js";

const VoiceOptions = ({
  voices = [],
  onVoiceSelect,
  onPlay,
  onPause,
  onStop,
  selectedVoice,
  audioUrl,
  audioRef: externalAudioRef,
}) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isWsPlaying, setIsWsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  const wavesurferRef = useRef(null);
  const waveformContainerRef = useRef(null);

  // Use external ref if provided, else create local
  const audioRef = externalAudioRef || useRef(null);

  // Format time as mm:ss
  const formatTime = (t) => {
    if (isNaN(t)) return "00:00";
    const m = Math.floor(t / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  // Voice selection logic
  const [internalVoice, setInternalVoice] = useState(voices[0]?.value || "Aisha");
  useEffect(() => {
    setInternalVoice(selectedVoice || voices[0]?.value || "Aisha");
  }, [selectedVoice, voices]);

  const handleVoiceChange = (e) => {
    setInternalVoice(e.target.value);
    onVoiceSelect(e.target.value);
  };

  // --- WaveSurfer Visualization ---
  useEffect(() => {
    if (!audioUrl || !waveformContainerRef.current) return;

    // Clean up previous instance
    if (wavesurferRef.current) {
      wavesurferRef.current.destroy();
      wavesurferRef.current = null;
    }

    // Create new WaveSurfer instance
    wavesurferRef.current = WaveSurfer.create({
      container: waveformContainerRef.current,
      waveColor: "#38bdf8",
      progressColor: "#0ea5e9",
      cursorColor: "#fff",
      barWidth: 2,
      barRadius: 2,
      responsive: true,
      height: 60,
      normalize: true,
      backend: "MediaElement",
      interact: true,
    });

    // Load audio
    wavesurferRef.current.load(audioUrl);

    // Sync with audio element
    if (audioRef.current) {
      wavesurferRef.current.setMediaElement(audioRef.current);
    }

    // Set initial volume and speed
    wavesurferRef.current.setVolume(volume);
    wavesurferRef.current.setPlaybackRate(playbackRate);

    // Progress/time handlers
    const ws = wavesurferRef.current;
    ws.on("audioprocess", () => {
      setCurrentTime(ws.getCurrentTime());
      setProgress((ws.getCurrentTime() / (ws.getDuration() || 1)) * 100);
    });
    ws.on("seek", () => {
      setCurrentTime(ws.getCurrentTime());
      setProgress((ws.getCurrentTime() / (ws.getDuration() || 1)) * 100);
    });
    ws.on("ready", () => {
      setDuration(ws.getDuration());
      setCurrentTime(0);
      setProgress(0);
      if (shouldPlay) {
        ws.play();
        setShouldPlay(false);
      }
    });
    ws.on("finish", () => {
      setCurrentTime(ws.getDuration());
      setProgress(100);
      setIsWsPlaying(false);
      onStop && onStop();
    });
    ws.on("play", () => {
      setIsWsPlaying(true);
      onPlay && onPlay();
    });
    ws.on("pause", () => {
      setIsWsPlaying(false);
      onPause && onPause();
    });

    return () => {
      ws.destroy();
      wavesurferRef.current = null;
    };
    // eslint-disable-next-line
  }, [audioUrl]);

  // Update volume in WaveSurfer
  useEffect(() => {
    if (wavesurferRef.current) {
      wavesurferRef.current.setVolume(volume);
    }
  }, [volume]);

  // Update playback rate in WaveSurfer
  useEffect(() => {
    if (wavesurferRef.current) {
      wavesurferRef.current.setPlaybackRate(playbackRate);
    }
  }, [playbackRate]);

  // --- Play/Pause/Stop logic ---
  const handlePlayPauseClick = async () => {
    if (!audioUrl) {
      await onPlay();
      setShouldPlay(true);
    } else if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  const handlePlay = () => {
    if (wavesurferRef.current) wavesurferRef.current.play();
  };
  const handlePause = () => {
    if (wavesurferRef.current) wavesurferRef.current.pause();
  };
  const handleStopClick = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.stop();
    }
    onStop && onStop();
  };
  const handleStop = handleStopClick;

  const handleSeek = (e) => {
    if (wavesurferRef.current) {
      const percent = e.target.value;
      wavesurferRef.current.seekTo(percent / 100);
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(Number(e.target.value));
  };
  const handleSpeedChange = (e) => {
    setPlaybackRate(Number(e.target.value));
  };

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
            value={internalVoice}
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

        {/* Audio Player with Waveform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          {/* WaveSurfer Container */}
          <div
            ref={waveformContainerRef}
            style={{
              width: "100%",
              maxWidth: 400,
              height: 60,
              borderRadius: "0.5rem",
              background: "#082f49",
              border: "1px solid #38bdf833",
              boxShadow: "0 2px 8px #0ea5e933",
              marginBottom: "1rem",
            }}
          />
          {/* Hidden audio element for backend compatibility */}
          <audio
            ref={audioRef}
            src={audioUrl}
            className="hidden"
          />
          <div className="flex items-center gap-4 w-full max-w-xl">
            {/* Play/Pause */}
            <button
              onClick={handlePlayPauseClick}
              className={`flex items-center justify-center w-12 h-12 rounded-full 
                ${isWsPlaying ? "bg-sky-400" : "bg-white/10"} 
                text-white shadow-lg hover:bg-sky-300 transition-all`}
              aria-label={isWsPlaying ? "Pause" : "Play"}
            >
              {isWsPlaying ? (
                <FiPause className="w-7 h-7" />
              ) : (
                <FiPlay className="w-7 h-7" />
              )}
            </button>
            {/* Stop */}
            <button
              onClick={handleStopClick}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-sky-300 hover:bg-white/20 transition-all"
              aria-label="Stop"
            >
              <FiSquare className="w-7 h-7" />
            </button>
            {/* Current Time */}
            <span className="text-sky-300/80 font-mono text-sm w-14 text-right">
              {formatTime(currentTime)}
            </span>
            {/* Progress Bar */}
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="flex-1 h-2 bg-sky-400/20 rounded-lg appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-sky-400 
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
                hover:[&::-webkit-slider-thumb]:bg-sky-300 transition-all duration-300"
              style={{
                background: `linear-gradient(to right, #38bdf8 ${progress}%, #1e293b ${progress}%)`,
              }}
            />
            {/* Total Duration */}
            <span className="text-sky-300/80 font-mono text-sm w-14 text-left">
              {formatTime(duration)}
            </span>
          </div>
        </motion.div>

        {/* Extra Controls */}
        <div className="flex flex-col gap-6 w-full max-w-xl mt-8">
          {/* Play, Pause, Stop Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={handlePlay}
              className="flex items-center gap-2 px-6 py-2 rounded-lg bg-sky-400 text-white font-semibold shadow hover:bg-sky-500 transition"
              aria-label="Play"
            >
              <FiPlay className="w-5 h-5" /> Play
            </button>
            <button
              onClick={handlePause}
              className="flex items-center gap-2 px-6 py-2 rounded-lg bg-sky-400 text-white font-semibold shadow hover:bg-sky-500 transition"
              aria-label="Pause"
            >
              <FiPause className="w-5 h-5" /> Pause
            </button>
            <button
              onClick={handleStop}
              className="flex items-center gap-2 px-6 py-2 rounded-lg bg-sky-400 text-white font-semibold shadow hover:bg-sky-500 transition"
              aria-label="Stop"
            >
              <FiSquare className="w-5 h-5" /> Stop
            </button>
          </div>
          {/* Volume and Speed Sliders */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="flex items-center gap-3 w-full max-w-xs">
              <span className="text-sky-300/80 font-mono text-xs w-12">Volume</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-2 bg-sky-400/20 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sky-300/80 font-mono text-xs w-8 text-right">{Math.round(volume * 100)}</span>
            </div>
            <div className="flex items-center gap-3 w-full max-w-xs">
              <span className="text-sky-300/80 font-mono text-xs w-12">Speed</span>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.01"
                value={playbackRate}
                onChange={handleSpeedChange}
                className="flex-1 h-2 bg-sky-400/20 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sky-300/80 font-mono text-xs w-8 text-right">{playbackRate.toFixed(2)}x</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VoiceOptions;