import { useEffect, useRef, useState } from "react";
import { synthesizeSpeech } from "../services/ttsService";

export const useTTS = () => {
  const [selectedVoice, setSelectedVoice] = useState("Aisha");
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const audioRef = useRef(null);

  const handleVoiceChange = (voiceValue) => {
    setSelectedVoice(voiceValue);
  };

  useEffect(() => {
    resetAudio();
  }, [selectedVoice]);

  const handlePlayAudio = async (text) => {
    if (!text) return;
    if (!audioUrl) {
      const url = await synthesizeSpeech(text, selectedVoice);
      setAudioUrl(url);
      setIsPlaying(true);
    } else {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
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
    }
    setAudioUrl(null);
    setIsPlaying(false);
  };

  return {
    selectedVoice,
    isPlaying,
    audioUrl,
    audioRef,
    handleVoiceChange,
    handlePlayAudio,
    handlePauseAudio,
    handleStopAudio,
    resetAudio,
    setAudioUrl,
    setIsPlaying,
  };
};