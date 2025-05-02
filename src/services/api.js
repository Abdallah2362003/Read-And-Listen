import axiosInstance from "../lib/axios";

export const extractText = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axiosInstance.post("/ocr/extract", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to extract text");
  }
};

export const textToSpeech = async ({ text, voice, rate, pitch }) => {
  try {
    const response = await axiosInstance.post("/tts/synthesize", {
      text,
      voice,
      rate,
      pitch,
    });
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to synthesize speech");
  }
};

export const getAvailableVoices = async () => {
  try {
    const response = await axiosInstance.get("/tts/voices");
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch voices");
  }
};
