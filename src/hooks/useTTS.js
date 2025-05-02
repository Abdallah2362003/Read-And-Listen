import { useState } from "react";
import { synthesizeSpeech } from "../services/ttsService";

export const useTTS = () => {
  const [selectedVoice, setSelectedVoice] = useState("default");
  const [audioSample, setAudioSample] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioSample(URL.createObjectURL(file));
    }
  };

  const handleVoiceChange = (e) => {
    setSelectedVoice(e.target.value);
  };

  const handlePlayAudio = async (text) => {
    if (!text || isPlaying) return;

    setIsPlaying(true);
    try {
      const audioUrl = await synthesizeSpeech(text, selectedVoice, audioSample);
      const audio = new Audio(audioUrl);
      audio.onended = () => setIsPlaying(false);
      audio.play();
    } catch (error) {
      console.error("Error playing audio:", error);
      setIsPlaying(false);
      // TODO: Add error handling
    }
  };

  return {
    selectedVoice,
    audioSample,
    isPlaying,
    handleAudioUpload,
    handleVoiceChange,
    handlePlayAudio,
    setAudioSample,
  };
};
