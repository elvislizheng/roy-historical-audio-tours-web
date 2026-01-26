"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex overflow-hidden rounded-full border border-sky-200 bg-white shadow-sm">
      <button
        onClick={() => setLanguage("en")}
        className={`px-4 py-2 text-sm font-medium transition-all ${
          language === "en"
            ? "bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-md"
            : "text-slate-600 hover:text-sky-700"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("zh")}
        className={`px-4 py-2 text-sm font-medium transition-all ${
          language === "zh"
            ? "bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-md"
            : "text-slate-600 hover:text-sky-700"
        }`}
      >
        中文
      </button>
    </div>
  );
}
