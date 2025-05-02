import { useState } from "react";
import { extractTextFromImage } from "../services/ocrService";

export const useOCR = (onTextExtracted) => {
  const [image, setImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleExtractText = async () => {
    if (!image) return;

    setIsProcessing(true);
    try {
      const text = await extractTextFromImage(image);
      onTextExtracted(text);
    } catch (error) {
      console.error("Error extracting text:", error);
      // TODO: Add error handling
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    image,
    isProcessing,
    handleImageUpload,
    handleExtractText,
    setImage,
  };
};
