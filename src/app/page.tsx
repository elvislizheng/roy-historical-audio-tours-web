"use client";

import { attractions } from "@/data/attractions";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import Link from "next/link";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              {language === "en" ? "Historical Audio Tours" : "历史语音导览"}
            </h1>
            <LanguageToggle />
          </div>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            {language === "en" ? "Select an attraction to explore" : "选择一个景点开始探索"}
          </p>
        </header>

        <div className="space-y-4">
          {attractions.map((attraction) => (
            <Link
              key={attraction.id}
              href={`/attractions/${attraction.id}`}
              className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            >
              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {attraction.name[language]}
                </h2>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {attraction.exhibitions.length}{" "}
                  {language === "en" ? "exhibitions" : "个展览"}
                </p>
              </div>
              <svg
                className="h-6 w-6 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
