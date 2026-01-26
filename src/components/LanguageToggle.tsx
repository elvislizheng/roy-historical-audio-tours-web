"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1">
      <button
        onClick={() => setLanguage("en")}
        className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all ${
          language === "en"
            ? "text-white border-b-2 border-[#e85a4f]"
            : "text-neutral-400 hover:text-white"
        }`}
      >
        EN
      </button>
      <span className="text-neutral-600 py-2">/</span>
      <button
        onClick={() => setLanguage("zh")}
        className={`px-4 py-2 text-sm font-medium tracking-wider transition-all ${
          language === "zh"
            ? "text-white border-b-2 border-[#e85a4f]"
            : "text-neutral-400 hover:text-white"
        }`}
      >
        中文
      </button>
    </div>
  );
}
