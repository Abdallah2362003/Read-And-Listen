import axiosInstance from "../lib/axios";

export const synthesizeSpeech = async (text, voice) => {
  try {
    const formData = new FormData();
    formData.append("text", text);
    formData.append("voice", voice);

    const response = await axiosInstance.post("/tts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "blob",
    });
    const audioUrl = URL.createObjectURL(response);
    return audioUrl;
  } catch (error) {
    console.error("TTS Error:", error);
    throw new Error("Failed to convert text to speech");
  }
};