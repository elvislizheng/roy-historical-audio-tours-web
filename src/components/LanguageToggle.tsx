"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex rounded-lg border border-zinc-200 dark:border-zinc-700">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 text-sm font-medium transition-colors ${
          language === "en"
            ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
            : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        } rounded-l-md`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("zh")}
        className={`px-3 py-1.5 text-sm font-medium transition-colors ${
          language === "zh"
            ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
            : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        } rounded-r-md`}
      >
        中文
      </button>
    </div>
  );
}
