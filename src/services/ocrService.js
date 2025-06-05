import axiosInstance from "../lib/axios";

export const extractTextFromImage = async (file) => {
  try {

    const formData = new FormData();
    formData.append("file", file);

    const response = await axiosInstance.post("/ocr", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    console.log("📄 Extracted Text:", response.extracted_text);
    const text = response.extracted_text.trim();

    if (!text) {
      throw new Error("لم يتم العثور على نص في الصورة");
    }

    // تنظيف النص المستخرج
    const cleanedText = text
      .replace(/\s+/g, " ") // توحيد المسافات
      .replace(/[^\u0600-\u06FFa-zA-Z0-9\s.,]/g, "") // إزالة الرموز غير المرغوب فيها
      .trim();

    return cleanedText;
  } catch (error) {
    console.error("خطأ في التعرف على النص:", error);
    throw new Error("فشل في استخراج النص من الصورة");
  }
};
