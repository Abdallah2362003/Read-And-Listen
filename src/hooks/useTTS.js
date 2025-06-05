import { audio } from "motion/react-client";
import { use, useEffect, useRef, useState } from "react";
import { synthesizeSpeech } from "../services/ttsService";

export const useTTS = () => {
  const [selectedVoice, setSelectedVoice] = useState("default");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioSample(URL.createObjectURL(file));
    }
  };

  const handleVoiceChange = (voiceValue) => {
    setSelectedVoice(voiceValue);
  };

  useEffect(() => {
    resetAudio();
  }, [selectedVoice]);

  const handlePlayAudio = async (text) => {
    if (!text || isPlaying) return;

    setIsPlaying(true);

    if (audioRef.current) {
      audioRef.current.play();
      return;
    }

    try {
      const audioUrl = await synthesizeSpeech(text, selectedVoice);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      audio.onended = () => setIsPlaying(false);
      audio.play();
    } catch (error) {
      console.error("Error playing audio:", error);
      setIsPlaying(false);
    }
  };

  const handlePauseAudio = () => {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    setIsPlaying(false);
  };

  return {
    selectedVoice,
    isPlaying,
    handleAudioUpload,
    handleVoiceChange,
    handlePlayAudio,
    handlePauseAudio,
    handleStopAudio,
    resetAudio,
  };
};
