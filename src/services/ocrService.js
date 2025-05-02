import Tesseract from "tesseract.js";

// تحسين جودة الصورة قبل استخراج النص
const preprocessImage = async (imageFile) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // ضبط حجم الصورة للحصول على أفضل نتائج
        canvas.width = img.width;
        canvas.height = img.height;

        // تحسين جودة الصورة
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);

        // تحويل الصورة إلى URL
        resolve(canvas.toDataURL("image/png"));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(imageFile);
  });
};

export const extractTextFromImage = async (imageFile) => {
  try {
    // معالجة الصورة أولاً
    const processedImage = await preprocessImage(imageFile);

    // استخراج النص باللغتين العربية والإنجليزية
    const result = await Tesseract.recognize(
      processedImage,
      "ara+eng", // دعم اللغتين العربية والإنجليزية
      {
        logger: (progress) => {
          console.log(progress);
        },
        tessedit_pageseg_mode: "1", // وضع تقسيم الصفحة المناسب للنصوص المختلطة
        tessedit_ocr_engine_mode: "3", // وضع المحرك الأكثر دقة
        preserve_interword_spaces: "1",
        tessjs_create_pdf: "1",
      }
    );

    const text = result.data.text.trim();

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
